import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";
import ReactPaginate from "react-paginate";
const Videos = () => {
  const [items, setItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  let limit = 12;
  useEffect(() => {
    const getVideos = async () => {
      const res = await fetch(
        `${API_URL}/api/videos?&sort=rank&pagination[page]=1&pagination[pageSize]=${limit}`
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
      `${API_URL}/api/videos?&sort=rank&pagination[page]=${currentPage}&pagination[pageSize]=${limit}`
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
    <Layout title="Videos">
      <div className="wrapper ">
        {/* main content */}
        <main id="content">
          <div className="container">
            <div className="row p-4 mt-20">
              <div className="col-sm-12">
                <div className="block-title-6 text-center">
                  <h4 className="h5 border-primary">
                    <span className="bg-primary text-white">SSDO Videos</span>
                  </h4>
                </div>
                <div className="row " style={{ background: "#E5E5CC" }}>
                  {items &&
                    items.data?.map((video) => {
                      return (
                        <div
                          style={{ height: "18rem" }}
                          key={video.id}
                          className="player-wrapper col-md-4 "
                        >
                          <ReactPlayer
                            className="react-player"
                            width="100%"
                            height="100%"
                            controls={true}
                            url={video.attributes.url}
                          />
                        </div>
                      );
                    })}
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

export default Videos;
