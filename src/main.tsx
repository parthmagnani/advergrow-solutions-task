
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import User from './app/components/User.tsx';
import UserDetail from './app/components/UserDetail.tsx';


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: "/",
          element: <User />,
        },
        {
          path: "/addEditUser",
          element: <UserDetail/>
        },
        {
          path: "/addEditUser/:id",
          element: <UserDetail/>
        }
      ],
      // errorElement: <h1>Error</h1>,
    }
  ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
