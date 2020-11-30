
import {Link} from 'react-router-dom';

function GotoBtn() {

  return (
      
      <div className="gotoBtn has-text-centered">
    
        <Link to='/next' className='button is-success is-rounded mb-3'>Go to Bulk Check</Link>
     
    </div>

      
  
    );
}

export default GotoBtn;
    
  