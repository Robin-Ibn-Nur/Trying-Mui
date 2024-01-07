import { createBrowserRouter } from "react-router-dom";
import SignUp from "../App";
import Home from "../Home";
import SignIn from "../SignIn";

export const router = createBrowserRouter([
    // { path: '/', element: <SignUp /> },

    {
        path: '/', element: <SignUp />,
        children: [
            // { path: 'home', element: <Home /> },
            { path: 'signin', element: <SignIn /> },
        ]
    }
])