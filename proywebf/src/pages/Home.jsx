// Home.js
import { useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Menu from '../components/Menu';
import PostCard from '../components/PostCard';
import Stories from '../components/Stories';

const Home = () => {
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    console.log('Logged In User:', loggedInUser);
  }, [loggedInUser]);

  return (
    <div className='bg-gradient-to-r from-slate-50 via-red-50 to-red-100 min-h-screen'>
      <div className="container mx-auto h-full overflow-y-auto">
        <Stories /> 
        <PostCard />
        <Menu />
      </div>
    </div>
  );
};

export default Home;
