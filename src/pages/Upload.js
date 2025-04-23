import React, { useState } from "react";
import { web3, contract } from "../utils/web3";
import { uploadToIPFS } from "../utils/ipfs"; // Ensure uploadToIPFS returns a URL or an object with `.path`
import FileUpload from "../components/FileUpload";
import './styles.css';

const Upload = () => {
  const [fileHash, setFileHash] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isTransferring, setIsTransferring] = useState(false); // To track if transaction is in progress

  const handleUpload = async (file) => {
    try {
      setIsUploading(true);

      // ✅ Upload file to IPFS
      const ipfsUrl = await uploadToIPFS(file);
      if (!ipfsUrl) {
        alert("Failed to upload to IPFS.");
        setIsUploading(false);
        return;
      }

      // ✅ Extract IPFS hash (last segment of URL or path)
      const hash = ipfsUrl.split("/").pop();
      setFileHash(hash);

      // ✅ Connect to MetaMask and get the user's account
      const accounts = await web3.eth.requestAccounts();
      if (!accounts.length) {
        alert("Please connect your MetaMask wallet.");
        setIsUploading(false);
        return;
      }

      const account = accounts[0];

      // ✅ Start the transaction to store the file hash on the blockchain
      setIsTransferring(true);
      await contract.methods.uploadFile(hash).send({ from: account });

      alert("✅ File hash successfully uploaded to the blockchain!");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("❌ Upload failed. Check console for details.");
    } finally {
      setIsUploading(false);
      setIsTransferring(false);
    }
  };

  return (
    <div>
      <h1>Upload File</h1>
      <FileUpload onUpload={handleUpload} />
      {isUploading && <p>Uploading file to IPFS...</p>}
      {isTransferring && <p>Transferring to blockchain...</p>}
      {fileHash && !isUploading && !isTransferring && (
        <p>
          Stored File Hash: <span>{fileHash}</span>
        </p>
      )}
    </div>
  );
};

export default Upload;