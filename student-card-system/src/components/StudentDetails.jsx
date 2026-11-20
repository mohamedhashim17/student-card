
import { X, Mail, Phone, GraduationCap, User } from "lucide-react";

function StudentDetails({ student, onClose }) {
  if (!student) return null;

  return (
    <div className="details-overlay">

      <div className="student-details">

        <div className="details-header">
          <h2>Student Details</h2>

          <button onClick={onClose} aria-label="Close">
            <X size={22} />
          </button>
        </div>

        <div className="details-profile">
          <img
            src={student.photo || "/images/default-student.png"}
            alt={student.name}
          />

          <h3>{student.name}</h3>
          <p>{student.registerNo}</p>
        </div>

        <div className="details-info">

          <div>
            <User size={18} />
            <span>Department: {student.department}</span>
          </div>

          <div>
            <GraduationCap size={18} />
            <span>Course: {student.course}</span>
          </div>

          <div>
            <GraduationCap size={18} />
            <span>Year: {student.year}</span>
          </div>

          <div>
            <Mail size={18} />
            <span>Email: {student.email || "Not provided"}</span>
          </div>

          <div>
            <Phone size={18} />
            <span>Phone: {student.phone || "Not provided"}</span>
          </div>

          <div>
            <span>Status: {student.status}</span>
          </div>

        </div>

        <button className="details-close-btn" onClick={onClose}>
          Close
        </button>

      </div>
    </div>
  );
}

export default StudentDetails;
