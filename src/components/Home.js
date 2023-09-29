// function Home() {
//   return (
//     <div className="home">
//       {/* First Section */}
//       <div className="section1 d-flex align-items-center justify-content-center">
//           <div className="left-section">
//               <h2>Section 1</h2>
//               <p>Content for section 1...</p>
//               <div className="email-input">
//                   <input type="email" className="form-control" placeholder="Enter your email" />
//                   <button className="btn btn-primary ml-2">Subscribe</button>
//               </div>
//           </div>
//           <div className="right-section">
//               <img src="/logo.png" alt="Big Logo" className="big-logo" />
//               <p>Your AI-powered college application assistant is here to help.</p>
//           </div>
//       </div>
//       {/* Second Section */}
//       <div className="section2 d-flex align-items-center justify-content-center">
//           <div className="left-section">
//               <img src="/logo.png" alt="Big Logo" className="big-logo" />
//               <p>Your AI-powered college application assistant is here to help.</p>

//       </div>

//       {/* Third Section */}
//       <div className="section3 d-flex align-items-center justify-content-center">
//           <div className="left-section">
//               <h2>Section 3</h2>
//               <p>Content for section 3...</p>
//               <div className="email-input">
//                   <input type="email" className="form-control" placeholder="Enter your email" />
//                   <button className="btn btn-primary ml-2">Subscribe</button>
//               </div>
//           </div>
//           <div className="right-section">
//               <img src="/logo.png" alt="Big Logo" className="big-logo" />
//               <p>Your AI-powered college application assistant is here to help.</p>
//           </div>
//       </div>

//       {/* Fourth Section */}
//       <div className="section4 d-flex align-items-center justify-content-center">
//           <div className="left-section">
//               <img src="/logo.png" alt="Big Logo" className="big-logo" />
//               <p>Your AI-powered college application assistant is here to help.</p>
//           </div>
//           <div className="right-section">
//               <h2>Section 4</h2>
//               <p>Content for section 4...</p>
//               <div className="email-input">
//                   <input type="email" className="form-control" placeholder="Enter your email" />
//                   <button className="btn btn-primary ml-2">Subscribe</button>
//               </div>
//           </div>
//       </div>
//       {/* Fifth Section */}
//       <div className="section5 d-flex align-items-center justify-content-center">
//           <div className="left-section">
//               <h2>Section 5</h2>
//               <p>Content for section 5...</p>
//               <div className="email-input">
//                   <input type="email" className="form-control" placeholder="Enter your email" />
//                   <button className="btn btn-primary ml-2">Subscribe</button>
//               </div>
//           </div>
//           <div className="right-section">
//               <img src="/logo.png" alt="Big Logo" className="big-logo" />
//               <p>Your AI-powered college application assistant is here to help.</p>
//           </div>
//       </div>
//     </div>
//     </div>
//   );
// }


// export default Home;

function Home() {
    return (
      <div className="home">
  
        <div className="section" id="section1">
          <h2>Section 1</h2>
          <p>Content for section 1...</p>
          <input type="email" className="form-control" placeholder="Enter your email" />
          <button className="btn btn-primary ml-2">Subscribe</button>
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
  
        <div className="section" id="section2">
          <h2>Section 2</h2>
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
  
        <div className="section" id="section3">
          <h2>Section 3</h2>
          <p>Content for section 3...</p>
          <input type="email" className="form-control" placeholder="Enter your email" />
          <button className="btn btn-primary ml-2">Subscribe</button>
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
  
        <div className="section" id="section4">
          <h2>Section 4</h2>
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
  
        <div className="section" id="section5">
          <h2>Section 5</h2>
          <p>Content for section 5...</p>
          <input type="email" className="form-control" placeholder="Enter your email" />
          <button className="btn btn-primary ml-2">Subscribe</button>
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
  
      </div>
    );
  }
  
  export default Home;