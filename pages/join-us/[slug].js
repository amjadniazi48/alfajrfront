import React from "react";
import { API_URL } from "@/config/index";
import ReactMarkdown from "react-markdown";
import Layout from "@/components/Layout";
const Job = ({ data }) => {
  //console.log("job", data);
  return (
    <Layout title="Join Us">
    <div className="container p-4 mt-20">
      <div className="block-title-6 text-center">
        <h4 className="h5 border-primary">
          <span className="bg-primary text-white">Vacancy</span>
        </h4>
      </div>
      <div>
        <section>
          <div>
            <h1>{data.Job.data[0].attributes.title}</h1>
            <h3>Job Status : {data.Job.data[0].attributes.status}</h3>
          </div>
          <div style={{ background: "#d6d6d6", padding: "10px" }}>
            <ReactMarkdown>
              {data.Job.data[0].attributes.description}
            </ReactMarkdown>
          </div>
        </section>
      </div>
    </div>
    </Layout>
  );
};
export async function getServerSideProps({ query: { slug } }) {


  const jobres = await fetch(`${API_URL}/api/jobs?filters[slug][$eq]=${slug}`);
  const Job = await jobres.json();
  //fetching Publications
  console.log("job", Job);
  return {
    props: {
      data: {
        Job,
      },
    },
  };
}
export default Job;
