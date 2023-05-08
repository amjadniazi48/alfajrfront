import React from "react";
import Link from "next/link";

const Footern = () => {
  return (
    <>
      <div
        className="row p-5 text-dark text-left border"
        style={{ background: "#F0F2F5" }}
      >
        <div className="col-sm-3 mb-4 mb-md-0 text-dark">
          <h5 className=" text-dark">Contact</h5>
          <ul className="list-unstyled mb-0">
            <li>
              <address>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1rem"
                  height="1rem"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                Khayaban e Mustafa, Mari Indus Dist Mianwali Mianwali,
                Punjab,Pakistan-42350
              </address>
            </li>
            <li>
              <div className="footer-info">
                <i class="bi bi-geo-alt-fill"></i>
                +92-304-1115554
              </div>
            </li>
          </ul>
        </div>

        <div className="col-sm-3 mb-4 mb-md-0">
          <h5 className="  text-dark mb-2">Quick Links</h5>

          <ul className="list-unstyled d-flex justify-content-around flex-column">
            <li>
              <Link href="/contact-us" class="text-dark ">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/about-us" class="text-dark">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/media/albums" class="text-dark">
                Albums
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-sm-3  mb-4 mb-md-0">
          <h5 class=" mb-2 text-dark ">Get Involved</h5>

          <ul className="list-unstyled d-flex justify-content-around flex-column">
            <li>
              <Link href="/join-us" class="text-dark">
                Jobs
              </Link>
            </li>
            <li>
              <Link href="/highlights" class="text-dark">
                Highlights
              </Link>
            </li>{" "}
          </ul>
        </div>
      </div>
      {/* // </div> */}

      <div
        className="text-center p-3 row"
        style={{ background: "#222222" }}
        // style="background-color: rgba(0, 0, 0, 0.2);"
      >
        <p className="text-white small">
          ©2023 Alfajr Institute Mari Indus, Mianwali, Punjab
        </p>
      </div>
    </>
    // </div>
  );
};

export default Footern;
