(function () {
  'use strict';

  /* ── helpers ── */
  function latLngToVec3(lat, lng, r) {
    var phi = (90 - lat) * (Math.PI / 180);
    var theta = (lng + 180) * (Math.PI / 180);
    return new THREE.Vector3(
      -r * Math.sin(phi) * Math.cos(theta),
       r * Math.cos(phi),
       r * Math.sin(phi) * Math.sin(theta)
    );
  }

  function makeNodeSprite(label, color, size) {
    var dim = 256;
    var c = document.createElement('canvas');
    c.width = dim; c.height = dim;
    var ctx = c.getContext('2d');
    var cx = dim / 2, cy = dim / 2;

    // outer glow
    var grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, cx);
    grad.addColorStop(0, color.replace(')', ', 0.7)').replace('rgb', 'rgba'));
    grad.addColorStop(0.4, color.replace(')', ', 0.25)').replace('rgb', 'rgba'));
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.beginPath(); ctx.arc(cx, cy, cx, 0, Math.PI * 2); ctx.fill();

    // core dot
    ctx.beginPath(); ctx.arc(cx, cy, 14, 0, Math.PI * 2);
    ctx.fillStyle = color; ctx.fill();
    ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2; ctx.stroke();

    // label
    ctx.font = 'bold 22px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = color; ctx.shadowBlur = 10;
    ctx.fillText(label, cx, cy + 44);

    var tex = new THREE.CanvasTexture(c);
    var mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
    var sprite = new THREE.Sprite(mat);
    sprite.scale.set(size, size, 1);
    return sprite;
  }

  function makeArcCurve(lat1, lng1, lat2, lng2, R) {
    var p1 = latLngToVec3(lat1, lng1, R);
    var p2 = latLngToVec3(lat2, lng2, R);
    var mid = p1.clone().add(p2).multiplyScalar(0.5);
    mid.normalize().multiplyScalar(R * 1.35);
    return new THREE.CatmullRomCurve3([p1, mid, p2]);
  }

  function makeGridLines(R) {
    var verts = [];
    var step = 15;
    var segs = 72;

    // latitude lines
    for (var lat = -90; lat <= 90; lat += step) {
      var prev = null;
      for (var i = 0; i <= segs; i++) {
        var lng = -180 + (360 / segs) * i;
        var v = latLngToVec3(lat, lng, R);
        if (prev) { verts.push(prev.x, prev.y, prev.z, v.x, v.y, v.z); }
        prev = v;
      }
    }
    // longitude lines
    for (var lng2 = -180; lng2 < 180; lng2 += step) {
      var prev2 = null;
      for (var j = 0; j <= segs; j++) {
        var lat2 = -90 + (180 / segs) * j;
        var v2 = latLngToVec3(lat2, lng2, R);
        if (prev2) { verts.push(prev2.x, prev2.y, prev2.z, v2.x, v2.y, v2.z); }
        prev2 = v2;
      }
    }

    var geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    var mat = new THREE.LineBasicMaterial({ color: 0x0d4f5c, transparent: true, opacity: 0.35 });
    return new THREE.LineSegments(geo, mat);
  }

  function makeArcLine(curve, color) {
    var pts = curve.getPoints(80);
    var geo = new THREE.BufferGeometry().setFromPoints(pts);
    var mat = new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: 0.45 });
    return new THREE.Line(geo, mat);
  }

  function makeParticle(color) {
    var geo = new THREE.SphereGeometry(0.018, 8, 8);
    var mat = new THREE.MeshBasicMaterial({ color: color });
    return new THREE.Mesh(geo, mat);
  }

  /* ── main ── */
  var state = null;

  function init(container) {
    if (state) destroy();

    var canvas = document.getElementById('globe-canvas');
    var W = container.clientWidth, H = container.clientHeight;

    /* renderer */
    var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);

    /* scene + camera */
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(0, 0, 2.8);

    /* lighting */
    scene.add(new THREE.AmbientLight(0x1a2a4a, 2.5));
    var pl1 = new THREE.PointLight(0x00d4ff, 1.8, 20);
    pl1.position.set(5, 3, 5);
    scene.add(pl1);
    var pl2 = new THREE.PointLight(0xffffff, 0.8, 20);
    pl2.position.set(-4, -2, -4);
    scene.add(pl2);

    /* globe */
    var R = 1;
    var globeGeo = new THREE.SphereGeometry(R, 64, 64);
    var globeMat = new THREE.MeshPhongMaterial({
      color: 0x0a1628,
      emissive: 0x051020,
      shininess: 25,
      transparent: true,
      opacity: 0.97
    });
    var globe = new THREE.Mesh(globeGeo, globeMat);
    scene.add(globe);

    /* atmosphere glow */
    var atmGeo = new THREE.SphereGeometry(R * 1.04, 64, 64);
    var atmMat = new THREE.MeshPhongMaterial({
      color: 0x002244,
      emissive: 0x001133,
      transparent: true,
      opacity: 0.18,
      side: THREE.BackSide
    });
    scene.add(new THREE.Mesh(atmGeo, atmMat));

    /* grid lines */
    var grid = makeGridLines(R * 1.001);
    scene.add(grid);

    /* nodes */
    var nodeDefs = [
      { lat: 37,  lng: -122, color: '#00d4ff', label: 'USA — Design Hub',     size: 0.55, pulse: true,  prominent: false },
      { lat: 25,  lng:  121, color: '#ff4466', label: 'Taiwan — TSMC',        size: 0.50, pulse: true,  prominent: false },
      { lat: 52,  lng:    5, color: '#f59e0b', label: 'Netherlands — ASML',   size: 0.45, pulse: false, prominent: false },
      { lat: 36,  lng:  138, color: '#f59e0b', label: 'Japan — Equipment',    size: 0.45, pulse: false, prominent: false },
      { lat:  1,  lng:  103, color: '#22c55e', label: 'SE Asia — ATMP',       size: 0.45, pulse: false, prominent: false },
      { lat: 20,  lng:   77, color: '#ffd700', label: 'India — ENTRY ZONE',   size: 0.65, pulse: true,  prominent: true  }
    ];

    var nodes = nodeDefs.map(function (d) {
      var sprite = makeNodeSprite(d.label, d.color, d.size);
      var pos = latLngToVec3(d.lat, d.lng, R * 1.025);
      sprite.position.copy(pos);
      sprite._baseScale = d.size;
      sprite._pulse = d.pulse;
      sprite._prominent = d.prominent;
      globe.add(sprite);
      return sprite;
    });

    /* arcs */
    var arcDefs = [
      { lat1: 37, lng1: -122, lat2: 25,  lng2: 121, color: 0x00d4ff },
      { lat1: 25, lng1:  121, lat2:  1,  lng2: 103, color: 0xff4466 },
      { lat1:  1, lng1:  103, lat2: 20,  lng2:  77, color: 0x22c55e },
      { lat1: 37, lng1: -122, lat2: 20,  lng2:  77, color: 0x7c3aed },
      { lat1: 52, lng1:    5, lat2: 25,  lng2: 121, color: 0xf59e0b }
    ];

    var arcs = arcDefs.map(function (d) {
      var curve = makeArcCurve(d.lat1, d.lng1, d.lat2, d.lng2, R);
      var line = makeArcLine(curve, d.color);
      globe.add(line);
      var particle = makeParticle(d.color);
      globe.add(particle);
      return { curve: curve, particle: particle, t: Math.random() };
    });

    /* interaction */
    var drag = { active: false, x: 0, y: 0 };
    var rot = { x: 0.2, y: 0 };
    var zoom = { val: 2.8 };

    function onMouseDown(e) {
      drag.active = true;
      drag.x = e.clientX; drag.y = e.clientY;
    }
    function onMouseMove(e) {
      if (!drag.active) return;
      var dx = e.clientX - drag.x;
      var dy = e.clientY - drag.y;
      rot.y += dx * 0.005;
      rot.x += dy * 0.005;
      rot.x = Math.max(-1.2, Math.min(1.2, rot.x));
      drag.x = e.clientX; drag.y = e.clientY;
    }
    function onMouseUp() { drag.active = false; }
    function onWheel(e) {
      zoom.val += e.deltaY * 0.002;
      zoom.val = Math.max(1.8, Math.min(4.5, zoom.val));
    }
    function onTouchStart(e) {
      if (e.touches.length === 1) {
        drag.active = true;
        drag.x = e.touches[0].clientX; drag.y = e.touches[0].clientY;
      }
    }
    function onTouchMove(e) {
      if (!drag.active || e.touches.length !== 1) return;
      var dx = e.touches[0].clientX - drag.x;
      var dy = e.touches[0].clientY - drag.y;
      rot.y += dx * 0.005;
      rot.x += dy * 0.005;
      rot.x = Math.max(-1.2, Math.min(1.2, rot.x));
      drag.x = e.touches[0].clientX; drag.y = e.touches[0].clientY;
    }
    function onTouchEnd() { drag.active = false; }

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('wheel', onWheel, { passive: true });
    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });
    canvas.addEventListener('touchend', onTouchEnd);

    /* resize */
    function onResize() {
      W = container.clientWidth; H = container.clientHeight;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    }
    window.addEventListener('resize', onResize);

    /* animation */
    var rafId = null;
    function animate() {
      rafId = requestAnimationFrame(animate);
      var t = performance.now() * 0.001;

      /* auto-rotate */
      if (!drag.active) rot.y += 0.001;

      globe.rotation.x = rot.x;
      globe.rotation.y = rot.y;

      /* smooth zoom */
      camera.position.z += (zoom.val - camera.position.z) * 0.08;

      /* node pulse */
      nodes.forEach(function (s, i) {
        if (!s._pulse) return;
        var freq = s._prominent ? 1.8 : 1.2;
        var amp  = s._prominent ? 0.22 : 0.12;
        var scale = s._baseScale * (1 + amp * Math.sin(t * freq * Math.PI * 2 + i));
        s.scale.set(scale, scale, 1);
      });

      /* arc particles */
      arcs.forEach(function (a) {
        a.t += 0.0035;
        if (a.t > 1) a.t = 0;
        var pos = a.curve.getPoint(a.t);
        a.particle.position.copy(pos);
        // fade near ends
        var alpha = Math.sin(a.t * Math.PI);
        a.particle.material.opacity = alpha;
        a.particle.material.transparent = true;
      });

      renderer.render(scene, camera);
    }
    animate();

    state = {
      renderer: renderer, scene: scene, camera: camera,
      canvas: canvas, arcs: arcs, nodes: nodes,
      listeners: {
        mousedown: onMouseDown, mousemove: onMouseMove, mouseup: onMouseUp,
        wheel: onWheel, touchstart: onTouchStart, touchmove: onTouchMove,
        touchend: onTouchEnd, resize: onResize
      },
      rafId: rafId,
      stopLoop: function () { if (rafId) { cancelAnimationFrame(rafId); rafId = null; } }
    };

    return destroy;
  }

  function destroy() {
    if (!state) return;
    state.stopLoop();
    cancelAnimationFrame(state.rafId);

    var c = state.canvas;
    var l = state.listeners;
    c.removeEventListener('mousedown', l.mousedown);
    window.removeEventListener('mousemove', l.mousemove);
    window.removeEventListener('mouseup', l.mouseup);
    c.removeEventListener('wheel', l.wheel);
    c.removeEventListener('touchstart', l.touchstart);
    c.removeEventListener('touchmove', l.touchmove);
    c.removeEventListener('touchend', l.touchend);
    window.removeEventListener('resize', l.resize);

    state.renderer.dispose();
    state = null;
  }

  window.APP_GLOBE = { init: init, destroy: destroy };
}());
