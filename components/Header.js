import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
const Header = () => {
  const router = useRouter();
  const forceReload = () => {
    router.reload();
  };
  return (
  
      <header className="header">
        <div className="mobile-sticky fs-6 ">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light px-0 py-0">
              <Link
                id="showStartPush"
                aria-label="sidebar menu"
                className="navbar-toggler sidebar-menu-trigger side-hamburger border-0 px-0"
                href="javascript:;"
              >
                <span className="hamburger-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </Link>
            </nav>
          </div>
        </div>
        <div className="second-header">
        <div className="container">
          <div className="row">
            <div className="col-12">          
                <a className="navbar-brand" href="/">
                <Image
                      width={1200}
                      height={213}
                    className="img-fluid"
                    src="/uploads/alfajrbanner1.jpg"
                    alt="Logo site"
                  />
                </a>  
            </div>
          </div>
        </div>
        </div>
      </header>
  );
};

export default Header;