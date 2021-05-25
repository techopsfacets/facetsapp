import React, { useEffect, useState } from "react";
import _ from "lodash";
import Logo from "./facetslogo.png";
import "../../stylesheets/layout.scss";

const navs = {
  HowItWorks: { display: "How It Works", url: "/", type: "default" },
  Agencies: { display: "Brands & Agencies", url: "/", type: "default" },
  Learn: { display: "Learn", url: "/", type: "all" },
  Pricing: { display: "Pricing", url: "/", type: "default" },
  WorkFlow: { display: "Work Flow", url: "/", type: "creator" },
  DashBoard: { display: "Dashboard", url: "/", type: "creator" }
};
const NavBar = props => {
  const [user, setUser] = useState();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <img src={Logo} alt="Logo" className="nav-img" />
      </div>
      <div className="nav-links">
        <div className="nav-pages">
          {user &&
            _.map(
              navs,
              ({ display, url, type }, k) =>
                (type == "creator" || type == "all") && (
                  <a key={k} href={url}>
                    {display}
                  </a>
                )
            )}
          {!user &&
            _.map(
              navs,
              ({ display, url, type }, k) =>
                (type == "default" || type == "all") && (
                  <a key={k} href={url}>
                    {display}
                  </a>
                )
            )}
        </div>
        {!user && (
          <div className="sign-in-btn">
            <a>Already a creator? Sign in</a>
            <button>
              <span>BECOME A CREATOR</span>
            </button>
          </div>
        )}
        {user && (
          <div className="sign-in-btn">
            <button>
              <span>
                {user.firstName} {user.lastName}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
