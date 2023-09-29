import './Home.css';
function FindMentor() {
  return (
    <div class="container-white" >
      <div class="container-small" style={{marginTop:'60px',marginBottom:'60px'}}>
                <img src="/Mentor1.png" alt="Logo" className="image-blue"/>
                <div class="text-body-right">   
                  <p class="medium-text-blue">Stay tuned, feature is coming soon!</p>
                  <img src="/MentorWords.png" alt="MentorWords" className="MentorWords" style={{ width: '400px', height: 'auto' }}/>
                  <button className="subscribe-button" style={{marginTop:'50px',padding: '10px 100px'}}>Join Wishlist</button>
                </div>
      </div>
    </div>
  );
}

export default FindMentor;
