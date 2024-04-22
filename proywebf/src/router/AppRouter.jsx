import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from '../context/AppContext';
import { UserProvider } from '../context/UserContext';
import Home from '../pages/Home';
import Login from '../pages/Login';

function AppRouter() {
  return (
    <Router>
      <AppProvider>
        <UserProvider>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </UserProvider>
      </AppProvider>
    </Router>
  );
}

export default AppRouter;
