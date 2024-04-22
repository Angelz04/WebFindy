
import React, { useContext } from 'react';
import { PostContext } from './PostContext/PostContext'; // Importa el contexto

const Details = () => {
  const { state } = useContext(PostContext); // Usa el contexto para acceder al estado global

  // Extraemos la publicación seleccionada del estado
  const { selectedPost } = state;

  // Verificamos si hay una publicación seleccionada
  if (!selectedPost) {
    return <div>No hay detalles de la publicación disponibles</div>;
  }

  // Extraemos los detalles de la publicación
  const { id, categoria, imagenPost } = selectedPost;

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Detalles de la publicación</h2>
      <p>ID: {id}</p>
      <p>Categoría: {categoria}</p>
      {/* Aquí podrías mostrar otros detalles de la publicación según tu lógica */}
      <img src={imagenPost} alt="Imagen de la publicación" className="rounded-lg mt-4" />
    </div>
  );
};

export default Details;

