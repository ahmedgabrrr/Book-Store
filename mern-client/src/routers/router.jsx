import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import App from "../App"
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import About from './../components/About';
import Blog from './../components/Blog';
import SingleBook from "../Shop/singleBook"
import Dashboard from './../Dashboard/Dashboard';
import DashboardLayout from './../Dashboard/DashboardLayout';
import UploadBook from "../Dashboard/UploadBook";
import ManageBooks from "../Dashboard/ManageBooks";
import EditBooks from "../Dashboard/EditBooks";
import SignUp from "../components/SignUp";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "/shop",
				element: <Shop />
			},
			{
				path: "/about",
				element: <About />
			},
			{
				path: "/blog",
				element: <Blog />
			},
			{
				path: "/get-book/:id",
				element: <SingleBook />,
				loader: ({ params }) => fetch(`http://localhost:3000/get-book/${params.id}`)
			},
			{
				path: "/admin/dashboard",
				element: <DashboardLayout />,
				children: [
					{
						path: "/admin/dashboard",
						element: <Dashboard />
					},
					{
						path: "/admin/dashboard/upload",
						element: <UploadBook />
					},
					{
						path: "/admin/dashboard/manage",
						element: <ManageBooks />
					},
					{
						path: "/admin/dashboard/edit-books/:id",
						element: <EditBooks />,
						loader: ({ params }) => fetch(`http://localhost:3000/get-book/${params.id}`)
					}
				]
			}
		]
	}, {
		path: "sign-up",
		element: <SignUp />
	}
]);
export default router;