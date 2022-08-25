import logo from '../logo.svg'


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

            <button id="boton-carrito">  <span id="contadorCarrito">0</span></button>

        </div>
    )       
}

export default NavBar;
