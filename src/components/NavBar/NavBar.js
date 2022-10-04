import './navbar-styles.css'
import logo from '../images/logo2.png'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';


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
                        <NavLink to={'/category/computacion'} className={({ isActive }) => isActive ? 'activo' : 'noActivo'}>Computacion</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/category/belleza'} className={({ isActive }) => isActive ? 'activo' : 'noActivo'}>Belleza</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/category/entretenimiento'} className={({ isActive }) => isActive ? 'activo' : 'noActivo'}>Entretenimiento</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/category/electrodomesticos'} className={({ isActive }) => isActive ? 'activo' : 'noActivo'}>Electrodomesticos</NavLink>
                    </li>
                </ul>
            </div>
            <NavLink to={'/cart'} className='cart-widget'><CartWidget /></NavLink>
        </div>
    )
}

export default NavBar;








// return (
//     <Navbar bg="primary" expand="md">
//         <Container>
//             <Navbar.Brand href="#home"><NavLink to={'/'}><img src={logo} className="navbar-logo" alt="logo" /></NavLink></Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="me-auto">
//                     <Nav.Link><NavLink to={'/'} className={({ isActive }) => isActive ? 'activo' : 'noActivo'}>Home</NavLink></Nav.Link>

//                     <NavDropdown title="Productos" id="basic-nav-dropdown">
//                         <NavDropdown.Item>
//                             <NavLink to={'/category/computacion'} className={({ isActive }) => isActive ? 'activo' : 'noActivo'}>Computacion</NavLink>
//                         </NavDropdown.Item>

//                         <NavDropdown.Item>
//                             <NavLink to={'/category/belleza'} className={({ isActive }) => isActive ? 'activo' : 'noActivo'}>Belleza</NavLink>
//                         </NavDropdown.Item>

//                         <NavDropdown.Item>
//                             <NavLink to={'/category/entretenimiento'} className={({ isActive }) => isActive ? 'activo' : 'noActivo'}>Entretenimiento</NavLink>
//                         </NavDropdown.Item>

//                         <NavDropdown.Item>
//                             <NavLink to={'/category/electrodomesticos'} className={({ isActive }) => isActive ? 'activo' : 'noActivo'}>Electrodomesticos</NavLink>
//                         </NavDropdown.Item>
//                     </NavDropdown>
//                     <Nav.Link href="#link"><NavLink to={'/sobrenosotros'} className={({ isActive }) => isActive ? 'activo' : 'noActivo'}>Sobre Nosotros</NavLink></Nav.Link>
//                     <Nav.Link href="#link">
//                         <NavLink to={'/contacto'} className={({ isActive }) => isActive ? 'activo' : 'noActivo'}>Contacto</NavLink></Nav.Link>
//                 </Nav>
//             </Navbar.Collapse>
//             <NavLink to={'/cart'} className='cart-widget'><CartWidget /></NavLink>
//         </Container>
//     </Navbar>
// )