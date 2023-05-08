import React from "react";
import { API_URL } from "@/config/index";
import Link from "next/link";
import Layout from "@/components/Layout";
const Registration = ({ data }) => {
  // console.log("Registration data",data)
  // return false;
  return (
    <Layout title="Registration details">
      <div class="container content-space-1 vh-100 p-4 mt-20">
        <div className="block-title-6 text-center">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white ">Registration Details</span>
          </h4>
        </div>

        {/* <div class=" d-flex flex-col gap-4 w-100% flex-wrap justify-space-between"> */}
        <div className="d-flex flex-col justify-content-around flex-wrap text-white mt-5">
          {data.Reg.data.map((reg) => {
            console.log("reg", reg);
            return (
              <div
                className="card card-lg text-center mb-2  shadow"
                style={{
                  width: "395px",
                  height: "265px",
                  background: "rgb(15 80 138)",
                  color: "white",
                }}
                key={reg.id}
              >
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi-person-circle fs-1 text-dark"></i>
                  </div>

                  <div className="mb-5 text-white">
                    <h4 className="text-white">Registration Document</h4>
                  </div>

                  <div className="mb-5">
                    <span className="d-block">{reg.attributes.title}</span>
                  </div>

                  <div className="d-grid mb-3 text-white">
                    <Link
                      className="btn btn-white text-white"
                      // href="mailto:support@site.com"
                      href={reg.attributes.file?.data[0].attributes.url}
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                      target="_blank"
                    >
                      <i className="bi-envelope-open me-2"></i>View Document
                    </Link>
                  </div>

                  {/* <a class="btn btn-ghost-dark btn-sm" href="#">
                    <i class="bi-telephone me-2"></i> (062) 8324923
                  </a> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  //fetching registraion-details
  const regres = await fetch(`${API_URL}/api/registrations?populate=*`);
  const Reg = await regres.json();
  //fetching Publications
  console.log("Reg", Reg);
  return {
    props: {
      data: {
        Reg,
      },
      revalidate: 10, // In seconds
    },
  };
}
export default Registration;
