import React from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
function Whatwedo() {
  return (
    <Layout title="What we do">
      <div className="container">
        <div className="block-title-6 mt-5 text-center">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">What we do</span>
          </h4>
        </div>
        <div class="row mt-5 mb-5" style={{ justifyContent: "center" }}>
          {/* first */}
          <div class="col-sm-4 mb-3 mb-sm-0  ">
            <div
              className="card  d-flex align-items-center rgba-black-strong py-5 px-4"
              style={{
                width: "22rem",
                height: "18rem",
                backgroundColor: "#F2BF5E",
                justifyContent: "center",
              }}
            >
              <div className="card-body">
                <div style={{ marginBottom: "20px", paddingTop: "30px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="white"
                    class="bi bi-binoculars"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z" />
                  </svg>
                </div>
                <Link href={`javascript:;`}>
                  <h5
                    className="card-title text-center"
                    style={{ color: "white", fontWeight: "bolder" }}
                  >
                    Research{" "}
                  </h5>
                </Link>
              </div>
            </div>
          </div>
          {/* second */}
          <div class="col-sm-4 mb-3">
            <div
              className="card d-flex align-items-center rgba-black-strong py-5 px-4"
              style={{
                width: "22rem",
                height: "18rem",
                backgroundColor: "#FF6161",
                justifyContent: "center",
              }}
            >
              <div className="card-body">
                <div
                  style={{
                    marginBottom: "20px",
                    paddingTop: "30px",
                    paddingLeft: "90px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="white"
                    class="bi bi-people-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  </svg>
                </div>
                <Link href={`javascript:;`}>
                  <h5
                    className="card-title text-center"
                    style={{ color: "white", fontWeight: "bolder" }}
                  >
                    Advocacy (Community & Policy){" "}
                  </h5>
                </Link>
              </div>
            </div>
          </div>
          {/* third */}
          <div class="col-sm-4 mb-3">
            <div
              className="card d-flex align-items-center rgba-black-strong py-5 px-4"
              style={{
                width: "22rem",
                height: "18rem",
                backgroundColor: "#213E8C",
                justifyContent: "center",
              }}
            >
              <div className="card-body">
                <div
                  style={{
                    marginBottom: "20px",
                    paddingTop: "30px",
                    paddingLeft: "100px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="white"
                    class="bi bi-chat-square-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm6 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                  </svg>
                </div>
                <Link href={`javascript:;`}>
                  <h5
                    className="card-title text-center"
                    style={{ color: "white", fontWeight: "bolder" }}
                  >
                    Behavioral Change Communication
                  </h5>
                </Link>
              </div>
            </div>
          </div>
          {/* fourth */}
          <div class="col-sm-4 mb-3">
            <div
              className="card d-flex align-items-center rgba-black-strong py-5 px-4"
              style={{
                width: "22rem",
                height: "18rem",
                backgroundColor: "#35C68B",
                justifyContent: "center",
              }}
            >
              <div className="card-body">
                <div
                  style={{
                    marginBottom: "20px",
                    paddingTop: "20px",
                    paddingLeft: "100px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="white"
                    class="bi bi-rocket-takeoff-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.578 3.578 0 0 0-.108-.563 2.22 2.22 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2.35 2.35 0 0 0-.16-.045 3.797 3.797 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.552 2.552 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526l.24-2.408Zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361.599.599.437 1.732-.36 2.531Z" />
                    <path d="M5.205 10.787a7.632 7.632 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925Z" />
                  </svg>
                </div>
                <Link href={`javascript:;`}>
                  <h5
                    className="card-title text-center"
                    style={{ color: "white", fontWeight: "bolder" }}
                  >
                    Capacity Building and Institutional Strengthening
                  </h5>
                </Link>
              </div>
            </div>
          </div>
          {/* fifth */}
          <div class="col-sm-4 mb-3">
            <div
              className="card d-flex align-items-center rgba-black-strong py-5 px-4"
              style={{
                width: "22rem",
                height: "18rem",
                backgroundColor: "#F2BF5E",
                justifyContent: "center",
              }}
            >
              <div className="card-body">
                <div
                  style={{
                    marginBottom: "20px",
                    paddingTop: "20px",
                    paddingLeft: "65px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="white"
                    class="bi bi-person-fill-add"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                  </svg>
                </div>
                <Link href={`javascript:;`}>
                  <h5
                    className="card-title text-center"
                    style={{ color: "white", fontWeight: "bolder" }}
                  >
                    Community Mobilization
                  </h5>
                </Link>
              </div>
            </div>
          </div>
          {/* sixth */}
          <div class="col-sm-4 mb-3">
            <div
              className="card d-flex align-items-center rgba-black-strong py-5 px-4"
              style={{
                width: "22rem",
                height: "18rem",
                backgroundColor: "#FF6161",
                justifyContent: "center",
              }}
            >
              <div className="card-body">
                <div
                  style={{
                    marginBottom: "20px",
                    paddingTop: "20px",
                    paddingLeft: "105px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="white"
                    class="bi bi-diagram-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                    />
                  </svg>
                </div>
                <Link href={`javascript:;`}>
                  <h5
                    className="card-title text-center"
                    style={{ color: "white", fontWeight: "bolder" }}
                  >
                    Patnership & Networking with Govt.Institutions{" "}
                  </h5>
                </Link>
              </div>
            </div>
          </div>
          {/* seventh */}
          <div class="col-sm-4 mb-3">
            <div
              className="card d-flex align-items-center rgba-black-strong py-5 px-4"
              style={{
                width: "22rem",
                height: "18rem",
                backgroundColor: "#C84869",
                justifyContent: "center",
              }}
            >
              <div className="card-body">
                <div
                  style={{
                    marginBottom: "20px",
                    paddingTop: "20px",
                    paddingLeft: "105px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="white"
                    class="bi bi-person-bounding-box"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  </svg>
                </div>
                <Link href={`javascript:;`}>
                  <h5
                    className="card-title text-center"
                    style={{ color: "white", fontWeight: "bolder" }}
                  >
                    Engagement with Public Officials & Duty Bearers{" "}
                  </h5>
                </Link>
              </div>
            </div>
          </div>
          {/* eight */}
          <div class="col-sm-4 mb-3">
            <div
              className="card d-flex align-items-center rgba-black-strong py-5 px-4"
              style={{
                width: "22rem",
                height: "18rem",
                backgroundColor: "#3A57A6",
                justifyContent: "center",
              }}
            >
              <div className="card-body">
                <div
                  style={{
                    marginBottom: "20px",
                    paddingTop: "10px",
                    paddingLeft: "65px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="white"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                </div>
                <Link href={`javascript:;`}>
                  <h5
                    className="card-title text-center"
                    style={{ color: "white", fontWeight: "bolder" }}
                  >
                    Monitoring & Evalution
                  </h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Whatwedo;
