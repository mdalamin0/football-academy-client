import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Share/NavBar/NavBar";
import Footer from "../Pages/Share/Footer/Footer";
import 'flowbite';


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;