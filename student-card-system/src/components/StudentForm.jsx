
import { useState } from "react";

function StudentForm({ onSubmit, initialData, onCancel }) {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    registerNo: initialData?.registerNo || "",
    department: initialData?.department || "",
    course: initialData?.course || "",
    year: initialData?.year || "I Year",
    status: initialData?.status || "Active",
    email: initialData?.email || "",
    phone: initialData?.phone || "",
    photo: initialData?.photo || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>

      <div className="form-group">
        <label>Student Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter student name"
          required
        />
      </div>

      <div className="form-group">
        <label>Register Number</label>
        <input
          type="text"
          name="registerNo"
          value={formData.registerNo}
          onChange={handleChange}
          placeholder="Enter register number"
          required
        />
      </div>

      <div className="form-group">
        <label>Department</label>
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          placeholder="Enter department"
          required
        />
      </div>

      <div className="form-group">
        <label>Course</label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="Enter course"
          required
        />
      </div>

      <div className="form-group">
        <label>Year</label>
        <select
          name="year"
          value={formData.year}
          onChange={handleChange}
        >
          <option>I Year</option>
          <option>II Year</option>
          <option>III Year</option>
          <option>IV Year</option>
        </select>
      </div>

      <div className="form-group">
        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email address"
        />
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
        />
      </div>

      <div className="form-group">
        <label>Photo URL</label>
        <input
          type="text"
          name="photo"
          value={formData.photo}
          onChange={handleChange}
          placeholder="/images/student1.jpg"
        />
      </div>

      <div className="form-actions">
        <button type="submit">
          {initialData ? "Update Student" : "Add Student"}
        </button>

        {onCancel && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>

    </form>
  );
}

export default StudentForm;
