import header from '../images/header.png'
import './header-styles.css'

const Header = () => {
  return (
    <header className='header'>
        <img src={header} alt="header" className='imgheader'/>
    </header>
  )
}

export default Header