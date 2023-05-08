import { useEffect, useState } from "react";
import { API_URL } from "@/config/index";
import Link from "next/link";
const UiNav = () => {
  const [Nav, setNav] = useState([]);
  useEffect(() => {
    getNav();
  }, []);

  const getNav = async () => {
    const navres = await fetch(`${API_URL}/api/navigation/render/1?type=TREE`);
   
    const Navigation = await navres.json();
   
    setNav(Navigation);
  };

  return (
    <div
      id="showbacktop"
      className="showbacktop full-nav bg-white border-none border-lg-1 border-bottom shadow-b-sm py-0"
    >
      <div className="container">
        <nav
          id="main-menu"
          className="main-menu navbar navbar-expand-lg navbar-light px-2 px-lg-0 py-0"
        >
          <div
            id="navbarTogglerDemo1"
            className="collapse navbar-collapse hover-mode"
          >
            <div className="logo-showbacktop">
              <a href="index.html">
                <img
                  className="img-fluid"
                  src="../../assets/img/logo/default-logo.png"
                  alt="Logo site"
                />
              </a>
            </div>
            <ul
              id="start-main"
              className="navbar-nav main-nav navbar-uppercase first-start-lg-0"
            >
              {Nav.map((nav) => {
                return (
                  <>
                    {nav.items.length === 0 ? (
                      <li key={nav.id}>
                        <Link
                          className="nav-link active text-dark"
                          href={nav.path}
                        >
                          {nav.title}
                        </Link>
                      </li>
                    ) : (
                      <li className="nav-item dropdown" key={nav.id}>
                        <Link
                          className="nav-link active dropdown-toggle text-dark"
                          href={nav.path}
                        >
                          {nav.title}
                        </Link>

                        {nav.items !== null ? (
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="navbarhome"
                          >
                            {nav.items.map((item) => {
                              return (
                                <>
                                  <li key={item.id}>
                                    <Link
                                      className="dropdown-item"
                                      href={item.path}
                                    >
                                      {item.title}
                                    </Link>
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                        ) : (
                          ""
                        )}
                      </li>
                    )}
                   
                  </>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default UiNav;
