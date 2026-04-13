export function smoothScrollTo(targetY: number, duration = 350) {
  const startY = window.scrollY;
  const diff = targetY - startY;

  let startTime: number | null = null;

  const easeOutCubic = (t: number) => {
  return 1 - Math.pow(1 - t, 3);
};

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;

    const progress = Math.min((timestamp - startTime) / duration, 1);
    const eased = easeOutCubic(progress);

    window.scrollTo(0, startY + diff * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}