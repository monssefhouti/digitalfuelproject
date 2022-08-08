import './App.css';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pricing from "./Components/Pricing/Pricing";
function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Switch>
                <Route path='/' exact={true} component={Homepage}>
                    <Homepage/>
                </Route>
                <Route path='/Packs' exact={true} component={Pricing}>
                    <Pricing />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
