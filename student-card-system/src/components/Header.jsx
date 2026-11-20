
import { Bell, Menu, Search } from "lucide-react";
import "../styles/Header.css";

function Header({ onMenu }) {
  return (
    <header className="topbar">

      <button
        className="mobile-menu icon-button"
        onClick={onMenu}
        aria-label="Open menu"
      >
        <Menu size={21} />
      </button>

      <div className="top-search">
        <Search size={17} />
        <span>Student Card Management</span>
      </div>

      <div className="top-actions">

        <button className="icon-button" aria-label="Notifications">
          <Bell size={19} />
        </button>

        <div className="admin-avatar">
          AD
        </div>

        <div className="admin-label">
          <b>Administrator</b>
          <small>Admin account</small>
        </div>

      </div>
    </header>
  );
}

export default Header;
