import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Shippo-football-Academy | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;