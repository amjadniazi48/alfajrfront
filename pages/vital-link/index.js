import React, { useState, useEffect } from "react";
import { API_URL } from "@/config/index";
import Link from "next/link";

import moment from "moment";
import Image from "next/image";
import Layout from "@/components/Layout";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const HighLights = () => {
  const [items, setItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [loading, setLoading] = useState(false);
  let limit = 10;
  useEffect(() => {
    setLoading(true);
    const getHighlights = async () => {
      const res = await fetch(
        `${API_URL}/api/vital-link?populate[Links][fields][0]=href&populate[Links][fields][1]=label&populate[Links][fields][2]=target&pagination[pageSize]=${limit}&pagination[page]=1&status=published&locale[0]=en`
        // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      console.log("hightlights", data);
     
      setLoading(false);
      setItems(data);
    };

    getHighlights();
  }, [limit]);
 
  return (
    <Layout title="Vital Links">
      <div className="wrapper ">
        {/* main content */}
        <main id="content">
          <div className="container">
            <div className="row p-4 mt-20">
              <div className="col-sm-12">
                <div className="block-title-6 text-center">
                  <h4 className="h5 border-primary">
                    <span className="bg-primary text-white">Vital Links</span>
                  </h4>
                </div>
                <table className="table table-striped table-bordered">
                  <thead className="table-light">
                    <tr>
                      <td>Title</td>
                      <td>Link</td>
                      <td>Dated</td>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td>
                          <Skeleton count={10} height={50} />
                        </td>
                        <td>
                          {" "}
                          <Skeleton count={10} height={50} />
                        </td>
                        <td>
                          {" "}
                          <Skeleton count={10} height={50} />
                        </td>
                      </tr>
                    ) : (
                      items &&
                      items.data?.attributes.Links.map((highlight) => {
                        return (
                          <tr key={highlight.id}>
                            <td>{highlight.label}</td>
                            <td>
                              {" "}
                              <Link
                                href={
                                  highlight.href
                                }
                                target={highlight.target}
                              >
                                <button className="btn btn-danger p-2">
                                 Link &nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
</svg>
                                </button>
                              </Link>
                            </td>
                            <td>
                              <time dateTime="2019-10-21">
                                {moment(highlight.createdAt).format(
                                  "Do MMMM YYYY"
                                )}
                              </time>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default HighLights;
