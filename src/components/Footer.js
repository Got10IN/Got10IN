import React from 'react';
import footerImage from '../public/Footer.png';  // Import the image

function Footer() {
    const imgStyle = {
      width: '100%',
      height: 'auto',
      maxWidth: '100%',
      display: 'block',
      margin: '0 auto',
    };
  
    return (
      <footer>
          <img src={footerImage} alt="Footer" style={imgStyle} />  // Use the imported image as the source
      </footer>
    );
}

export default Footer;

