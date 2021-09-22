import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="Home">

            <div className="HomeLink">
                <Link to="/beers">
                    <div style={{ background: 'url("./img/all-beers.png") top/cover no-repeat' }}>
                        <h1>All Beers</h1>
                    </div>
                </Link>
                <p>A collection of the finest beers with detailed information about the brewing process and much more.</p>
            </div>

            <div className="HomeLink">
                <Link to="/beers/random">
                    <div style={{ background: 'url("./img/beer-random.png") top/cover no-repeat' }}>
                        <h1>Random Beer</h1>
                    </div>
                </Link>
                <p>If you can't decide on a beer type, let us choose a random one for you.</p>
            </div>

        </div>
    );
}

export default Home;