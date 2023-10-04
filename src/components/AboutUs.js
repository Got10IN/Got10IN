import React, { useState } from 'react';
import axios from 'axios';
import './AboutUs.css'; 

function AboutUs() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async () => {
    try {
      const response = await axios.post('https://got10in-backend-cfba39007310.herokuapp.com/subscribe', { email: email });
      if (response.status === 200) {
        alert('Subscribed successfully!');
      } else {
        alert('Error subscribing. Please try again.');
      }
    } catch (error) {
      alert('Error subscribing. Please try again.');
    }
  };
  return (
    <div class="container-white" >
      <div class="aboutus-center-content">
          <div class="halfscreen-box" style={{paddingRight:'100px'}}>
              <img src="/Logo-AboutUs.png" alt="Logo" className="WordCard"/>
              <div className="WordCard" style={{ display: 'flex', gap: '20px', paddingTop:'40px',paddingBottom:'100px'}}>
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Enter your email" 
                  style={{ borderRadius: '50px',width:'80%',height:'40px'}}
                  value={email}
                  onChange={handleEmailChange}
                />
                <button className="subscribe-button" onClick={handleSubscribe}>Subscribe</button>
              </div>
          </div>
          <div class="halfscreen-box" style={{paddingTop:'45px'}}>   
              <img src="/GOT10IN (1).png" alt="Logo" className="WordCard"/>
              <img src="/3buttons.png" alt="Logo" className="WordCard" style={{paddingTop:'20px'}}/>
              <img src="/Hi.png" alt="Logo" className="WordCard" style={{paddingTop:'90px'}}/>
          </div>
      </div>
    <div class="aboutus-center-content">
      <img src="/OurStory.png" alt="StudentSay" className="WordCard" />
    </div>
    <img src="/RoadmapWord.png" alt="Roadmap" style={{paddingLeft:'200px',width:'40%',paddingTop:'100px'}}/>
    <div class="container-small">
      <img src="/Roadmap.png" alt="StudentSay" className="WordCard"/>
    </div>
    <div class="container-small">
      <img src="/Comingsoon.png" alt="StudentSay" className="WordCard" style={{paddingBottom:'100px'}}/>
    </div>
</div>
  );
}

export default AboutUs;
