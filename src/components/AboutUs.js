function AboutUs() {
  return (
    <div class="container-white" >
      <div class="container-small">
          <div class="text2">
              <img src="/logo-blue.png" alt="Logo" className="logo" style={{ width: '400px', height: 'auto' }}/>
              <img src="/AboutWord1.png" alt="Logo" className="logo" style={{ width: '400px', height: 'auto' }}/>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingTop:'80px',paddingBottom:'100px'}}>
                <input type="email" className="form-control" placeholder="Enter your email" style={{ borderRadius: '50px',width:'300px',height:'40px'}}/>
                <button className="subscribe-button">Subscribe</button>
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
