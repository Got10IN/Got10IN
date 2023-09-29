import React from 'react';

function Footer() {
    const imgStyle = {
      width: '100%', // 图片宽度占满整个屏幕
      height: 'auto', // 高度自适应
      maxWidth: '100%', // 图片最大宽度与屏幕宽度相同
      display: 'block', // 去除默认行内元素间隙
      margin: '0 auto', // 居中显示
    };
  
    return (
      <footer>
          <img src="footer.png" alt="Footer" style={imgStyle} />
      </footer>
    );
  }
  

export default Footer;
