/* Adapted from Baniares/FitxFat-website: one PixelWatts palette, same mode switch. */
(() => {
  'use strict';
  const root = document.documentElement;
  if (root.dataset.redirecting === 'true') return;
  const spanish = root.lang === 'es-MX';
  const systemMode = window.matchMedia('(prefers-color-scheme: dark)');
  const read = key => { try { return sessionStorage.getItem(key); } catch { return null; } };
  const write = (key, value) => { try { sessionStorage.setItem(key, value); } catch { /* System mode still works without storage. */ } };
  const savedMode = read('pixelwatts.site.appearance');
  let explicitMode = ['light', 'dark'].includes(savedMode) ? savedMode : null;
  const appearance = () => explicitMode || (systemMode.matches ? 'dark' : 'light');

  function apply() {
    const mode = appearance();
    root.dataset.appearance = mode;
    document.querySelectorAll('[data-app-icon]').forEach(image => {
      image.src = `/assets/icon-${mode}.png`;
    });
    document.querySelectorAll('[data-toggle-mode]').forEach(button => {
      const next = mode === 'dark' ? 'light' : 'dark';
      button.setAttribute('aria-label', spanish ? 'Modo oscuro' : 'Dark mode');
      button.setAttribute('aria-checked', String(mode === 'dark'));
      button.title = spanish ? `Cambiar al modo ${next === 'dark' ? 'oscuro' : 'claro'}` : `Switch to ${next} mode`;
      button.hidden = false;
    });
  }

  apply();
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-toggle-mode]').forEach(button => {
      button.addEventListener('click', () => {
        explicitMode = appearance() === 'dark' ? 'light' : 'dark';
        write('pixelwatts.site.appearance', explicitMode);
        apply();
      });
    });
    apply();
  });
  systemMode.addEventListener('change', () => { if (!explicitMode) apply(); });
})();
