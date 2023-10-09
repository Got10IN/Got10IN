import React from 'react';

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
          <img src={process.env.PUBLIC_URL + '/Footer.png'} alt="Footer" style={imgStyle} />
      </footer>
    );
}

export default Footer;