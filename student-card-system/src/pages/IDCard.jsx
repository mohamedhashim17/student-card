
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import QRCode from "../components/QRCode";

function IDCard({ students }) {
  const { id } = useParams();
  const cardRef = useRef(null);

  const student = students.find(
    (item) => String(item.id) === String(id)
  );

  const downloadPDF = async () => {
    if (!cardRef.current) return;

    const canvas = await html2canvas(cardRef.current, {
      scale: 2,
      backgroundColor: "#ffffff",
    });

    const image = canvas.toDataURL("image/png");

    const pdf = new jsPDF("portrait", "mm", "a4");

    const width = 90;
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(image, "PNG", 60, 40, width, height);
    pdf.save(`${student.registerNo}-ID-Card.pdf`);
  };

  if (!student) {
    return (
      <div className="page-heading">
        <h2>Student not found</h2>
        <p>Please select a valid student.</p>
      </div>
    );
  }

  return (
    <div className="id-card-page">

      <div className="page-heading">
        <h1>Student ID Card</h1>
        <p>Digital identity card</p>
      </div>

      <div className="id-card" ref={cardRef}>

        <div className="id-card-header">
          <h2>STUDENTHUB</h2>
          <p>STUDENT IDENTITY CARD</p>
        </div>

        <div className="id-card-body">

          <img
            src={student.photo || "/images/default-student.png"}
            alt={student.name}
            className="id-card-photo"
          />

          <h2>{student.name}</h2>

          <p>
            <b>Register No:</b> {student.registerNo}
          </p>

          <p>
            <b>Department:</b> {student.department}
          </p>

          <p>
            <b>Course:</b> {student.course}
          </p>

          <p>
            <b>Year:</b> {student.year}
          </p>

          <p>
            <b>Status:</b> {student.status}
          </p>

          <QRCode value={student.registerNo} />

        </div>

        <div className="id-card-footer">
          <p>Authorized Student Identity Card</p>
        </div>

      </div>

      <button className="download-button" onClick={downloadPDF}>
        <Download size={18} />
        Download ID Card PDF
      </button>

    </div>
  );
}

export default IDCard;
