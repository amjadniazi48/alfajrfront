import React, { useState, useEffect } from "react";
import Link from "next/link";
import moment from "moment";
import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";
import ReactPaginate from "react-paginate";
import ReactMarkdown from "react-markdown";
const Notifications = () => {
  const [items, setItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  let limit = 10;
  useEffect(() => {
    const getVideos = async () => {
      const res = await fetch(
        `${API_URL}/api/notifications?sort=rank:desc&pagination[pageSize]=${limit}`
        // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      console.log("videos", data);
      const total = data.meta.pagination.total;
      setpageCount(Math.ceil(total / limit));
      // console.log(Math.ceil(total/12));
      setItems(data);
    };

    getVideos();
  }, [limit]);
  // console.log("items", items);
  const fetchVideos = async (currentPage) => {
    const res = await fetch(
      `${API_URL}/api/notifications?sort=rank:desc&pagination[page]=${currentPage}&pagination[pageSize]=${limit}`
      // `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };
  const handlePageClick = async (data) => {
    //console.log(data.selected);

    let currentPage = data.selected + 1;

    const publicationFromServer = await fetchVideos(currentPage);

    setItems(publicationFromServer);
  };
  return (
    <Layout title="Notifications">
      <div className="wrapper ">
        {/* main content */}
        <main id="content">
          <div className="container">
            <div className="row p-4 mt-20">
              <div className="col-sm-12">
                <div className="block-title-6 text-center">
                  <h4 className="h5 border-primary">
                    <span className="bg-primary text-white">Notifications</span>
                  </h4>
                </div>
                <div className="">
                  {items &&
                    items.data?.map((post) => (
                      <div
                        className="card border-0 border-bottom p-2"
                        key={post.id}
                      >
                        <div className="card-body">
                          <Link href={`${post.attributes.slug}`}>
                            <h4 className="card-title" key={post.id}>
                              {post.attributes.title}
                            </h4>

                            <p>
                              {" "}
                              <small>
                                {" "}
                                <time dateTime="2019-10-21">
                                  {moment(post.attributes.createdAt).format(
                                    "Do MMMM YYYY"
                                  )}
                                </time>
                              </small>
                            </p>
                            <p
                              className="card-text mt-3"
                              style={{ textAlign: "justify" }}
                            >
                              <ReactMarkdown>
                                {post.attributes.description &&
                                  post.attributes.description
                                    .substring(0, 300)
                                    .concat("...")}
                              </ReactMarkdown>
                            </p>
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
                <ReactPaginate
                  previousLabel={"previous"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination justify-content-center mt-2"}
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

export default Notifications;
