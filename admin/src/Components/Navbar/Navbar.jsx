import './Navbar.css'
import navlogo from '../../assets/logo_big.png'
import navProfile from '../../assets/nav-profile.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navnav'>
      <img src={navlogo} alt="" className='nav-logo' />
      <p>Admin <span>Panel</span></p>
      </div>
      <img src={navProfile} alt="" className='nav-profile'/>
    </div>
  )
}

export default Navbar
