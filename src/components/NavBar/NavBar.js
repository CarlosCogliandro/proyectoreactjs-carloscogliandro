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
                        <NavLink to={'/'} className={({isActive}) => isActive ? 'activo' : 'noActivo' }>Home</NavLink>                    
                    </li>

                    <li className="nav-item"> 
                        <NavLink to={'/category/diversion'} className={({isActive}) => isActive ? 'activo' : 'noActivo' }>Diversion</NavLink>                    
                    </li>
                    
                    <li>
                        <NavLink to={'/category/electrodomesticos'} className={({isActive}) => isActive ? 'activo' : 'noActivo' }>Electrodomesticos</NavLink>
                    </li>
                            
                    <li className="nav-item"> 
                        <NavLink to={'/sobrenosotros'} className={({isActive}) => isActive ? 'activo' : 'noActivo' }>Sobre Nosotros</NavLink> 
                    </li>
                    
                    <li className="nav-item"> 
                        <NavLink to={'/contacto'} className={({isActive}) => isActive ? 'activo' : 'noActivo' }>Contacto</NavLink>
                    </li>
                    
                </ul>
            </div>
            
            <NavLink to={'/carrito'}><CartWidget/></NavLink>
            
        </div>
    )       
}

export default NavBar;