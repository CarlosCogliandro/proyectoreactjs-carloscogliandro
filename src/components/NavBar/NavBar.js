import './styles.css'
import logo from './logo.svg'
import CartWidget from '../CartWidget/CartWidget';



const NavBar = () =>{
    return (
        <div className='navbar-container'>
            <img src={logo} className="navbar-logo" alt="logo" />
            <div>
                <ul className='navbar-link'>
                    <li className="nav-item"><a className="nav-link" href="#">Productos</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Sobre Nosotros</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
                </ul>
            </div>
            <CartWidget/>
        </div>
    )       
}

export default NavBar;