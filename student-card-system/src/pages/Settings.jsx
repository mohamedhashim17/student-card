
import { Settings as SettingsIcon, GraduationCap, Info } from "lucide-react";

function Settings() {
  return (
    <div className="settings-page">

      <div className="page-heading">
        <h1>Settings</h1>
        <p>Manage your StudentHub application information.</p>
      </div>

      <div className="settings-container">

        <div className="settings-card">
          <div className="settings-icon">
            <SettingsIcon size={24} />
          </div>

          <div>
            <h3>Application Settings</h3>
            <p>Student Card Management System</p>
          </div>
        </div>

        <div className="settings-card">
          <div className="settings-icon">
            <GraduationCap size={24} />
          </div>

          <div>
            <h3>Student Management</h3>
            <p>Manage student records and digital ID cards.</p>
          </div>
        </div>

        <div className="settings-card">
          <div className="settings-icon">
            <Info size={24} />
          </div>

          <div>
            <h3>About Application</h3>
            <p>StudentHub Version 1.0</p>
            <p>Developed using React and Vite.</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Settings;
