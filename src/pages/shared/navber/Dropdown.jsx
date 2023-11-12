import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import swal from 'sweetalert';


const Dropdown = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logOutUser()
      .then((res) => {
        console.log(res)
        swal("Good job!", "LogOut successfull", "success");

    })
      .catch((e) => console.log(e));
  };

  return (
    <ul
      tabIndex={0}
      className="dropdown-content z-[1] rounded-none menu mt-2 p-2 shadow bg-black bg-opacity-90 w-52"
    >
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item 2</a>
      </li>
      {user && (
        <li>
          <button
            onClick={handleLogout}
            className="mt-2 hover:opacity-70 py-3 bg-[#d1a054b3] text-white border-none font-semibold"
          >
            Logout
          </button>
        </li>
      )}
    </ul>
  );
};

export default Dropdown;
