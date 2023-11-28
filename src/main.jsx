
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Login2 from './components/Login2/Login2';
import Main from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './components/AuthProvider';
import Registration from './components/Resgistrartion/Registrartion';
import PrivateRoute from './components/PrivateRoute';
import Contact from './components/Contact/Contact';
import ImageUpload from './components/ImageUpload/ImageUpload';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
 
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/registration",
        element: <Registration/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/loginn",
        element:<Login2/>,
      },
      {
        path: "/upload",
        element:<ImageUpload/>,
      },
     
      {
        path: "/contact",
        element:<PrivateRoute><Contact/></PrivateRoute>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
       <RouterProvider router={router} />
  </AuthProvider>,
)
