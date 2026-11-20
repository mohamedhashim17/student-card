
import { useState } from "react";

import StatCard from "../components/StatCard";
import StudentList from "../components/StudentList";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import StudentDetails from "../components/StudentDetails";

function Dashboard({ students, onEdit }) {
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

  const totalStudents = students.length;

  const activeStudents = students.filter(
    (student) => student.status === "Active"
  ).length;

  const inactiveStudents = students.filter(
    (student) => student.status === "Inactive"
  ).length;

  const departments = new Set(
    students.map((student) => student.department)
  ).size;

  return (
    <div className="dashboard-page">

      <div className="page-heading">
        <h1>Dashboard</h1>
        <p>Welcome to Student Card Management System</p>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Total Students"
          value={totalStudents}
          icon="users"
          color="blue"
        />

        <StatCard
          title="Active Students"
          value={activeStudents}
          icon="active"
          color="green"
        />

        <StatCard
          title="Inactive Students"
          value={inactiveStudents}
          icon="inactive"
          color="red"
        />

        <StatCard
          title="Departments"
          value={departments}
          icon="departments"
          color="purple"
        />
      </div>

      <div className="students-section">

        <div className="section-heading">
          <div>
            <h2>Student Records</h2>
            <p>Manage and view student information</p>
          </div>
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

      </div>

      {selectedStudent && (
        <StudentDetails
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}

    </div>
  );
}

export default Dashboard;
