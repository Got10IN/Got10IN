import './Home.css';

function Home() {
    return (
      <div className="home">
        <div class="container-body">
          <div class="text">   
              <p class="small-text-yellow">Are you</p>
              <img src="/word1.png" alt="Word1" className="word" style={{ width: '500px', height: 'auto' ,marginLeft:'-25px'}}/>
              {/* <p class="medium-text">overwhelmed by those crazy<br></br>ranks of national colleges?</p> */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingTop:'40px',paddingBottom:'100px'}}>
                <input type="email" className="form-control" placeholder="Enter your email" style={{ borderRadius: '50px',width:'300px',height:'40px'}}/>
                <button className="subscribe-button">Subscribe</button>
              </div>
          </div>
          <div class="text2">
              <img src="/logo.png" alt="Logo" className="logo" style={{ width: '400px', height: 'auto' }}/>
              <p class="small-text-white">Your AI empowered college application assistant is here to help!</p>
              <img src="/Rocket.png" alt="Rocket" className="logo" style={{ width: '400px', height: 'auto',marginTop:'-20px'}}/>
          </div>
        </div>  
        <div class="container-white" >
              <p class="medium-text-blue" style={{marginLeft:'150px'}}>Explore our features</p>
              <div class="container-small">
                <img src="/Rectangle-blue.png" alt="Logo" className="image-blue"/>
                <div class="text-body">   
                  <p class="medium-text-blue">We provide you with a<br></br>personalized college ranking</p>
                  <img src="/Word1-1.png" alt="Word1-1" className="Word1-1" style={{ width: '400px', height: 'auto' }}/>
                  <button className="subscribe-button" style={{marginTop:'50px'}}>Try My College Rank</button>
                </div>
              </div>
              <div class="container-small">
                <div class="text-body">   
                  <p class="medium-text-blue">We get you the best peer & <br></br>professional mentors around the <br></br>clock</p>
                  <img src="/Word1-2.png" alt="Word1-2" className="Word1-2" style={{ width: '400px', height: 'auto' }}/>
                  <button className="subscribe-button" style={{marginTop:'50px'}}>Join wishlist</button>
                </div>
                <img src="/Rectangle-blue.png" alt="Logo" className="image-blue"/>
              </div>
              <div class="container-small">
                <img src="/Rectangle-blue.png" alt="Logo" className="image-blue" />
                <div class="text-body">   
                  <p class="medium-text-blue">We help you plan your university<br></br>application</p>
                  <img src="/Word1-3.png" alt="Word1-3" className="Word1-3" style={{ width: '400px', height: 'auto' }}/>
                  <button className="subscribe-button" style={{marginTop:'50px'}}>Join wishlist</button>
                </div>
              </div>
              <p class="medium-text-blue" style={{marginLeft:'150px'}}>Our students say</p>
              <div class="container-small">
                <img src="/StudentSay.png" alt="StudentSay" className="StudentSay" style={{ width: '900px', height: 'auto' }}/>
              </div>
        </div>
      </div>
    );
  }
  
  export default Home;