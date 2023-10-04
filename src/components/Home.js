import './Home.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Home() {
  const [email, setEmail] = useState('');
  const [currentSlide, setCurrentSlide] = useState(1); // 追踪当前图片编号
  const totalSlides = 3; // 总共的图片数量

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide === totalSlides ? 1 : prevSlide + 1));
      // 更新圆点
      handleDotHover(currentSlide === totalSlides ? 1 : currentSlide + 1);
    }, 3000); // 5秒自动切换

    return () => {
      clearTimeout(timer); 
    };
  }, [currentSlide]);


  const handleDotHover = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  const handleSubscription = async () => {
    try {
        const response = await fetch('https://got10in-backend-cfba39007310.herokuapp.com/subscribe/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        });
        const data = await response.json();
        if (response.ok) {
            alert(data.message);
        } else {
            alert(data.detail);  // Display the error message from the backend
        }
    } catch (error) {
        console.error('There was an error!', error);
    }
}

    return (
      <div className="home">
        <div class="container-body">
          <div class="text">   
              <p class="small-text-yellow">Are you</p>
              <div class="slider-container">
                <img src={`/Q${currentSlide}.png`} alt={`Word${currentSlide}`} className="word" style={{ width: 'auto', height: '70px', marginTop: '25px',marginBottom: '30px'}} />
                  <div className="dots-container">
                  {[1, 2, 3].map((slideNumber) => (
                    <div
                      key={slideNumber}
                      className={`dot ${currentSlide === slideNumber ? 'active' : ''}`} 
                      onMouseEnter={() => handleDotHover(slideNumber)}
                    ></div>
                  ))}
                  </div>
              </div>
              {/* <p class="medium-text">overwhelmed by those crazy<br></br>ranks of national colleges?</p> */}
              <div style={{ display: 'flex', gap: '20px', paddingTop:'40px',paddingBottom:'100px'}}>
                <input type="email" className="form-control" placeholder="  Please enter your email" style={{ borderRadius: '50px',width:'300px',height:'40px'}} value={email}
    onChange={(e) => setEmail(e.target.value)}/>
                <button className="subscribe-button" onClick = {handleSubscription}>Subscribe</button>
              </div>
          </div>
          <div class="text2">
              <img src="/logo2.png" alt="Logo"  style={{ width: '480px', height: 'auto' }}/>
              {/* <p class="small-text-white">Your AI empowered college application assistant is here to help!</p> */}
              <img src="/Rocket.png" alt="Rocket"  style={{ width: '480px', height: 'auto',marginTop:'-40px'}}/>
          </div>
        </div>  
        <div class="container-white" >
              <p class="medium-text-blue" style={{marginLeft:'200px',marginTop:'80px'}}>Explore our features</p>
              <div class="container-small" >
                <img src="/LandingPic1.png" alt="Logo" className="image-blue" style={{paddingRight:'100px'}}/>
                <div class="text-body">   
                  <p class="medium-text-blue">We provide you with a personalized college ranking</p>
                  <img src="/Word1-1.png" alt="Word1-1" className="WordCard"/>
                  <Link to="/my-college-ranking" className="subscribe-button" style={{marginTop:'50px'}}>Try My College Rank</Link>
                </div>
              </div>
              <div class="container-small">
                <div class="text-body">   
                  <p class="medium-text-blue">We get you the best peer & professional mentors around the clock</p>
                  <img src="/Word1-2.png" alt="Word1-2" className="WordCard"/>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScEu6YWaiO3aV0yNXqRpwTs3j6jV6gflemDeNW_ZC0FE6BiBQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" className="subscribe-button" style={{marginTop:'50px'}}>Join wishlist</a>
                </div>
                <img src="/LandingPic2.png" alt="Logo" className="image-blue" style={{paddingLeft:'100px'}}/>
              </div>
              <div class="container-small">
                <img src="/LandingPic3.png" alt="Logo" className="image-blue" style={{paddingRight:'100px'}}/>
                <div class="text-body">   
                  <p class="medium-text-blue">We help you plan your university application</p>
                  <img src="/Word1-3.png" alt="Word1-3" className="WordCard"/>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScEu6YWaiO3aV0yNXqRpwTs3j6jV6gflemDeNW_ZC0FE6BiBQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" className="subscribe-button" style={{marginTop:'50px'}}>Join wishlist</a>
                </div>
              </div>
              <p class="medium-text-blue" style={{marginTop:'80px',marginLeft:'200px'}}>Our students say</p>
              <div class="container-small">
                {/* 底部图片切换 */}
                <div className="slider-container-middle">
                  <img src={`/StudentSay${currentSlide}.png`} alt={`StudentSay${currentSlide}`} className="WordCard" style={{ marginBottom: '30px'}}/>
                  <div className="dots-container">
                    {[1, 2, 3].map((slideNumber) => (
                      <div
                        key={slideNumber}
                        className={`greydot ${currentSlide === slideNumber ? 'active' : ''}`}
                        onMouseEnter={() => handleDotHover(slideNumber)}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
        </div>
      </div>
    );
  }
  
  export default Home;