import { useEffect, useState } from 'react';

export function useTheme() {
  const getSystemPref = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') return true;
    if (stored === 'light') return false;
    return getSystemPref();
  });

  // Apply theme to HTML + store in localStorage
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Watch system preference changes
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      localStorage.removeItem('theme'); // reset manual override
      setIsDark(media.matches);         // apply new system preference
    };

    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  return {
    isDark,
    toggleTheme: () => {
      localStorage.setItem('theme', isDark ? 'light' : 'dark');
      setIsDark((prev) => !prev);
    },
  };
}