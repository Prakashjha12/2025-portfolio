export function initTheme() {
  const root = document.documentElement;

  // If user manually picked a theme -> always follow that
  const stored = localStorage.getItem("theme");

  if (stored === "dark") {
    root.classList.add("dark");
  } else if (stored === "light") {
    root.classList.remove("dark");
  } else {
    // No manual choice → follow system
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

    // Apply initial system theme
    if (systemDark.matches) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // ✅ Listen for live system theme changes
    systemDark.addEventListener("change", (e) => {
      if (e.matches) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    });
  }
}