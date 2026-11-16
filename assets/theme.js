(() => {
  const storageKey = 'harris-portfolio-theme';
  const root = document.documentElement;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === 'light' || saved === 'dark') root.dataset.theme = saved;
  } catch {
    // The system theme still works when storage is unavailable.
  }

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme');
    const isDark = () => root.dataset.theme
      ? root.dataset.theme === 'dark'
      : systemTheme.matches;
    const sync = () => button.setAttribute('aria-pressed', String(isDark()));

    button.addEventListener('click', () => {
      root.dataset.theme = isDark() ? 'light' : 'dark';
      try {
        localStorage.setItem(storageKey, root.dataset.theme);
      } catch {
        // The current page still updates without storage.
      }
      sync();
    });
    systemTheme.addEventListener('change', sync);
    sync();
    button.hidden = false;
  });
})();
