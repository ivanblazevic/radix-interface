import React from "react";
import { slide as Menu } from "react-burger-menu";

export default (props: any) => {
  return (
    // Pass on our props
    <Menu isOpen={props.isOpen} onStateChange={(state) => props.handleStateChange(state)}>
      <a className="menu-item" href="/">
        Stations
      </a>

      <a className="menu-item" href="/">
        YouTube
      </a>

      <a className="menu-item" onClick={_ => {
        props.showSettings();
        props.handleStateChange({ isOpen: false });
      }}>
        Settings
      </a>
    </Menu>
  );
};
