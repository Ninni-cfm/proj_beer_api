import { Link } from 'react-router-dom'

const NavigateHome = () => {
    return (<div className="NavigateHome">
        <Link to="/">
            <img src="./img/logo.svg" alt="Go Home" />
        </Link>
    </div>);
}

export default NavigateHome;