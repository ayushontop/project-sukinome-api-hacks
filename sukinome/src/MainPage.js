
import './App.css';
import Starting from './Starting';
import Self from './self';
import Email from './email';
import NavBar from './NavBar';
import Alert from './modalAlert';




function MainPage() {
  return (
      <div>
        <NavBar />
        <Starting/>
        <Self />
        <Email />
        <Alert />
      </div>

      
  
    );
}

export default MainPage;
