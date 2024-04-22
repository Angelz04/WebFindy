import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { faHeart, faComments } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Stories = () => {
  const { state } = useContext(AppContext);
  const { users } = state;

  return (
    <div className=" p-4 max-w-screen-sm mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            className="w-[240px]  rounded-full overflow-hidden"
            src="https://s3-alpha-sig.figma.com/img/2f0e/031a/b9b7a60f11dc3db3ae6f8d00926947c3?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aOpVcyM-VSVFQ2ClSI~TbozwGQO638Qi9Z2oKxt6dHd4O~f6HhG497m~KqGT2CBNJDIKQMqnSxx26uS-OxA-Dt72JQmxiJH9lQCctTK~uaPCu-wL33owHGMOINo6ie9Hhj2zu~27Uqx6hUpzDVxc86DJluvWYZxkhJRz7wjy-YV46iRiMIxMNJWOvg9OAz5GnZDE0d0OVJln3CHh164yziPdN6rplqG8eVswfX5eP-eH03NMhFEfW9c3C-m7IhfLTRBxeoBNCTQZSB92EPy84KLmxerr4jvokG9YIDiFdH~2ZEi5kSw4ToKkri9v8rvpABrbmz5UEDHNZVkNKiIVTw__"
            alt="logo_img"
          />
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-black w-8 h-8 mr-4 hover:text-gray-900"
          />
          <FontAwesomeIcon
            icon={faComments}
            className="text-black w-8 h-8 hover:text-gray-900"
          />
        </div>
      </div>
      <div className="flex space-x-10 overflow-x-auto">
        {users.map((user) => (
          <div key={user.id} className="flex flex-col items-center">
            <div
              className="w-16 h-16 rounded-full border-2 border-t-fuchsia-200 border-r-fuchsia-300 border-b-orange-200 border-l-fuchsia-300 overflow-hidden"
            >
              <img
                className="w-full h-full object-cover rounded-full"
                src={user.imagenPerfil}
                alt={user.nombreUsuario}
              />
            </div>
            <p className="text-sm mt-2 text-black">{user.nombreUsuario}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
