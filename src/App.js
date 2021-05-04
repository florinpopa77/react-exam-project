import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import People from './People';
import Page404 from './Page404';
import Meniu from './Meniu';


function App() {
  return (
      <div className="App">
        <Meniu/>
        <Switch>
          <Route path="/people" component={People}/>
          <Route exact path="/" component={Home}/>
          <Route path="*" component={Page404}/>
        </Switch>
      </div>
  );
}

export default App;
