import React from 'react'
import { Link } from 'react-router-dom'
import foto from '../assets/foto-perfil.png'
import perfil from '../assets/foto-circular.png'
// import vector from '../assets/vector.png'
// import puntos from '../assets/tres-puntos.png'
 
const ProfileDetails = () => {
  return (
    <>
      <Link to="/" className=""></Link>
      <div className=" mx-auto max-w-4xl rounded-t-3xl border flex justify-center items-center bg-zinc-300">
        {/* <div img src={vector} alt="VectorIzq"></div> */}
        <img src={foto} alt="fotoperfil" />
      </div>
      <div className="mx-auto max-w-4xl border flex justify-center items-center">
        <div className="mt-10">
          <span className="font-bold">10.7</span>
          <span className="font-bold ml-1">M</span>
          <div>Followers</div>
        </div>
        <div className="mx-auto max-w-4xl flex flex-col items-center justify-center">
          <img src={perfil} alt="fotoCircular" className="mt-[-1.5rem]" />
          <span className="font-bold ">Jennie Kim</span>
          <span>J. Hello Guys</span>
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
      <div className="flex justify-center border my-3">
        <div className="w-[40rem] flex justify-evenly">
          <span className="font-bold">Photos</span>
          <span className="font-bold">Videos</span>
          <span className="font-bold">Album</span>
          <span className="font-bold">Tag</span>
        </div>
      </div>
      <div className="mx-auto max-w-4xl border grid grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-2 max-lg:grid-cols-3">
        <img
          src={foto}
          alt="fotoperfil"
          className="rounded-lg h-48 object-cover"
        />
        <img
          src={foto}
          alt="fotoperfil"
          className="rounded-lg h-56 object-cover"
        />
        <img
          src={foto}
          alt="fotoperfil"
          className="rounded-lg h-[198px] object-cover"
        />
        <img
          src={foto}
          alt="fotoperfil"
          className="rounded-lg h-[204px] object-cover "
        />
        <img
          src={foto}
          alt="fotoperfil"
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


