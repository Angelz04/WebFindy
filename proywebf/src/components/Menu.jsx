import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { AiOutlineHome, AiOutlineSearch, AiOutlinePlus, AiOutlineBell } from 'react-icons/ai';

const Menu = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-red-400 border-t border-gray-200 py-2 px-4 flex justify-center items-center">
      <div className="flex items-center  space-x-12 text-white">
        <AiOutlineHome size={22} />
        <AiOutlineSearch size={22} />
        <AiOutlinePlus className='mb-2' size={22} />
        <AiOutlineBell size={22} />
        {loggedInUser && (
        <img src={loggedInUser.imagenPerfil} alt="User Profile" className="w-8 h-8 rounded-full" />
      )}
      </div>
    </div>
  );
};

export default Menu;
