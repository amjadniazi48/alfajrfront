import React from "react";
import { API_URL } from "@/config/index";
import Image from "next/image";
import Layout from "@/components/Layout";

import ReactMarkdown from "react-markdown";
const AboutUs = ({ data }) => {
  // console.log("about", data);
  //return false;
  return (
    <Layout title="About Us">
      <div className="container p-4 mt-20">
      <div className="block-title-6 text-center">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Introduction</span>
          </h4>
        </div>
        <div className="row">
          <div className="col rounded intro"  style={{ background: "#F8F9FA", padding: "15px", textAlign:"justify" }}>
            <figure class="figure w-50 float-end m-3">
              <Image
                className="pull-left"
                src={
                  data.About.data.attributes.image?.data
                    ? data.About.data.attributes.image?.data.attributes.url
                    : ""
                }
                width={400}
                height={280}
                style={{
                  marginLeft: "7px",
                  marginBottom: "20px",
                }}
                alt="About us Images"
              />
            </figure>
            <ReactMarkdown>
              {data.About.data.attributes.description}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export async function getServerSideProps({ params }) {
  //fetching about us page
  const aboutusres = await fetch(`${API_URL}/api/about-us?populate=deep`);
  const About = await aboutusres.json();
  //fetching Publications
  // console.log("job", About);
  return {
    props: {
      data: {
        About,
      },
      //  revalidate: 10, // In secondss
    },
  };
}
export default AboutUs;
