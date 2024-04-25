import { useContext } from 'react';
import PostContext from '../context/PostContext'; 
import Menu from '../components/Menu';

const PostDetails = () => {
  const { selectedPost } = useContext(PostContext) || {};

  if (!selectedPost) {
    return <div>No hay detalles de la publicación disponibles</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4">

      
      <Menu />
    </div>
  );
};

export default PostDetails;