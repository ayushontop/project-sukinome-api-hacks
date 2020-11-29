
import './App.css';
import Starting from './Starting';

import NavBar from './NavBar';

import Email from './email-for-bulk';

import BulkModal from './Bulk-Modal';




function MainPage() {
  return (
      <div>
        <NavBar />
        <Starting/>
        <Email/>
        <BulkModal />
    
      </div>

      
  
    );
}

export default MainPage;
