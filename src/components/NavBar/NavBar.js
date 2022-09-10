import './styles.css'
import logo from './logo.svg'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';



const NavBar = () =>{
    return (
        <div className='navbar-container'>
            
            <NavLink to={'/'}><a href="#"><img src={logo} className="navbar-logo" alt="logo"/></a></NavLink>
            
            <div>
                <ul className='navbar-link'>
                    
                    <li className="nav-item"> 
                        <NavLink to={'/'} style={({isActive}) => isActive ? { fontWeight: 'bold', textDecoration: 'none', color: 'white', padding: "20px" } : { textDecoration: 'none', color: 'black', padding: "20px" } }>Home</NavLink> 
                    </li>
                    
                    <li className="nav-item"> 
                        <NavLink to={'/sobrenosotros'} style={({isActive}) => isActive ? { fontWeight: 'bold', textDecoration: 'none', color: 'white', padding: "20px" } : { textDecoration: 'none', color: 'black', padding: "20px" } }>Sobre Nosotros</NavLink> 
                    </li>
                    
                    <li className="nav-item"> 
                        <NavLink to={'/contacto'} style={({isActive}) => isActive ? { fontWeight: 'bold', textDecoration: 'none', color: 'white', padding: "20px" } : { textDecoration: 'none', color: 'black', padding: "20px" } }>Contacto</NavLink>
                    </li>
                    
                </ul>
            </div>
            
            <NavLink to={'/carrito'}><CartWidget/></NavLink>
            
        </div>
    )       
}

export default NavBar;