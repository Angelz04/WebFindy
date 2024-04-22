// Endpoints.js

// Función para obtener la lista de usuarios
export const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/usuarios');
      if (!response.ok) {
        throw new Error('Error al obtener la lista de usuarios');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error en la solicitud de usuarios:', error);
      return [];
    }
  };
  
  // Función para obtener la lista de publicaciones
  export const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:3000/publicaciones');
      if (!response.ok) {
        throw new Error('Error al obtener la lista de publicaciones');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error en la solicitud de publicaciones:', error);
      return [];
    }
  };
  
  // Función para obtener la lista de comentarios
  export const fetchComments = async () => {
    try {
      const response = await fetch('http://localhost:3000/comentarios');
      if (!response.ok) {
        throw new Error('Error al obtener la lista de comentarios');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error en la solicitud de comentarios:', error);
      return [];
    }
  };
  