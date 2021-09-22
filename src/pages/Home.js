import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>

            <div className="HomeLink">
                <Link to="/beers">
                    <div style={{ background: 'url("./img/all-beers.png") top/cover no-repeat' }}>
                        <h1>All Beers</h1>
                    </div>
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis.</p>
            </div>

            <div className="HomeLink">
                <Link to="/beersRandom">
                    <div style={{ background: 'url("./img/beer-random.png") top/cover no-repeat' }}>
                        <h1>Random Beer</h1>
                    </div>
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis.</p>
            </div>

        </div>
    );
}

export default Home;