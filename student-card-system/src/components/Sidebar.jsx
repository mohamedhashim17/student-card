
import {
  GraduationCap,
  LayoutDashboard,
  Users,
  UserPlus,
  Settings,
  X,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar({ open, onClose }) {
  const menuItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Students",
      path: "/students",
      icon: Users,
    },
    {
      title: "Add Student",
      path: "/add-student",
      icon: UserPlus,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <>
      {open && (
        <div
          className="sidebar-overlay"
          onClick={onClose}
        ></div>
      )}

      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>

        <div className="sidebar-logo">
          <div className="logo-icon">
            <GraduationCap size={27} />
          </div>

          <div>
            <h2>StudentHub</h2>
            <p>Management System</p>
          </div>

          <button
            className="sidebar-close icon-button"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={21} />
          </button>
        </div>

        <p className="menu-heading">MAIN MENU</p>

        <nav className="sidebar-menu">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
                onClick={onClose}
              >
                <Icon size={20} />
                <span>{item.title}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <p>StudentHub © 2026</p>
          <small>Student Card Management</small>
        </div>

      </aside>
    </>
  );
}

export default Sidebar;
