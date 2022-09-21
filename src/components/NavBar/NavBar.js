import './navbar-styles.css'
import logo from '../images/logo2.png'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () =>{
    return (
        <div className='navbar-container'>

            <NavLink to={'/'}><img src={logo} className="navbar-logo" alt="logo"/></NavLink>
            
            <div>
                <ul className='navbar-link'>

                    <li className="nav-item"> 
                        <NavLink to={'/'} className={({isActive}) => isActive ? 'activo' : 'noActivo' }>Home</NavLink>                    
                    </li>

                    <li className="nav-item"> 
                        <NavLink to={'/category/computacion'} className={({isActive}) => isActive ? 'activo' : 'noActivo' }>Computacion</NavLink>                    
                    </li>
                    
                    <li className="nav-item"> 
                        <NavLink to={'/category/belleza'} className={({isActive}) => isActive ? 'activo' : 'noActivo' }>Belleza</NavLink>                    
                    </li>

                    <li>
                        <NavLink to={'/category/entretenimiento'} className={({isActive}) => isActive ? 'activo' : 'noActivo' }>Entretenimiento</NavLink>
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
            
            <NavLink to={'/cart'}><CartWidget /></NavLink>
            
        </div>
    )       
}

export default NavBar;