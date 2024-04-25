import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { fetchUsers } from '../services/Endpoint';

const Login = () => {
  const { setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Obtener la lista de usuarios desde el servidor
      const users = await fetchUsers();

      // Verificar las credenciales del usuario
      const foundUser = users.find(user => user.nombreUsuario === username && user.contraseña === password);

      if (foundUser) {
        // Establecer el usuario logueado en el contexto del usuario
        setLoggedInUser(foundUser);
        
        // Redirigir al usuario a la página de inicio
        navigate('/home');
      } else {
        setError('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      setError('Error durante el inicio de sesión. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-slate-50 via-red-50 to-red-100 min-h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96" onSubmit={handleLogin}>
        <img className='ml-8' src="https://s3-alpha-sig.figma.com/img/2f0e/031a/b9b7a60f11dc3db3ae6f8d00926947c3?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aOpVcyM-VSVFQ2ClSI~TbozwGQO638Qi9Z2oKxt6dHd4O~f6HhG497m~KqGT2CBNJDIKQMqnSxx26uS-OxA-Dt72JQmxiJH9lQCctTK~uaPCu-wL33owHGMOINo6ie9Hhj2zu~27Uqx6hUpzDVxc86DJluvWYZxkhJRz7wjy-YV46iRiMIxMNJWOvg9OAz5GnZDE0d0OVJln3CHh164yziPdN6rplqG8eVswfX5eP-eH03NMhFEfW9c3C-m7IhfLTRBxeoBNCTQZSB92EPy84KLmxerr4jvokG9YIDiFdH~2ZEi5kSw4ToKkri9v8rvpABrbmz5UEDHNZVkNKiIVTw__"/>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-gradient-to-r from-red-50 via-red-200 to-red-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
