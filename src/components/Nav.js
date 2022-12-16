import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="w-[100%]">
      <div className="flex">
        <div className="flex-none text-4xl p-3 font-bold text-white">
          {" "}
          fake shop
        </div>
        <div className="flex-1 flex justify-around"></div>
      </div>
    </div>
  );
}

export default Nav;
