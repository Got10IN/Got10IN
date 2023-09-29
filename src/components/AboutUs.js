import React, { useState } from 'react';
import axios from 'axios';

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
      <div class="container-small">
          <div class="text2">
              <img src="/logo-blue.png" alt="Logo" className="logo" style={{ width: '400px', height: 'auto' }}/>
              <img src="/AboutWord1.png" alt="Logo" className="logo" style={{ width: '400px', height: 'auto' }}/>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingTop:'80px',paddingBottom:'100px'}}>
      <input 
        type="email" 
        className="form-control" 
        placeholder="Enter your email" 
        style={{ borderRadius: '50px',width:'300px',height:'40px'}}
        value={email}
        onChange={handleEmailChange}
      />
      <button className="subscribe-button" onClick={handleSubscribe}>Subscribe</button>
    </div>
          </div>
          <div class="text">   
              <img src="/GOT10IN (1).png" alt="Logo" className="logo" style={{ width: '400px', height: 'auto' }}/>
              <img src="/3buttons.png" alt="Logo" className="logo" style={{ width: '400px', height: 'auto' }}/>
          </div>
      </div>
    <div class="container-small">
      <img src="/OurStory.png" alt="StudentSay" className="StudentSay" style={{ width: '900px', height: 'auto' }}/>
    </div>
    <p class="medium-text-blue" style={{marginLeft:'150px'}}>Roadmap</p>
    <div class="container-small">
      <img src="/Roadmap.png" alt="StudentSay" className="StudentSay" style={{ width: '900px', height: 'auto' }}/>
    </div>
    <div class="container-small">
      <img src="/Comingsoon.png" alt="StudentSay" className="StudentSay" style={{ width: '900px', height: 'auto' }}/>
    </div>
</div>
  );
}

export default AboutUs;
