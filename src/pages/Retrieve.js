import React, { useState } from "react";
import { contract } from "../utils/web3";
import './styles.css';

const Retrieve = () => {
  const [fileHashes, setFileHashes] = useState([]);
  const [error, setError] = useState("");

  const fetchFiles = async () => {
    try {
      // Directly call the display function with the hardcoded address
      const userAddress = "0x0b1227f22f484B3818b2098dd663f921F9bbCBc4";
      const result = await contract.methods.display(userAddress).call();

      setFileHashes(result);
      setError("");
    } catch (err) {
      console.error("Error fetching files:", err);
      setError("❌ Failed to retrieve files.");
    }
  };

  return (
    <div>
      <h1>Retrieve Files</h1>
      <button onClick={fetchFiles}>Fetch Files</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {fileHashes.length > 0 && (
        <ul>
          {fileHashes.map((hash, index) => (
            <li key={index}>
              <a href={`https://ipfs.io/ipfs/${hash}`} target="_blank" rel="noreferrer">
                {hash}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Retrieve;
