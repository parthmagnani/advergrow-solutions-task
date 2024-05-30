// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
// import User from './app/components/User';
// import UserDetail from './app/components/UserDetail';
// import Layout from './app/components/Layout';

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <App />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <User />,
  //       },
  //       {
  //         path: "/addEditUser",
  //         element: <UserDetail/>
  //       },
  //       {
  //         path: "/addEditUser/:id",
  //         element: <UserDetail/>
  //       }
  //     ],
  //     // errorElement: <h1>Error</h1>,
  //   }
  // ]);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<User />} />
  //       {/* <Route path="login" element={<Login />} />
  //       <Route path="register" element={<Register />} /> */}
  //     </Route>
  //   )
  // )

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Outlet />
    </>
  )
}

export default App
