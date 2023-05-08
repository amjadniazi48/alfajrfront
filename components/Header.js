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
    <>
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

              <Link href="/">
                <img
                  className="mobile-logo img-fluid d-lg-none mx-auto"
                  src="/uploads/SSDO_Logo.webp"
                  alt="Logo site"
                />
              </Link>

              <button
                className="navbar-toggler px-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo2"
                aria-controls="navbarTogglerDemo2"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeMiterLimit: "10",
                      strokeWidth: "32px",
                    }}
                  />
                  <line
                    x1="338.29"
                    y1="338.29"
                    x2="448"
                    y2="448"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeMiterLimit: "10",
                      strokeWidth: "32px",
                      strokeLinecap: "round",
                    }}
                  />
                </svg>
              </button>
            </nav>

            <div
              className="collapse navbar-collapse col-12 py-2"
              id="navbarTogglerDemo2"
            >
              <form className="form-inline" action="../category/search.html">
                <div className="input-group w-100">
                  <input
                    type="text"
                    className="form-control border border-end-0"
                    placeholder="Search..."
                    aria-label="search"
                  />
                  <button className="btn btn-primary" type="submit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1rem"
                      height="1rem"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
                        style={{
                          fill: "none",
                          stroke: "currentColor",
                          strokeMiterLimit: "10",
                          strokeWidth: "32px",
                        }}
                      />
                      <line
                        x1="338.29"
                        y1="338.29"
                        x2="448"
                        y2="448"
                        style={{
                          fill: "none",
                          stroke: "currentColor",
                          strokeMiterLimit: "10",
                          strokeWidth: "32px",
                          strokeLinecap: "round",
                        }}
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="second-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div
                  id="main-logo"
                  className="main-logo my-2 my-lg-4 d-none d-lg-block"
                >
                  <Link
                    className="navbar-brand"
                    href={"/"}
                    as={`/`}
                    onClick={forceReload}
                  >
                    <Image
                      className="img-fluid"
                      src="/uploads/logo.png"
                      alt="Logo site"
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
