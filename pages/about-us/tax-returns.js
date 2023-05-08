import React from "react";
import Link from "next/link";
import Image from "next/image";
import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";
const FinancialReports = ({ data }) => {
  console.log("tax returns",data)
 // return false;
  return (
    <Layout title="Financial Reports">
      <div className="wrapper ">
        {/* main content */}
        <main id="content">
          <div className="container ">
            <div className="row p-4 mt-20">
              <div className="col-md-12 h-auto mt-20 ">
                <div className="block-title-6 text-center">
                  <h4 className="h5 border-primary">
                    <span className="bg-primary text-white ">Tax Returns</span>
                  </h4>
                </div>
                <div className="d-flex justify-space-between flex-row flex-wrap gap-3 h-auto mt-5 mb-3">
                  {data &&
                    data.Publications.data?.map((publication) => {
                      return (
                        <Link
                          href={`${publication.attributes.Report.file?.data?.attributes.url} `}
                          target="_blank"
                          key={publication.attributes.id}
                        >
                          <div className="card">
                            <div className="card-body">
                              <Image
                                width={300}
                                height={350}
                                src={
                                  publication.attributes.Report.cover.data.attributes
                                    .url
                                }
                                alt="Report"
                              />
                            </div>
                            <div>
                              <h4 class="card-title text-center ">
                                {publication.attributes.title}
                              </h4>
                              <p class="card-text">
                                {publication.attributes.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  //fetching pubilcations
  const publicationsres = await fetch(
    `${API_URL}/api/tax-returns?populate=*&populate[0]=Report&populate[1]=Report.cover&populate[2]=Report.file&sort=rank:asc`
  );
  const Publications = await publicationsres.json();
  //fetching Publications
  //console.log("Profiles", Profiles);
  return {
    props: {
      data: {
        Publications,
      },
    },
  };
}
export default FinancialReports;
