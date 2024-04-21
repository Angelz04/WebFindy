import { useContext } from 'react';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppContext } from '../context/AppContext';

function PostCard() {
  const { state, dispatch } = useContext(AppContext);
  const { users, posts } = state;

  const toggleLike = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].likes += updatedPosts[index].liked ? -1 : 1;
    updatedPosts[index].liked = !updatedPosts[index].liked;
    dispatch({ type: 'SET_POSTS', payload: updatedPosts });
  };

  return (
    <div className="grid grid-cols-1 mb-20 gap-6 ml-5 mr-5">
      {posts.map((publicacion, index) => {
        const usuario = users.find(user => user.id === publicacion.idUsuario);
        return (
          <div key={index} className="bg-white p-4 shadow rounded-lg">
            {usuario && (
              <div className="flex">
                <div className="w-12 h-12 rounded-full border-2 border-t-fuchsia-200 border-r-fuchsia-300 border-b-orange-200 border-l-fuchsia-300 overflow-hidden ">
                  <img src={usuario.imagenPerfil} alt={usuario.nombreUsuario} className="w-full h-full object-cover rounded-full" />
                </div>
                <p className="font-regular mt-3 ml-2">{usuario.nombre}</p>
              </div>
            )}
            {publicacion.categoria === 'Imagen' && (
              <img src={publicacion.recursos} alt="Publicación" className="mt-2" />
            )}
            {publicacion.categoria === 'Video' && (
              <video controls className="mt-2">
                <source src={publicacion.recursos} type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
            )}
            <p className="mt-2">{publicacion.descripcion}</p>
            <button className="flex items-center mt-2" onClick={() => toggleLike(index)}>
              <FontAwesomeIcon icon={faHeart} className={`mr-1 text-red-500 ${publicacion.liked ? 'fill-current' : 'stroke-current'}`} />
              <span className="ml-1">{publicacion.likes}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PostCard;
