import './navbar-styles.css'
import logo from '../images/logo2.png'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
    return (
        <div className='navbar-container' bg="light" expand="lg">
            <NavLink to={'/'}><img src={logo} className="navbar-logo" alt="logo" /></NavLink>
            <div>
                <ul className='navbar-link'>

                    <li className="nav-item">
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'activo' : 'noActivo'}>Home</NavLink>
                    </li>

                    <li>
                        <NavDropdown title="Productos 🔽" id="basic-nav-dropdown">

                            <NavDropdown.Item>
                                <NavLink to={'/category/computacion'} className={({ isActive }) => isActive ? 'activo' : 'noActivo'}>Computacion</NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                <NavLink to={'/category/belleza'} className={({ isActive }) => isActive ? 'activo' : 'noActivo'}>Belleza</NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                <NavLink to={'/category/entretenimiento'} className={({ isActive }) => isActive ? 'activo' : 'noActivo'}>Entretenimiento</NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                <NavLink to={'/category/electrodomesticos'} className={({ isActive }) => isActive ? 'activo' : 'noActivo'}>Electrodomesticos</NavLink>
                            </NavDropdown.Item>

                        </NavDropdown>
                    </li>

                    <li className="nav-item">
                        <NavLink to={'/sobrenosotros'} className={({ isActive }) => isActive ? 'activo' : 'noActivo'}>Sobre Nosotros</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to={'/contacto'} className={({ isActive }) => isActive ? 'activo' : 'noActivo'}>Contacto</NavLink>
                    </li>

                </ul>
            </div>
            <NavLink to={'/cart'} className='cart-widget'><CartWidget /></NavLink>
        </div>
    )
}

export default NavBar;