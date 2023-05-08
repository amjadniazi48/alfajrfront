import { PhotoAlbum, RenderPhoto } from "react-photo-album";
import React, { useState, useCallback } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import ReactPaginate from "react-paginate";
import { API_URL } from "@/config/index";
import Link from "next/link";
import Layout from "@/components/Layout";
function Photosalbum(props) {
  let limit = 10;
  const [items, setItems] = useState(props.mydata);
  let pageCount = Math.ceil(props.total / limit);
  const [index, setIndex] = useState(-1);
  //rendering the container
  const renderContainer = ({ containerProps, children, containerRef }) => (
    <div
      className="shadow-sm"
      style={{
        border: "2px solid #eee",
        borderRadius: "10px",
        padding: "20px",
        background: "beige",
      }}
    >
      <div ref={containerRef} {...containerProps}>
        {children}
      </div>
    </div>
  );
  //rendering the photo
  const renderPhoto = ({
    layout,
    layoutOptions,
    imageProps: { alt, style, ...restImageProps },
    photo: { file, tags },
  }) => (
    <div
      className="shadow-sm"
      style={{
        border: "2px solid #eee",
        borderRadius: "4px",
        boxSizing: "content-box",
        alignItems: "center",
        width: style?.width,
        padding: `${layoutOptions.padding - 2}px`,
        paddingBottom: 0,
        backgroundColor: "white",
      }}
    >
      <img
        alt={alt}
        style={{ ...style, width: "100%", padding: 0 }}
        {...restImageProps}
      />
      <div
        style={{
          paddingTop: "8px",
          paddingBottom: "8px",
          overflow: "visible",
          textAlign: "left",
          fontSize: "13px",
          overflowWrap: "break-word",
          fontWeight: "bolder",
          color: "#545E63",
          // inlineSize: "350px"
        }}
      >
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

  const fetchPhotos = async (currentPage) => {
    const res = await fetch(
      `${API_URL}/api/research-reports?populate=*&populate[0]=Report&populate[1]=Report.cover&populate[2]=Report.file&sort=rank:asc&pagination[page]=${currentPage}&pagination[pageSize]=${limit}`
    );
    const data = await res.json();
    let mydata = new Array();
    data.data?.map((clip) => {
      mydata.push({
        file: clip.attributes.Report.file.data?.attributes.url,
        src: clip.attributes.Report.cover.data?.attributes.url,
        width: clip.attributes.Report.cover.data?.attributes.width,
        height: clip.attributes.Report.cover.data?.attributes.height,
        images: [
          {
            src: clip.attributes.Report.cover.data?.attributes.formats.small
              .url,
          },
          {
            src: clip.attributes.Report.cover.data?.attributes.formats.thumbnail
              .url,
          },
        ],
      });
    });
    return mydata;
  };
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const commentsFormServer = await fetchPhotos(currentPage);
    setItems(commentsFormServer);
  };

  return (
    <Layout title="Media Clippings">
      <div className="wrapper ">
        {/* main content */}
        <main id="content">
          <div className="container">
            <div className="row p-4 mt-20">
              <div className="col-sm-12">
                <div className="block-title-6 text-center">
                  <h4 className="h5 border-primary">
                    <span className="bg-primary text-white">
                      Research Reports
                    </span>
                  </h4>
                </div>
                <PhotoAlbum
                  layout="rows"
                  photos={items}
                  containerWidth={900}
                  spacing={20}
                  padding={20}
                  targetRowHeight={230}
                  renderContainer={renderContainer}
                  renderPhoto={renderPhoto}
                  onClick={({ photo: { File }, index }) => setIndex(index)}
                />
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
}
export default Photosalbum;
export async function getStaticProps() {
  const res = await fetch(
    `${API_URL}/api/research-reports?populate=*&populate[0]=Report&populate[1]=Report.cover&populate[2]=Report.file&sort=rank:asc&pagination[page]=1&pagination[pageSize]=10`
  );

  const photos = await res.json();
  const total = photos.meta.pagination.total;
  let mydata = new Array();
  photos.data?.map((clip) => {
    mydata.push({
      file: clip.attributes.Report.file.data?.attributes.url,
      src: clip.attributes.Report.cover.data?.attributes.url,
      width: clip.attributes.Report.cover.data?.attributes.width,
      height: clip.attributes.Report.cover.data?.attributes.height,
      images: [
        {
          src: clip.attributes.Report.cover.data?.attributes.formats.thumbnail
            .url,
        },
        {
          src: clip.attributes.Report.cover.data?.attributes.formats.thumbnail
            .url,
        },
      ],
    });
  });
  return {
    props: {
      mydata,
      total,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
