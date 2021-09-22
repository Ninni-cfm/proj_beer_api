import { Link } from "react-router-dom";

const BeerCard = (props) => {

    return (<div className="BeerCard">
        <img src={props.data.image_url} alt="" />
        <div>
            <h2>{props.data.name}</h2>
            <h4>{props.data.tagline}</h4>
            <h5>Created by: {props.data.name}</h5>
            <Link to={`/beers/${props.data._id}`}>Details</Link>
        </div>
    </div>);
}

export default BeerCard;