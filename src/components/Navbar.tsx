import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const path = useLocation();

  return (
    <div className="flex justify-between p-5 text-black items-center">
      <div>
        <img src="/assets/logo.png" width={150} alt="logo" />
      </div>
      <div>
        <ul className="flex items-center font-bold gap-10">
          <li className={`p-2 ${path.pathname === "/eszkozok" ? "active" : ""}`}>
            <Link to={"/eszkozok"}>Eszközök</Link>
          </li>
          <li className={`p-2 ${path.pathname === "/ruhak" ? "active" : ""}`}>
            <Link to={"/ruhak"}>Ruhák</Link>
          </li>
          <li className={`p-2 ${path.pathname === "/elelmiszerek" ? "active" : ""}`}>
            <Link to={"/elelmiszerek"}>Élelmiszerek</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-3">
          <li>
            <img src="/assets/dark-cart.png" width={30} className="cursor-pointer" alt="kosar" />
          </li>
          <li
            className={`relative flex rounded-full items-center ${
              isDropdownVisible && "rounded-none"
            } profile gap-2`}
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
          >
            <img className="pfp" src="/assets/pfp.png" width={30} alt="pfp" />
            <p className="font-semibold">Tóth Zsombor</p>
            <img
              src="/assets/le.png"
              className={`p-0 m-0 tr ${isDropdownVisible && "rotate-180"}`}
              width={15}
              alt="le"
            />
            {isDropdownVisible && (
              <ul className="absolute rounded-br-[10px] rounded-bl-[10px] left-0 top-full bg-[#d8d8d8c9] backdrop-blur-md border shadow-lg tr w-full">
                <li className="text-center hover:bg-gray-100 p-2">
                Profil
                </li>
                <li className="text-center hover:bg-gray-100 p-2">
                  Számlázás
                </li>
                <li className="text-center hover:bg-gray-100 p-2">
                  Kuponok
                </li>
                <hr className="hr-w-full" />
                <li className="text-center text-blue-600 hover:bg-blue-100 p-2">
                  ÁSZF
                </li>
                <li className="text-center text-blue-600 hover:bg-blue-100 p-2">
                  <Link to={'/gyik'}>GYIK</Link>
                </li>
                <hr className="hr-w-full" />
                <li className="text-center rounded-br-[10px] rounded-bl-[10px] font-semibold text-[#FF0000] hover:bg-red-100 p-2">
                  Kijelentkezés
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
