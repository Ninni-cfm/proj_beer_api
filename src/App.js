import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";

import './App.css';

import Home from "./pages/Home";
import BeerList from "./components/BeerList";
import BeerDetails from "./components/BeerDetails";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/beers" exact component={BeerList} />
                    <Route path="/beers/:beerId" component={BeerDetails} />
                    <Route path="/beers/random" component={BeerDetails} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
