
import './Bulk-Email-Check.js';

function BulkModal() {
   
  return (
    <div className="Bulk-Modal">
    <div className="modal " id='BulkModal'>
  <div className="modal-background"></div>
  <div className="modal-card px-3">
    <header className="modal-card-head has-background-success">
      <p className="modal-card-title has-text-centered has-text-light">Results!!</p>
      
    </header>
    <section className="modal-card-body has-text-dark " id='bulkDiv'>

    </section>
    <footer className="modal-card-foot">
      <button className="button is-success" onClick={()=>{let BulkModal = document.getElementById('BulkModal');
    
    BulkModal.classList.remove('is-active');}} id='closeBtn'>Close</button>
      
    </footer>
  </div>
</div>
    
     
    </div>

      
  
    );
}

export default BulkModal;