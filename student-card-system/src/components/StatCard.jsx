
import {
  Users,
  UserCheck,
  UserX,
  GraduationCap,
} from "lucide-react";

function StatCard({ title, value, icon, color }) {
  const icons = {
    users: Users,
    active: UserCheck,
    inactive: UserX,
    departments: GraduationCap,
  };

  const Icon = icons[icon] || Users;

  return (
    <div className="stat-card">

      <div className={`stat-icon ${color}`}>
        <Icon size={25} />
      </div>

      <div className="stat-info">
        <p>{title}</p>
        <h2>{value}</h2>
      </div>

    </div>
  );
}

export default StatCard;
