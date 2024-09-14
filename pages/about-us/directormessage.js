import React from "react";
import { API_URL } from "@/config/index";
import Image from "next/image";
import Layout from "@/components/Layout";
import ReactMarkdown from "react-markdown";

const AboutUs = ({ data }) => {
  return (
    <Layout title="About Us">
      <div className="container p-4 mt-20">
        <div className="block-title-6 text-center">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Director Message</span>
          </h4>
        </div>
        <div className="row">
          <div
            className="col-12 rounded cmessage"
            style={{
              backgroundColor: "#F7F7F5",
              border: "1px solid #C2CBCD",
              textAlign: "justify",
            }}
          >
            <div className="row">
              <div className="col-lg-4 col-md-5 col-sm-12 mt-3">
                {data.About && data.About.data.attributes.Messages[0].image.data ? (
                  <figure className="figure w-100">
                    <Image
                      src={
                        data.About.data.attributes.Messages[0].image?.data[0]?.attributes.url || ""
                      }
                      width={325}
                      height={280}
                      layout="responsive" // Responsive image layout
                      alt="Director Message Image"
                    />
                  </figure>
                ) : (
                  <figure
                    className="figure w-100"
                    style={{
                      width: "325px",
                      height: "280px",
                      backgroundColor: "#e0e0e0",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      color: "#757575",
                    }}
                  >
                    <p>No Image Available</p>
                  </figure>
                )}
              </div>
              <div className="col-lg-8 col-md-7 col-sm-12">
                <ReactMarkdown>
                  {data.About.data.attributes.Messages[0].description}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const aboutusres = await fetch(
    `${API_URL}/api/message?populate[Messages][populate][0]=image&populate[Messages][filters][title][$eq]=Director Message&publicationState=live&locale[0]=en`
  );
  const About = await aboutusres.json();
  return {
    props: {
      data: {
        About,
      },
    },
  };
}

export default AboutUs;
