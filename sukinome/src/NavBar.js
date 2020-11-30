

import { Link } from 'react-router-dom';


function NavBar() {
    function openMenu() {
        let menu = document.getElementById('menu');
        menu.classList.toggle('is-active');


    }

    return (
        <div className="Nav">
            <nav className="navbar has-shadow is-dark mb-3">
                <div className="navbar-brand">

                    <Link to='/' className="navbar-item is-uppercase has-text-light is-size-4 py-2 pl-4 ">Anime</Link>
                    <a className='navbar-burger ' id='burger' onClick={openMenu}>
                        <span></span>
                        <span></span>
                        <span></span>

                    </a>
                </div>
                <div className="navbar-menu" id='menu'>
                    <div className="navbar-end">
                        <Link className='navbar-item ' to='/'>Home</Link>
                        <Link className='navbar-item ' to='/next'>Bulk Check<p className='tag is-success impTag ml-2'>✐</p></Link>

                    </div>

                </div>

            </nav>


        </div>



    );
}

export default NavBar;
