import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logOutUser } from "../../actions/auth";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const dispatch = useDispatch();

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch(logOutUser(setUser));
      }
    }
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [location]);
  return (
    <div>
      {/* lg:bg-gray-800  sm:bg-green-500 md:bg-orange-500 xl:bg-red-500 */}
      <nav className="flex p-4 justify-between">
        <h2 className="text-2xl tracking-wide font-medium text-white">
          Social Media Application
        </h2>
        {user ? (
          <div className="flex flex-row items-center">
            {user.picture ? (
              <img
                src={user.picture}
                alt="user"
                className="rounded-full w-12 mr-2"
              />
            ) : (
              <p className="mr-2 text-base">{user.name}</p>
            )}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => dispatch(logOutUser(setUser))}
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link to="/auth">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign In
            </button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
