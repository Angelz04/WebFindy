import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from '../pages/Home';
import ProfileDetails from '../pages/ProfileDetails';

function AppRouter() {
  return (
    <Router>
      <Routes> 
        <Route exact path="/" element={<Home/>} /> 
        <Route exact path="/profile" element={<ProfileDetails/>} /> 
      </Routes>
    </Router>
  );
}

export default AppRouter;
