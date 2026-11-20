
import { useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";

function AddStudent({ onAdd }) {
  const navigate = useNavigate();

  const handleSubmit = (studentData) => {
    onAdd(studentData);
    navigate("/students");
  };

  return (
    <div className="add-student-page">

      <div className="page-heading">
        <h1>Add New Student</h1>
        <p>Enter the student information below.</p>
      </div>

      <div className="form-container">

        <h2>Student Information</h2>

        <StudentForm
          onSubmit={handleSubmit}
          onCancel={() => navigate("/students")}
        />

      </div>

    </div>
  );
}

export default AddStudent;
