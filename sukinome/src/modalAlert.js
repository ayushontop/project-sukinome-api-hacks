
import './check';

function Alert() {
  return (
    <div className="Alert">
        <div className="modal mx-3">
  <div className="modal-background"></div>
  <div className="modal-card">
    <header className="modal-card-head has-background-success">
      <p className="modal-card-title has-text-light has-text-centered">Message!!</p>
    </header>
    <section className="modal-card-body" >
        {/* content */}
        <p id='alert-content' class='has-text-dark'></p>
    </section>
    <footer className="modal-card-foot">
      <button className="button is-success" id='modalCloseBtn' >Close</button>
      
    </footer>
  </div>
</div>
     
    </div>

      
  
    );
}

export default Alert;