import React, { memo } from "react";
import { NavWrapper } from "./style";
import { discoverMenu } from "@/assets/data/local_data.js";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <NavWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => {
          return (
            <div className="item" key={item.title}>
              <NavLink to={item.link} >{item.title}</NavLink>
            </div>
          );
        })}
      </div>
    </NavWrapper>
  );
};
export default memo(NavBar);
