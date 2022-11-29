import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Product from './component/Product';
import Register from './component/Register';
import Login from './component/Login';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      // errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        // {
        //   path: '/cetegories',
        //   element: <CarCategori />,
        //   // loader: ({ params }) => fetch(`http://localhost:5000/cetegories/${params.id}`)

        // },
        {
          path: '/category/:id',
          element: <Product></Product>,
          loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
        },
        // {
        //   path: '/blog',
        //   element: <Blog />
        // },
        // {
        //   path: '/addProduct',
        //   element: <PrivetRoute><AddProduct /></PrivetRoute>,
        // },
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
    // {
    //   path: '/dasboard',
    //   element: (<PrivateRoute><DashBoardLayOut></DashBoardLayOut></PrivateRoute>),
    //   errorElement: <ErrorPage></ErrorPage>,
    //   children: [
    //     {
    //       path: '/dasboard',
    //       element: <MyAppointment></MyAppointment>
    //     },
    //     {
    //       path: '/dasboard/allBooking',
    //       element: <AllBookinPresent></AllBookinPresent>
    //     },
    //     {
    //       path: '/dasboard/admin',
    //       element: <Admin></Admin>
    //     },
    //   ]
    // }
  ]);
  return (
    <div className="">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
