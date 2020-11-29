
import './App.css';



function NavBar() {
  return (
      <div className="App">
          <nav className="navbar has-shadow is-dark mb-3">
        <div className="navbar-brand">
            
            <a href="" className="navbar-item is-uppercase has-text-light is-size-4 py-2 pl-4 ">Anime</a>
            <a className='navbar-burger ' id='burger'>
                <span></span>
                <span></span>
                <span></span>

            </a>
        </div>
        <div className="navbar-menu" id='menu'>
            <div className="navbar-end">
                <a className='navbar-item ' href='/'>Home</a>
                <a className='navbar-item ' id='nav-projects'>Projects</a>
                
            </div>

        </div>

    </nav>
    
     
    </div>

      
  
    );
}

export default NavBar;
