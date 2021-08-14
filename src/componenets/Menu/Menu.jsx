import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./menu.scss";
import { IconContext } from "react-icons";
import {useHistory } from "react-router-dom";

function Menu () {
  let history = useHistory();
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(sidebar);



  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar shadow-sm">
          <Link to="#" className="menu-bars">
            <div onClick={showSidebar} />
          </Link>

          <form className="form-inline my-2 my-lg-0">
            <div className="row">
              <div className="row">
                <Link to  className="user">
                  Hello, John Smith 
                </Link>
              </div>

              <div className="col">
                <h5 className="vs">|</h5>
              </div>

              <div className="row">
                <button type="submit" class="btn btn-link btn-logout" onClick={()=> {history.push('/')}}>
                  Logout
                </button>
              </div>
            </div>
          </form>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <div className="menu-bars">
                <h1 className="menu">Menu</h1>
              </div>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Menu;
