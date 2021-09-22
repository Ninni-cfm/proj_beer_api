import { useParams, useHistory } from 'react-router-dom';

import NavigateHome from "./Navigation";

const BeerDetails = () => {

    let history = useHistory();

    // console.log(useParams())
    let beerId = useParams().beerId;
    console.log(beerId);

    function HandleClick() {
        history.goBack();
    }


    return (<div>
        <h1>BeerDetails</h1>
        <button type="button" onClick={HandleClick}>
            &lt; Back
        </button>
        <NavigateHome />
    </div>);
}

export default BeerDetails;

/*
const BlogDetails = () => {
    let history = useHistory();
    console.log(useParams())
    let myId = useParams().myId
    let singleBlog = blogData.filter(elt => elt.id === Number(myId))
    console.log(singleBlog)
    function handleClick() {
        history.goBack();
    }
    return (
        <div id="details">
            <div className="back">
                <button type="button" onClick={handleClick}>
                    &lt; Back
                </button>
            </div>
            <figure>
                <img src={singleBlog[0].img_url} alt="" />
                <figcaption>
                    <div>
                        <h1>{singleBlog[0].title}</h1>
                        <h3>{singleBlog[0].published_date}</h3>
                    </div>
                    <p>{singleBlog[0].description}</p>
                    <h4>{singleBlog[0].author}</h4>
                </figcaption>
            </figure>
        </div>
    );
}
*/









