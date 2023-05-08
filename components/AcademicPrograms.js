import React from "react";
import PublicationModal from "./PublicationModal";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

const AcademicPrograms = ({ Academic_Programs }) => {
  console.log("academic-programs", Academic_Programs);
  // const [modalShow, setmodalShow] = useState(false);

  return (
    <div className="col-12 mb-4  ">
      <div className="block-area p-4 border bg-light-black">
        <div className="block-title-13">
          <h4 className="h5 title-box-dot">
            <span>
              <strong>Academic Programs</strong>
            </span>
          </h4>
          <div className="dot-line"></div>
        </div>
        <div className="row">
          {Academic_Programs &&
            Academic_Programs.data.map((program, index) => {
              return (
                <div
                  className="card-body col m-2"
                  style={{
                    width: "8rem",
                    height: "14rem",
                    backgroundColor: `${program.attributes.BackgroundColor}`,
                    justifyContent: "center",
                    borderRadius: "10px",
                  }}
                >
                  <Link
                    className="text-white"
                    href={`academic-programs/${program.attributes.slug}`}
                    target="_blank"
                    style={{ textAlign: "justify" }}
                  >
                    <div style={{ marginBottom: "20px", paddingTop: "45px" }}>
                      <i
                        className={program.attributes.icon}
                        color="white"
                        style={{
                          color: "white",
                          fontSize: "3rem",
                          marginLeft: "6.6rem",
                          textAlign: "center",
                        }}
                      />
                      <p
                        style={{
                          textAlign: "center",
                          color: "white",
                          marginTop: "30px",
                          fontWeight: "bolder",
                          fontSize: "0.96rem",
                        }}
                      >
                        {program.attributes.title}{" "}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}

          <p
            style={{
              textAlign: "right",
              color: "blue",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            <Link href="/academic-programs">view all</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademicPrograms;
