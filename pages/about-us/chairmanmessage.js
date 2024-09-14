import React from "react";
import { API_URL } from "@/config/index";
import Image from "next/image";
import Layout from "@/components/Layout";

import ReactMarkdown from "react-markdown";
const AboutUs = ({ data }) => {
   console.log("about", data);
  //return false;
  return (
    <Layout title="About Us">
      <div className="container p-4 mt-20">
      <div className="block-title-6 text-center" >
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Chairman Message</span>
          </h4>
        </div>
        <div className="row">
          <div className="col rounded cmessage"   style={{ backgroundColor: "#F7F7F5", border: "1px solid #C2CBCD", textAlign:"justify" }}>
            <figure class="figure  w-50 float-start m-2">
              <Image
          
                src={
                  data.About.data.attributes.Messages[0]
                    ? data.About.data.attributes.Messages[0].image.data[0].attributes.url
                    : ""
                }
                width={325}
                height={280}
                style={{
                  marginLeft: "7px",
                  marginBottom: "20px",
                }}
                alt="About us Images"
              />
            </figure>
            <ReactMarkdown>
              {data.About.data.attributes.Messages[0].description}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export async function getServerSideProps({ params }) {
  //fetching about us page
  const aboutusres = await fetch(`${API_URL}/api/message?populate[Messages][populate][0]=image&populate[Messages][filters][title][$eq]=Chairman Message&publicationState=live&locale[0]=en`);
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
