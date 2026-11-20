
import { QRCodeCanvas } from "qrcode.react";

function QRCode({ value }) {
  return (
    <div className="qr-code">
      <QRCodeCanvas
        value={value || "Student ID"}
        size={120}
        level="H"
        includeMargin={true}
      />

      <p>Scan Student ID</p>
    </div>
  );
}

export default QRCode;
