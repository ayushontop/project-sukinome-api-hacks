
import './App.css';
import Starting from './Starting';
import Self from './self';
import Email from './email';
import NavBar from './NavBar';
import Alert from './modalAlert';
import './check';
import GotoBtn from './go-to-bulk-check-btn';

function MainPage() {
  return (
      <div>
        <NavBar />
        <Starting/>
        <Self />
        <Email />
        <Alert />
        <GotoBtn />
      </div>

      
  
    );
}

export default MainPage;
