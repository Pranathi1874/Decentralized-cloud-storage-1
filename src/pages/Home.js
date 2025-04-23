// import React from "react";
// import Navbar from "../components/Navbar";
// import "./Home.css"; // Import the CSS file
// import './styles.css';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <Navbar />
//       <h1 className="home-title">Welcome to Blockchain File Storage</h1>
      
//       <p className="home-description">
//         Securely store your files on the blockchain with IPFS technology.
//         Your files are distributed, encrypted, and always accessible.
//       </p>
      
//       <div className="home-features">
//         <div className="feature-card">
//           <h3 className="feature-title">Secure Storage</h3>
//           <p className="feature-description">
//             Files are encrypted and distributed across the IPFS network, ensuring maximum security.
//           </p>
//         </div>
        
//         <div className="feature-card">
//           <h3 className="feature-title">Easy Retrieval</h3>
//           <p className="feature-description">
//             Access your files anytime, anywhere using their unique hash identifiers.
//           </p>
//         </div>
        
//         <div className="feature-card">
//           <h3 className="feature-title">Decentralized</h3>
//           <p className="feature-description">
//             No central point of failure means your data remains accessible even if servers go down.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import "./Home.css"; // Import the CSS file
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Blockchain File Storage</h1>

      <p className="home-description">
        Securely store your files on the blockchain with IPFS technology.
        Your files are distributed, encrypted, and always accessible.
      </p>

      <div className="home-features">
        <div className="feature-card">
          <h3 className="feature-title">Secure Storage</h3>
          <p className="feature-description">
            Files are encrypted and distributed across the IPFS network, ensuring maximum security.
          </p>
        </div>

        <div className="feature-card">
          <h3 className="feature-title">Easy Retrieval</h3>
          <p className="feature-description">
            Access your files anytime, anywhere using their unique hash identifiers.
          </p>
        </div>

        <div className="feature-card">
          <h3 className="feature-title">Decentralized</h3>
          <p className="feature-description">
            No central point of failure means your data remains accessible even if servers go down.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
