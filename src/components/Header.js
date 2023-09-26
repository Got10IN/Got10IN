import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div>
        <Link to="/">Logo</Link>
        <Link to="/">Home</Link>
        <Link to="/college-ranking">My College Ranking</Link>
        <Link to="/find-mentor">Find a Mentor</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/login-signup">Login/Signup</Link>
      </div>
    </header>
  );
}

export default Header;
