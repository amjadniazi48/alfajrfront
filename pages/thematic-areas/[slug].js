import React, { useState } from "react";
import { API_URL } from "@/config/index";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

import Layout from "@/components/Layout";

const ThematicArea = ({ data }) => {
  //console.log(data.thematicArea);
  //return false;

  return (
    <Layout title="Thematic areas">
      <div className="wrapper ">
        {/* main content */}
        <main id="content">
          <div className="container">
            <div className="d-flex flex-row mt-3 p-3  mb-3">
              <div className=" h-auto col-md-12">
                <div className="block-title-6 text-center">
                  <h4 className="h5 border-primary ">
                    <span className="bg-primary text-white">
                      Theamtic Area details
                    </span>
                  </h4>
                </div>

                <div className="card unset-img">
                  {data.thematicArea.data[0]?.attributes.image?.data?.length >
                  0 ? (
                    <Image
                      fill={true}
                      src={
                        data.thematicArea.data[0]?.attributes.image?.data[0]
                          .attributes?.url
                      }
                      className="custom-img"
                      alt="Image description"
                    />
                  ) : (
                    ""
                  )}
                  <div className="card border-0  p-3">
                    <h3 className="card-title">
                      {data.thematicArea.data[0].attributes.title}
                    </h3>
                    <div className="card-body">
                      <p>
                        <ReactMarkdown>
                          {data.thematicArea.data[0].attributes.description}
                        </ReactMarkdown>
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
    `${API_URL}/api/categories?filters[slug][$eq]=${slug}&populate[image]=*`
  );
  const thematicArea = await res.json();
  //fetching profiles
  //console.log("Profiles", Profiles);
  return {
    props: {
      data: {
        thematicArea,
      },
    },
  };
}
export default ThematicArea;
