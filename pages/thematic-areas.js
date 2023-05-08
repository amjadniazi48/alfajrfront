import React from "react";
import { API_URL } from "@/config/index";
import Link from "next/link";
import Layout from "@/components/Layout";
import ReactMarkdown from "react-markdown";
const TheamticArea = ({ data }) => {
  // console.log("data", data.ThematicAreas);
  return (
    <Layout title="Thematic Areas">
      <div class="container content-space-1 p-4 mt-20">
        <div className="block-title-6 text-center">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Thematic Areas</span>
          </h4>
        </div>
        <div className="mt-2">
          <p style={{ textAlign: "justify", marginTop: "20px" }}>
            <ReactMarkdown>
              {data.ThematicAreas.data.attributes.description}
            </ReactMarkdown>
          </p>
        </div>
        <div class="row mt-5 mb-5 g-2" style={{ justifyContent: "left" }}>
          {data.ThematicAreas.data.attributes.categories.data?.map((cat) => {
            let bgColor = cat.attributes.BackgroundColor;
            return (
              <div class="col mb-3 " key={cat.attributes.id}>
                <div
                  className="card  d-flex  rgba-black-strong py-5 px-2 shadow"
                  style={{
                    width: "22rem",
                    height: "18rem",
                    backgroundColor: `${bgColor}`,
                    justifyContent: "center",
                  }}
                >
                  <div className="card-body">
                    <Link
                      className="text-white"
                      href={`thematic-areas/${cat.attributes.slug}`}
                      style={{ textAlign: "justify" }}
                    >
                      <div style={{ marginBottom: "20px", paddingTop: "30px" }}>
                        <i
                          className={cat.attributes.icon}
                          color="white"
                          style={{
                            color: "white",
                            fontSize: "4rem",
                            marginLeft: "7rem",
                          }}
                        />
                        <p
                          style={{
                            textAlign: "center",
                            color: "white",
                            marginTop: "20px",
                          }}
                        >
                          {cat.attributes.title}{" "}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  //fetching thematic-area
  const thematicareares = await fetch(
    `${API_URL}/api/thematic-area?populate=*`
  );
  const ThematicAreas = await thematicareares.json();
  //fetching Publications
  //  console.log("ThematicAreas", ThematicAreas);
  return {
    props: {
      data: {
        ThematicAreas,
      },
    },
  };
}
export default TheamticArea;
