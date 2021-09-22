import React from 'react';
// import { useParams, useHistory } from 'react-router-dom';

const apiCall = "https://ih-beers-api2.herokuapp.com/beers";

class BeerDetailsInner extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            beerId: props.beerId,
            isLoaded: false,
            details: {}
        }
    }

    componentDidMount() {

        // console.log(`${apiCall}/${this.state.beerId}`);
        fetch(`${apiCall}/${this.state.beerId}`)
            .then(response => response.json())
            .then(
                jsonData => this.setState({ details: jsonData },
                    () => this.setState({ isLoaded: true }))
            )
            .catch(err => console.log(err));
    }

    render() {
        const details = this.state.details;
        // console.log(details);
        return (<div className="BeerDetailsInner">

            <img src={this.state.isLoaded ? details.image_url : undefined} alt="" />

            <h1>{this.state.isLoaded && details.name}</h1>
            <h3>{this.state.isLoaded && details.tagline}</h3>

            <div className="table">
                <span>
                    {this.state.isLoaded && "First brewed:"}
                </span>
                <span>
                    {this.state.isLoaded && details.first_brewed}
                </span>
            </div>
            <div className="table">
                <span>
                    {this.state.isLoaded && "Attenuation level:"}
                </span>
                <span>
                    {this.state.isLoaded && details.attenuation_level}
                </span>
            </div>

            <p>{this.state.isLoaded && this.state.details.description}</p>

        </div>);
    }
}


export default BeerDetailsInner;