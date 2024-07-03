import { Outlet } from "react-router-dom";
import Fotter from "../shares/Fotter/Fotter";
import Navbar from "../shares/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;