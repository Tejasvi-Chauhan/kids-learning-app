// src/components/layout/BottomNav.jsx
import { NavLink } from "react-router-dom";

const items = [
  { to: "/", label: "Home", icon: "🏠" },
  { to: "/custom-quiz", label: "Learn", icon: "📚" },
  { to: "/now-playing", label: "Call", icon: "📞" },
  { to: "/profile", label: "Profile", icon: "👤", disabled: true },
];

export default function BottomNav() {
  return (
    <nav className="h-16 bg-white border-t flex items-center justify-around text-xs">
      {items.map((item) =>
        item.disabled ? (
          <div
            key={item.label}
            className="flex flex-col items-center gap-1 text-gray-300"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ) : (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${
                isActive ? "text-[#00C46A]" : "text-gray-400"
              }`
            }
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        )
      )}
    </nav>
  );
}
