import React, { useState, useEffect } from "react";
import { API_URL } from "@/config/index";
import Link from "next/link";
import ReactPaginate from "react-paginate";
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
        `${API_URL}/api/downloads?populate[downloadfile][fields][0]=name&populate[downloadfile][fields][1]=url&pagination[pageSize]=${limit}&pagination[page]=1&publicationState=live&locale[0]=en`
        // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      console.log("hightlights", data);

      const total = data && data.meta.pagination.total;

      setpageCount(Math.ceil(total / limit));
      // console.log(Math.ceil(total/12));
      setLoading(false);
      setItems(data);
    };

    getHighlights();
  }, [limit]);
  // console.log("items", items);
  const fetchPublications = async (currentPage) => {
    const res = await fetch(
      `${API_URL}/api/downloads?populate[downloadfile][fields][0]=name&populate[downloadfile][fields][1]=url&pagination[pageSize]=${limit}&pagination[page]=${currentPage}&publicationState=live&locale[0]=en`
      // `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };
  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const publicationFromServer = await fetchPublications(currentPage);

    setItems(publicationFromServer);
  };
  return (
    <Layout title="Highlights">
      <div className="wrapper ">
        {/* main content */}
        <main id="content">
          <div className="container">
            <div className="row p-4 mt-20">
              <div className="col-sm-12">
                <div className="block-title-6 text-center">
                  <h4 className="h5 border-primary">
                    <span className="bg-primary text-white">Downloads</span>
                  </h4>
                </div>
                <table className="table table-striped table-bordered">
                  <thead className="table-light">
                    <tr>
                      <td>Title</td>
                      <td>Download</td>
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
                      items.data?.map((highlight) => {
                        return (
                          <tr key={highlight.attributes.id}>
                            <td>{highlight.attributes.title}</td>
                            <td>
                              {" "}
                              <Link
                                href={
                                  highlight.attributes.downloadfile.data
                                    .attributes.url
                                }
                                target="_blank"
                              >
                                <button className="btn btn-danger p-2">
                                  Download File{" "}
                                </button>
                              </Link>
                            </td>
                            <td>
                              <time dateTime="2019-10-21">
                                {moment(highlight.attributes.createdAt).format(
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
                <ReactPaginate
                  previousLabel={"previous"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination justify-content-center"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  breakClassName={"page-item"}
                  breakLinkClassName={"page-link"}
                  activeClassName={"active"}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default HighLights;
