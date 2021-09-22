// import React, { Component } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import BeerDetailsInner from './BeerDetailsInner';

import NavigateHome from "./Navigation";

const BeerDetails = () => {

    let history = useHistory();
    let beerId = useParams().beerId;

    function HandleClick() {
        history.goBack();
    }

    return (<div className="BeerDetails">

        <BeerDetailsInner beerId={beerId} />

        <button type="button" onClick={HandleClick}>
            <img src="/img/back.svg" alt="" />
        </button>

        <NavigateHome />
    </div>);
}

export default BeerDetails;
