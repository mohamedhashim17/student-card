
import StudentCard from "./StudentCard";
import "../styles/StudentList.css";

function StudentList({ students, onView, onEdit }) {
  if (!students || students.length === 0) {
    return (
      <div className="empty-students">
        <h3>No Students Found</h3>
        <p>Try changing your search or filter.</p>
      </div>
    );
  }

  return (
    <div className="student-grid">
      {students.map((student) => (
        <StudentCard
          key={student.id || student.registerNo}
          student={student}
          onView={onView}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default StudentList;
