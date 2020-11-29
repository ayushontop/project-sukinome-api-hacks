


import MainPage from './MainPage';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';





function App() {
  return (
      <div className="App">
    
    <Router>
    
      <Switch>
      <Route path="/" component={MainPage} />
      
      </Switch>
    </Router>
     
    </div>

      
  
    );
}

export default App;
