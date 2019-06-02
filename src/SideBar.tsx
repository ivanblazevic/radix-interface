import React from "react";
import { slide as Menu } from "react-burger-menu";

export default () => {
  return (
    // Pass on our props
    <Menu>
      <a className="menu-item" href="/">
        Stations
      </a>

      <a className="menu-item" href="/">
        YouTube
      </a>

      <a className="menu-item" href="/">
        Settings
      </a>
    </Menu>
  );
};
