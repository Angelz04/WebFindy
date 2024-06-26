import React from 'react'
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom'
import foto from '../assets/foto-perfil.png'
import perfil from '../assets/foto-circular.png'


const ProfileDetails = () => {
 const { loggedInUser } = React.useContext(UserContext)
 const userName = loggedInUser ? loggedInUser.nombre : 'Invitado';
 const userImage = loggedInUser ? loggedInUser.imagenPerfil : 'Invitado';
 const userMessage = loggedInUser ? loggedInUser.mensaje : 'Invitado';
 const userFollowers = loggedInUser ? loggedInUser.seguidas : 'Invitado';
 let filter = ["Photos", "Videos", "Album", "Tag"]
  return (
    <>
      <Link to="/" className=""></Link>
      <div className=" mx-auto max-w-4xl rounded-t-3xl border flex justify-center items-center bg-zinc-300">
        {/* <div img src={vector} alt="VectorIzq"></div> */}
        <img src={foto} alt="fotoperfil" />
      </div>
      <div className="mx-auto max-w-4xl border flex justify-center items-center bg-gradient-to-r from-slate-50 via-red-50 to-red-100">
        <div className="mt-10">
          <span className="font-bold">{userFollowers}</span>
          <span className="font-bold ml-1">M</span>
          <div>Followers</div>
        </div>
        <div className="mx-auto max-w-4xl flex flex-col items-center justify-center">
          <img src={userImage} alt="fotoCircular" className="w-20 h-20 mt-[-1.5rem] rounded-full border-2 border-t-fuchsia-200 border-r-fuchsia-300 border-b-orange-200 border-l-fuchsia-300 overflow-hidden" />
          <span className="font-bold ">{userName}</span>
          <span>{userMessage}</span>
          <span>Follow me and like post</span>
        </div>
        <div className="mt-10">
          <span className="font-bold">108.3</span>
          <span className="font-bold ml-1 mt-10">M</span>
          <div>Likes</div>
        </div>
      </div>
      <div className="flex justify-center mt-4 mx-2">
        <button className="bg-red-500 hover:bg-rose-600 text-amber-50 font-semibold py-2 px-4 rounded-lg ">
          Follow
        </button>
        <button className="bg-red-500 hover:bg-rose-600 text-amber-50 font-semibold py-2 px-4 rounded-lg ml-5">
          Messages
        </button>
      </div>
      <div className="flex justify-center mx-auto max-w-4xl border my-3">
        
        <div className="w-[40rem] flex justify-evenly">
        {filter.map((filte) => (
          <span onClick={() => console.log(filte)} className="font-bold">{filte}</span>
        ))}
          {/* <span className="font-bold">Photos</span>
          <span className="font-bold">Videos</span>
          <span className="font-bold">Album</span>
          <span className="font-bold">Tag</span> */}
        </div>
      </div>
      <div className="mx-auto max-w-4xl border grid grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-2 max-lg:grid-cols-3">
        <img
          src={foto}
          alt="galeria de imagenes"
          className="rounded-lg h-48 object-cover"
        />
        <img
          src={foto}
          alt="galeria de imagenes"
          className="rounded-lg h-56 object-cover"
        />
        <img
          src={foto}
          alt="galeria de imagenes"
          className="rounded-lg h-[198px] object-cover"
        />
        <img
          src={foto}
          alt="galeria de imagenes"
          className="rounded-lg h-[204px] object-cover "
        />
        <img
          src={foto}
          alt="galeria de imagenes"
          className="rounded-lg h-[216px] object-cover"
        />
        <img
          src={foto}
          alt="fotoperfil"
          className="rounded-lg h-[216px] object-cover"
        />
      </div>
    </>
  );
};

export default ProfileDetails;


