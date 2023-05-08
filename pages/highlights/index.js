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
        `${API_URL}/api/posts?populate=*&sort=createdAt:asc&pagination[page]=1&pagination[pageSize]=${limit}`
        // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      console.log("hightlights", data);
      const total = data.meta.pagination.total;
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
      `${API_URL}/api/posts?populate=*&sort=createdAt:desc&pagination[page]=${currentPage}&pagination[pageSize]=${limit}`
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
                    <span className="bg-primary text-white">Highligths</span>
                  </h4>
                </div>
                <div className="border-bottom-last-0 first-pt-0">
                  {loading ? (
                    <div className="loader-container border-bottom">
                      <article className="card card-full hover-a py-5">
                        <div className="row">
                          <div className="col-sm-3">
                            <Skeleton count={10} height={200} />
                          </div>
                          <div className="col-sm-9 ">
                            <Skeleton count={10} height={200} />
                          </div>
                          <hr></hr>
                        </div>
                      </article>
                    </div>
                  ) : (
                    items &&
                    items.data?.map((highlight) => {
                      return (
                        <article
                          className="card card-full hover-a py-5"
                          key={highlight.attributes.id}
                        >
                          <div className="row">
                            <div className="col-sm-3">
                              <div>
                                <Image
                                  width={
                                    highlight.attributes.image.data[0]
                                      .attributes?.formats.thumbnail.width
                                  }
                                  height={
                                    highlight.attributes.image.data[0]
                                      .attributes?.formats.thumbnail.height
                                  }
                                  src={
                                    highlight.attributes.image.data[0]
                                      .attributes.url
                                  }
                                  alt="Image description"
                                />
                              </div>
                            </div>
                            <div className="col-sm-9 mt-3">
                              <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                                <Link
                                  href={`highlights/${highlight.attributes.slug}`}
                                >
                                  <h3 className="card-title h2 h3-sm h2-md">
                                    {highlight.attributes.title}
                                  </h3>
                                </Link>
                                <div className="card-text mb-2 text-muted small">
                                  {/* <span className="d-none d-sm-inline me-1">
                              <a className="fw-bold" href="#">
                                John Doe
                              </a>
                            </span> */}
                                  <time dateTime="2019-10-21">
                                    {moment(
                                      highlight.attributes.createdAt
                                    ).format("Do MMMM YYYY")}
                                  </time>
                                </div>
                                <p className="card-text">
                                  {highlight.attributes.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                      );
                    })
                  )}
                </div>
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
