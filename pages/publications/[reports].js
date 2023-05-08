import { PhotoAlbum, RenderPhoto } from "react-photo-album";
import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import ReactPaginate from "react-paginate";
import { API_URL } from "@/config/index";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/Layout";
function Reports() {
  const router = useRouter();
  const { reports } = router.query;
  let reportName = "";
  if (reports == "research-reports") {
    reportName = "Research Reports";
  } else if (reports == "event-reports") {
    reportName = "Event Reports";
  } else if (reports == "progress-reports") {
    reportName = "Progress Reports";
  } else if (reports == "monthly-vawc-reports") {
    reportName = "Violence Reports against Women and Children";
  } else {
    reportName = "Newsletters";
  }
  //console.log("reports", reports);
  let limit = 10;
  const [items, setItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);

  const [index, setIndex] = useState(-1);
  useEffect(() => {
    if (!reports) {
      return;
    }
    const getPublications = async () => {
      const res = await fetch(
        `${API_URL}/api/publications?filters[navType][$eq]=${reports}&populate=*&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=${limit}`
        // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      console.log("pub", data);
      const total = data.meta.pagination.total;
      setpageCount(Math.ceil(total / limit));
      let mydata = new Array();
      data.data?.map((clip) => {
        mydata.push({
          file: clip.attributes.File.data.attributes.url,
          src: clip.attributes.cover.data.attributes.url,
          width: clip.attributes.cover.data.attributes.width,
          height: clip.attributes.cover.data.attributes.height,
          images: [
            {
              src: clip.attributes.cover.data.attributes.formats.thumbnail.url,
            },
          ],
        });
      });
      setItems(mydata);
    };

    getPublications();
  }, [reports, router.isReady]);
  //console.log("items", items);
  const renderPhoto = ({
    layout,
    layoutOptions,
    imageProps: { alt, style, ...restImageProps },
    photo: { file, tags },
  }) => (
    <div
      className="card shadow-sm"
      style={{
        border: "2px solid #eee",
        borderRadius: "4px",
        boxSizing: "content-box",
        alignItems: "center",
        width: style?.width,
        padding: `${layoutOptions.padding - 2}px`,
        paddingBottom: 0,
      }}
    >
      <div class="card-body">
        <img
          alt={alt}
          style={{ ...style, width: "100%", padding: 0 }}
          {...restImageProps}
        />
        <h5 className="card-title text-center mt-2">
          {file && (
            <Link href={file} target="_blank">
              <span className="badge  bg-danger text-light">Download</span>
            </Link>
          )}
        </h5>
      </div>
    </div>
  );

  const fetchPublications = async (currentPage) => {
    const res = await fetch(
      `${API_URL}/api/publications?filters[navType][$eq]=${reports}&populate=*&sort=createdAt:desc&pagination[page]=${currentPage}&pagination[pageSize]=${limit}`
    );
    const data = await res.json();
    let mydata = new Array();
    data.data?.map((clip) => {
      mydata.push({
        file: clip.attributes.File.data.attributes.url,
        src: clip.attributes.cover.data.attributes.url,
        width: clip.attributes.cover.data.attributes.width,
        height: clip.attributes.cover.data.attributes.height,
        images: [
          {
            src: clip.attributes.cover.data.attributes.formats.thumbnail.url,
          },
        ],
      });
    });
    return mydata;
  };
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const commentsFormServer = await fetchPublications(currentPage);
    setItems(commentsFormServer);
  };

  return (
    <Layout title={reportName}>
      <div className="wrapper ">
        {/* main content */}
        <main id="content">
          <div className="container">
            <div className="row p-4 mt-20">
              <div className="col-sm-12">
                <div className="block-title-6 text-center">
                  <h4 className="h5 border-primary">
                    <span className="bg-primary text-white">{reportName}</span>
                  </h4>
                </div>
                <div sx={{ width: `90%`, mx: "auto" }}>
                  <PhotoAlbum
                    layout="rows"
                    containerWidth={865}
                    photos={items}
                    spacing={20}
                    padding={20}
                    targetRowHeight={200}
                    renderPhoto={renderPhoto}
                    onClick={({ photo: { File }, index }) => setIndex(index)}
                  />
                </div>
                <Lightbox
                  slides={items}
                  open={index >= 0}
                  index={index}
                  close={() => setIndex(-1)}
                  // enable optional lightbox plugins
                  plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />
                <ReactPaginate
                  previousLabel={"previous"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination justify-content-center mt-5"}
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
}
export default Reports;
