import React from "react";
import { API_URL } from "@/config/index";
import Image from "next/image";
import Layout from "@/components/Layout";

import ReactMarkdown from "react-markdown";
const VisionM = ({ data }) => {
  // console.log("about", data);
  //return false;
  return (
    <Layout title="About Us">
      <div class="container p-4 mt-20">
        <div className="block-title-6 text-center">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Vision & Mission</span>
          </h4>
        </div>
        <div className=" w-100 d-flex flex-column">
        <div
          className="d-flex flex-column shadow-sm p-3 mb-5 bg-body-tertiary rounded"
          style={{ background: "#dfdef69c", padding: "15px" }}
        >
              <ReactMarkdown>
                {data.VisionM.data.attributes.description}
              </ReactMarkdown>
          
          </div>
      
        </div>
 
      </div>
    </Layout>
  );
};
export async function getServerSideProps({ params }) {
  //fetching about us page
  const aboutusres = await fetch(`${API_URL}/api/vision-and-misson`);
  const VisionM = await aboutusres.json();
  //fetching Publications
 // console.log("job", About);
  return {
    props: {
      data: {
        VisionM,
      },
      //  revalidate: 10, // In secondss
    },
  };
}
export default VisionM;
