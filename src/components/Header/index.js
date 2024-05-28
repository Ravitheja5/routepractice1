import {Link} from 'react-router-dom'
import './index.css'
const Header = () => (
  <nav className="nav-container">
    <div className="wave-div">
      <img
        className="img"
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1>Wave</h1>
    </div>

    <div className="nav-links-div">
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <h1>
        <Link to="/about">About</Link>
      </h1>
      <h1>
        <Link to="/contact">Contact</Link>
      </h1>
    </div>
  </nav>
)

export default Header
