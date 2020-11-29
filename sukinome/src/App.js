


import MainPage from './MainPage';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import BulkEmail from './BulkEmail';




function App() {
  return (
      <div className="App">
    
    <Router>
    
      <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/next" component={BulkEmail} />
      </Switch>
    </Router>
     
    </div>

      
  
    );
}

export default App;
