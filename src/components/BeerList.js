import React, { Component } from 'react';
import BeerCard from './BeerCard';
import NavigateHome from "./Navigation";

const apiCall = "https://ih-beers-api2.herokuapp.com/beers";

class BeerList extends Component {

    state = {
        beerList: []
    }

    componentDidMount = () => {
        fetch(apiCall)
            .then(response => response.json())
            .then(data => { this.setState({ beerList: data }) })
            .catch(err => console.log(err));
    }

    render() {
        return (<div className="BeerList">
            {this.state.beerList.length > 0 && this.state.beerList.map(beer =>
                <BeerCard key={beer._id} data={beer} />
            )}
            <NavigateHome />
        </div>);
    }
}

export default BeerList;
