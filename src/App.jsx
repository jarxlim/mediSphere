import React from 'react';
import LoginForm from './page/Login/LoginForm';
import Register from './page/Register/Register';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import LeftBar from './components/leftbar/LeftBar';
import RightBar from './components/rightbar/RightBar';
import Home from './page/Home/Home';
import Profile from './page/Profile/Profile';


// function App() {

//   const currentUser = false;

//   const Layout = () => {
//     return (
//       <div>
//         <NavBar/>
//         <div style={{display: "flex"}}>
//           <LeftBar />
//           <Outlet />
//           <RightBar />
//         </div>
//       </div>
//     );
//   };

//   const ProtectedRoute = ({ children }) => {
//     if (!currentUser) {
//       return <Navigate to="/login" />;
//     }

//     return children;
//   };


//   const router = createBrowserRouter([
//     {
//       path:"/",
//       element: <Layout />,
//       children:[
//         {
//           path:"/",
//           element:<Home/> 
//         },
//         {
//           path:"/profile/:id",
//           element: (
//             <ProtectedRoute>
//               <Layout />
//             </ProtectedRoute>
//           ),
//           children: [
//             {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "/profile/:id",
//           element: <Profile />,
//         },
//       ],
//     },
//     {
//       path: "/login",
//       element: <LoginForm/>,
//     },
//     {
//       path: "/register",
//       element: <Register/>,
//     },
//   ]);
  
//   return (
//     <div>
//     <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;

function App() {
  const {currentUser} = false;



  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;