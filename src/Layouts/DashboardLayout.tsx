import { Outlet} from "react-router-dom"
import Sidebar from "../components/Blocks/SideBar"
import NavBar from "../components/Blocks/NavBar"


export const DashboradLayout = () => {
    return (
        <div className="m-[50px] bg-[#1239ac]">
           
            <Sidebar />
             <NavBar />
            <Outlet />
        </div>
    )
}