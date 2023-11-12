import {createBrowserRouter} from "react-router-dom"
import { DashboradLayout } from "../../Layouts/DashboardLayout"
import Landing from "../../Pages/Landingpage/Landing"
import Dashboard from "../../Pages/Dashboard"
import UserDashboard from "../../Pages/UserDashboard"
import AdminDashBoard from "../../Pages/AdminDashBoard"





const Index = createBrowserRouter([
    {
        path: "/",
        element:"",
        children: [
            {
                index: true,
                element: <Landing />,
            },
            
            {
                path: "dashboardl",
                element: <DashboradLayout />
            },
            {
                path: "dash",
                element: <Dashboard />
            },
            {
                path: "user",
                element: <UserDashboard />
            },
            {
                path: "admin",
                element: <AdminDashBoard/>
            }
        ]
    }
])

export default Index