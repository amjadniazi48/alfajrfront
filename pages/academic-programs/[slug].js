import React, { useState } from "react";
import { API_URL } from "@/config/index";
import Image from "next/image";
import parse from "html-react-parser";

import Layout from "@/components/Layout";

const ACademicProgram = ({ data }) => {
  //  console.log("mydata", data.AcademicProgram);
  // return false;

  return (
    <Layout title="Academic Programs">
      <div className="wrapper ">
        {/* main content */}
        <main id="content">
          <div className="container">
            <div className="d-flex flex-row mt-3 p-3  mb-3">
              <div className=" h-auto col-md-12">
                <div className="block-title-6 text-center">
                  <h4 className="h5 border-primary ">
                    <span className="bg-primary text-white">
                      Academic Programs details
                    </span>
                  </h4>
                </div>

                <div className="card unset-img">
                  {data.AcademicProgram.data[0]?.attributes.image?.data
                    ?.length > 0 ? (
                    <Image
                      fill={true}
                      src={
                        data.AcademicProgram.data[0]?.attributes.image?.data[0]
                          .attributes?.url
                      }
                      className="custom-img"
                      alt="Image description"
                    />
                  ) : (
                    ""
                  )}
                  <div className="card border-0  p-3">
                    <h3 className="card-title text-center mt-5">
                      {parse(data.AcademicProgram.data[0].attributes.title)}
                    </h3>
                    <div className="card-body">
                      <p>
                        {parse(
                          data.AcademicProgram.data[0].attributes.description
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  //fetching profiles
  const res = await fetch(
    `${API_URL}/api/academic-programs?populate=*&filters[slug][$eq]=${slug}&sort=rank:asc`
  );
  const AcademicProgram = await res.json();
  //fetching profiles
  //console.log("Profiles", Profiles);
  return {
    props: {
      data: {
        AcademicProgram,
      },
    },
  };
}
export default ACademicProgram;
