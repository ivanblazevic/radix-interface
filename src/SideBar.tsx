import React from "react";
import { slide as Menu } from "react-burger-menu";

export default (props: any) => {
  return (
    // Pass on our props
    <Menu isOpen={props.isOpen} onStateChange={(state) => props.handleStateChange(state)}>
      <div className="menu-item">
        Stations
      </div>

      <div className="menu-item">
        YouTube
      </div>

      <div className="menu-item" onClick={_ => {
        props.showSettings();
        props.handleStateChange({ isOpen: false });
      }}>
        Settings
      </div>
    </Menu>
  );
};
