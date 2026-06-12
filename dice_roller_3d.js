/* ═══════════════════════════════════════════════════════
   Clean Dice Roller — Each die = own renderer, no tray
   ═══════════════════════════════════════════════════════ */

// Uses global: THREE (three.min.js CDN)

/* ── Constants ── */
const DIE_COLORS = {
  d4:  '#C8A96E',
  d6:  '#8B3A2A',
  d8:  '#2A5C8A',
  d10: '#4A7A3A',
  d12: '#6A3A8A',
  d20: '#8A2A2A',
  d100:'#3A6A8A',
};

/* ── State ── */
let dieInstances = [];     // { el, scene, camera, renderer, mesh, dieType, sides }
let isRolling = false;
let hasRolled = false;
let pendingResolve = null;
let pendingFormula = '';
let pendingModifier = 0;
let autoCloseTimer = null;

/* ── Geometry builders ── */
function createDieGeometry(type) {
  switch (type) {
    case 'd4':   return new THREE.TetrahedronGeometry(1.0);
    case 'd6':   return new THREE.BoxGeometry(1.2, 1.2, 1.2);
    case 'd8':   return new THREE.OctahedronGeometry(1.0);
    case 'd10':  return new THREE.DodecahedronGeometry(0.9);
    case 'd12':  return new THREE.DodecahedronGeometry(0.95);
    case 'd20':  return new THREE.IcosahedronGeometry(1.0);
    case 'd100': return new THREE.DodecahedronGeometry(0.9);
    default:     return new THREE.BoxGeometry(1.2, 1.2, 1.2);
  }
}

function getDieSides(type) {
  switch (type) {
    case 'd4':   return 4;
    case 'd6':   return 6;
    case 'd8':   return 8;
    case 'd10':  return 10;
    case 'd12':  return 12;
    case 'd20':  return 20;
    case 'd100': return 10;
    default:     return 6;
  }
}

