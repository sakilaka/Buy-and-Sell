import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Product from './component/Product';
import Register from './component/Register';
import Login from './component/Login';
import Main from './Layout/Main';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddProduct from './component/DsahBoard/AddProduct';
import DashboardLayout from './Layout/DashboardLayout';
import ErrorPage from './component/ErrorPage';
import Blog from './component/Blog';
import MyProduct from './component/DsahBoard/MyProduct';
import AllSeller from './component/DsahBoard/AllSeller';
import AllBuyer from './component/DsahBoard/AllBuyer';
import Dashboard from './component/DsahBoard/Dashboard';
import MyWishList from './component/DsahBoard/MyWishList';

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
        {
          path: '/blog',
          element: <Blog />
        },

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
        {
          path: '/dashboard/addProduct',
          element: <AddProduct></AddProduct>
        },
        {
          path: '/dashboard/myProducts',
          element: <MyProduct></MyProduct>,
          loader: () => fetch('https://second-hand-server-nine.vercel.app/category')
        },
        {
          path: '/dashboard/allSeller',
          element: <AllSeller></AllSeller>
        },
        {
          path: '/dashboard/allBuyer',
          element: <AllBuyer></AllBuyer>
        },
        {
          path: '/dashboard/wishList',
          element: <MyWishList></MyWishList>
        },
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
