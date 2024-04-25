import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from '../context/AppContext';
import { UserProvider } from '../context/UserContext';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProfileDetails from '../pages/ProfileDetails';

function AppRouter() {
  return (
    <Router>
      <AppProvider>
        <UserProvider>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route exact path="/profile" element={<ProfileDetails/>} /> 
          </Routes>
        </UserProvider>
      </AppProvider>
    </Router>
  );
}

export default AppRouter;
