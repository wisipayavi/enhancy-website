/* ============================================================
   Enhency — Hero 3D payment-network animation (Three.js module)
   A professional, brand-safe "running" visualisation: nodes
   represent banks / merchants / rails; bright packets flow along
   the connections in real time, with a slow, subtle rotation.
   Mounts into #net-canvas. Fails gracefully if WebGL is absent.
   ============================================================ */
import * as THREE from "three";

(function () {
  const canvas = document.getElementById("net-canvas");
  if (!canvas) return;

  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  } catch (e) {
    canvas.style.display = "none";
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 9);

  const group = new THREE.Group();
  scene.add(group);

  // Lighting
  scene.add(new THREE.AmbientLight(0xffffff, 0.9));
  const dir = new THREE.DirectionalLight(0xffffff, 0.7);
  dir.position.set(4, 6, 8);
  scene.add(dir);

  // Brand colours
  const BLUE = 0x1d4ed8;
  const CYAN = 0x0ea5e9;
  const LINE = 0x9db8ef;

  // Node layout — a layered payment graph (hub in centre)
  const nodePos = [
    [0, 0, 0],          // 0 hub (orchestration)
    [-3.0, 1.7, 0.4],   // 1
    [3.0, 1.6, -0.5],   // 2
    [-3.1, -1.6, -0.3], // 3
    [3.1, -1.7, 0.3],   // 4
    [0, 2.7, -1.0],     // 5
    [0, -2.7, 1.0],     // 6
    [-1.7, 0.3, 2.2],   // 7
    [1.8, -0.2, 2.1],   // 8
    [-1.6, -0.4, -2.3], // 9
    [1.7, 0.5, -2.2],   // 10
  ].map((p) => new THREE.Vector3(p[0], p[1], p[2]));

  // Edges (index pairs) — every spoke connects to the hub plus a ring
  const edges = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9], [0, 10],
    [1, 5], [5, 2], [2, 10], [4, 8], [8, 6], [6, 3], [3, 7], [7, 1], [9, 10], [9, 3],
  ];

  // Draw nodes
  const sphereGeo = new THREE.SphereGeometry(0.16, 24, 24);
  const hubGeo = new THREE.SphereGeometry(0.34, 32, 32);
  const matBlue = new THREE.MeshStandardMaterial({ color: BLUE, roughness: 0.35, metalness: 0.1 });
  const matCyan = new THREE.MeshStandardMaterial({ color: CYAN, roughness: 0.3, metalness: 0.1 });

  nodePos.forEach((p, i) => {
    const m = new THREE.Mesh(i === 0 ? hubGeo : sphereGeo, i === 0 ? matCyan : matBlue);
    m.position.copy(p);
    group.add(m);
    // soft halo ring around each node
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(i === 0 ? 0.45 : 0.24, i === 0 ? 0.5 : 0.27, 32),
      new THREE.MeshBasicMaterial({ color: i === 0 ? CYAN : BLUE, transparent: true, opacity: 0.22, side: THREE.DoubleSide })
    );
    ring.position.copy(p);
    ring.lookAt(camera.position);
    group.add(ring);
  });

  // Draw edges as lines
  const linePts = [];
  edges.forEach(([a, b]) => {
    linePts.push(nodePos[a].x, nodePos[a].y, nodePos[a].z);
    linePts.push(nodePos[b].x, nodePos[b].y, nodePos[b].z);
  });
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePts, 3));
  const lineMat = new THREE.LineBasicMaterial({ color: LINE, transparent: true, opacity: 0.5 });
  group.add(new THREE.LineSegments(lineGeo, lineMat));

  // Packets — bright dots travelling along edges (the "running" transactions)
  const PACKETS = 18;
  const packetGeo = new THREE.SphereGeometry(0.07, 12, 12);
  const packetMat = new THREE.MeshBasicMaterial({ color: 0x22c55e }); // success green
  const packetMat2 = new THREE.MeshBasicMaterial({ color: CYAN });
  const packets = [];
  for (let i = 0; i < PACKETS; i++) {
    const mesh = new THREE.Mesh(packetGeo, i % 3 === 0 ? packetMat2 : packetMat);
    const edge = edges[Math.floor(Math.random() * edges.length)];
    packets.push({
      mesh,
      a: edge[0],
      b: edge[1],
      t: Math.random(),
      speed: 0.004 + Math.random() * 0.006,
    });
    group.add(mesh);
  }

  function reassign(p) {
    const edge = edges[Math.floor(Math.random() * edges.length)];
    p.a = edge[0];
    p.b = edge[1];
    p.t = 0;
    p.speed = 0.004 + Math.random() * 0.006;
  }

  // Resize to container
  function resize() {
    const w = canvas.clientWidth || canvas.parentElement.clientWidth;
    const h = canvas.clientHeight || canvas.parentElement.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener("resize", resize);
  resize();

  // Pointer parallax (subtle)
  let targetRX = 0.18, targetRY = 0;
  window.addEventListener("pointermove", (e) => {
    if (reduce) return;
    const nx = (e.clientX / window.innerWidth) * 2 - 1;
    const ny = (e.clientY / window.innerHeight) * 2 - 1;
    targetRY = nx * 0.35;
    targetRX = 0.18 + ny * 0.18;
  });

  const tmp = new THREE.Vector3();
  let running = true;

  function frame() {
    if (!running) return;
    requestAnimationFrame(frame);

    if (!reduce) {
      group.rotation.y += (targetRY - group.rotation.y) * 0.04 + 0.0016;
      group.rotation.x += (targetRX - group.rotation.x) * 0.04;
      packets.forEach((p) => {
        p.t += p.speed;
        if (p.t >= 1) reassign(p);
        tmp.copy(nodePos[p.a]).lerp(nodePos[p.b], p.t);
        p.mesh.position.copy(tmp);
      });
    } else {
      group.rotation.set(0.18, -0.2, 0);
      packets.forEach((p) => {
        tmp.copy(nodePos[p.a]).lerp(nodePos[p.b], p.t);
        p.mesh.position.copy(tmp);
      });
    }
    renderer.render(scene, camera);
  }
  frame();

  // Pause when tab hidden (saves CPU)
  document.addEventListener("visibilitychange", () => {
    running = !document.hidden;
    if (running) frame();
  });
})();
