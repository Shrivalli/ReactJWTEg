import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';
import LoginwithToken from './Pages/LoginwithToken';
import { createBrowserRouter } from 'react-router-dom';
import LayoutComponent from './Components/Layout.component';
import { AppProvider } from "../src/Context/App.context";
import { RouterProvider } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import CustomerPage from './Pages/CustomerPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginwithToken />,
  },
  {
    path: "/customer",
    element: <ProtectedRoute>
      <CustomerPage />
    </ProtectedRoute>
  },
  {
    path: "/profile",
    element: <ProtectedRoute>
      <ProfilePage />
    </ProtectedRoute>,
  },
]);

const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
    // <AppProvider>
    //   <LoginwithToken/>
    // </AppProvider>
  );

}

export default App;
