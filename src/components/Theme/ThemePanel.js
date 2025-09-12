import React from "react";
import "./ThemePanel.css";

const THEMES = [
  { id: "gold", name: "Gold", color: "#FFD700" },
  { id: "emerald", name: "Emerald", color: "#10B981" },
  { id: "cyan", name: "Cyan", color: "#06B6D4" },
  { id: "purple", name: "Purple", color: "#A855F7" },
  { id: "rose", name: "Rose", color: "#F43F5E" },
];

export const ThemePanel = () => {
  const [open, setOpen] = React.useState(false);
  const [theme, setTheme] = React.useState(
    localStorage.getItem("app-theme") || "gold"
  );

  React.useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return (
    <div className={`theme-panel ${open ? "open" : ""}`}>
      <button
        className="theme-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle theme panel"
        title="Themes"
      >
        {/* Using a palette SVG icon for more visual interest */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#f3f4f6" />
          <circle cx="7.5" cy="10" r="1.5" fill="#FFD700" />
          <circle cx="12" cy="7.5" r="1.5" fill="#10B981" />
          <circle cx="16.5" cy="10" r="1.5" fill="#06B6D4" />
          <circle cx="15" cy="15" r="1.5" fill="#A855F7" />
          <circle cx="9" cy="15" r="1.5" fill="#F43F5E" />
        </svg>
      </button>
      <div className="theme-options">
        {THEMES.map((t) => (
          <button
            key={t.id}
            className={`theme-swatch ${theme === t.id ? "active" : ""}`}
            style={{ backgroundColor: t.color }}
            onClick={() => setTheme(t.id)}
            aria-label={`Switch to ${t.name} theme`}
            title={t.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemePanel;
