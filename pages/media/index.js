import React from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
function Media() {
  return (
    <Layout title="Media">
      <div className="container mt-4">
        <div class="row mt-5 mb-5" style={{ justifyContent: "center" }}>
          <div class="col-sm-3 mb-3 mb-sm-0 ">
            <div
              className="card"
              style={{
                width: "18rem",
                height: "18rem",
                backgroundColor: "#C84869",
                justifyContent: "center",
              }}
            >
              <div className="card-body">
                <Link href={`media/videos`}>
                  <h5
                    className="card-title text-center"
                    style={{ color: "white", fontWeight: "bolder" }}
                  >
                    Videos <span>&#8594;</span>
                  </h5>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div
              className="card"
              style={{
                width: "18rem",
                height: "18rem",
                backgroundColor: "#C84869",
                justifyContent: "center",
              }}
            >
              <div className="card-body">
                <Link href={`media/media-clippings`}>
                  <h5
                    className="card-title text-center"
                    style={{ color: "white", fontWeight: "bolder" }}
                  >
                    Media Clippings <span>&#8594;</span>
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

export default Media;
