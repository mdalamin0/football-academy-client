import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import AcademyAbout from "../AcademyAbout/AcademyAbout";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Shippo-football-Academy | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <AcademyAbout></AcademyAbout>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;