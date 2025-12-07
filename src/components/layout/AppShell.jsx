// src/components/layout/AppShell.jsx
import BottomNav from "./BottomNav.jsx";
import PropTypes from "prop-types";

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen flex justify-center bg-[#F5FBFF]">
      {/* outer phone container */}
      <div className="w-full max-w-sm bg-white shadow-xl flex flex-col h-screen">
        
        {/* SCROLLABLE MAIN AREA */}
        <main className="flex-1 overflow-y-auto p-4 space-y-4">
          {children}
        </main>

        {/* FIXED FOOTER AT BOTTOM */}
        <BottomNav />
      </div>
    </div>
  );
}
AppShell.propTypes = {
  children: PropTypes.node,
};
