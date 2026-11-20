
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import { initialStudents } from "./data/students";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import StudentForm from "./components/StudentForm";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import IDCard from "./pages/IDCard";
import Settings from "./pages/Settings";

function AppContent() {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");

    return savedStudents
      ? JSON.parse(savedStudents)
      : initialStudents;
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const handleAddStudent = (studentData) => {
    const newStudent = {
      ...studentData,
      id: Date.now(),
    };

    setStudents((previous) => [...previous, newStudent]);
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
    navigate("/edit-student");
  };

  const handleUpdateStudent = (updatedData) => {
    setStudents((previous) =>
      previous.map((student) =>
        student.id === editingStudent.id
          ? { ...student, ...updatedData }
          : student
      )
    );

    setEditingStudent(null);
    navigate("/students");
  };

  return (
    <div className="app-layout">

      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="main-area">

        <Header onMenu={() => setSidebarOpen(true)} />

        <main className="page-content">

          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  students={students}
                  onEdit={handleEditStudent}
                />
              }
            />

            <Route
              path="/students"
              element={
                <Students
                  students={students}
                  onEdit={handleEditStudent}
                />
              }
            />

            <Route
              path="/add-student"
              element={
                <AddStudent onAdd={handleAddStudent} />
              }
            />

            <Route
              path="/id-card/:id"
              element={
                <IDCard students={students} />
              }
            />

            <Route
              path="/settings"
              element={<Settings />}
            />

            <Route
              path="/edit-student"
              element={
                editingStudent ? (
                  <div className="edit-student-page">
                    <div className="page-heading">
                      <h1>Edit Student</h1>
                      <p>Update student information.</p>
                    </div>

                    <div className="form-container">
                      <StudentForm
                        initialData={editingStudent}
                        onSubmit={handleUpdateStudent}
                        onCancel={() => {
                          setEditingStudent(null);
                          navigate("/students");
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <Dashboard
                    students={students}
                    onEdit={handleEditStudent}
                  />
                )
              }
            />

          </Routes>

        </main>

        <Footer />

      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
