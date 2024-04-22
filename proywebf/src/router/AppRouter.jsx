import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from '../pages/Home';
import Details from '../pages/PostDetails';

function AppRouter() {
  return (
    <Router>
      <Routes> 
        <Route exact path="/" element={<Home/>} /> 
        <Route path="/PostDetails" element={<Details/>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
