
import { Eye, Pencil } from "lucide-react";

function StudentCard({ student, onView, onEdit }) {
  return (
    <div className="student-card">

      <div className="student-card-top">
        <img
          src={student.photo || "/images/default-student.png"}
          alt={student.name}
          className="student-photo"
        />

        <span
          className={`student-status ${
            student.status === "Active"
              ? "status-active"
              : "status-inactive"
          }`}
        >
          {student.status}
        </span>
      </div>

      <div className="student-card-info">
        <h3>{student.name}</h3>

        <p className="student-register">
          {student.registerNo}
        </p>

        <p>{student.department}</p>
        <p>{student.course}</p>
        <p>{student.year}</p>
      </div>

      <div className="student-card-actions">

        <button onClick={() => onView(student)}>
          <Eye size={17} />
          View
        </button>

        <button onClick={() => onEdit(student)}>
          <Pencil size={17} />
          Edit
        </button>

      </div>
    </div>
  );
}

export default StudentCard;
