window.onload = () => {
  const msgEl = document.querySelector('.resonance-message');
  const randomWisdom = wisdoms[Math.floor(Math.random() * wisdoms.length)];
  msgEl.textContent = randomWisdom;

  document.body.addEventListener('click', () => {
    const newWisdom = wisdoms[Math.floor(Math.random() * wisdoms.length)];
    msgEl.textContent = newWisdom;
  });
};
