
import { useState } from "react";

import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import StudentList from "../components/StudentList";
import StudentDetails from "../components/StudentDetails";

function Students({ students, onEdit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.registerNo.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filter === "All" || student.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="students-page">

      <div className="page-heading">
        <h1>Students</h1>
        <p>View and manage all student records.</p>
      </div>

      <div className="student-toolbar">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <FilterDropdown
          filter={filter}
          setFilter={setFilter}
        />
      </div>

      <StudentList
        students={filteredStudents}
        onView={setSelectedStudent}
        onEdit={onEdit}
      />

      {selectedStudent && (
        <StudentDetails
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}

    </div>
  );
}

export default Students;
