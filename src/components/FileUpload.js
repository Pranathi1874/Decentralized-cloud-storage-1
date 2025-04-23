import React, { useState } from "react";
import './styles.css';

const FileUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={() => onUpload(file)}>Upload</button>
    </div>
  );
};

export default FileUpload;