/* ── Create a single die with its own renderer ── */
function createDieCell(type, container) {
  const sides = getDieSides(type);
  const color = DIE_COLORS[type] || '#C8A96E';

  // Cell wrapper
  const cell = document.createElement('div');
  cell.className = 'die-cell';
  cell.title = `Click to roll (${type})`;
  container.appendChild(cell);

  // Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#0E0C0A');

  // Camera
  const camera = new THREE.PerspectiveCamera(30, 100 / 120, 0.1, 10);
  camera.position.set(0, 0.3, 3.5);
  camera.lookAt(0, 0, 0);

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(100, 120);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  cell.appendChild(renderer.domElement);

  // Lights
  const ambient = new THREE.AmbientLight(0x404060, 0.6);
  scene.add(ambient);
  const key = new THREE.DirectionalLight(0xFFEEDD, 1.5);
  key.position.set(3, 5, 4);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0x4488FF, 0.3);
  fill.position.set(-2, 2, -2);
  scene.add(fill);
  const rim = new THREE.DirectionalLight(0xFFDDAA, 0.2);
  rim.position.set(0, -2, 4);
  scene.add(rim);

  // Die mesh
  const geo = createDieGeometry(type);
  const mat = new THREE.MeshStandardMaterial({
    color, roughness: 0.35, metalness: 0.2,
    emissive: color, emissiveIntensity: 0.05,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.rotation.set(
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2
  );
  scene.add(mesh);

  // Click handler on cell
  cell.addEventListener('click', () => {
    if (!isRolling && !hasRolled) rollAllDice();
  });

  // Store
  const instance = { el: cell, scene, camera, renderer, mesh, dieType: type, sides };
  dieInstances.push(instance);

  // Initial render
  renderer.render(scene, camera);
  return instance;
}

/* ── Create dice in the row ── */
function createDice(diceSpecs) {
  clearDice();
  const container = document.getElementById('diceRow');
  if (!container) return;

  for (const spec of diceSpecs) {
    for (let i = 0; i < spec.count; i++) {
      createDieCell(spec.type, container);
    }
  }

  const hint = document.getElementById('diceClickHint');
  if (hint) hint.classList.remove('hidden');
}

function clearDice() {
  for (const inst of dieInstances) {
    if (inst.renderer) {
      inst.renderer.forceContextLoss();
      if (inst.renderer.domElement && inst.renderer.domElement.parentNode) {
        inst.renderer.domElement.parentNode.removeChild(inst.renderer.domElement);
      }
      inst.renderer.dispose();
    }
    inst.mesh.geometry.dispose();
    inst.mesh.material.dispose();
    if (inst.el.parentNode) inst.el.parentNode.removeChild(inst.el);
  }
  dieInstances = [];
  const container = document.getElementById('diceRow');
  if (container) container.innerHTML = '';
}

/* ── Re-render all dice (for animation frames) ── */
function renderAll() {
  for (const inst of dieInstances) {
    inst.renderer.render(inst.scene, inst.camera);
  }
}

/* ── Animation ── */
function rollAllDice() {
  if (isRolling || dieInstances.length === 0) return;

  isRolling = true;
  hasRolled = false;

  const hint = document.getElementById('diceClickHint');
  if (hint) hint.classList.add('hidden');

  document.getElementById('diceRollerSubtitle').textContent = 'Rolling...';
  const promptResult = document.getElementById('dicePromptResult');
  if (promptResult) promptResult.style.display = 'none';

  // Generate random values
  const rollResults = dieInstances.map(inst => ({
    dieType: inst.dieType,
    value: Math.floor(Math.random() * inst.sides) + 1,
  }));

  const duration = 800;
  const startTime = performance.now();
  const spinData = dieInstances.map(() => ({
    axis: new THREE.Vector3(
      (Math.random() - 0.5) * 2,
      0.5 + Math.random() * 1.5,
      (Math.random() - 0.5) * 2
    ).normalize(),
    speed: 12 + Math.random() * 8,
  }));

  function animate(time) {
    const elapsed = time - startTime;
    const t = Math.min(elapsed / duration, 1);

    for (let i = 0; i < dieInstances.length; i++) {
      const mesh = dieInstances[i].mesh;
      const spin = spinData[i];
      mesh.rotation.x += spin.axis.x * spin.speed * 0.025;
      mesh.rotation.y += spin.axis.y * spin.speed * 0.025;
      mesh.rotation.z += spin.axis.z * spin.speed * 0.025;
    }
    renderAll();

    if (t >= 1) {
      isRolling = false;
      hasRolled = true;

      const rawTotal = rollResults.reduce((s, r) => s + r.value, 0);
      const finalTotal = rawTotal + pendingModifier;
      const detailStr = rollResults.map(r => `${r.dieType}: ${r.value}`).join(' · ');
      const modStr = pendingModifier !== 0
        ? (pendingModifier > 0 ? ` + ${pendingModifier}` : ` - ${Math.abs(pendingModifier)}`)
        : '';

      // Show result inline
      const promptResult = document.getElementById('dicePromptResult');
      if (promptResult) {
        document.getElementById('diceResultValues').textContent = detailStr;
        document.getElementById('diceResultTotal').textContent =
          `= ${finalTotal}` + (modStr ? ` (mod${modStr})` : '');
        promptResult.style.display = 'flex';
      }

      document.getElementById('diceRollerSubtitle').textContent = 'Done!';

      // Insert total into chat input (append on new line if non-empty)
      const chatInput = document.getElementById('chatInput');
      if (chatInput) {
        const insertText = `🎲 Rolled ${pendingFormula}: **${finalTotal}** — (${detailStr}${modStr ? ', modifier' + modStr : ''})`;
        chatInput.value = chatInput.value
          ? chatInput.value + '\n' + insertText
          : insertText;
        // Trigger auto-resize
        if (typeof autoResizeChatInput === 'function') {
          autoResizeChatInput(chatInput);
        }
        chatInput.focus();
      }

      if (pendingResolve) {
        pendingResolve({
          results: rollResults.map(r => ({ type: r.dieType, value: r.value })),
          total: finalTotal,
          expression: pendingFormula,
        });
        pendingResolve = null;
      }

      autoCloseTimer = setTimeout(() => closeDiceRoller(), 2000);
      return;
    }
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

/* ── Public API ── */
function rollWithAnimation(formula, parsed, fallbackFn) {
  return new Promise((resolve, reject) => {
    const modal = document.getElementById('diceRollerModal');
    if (!modal) return reject(new Error('Dice roller modal not found'));

    // If the modal is already showing (from a previous roll that hasn't auto-closed yet),
    // cancel any pending auto-close and clear old dice immediately
    if (autoCloseTimer) {
      clearTimeout(autoCloseTimer);
      autoCloseTimer = null;
    }
    // Resolve any old pending promise silently (prevents hanging promises)
    if (pendingResolve) {
      pendingResolve({ results: [], total: 0, expression: '' });
      pendingResolve = null;
    }

    // Clean up any remaining dice from previous invocation
    closeDiceRollerImmediate();

    pendingFormula = formula;
    pendingModifier = parsed.modifier || 0;
    pendingResolve = resolve;
    isRolling = false;
    hasRolled = false;

    const diceMap = {};
    for (const roll of parsed.rolls) {
      const type = `d${roll.sides}`;
      diceMap[type] = (diceMap[type] || 0) + 1;
    }
    const diceSpecs = Object.entries(diceMap).map(([type, count]) => ({ type, count }));
    const totalDice = parsed.rolls.length;

    document.getElementById('diceRollerTitle').textContent = `🎲 Roll ${formula}`;
    document.getElementById('diceRollerSubtitle').textContent =
      `Click any die to roll ${totalDice} die${totalDice !== 1 ? 's' : ''}`;
    document.getElementById('dicePromptResult').style.display = 'none';
    const hint = document.getElementById('diceClickHint');
    if (hint) hint.classList.remove('hidden');

    // Show modal (no setTimeout race — create dice immediately after show)
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);

    // Create dice synchronously after a brief paint frame
    setTimeout(() => {
      // Double-check we're still the active request (pendingResolve wasn't replaced)
      if (pendingResolve !== resolve) return;
      createDice(diceSpecs);
    }, 30);
  });
}

/* ── Close (soft — with animation) ── */
function closeDiceRoller() {
  if (autoCloseTimer) {
    clearTimeout(autoCloseTimer);
    autoCloseTimer = null;
  }
  closeDiceRollerImmediate();
}

/* ── Close (immediate — no animation delay) ── */
function closeDiceRollerImmediate() {
  isRolling = false;
  hasRolled = false;
  clearDice();
  const modal = document.getElementById('diceRollerModal');
  if (modal) {
    modal.classList.remove('show');
    modal.style.display = 'none';
  }
}

/* ── Wire up close buttons ── */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('closeDiceRollerBtn')?.addEventListener('click', closeDiceRoller);
  document.getElementById('closeDiceRollerBtn2')?.addEventListener('click', closeDiceRoller);
});

/* ── Export ── */
window.rollWithAnimation = rollWithAnimation;
window.closeDiceRoller = closeDiceRoller;
