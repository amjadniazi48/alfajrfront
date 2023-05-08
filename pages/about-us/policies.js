import React from "react";
import { API_URL } from "@/config/index";
import Card from "react-bootstrap/Card";
import Layout from "@/components/Layout";
const Policies = ({ data }) => {
  // console.log("policy", data);
  return (
    <Layout title="SSDO Policies">
      <div className="container p-4 mt-20">
        <div className="block-title-6 text-center">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Policies</span>
          </h4>
        </div>
        <div>
          <section className="d-flex flex-wrap">
            {data.Policies.data.map((policy) => {
              return (
                <Card
                  style={{ width: "30rem", margin: "20px" }}
                  key={policy.attributes.id}
                >
                  <Card.Body>
                    <Card.Title>{policy.attributes.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {policy.attributes.description}
                    </Card.Subtitle>

                    <Card.Link
                      href={policy.attributes.file?.data.attributes.url}
                      target="_blank"
                    >
                      View
                    </Card.Link>
                  </Card.Body>
                </Card>
              );
            })}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const policiesres = await fetch(`${API_URL}/api/policies?populate=*`);
  const Policies = await policiesres.json();
  //fetching Publications
  console.log("job", Policies);
  return {
    props: {
      data: {
        Policies,
      },
    },
  };
}
export default Policies;
