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
import BeerRandom from "./components/BeerRandom";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/beers" exact>
                        <BeerList />
                    </Route>
                    <Route path="/beers/:beerId" >
                        <BeerDetails />
                    </Route>
                    <Route path="/beers/random">
                        <BeerRandom />
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
