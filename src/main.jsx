
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
// import PrivateRoute from './components/PrivateRoute';
import Contact from './components/Contact/Contact';
import ImageUpload from './components/ImageUpload/ImageUpload';
import User from './components/User/User';

import Fruits from './components/Fruits/Fruits';
import Seasonal from './components/Seasonal';
import January from './components/January';
import February from './components/Months/February';
import March from './components/Months/March';
import April from './components/Months/April';
import May from './components/Months/May';
import Fruitsandwater from './components/fruitsandwater';
import TranslatorComponent from './components/TranslatorComponent ';

// import User from './components/User/User';



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
        element:<ImageUpload/>
      },
      {
        path: "/rest",
        element:<Fruitsandwater/>,
      },
      {
        path: "/fruit",
        element:<Fruits/>,
      },
      {
        path: "/season",
        element:<Seasonal/>,
      },
      {
        path: "/jan",
        element:<January/>,
      },
      {
        path: "/feb",
        element:<February/>,
      },
      {
        path: "/mar",
        element:<March/>,
      },
      {
        path: "/apr",
        element:<April/>,
      },
      {
        path: "/may",
        element:<May/>,
      },
     
     
      {
        path: "/user",
        element:<User/>,
        loader:()=>fetch('http://localhost:5001/upload')
      },
      {
        path: "/contact",
        element:<Contact></Contact>
      },
      {
        path: "/tan",
        element:<TranslatorComponent/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
       <RouterProvider router={router} />
  </AuthProvider>,
)
