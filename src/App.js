import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Product from './component/Product';
import Register from './component/Register';
import Login from './component/Login';
import Main from './Layout/Main';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddProduct from './component/AddProduct';
import DashboardLayout from './Layout/DashboardLayout';
import Dashboard from './component/DsahBoard/Dashboard';
import ErrorPage from './component/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/category/:id',
          element: <PrivateRoute><Product></Product></PrivateRoute>,
          loader: ({ params }) => fetch(`https://second-hand-server-nine.vercel.app/category/${params.id}`)
        },
        // {
        //   path: '/blog',
        //   element: <Blog />
        // },
        {
          path: '/addProduct',
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
        },
        // {
        //   path: '/myProduct',
        //   element: <PrivetRoute><MyProduct /></PrivetRoute>
        // },
        // {
        //   path: '/myOrder',
        //   element: <PrivetRoute><MyOrder /></PrivetRoute>
        // },
        // {
        //   path: '/pement',
        //   element: <PrivetRoute><Pement /></PrivetRoute>
        // },

        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }

      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        },
        // {
        //   path: '/dasboard/allBooking',
        //   element: <AllBookinPresent></AllBookinPresent>
        // },
        // {
        //   path: '/dasboard/admin',
        //   element: <Admin></Admin>
        // },
      ]
    }
  ]);
  return (
    <div className="">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
