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
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
function Photosalbum(props) {
  //console.log("new album data",props.mydata)
  let limit = 10;
  const [items, setItems] = useState(props.mydata);
  let pageCount = Math.ceil(props.total / limit);
  const [open, setOpen] = useState(false);
  const [slidesData, setSlidesData] = useState("");
  //console.log("total data",props.mydata)
  const renderContainer = ({ containerProps, children, containerRef }) => (
    <div
      className="shadow-sm"
      style={{
        border: "2px solid #eee",
        borderRadius: "10px",
        padding: "20px",
        background: "#E5E5CC",
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
    photo: { src, tags, title },
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
        {title.length > 30 ? title.slice(0, 30) + "..." : title}
      </div>
    </div>
  );
  //===================
  const fetchSlidesForLightBox = async (id) => {
    const res = await fetch(
      `${API_URL}/api/posts?filters[id][$eq]=${id}&populate=*&sort=rank:asc`
    );
    const data = await res.json();
    //return false;
    let slidesData = new Array();
    data.data?.map((clip) => {
      clip.attributes.image.data?.map((newClip) => {
        slidesData.push({
          src: newClip.attributes.url,
          width: newClip.attributes.width,
          height: newClip.attributes.height,
          images: [
            {
              src: newClip.attributes.formats.small.url,
            },
            {
              src: newClip.attributes.formats.thumbnail.url,
            },
          ],
        });
      });
    });
    setSlidesData(slidesData);
  };
  //========
  const fetchPhotos = async (currentPage) => {
    const res = await fetch(
      `${API_URL}/api/posts?populate=*&sort=rank:asc&pagination[page]=${currentPage}&pagination[pageSize]=${limit}`
    );
    const data = await res.json();
    let mydata = new Array();
    data.data?.map((clip) => {
      mydata.push({
        title: clip.attributes.title,
        id: clip.id,
        src: clip.attributes.image.data[0].attributes.url,
        width: clip.attributes.image.data[0].attributes.width,
        height: clip.attributes.image.data[0].attributes.height,
        images: [
          {
            src: clip.attributes.image.data[0].attributes.formats.small.url,
          },
          {
            src: clip.attributes.image.data[0].attributes.formats.thumbnail.url,
          },
        ],
      });
    });
    return mydata;
  };
  //this is basically the pagination click
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const commentsFormServer = await fetchPhotos(currentPage);
    setItems(commentsFormServer);
  };
  return (
    <Layout title="Albums">
      <div className="wrapper ">
        {/* main content */}
        <main id="content">
          <div className="container">
            <div className="row p-4 mt-20">
              <div className="col-sm-12">
                <div className="block-title-6 text-center">
                  <h4 className="h5 border-primary">
                    <span className="bg-primary text-white">Albums</span>
                  </h4>
                </div>
                <PhotoAlbum
                  layout="rows"
                  photos={items}
                  containerWidth={900}
                  spacing={20}
                  padding={20}
                  targetRowHeight={200}
                  renderContainer={renderContainer}
                  renderPhoto={renderPhoto}
                  onClick={({ photo: { src, id, title }, index }) => {
                    setOpen(true);
                    fetchSlidesForLightBox(id);
                  }}
                />
                <Lightbox
                  slides={slidesData}
                  close={() => setOpen(false)}
                  open={open}
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
    `${API_URL}/api/posts?populate=*&sort=rank:asc&pagination[page]=1&pagination[pageSize]=10`
  );

  const photos = await res.json();
  const total = photos.meta.pagination.total;
  let mydata = new Array();
  photos.data?.map((clip) => {
    mydata.push({
      title: clip.attributes.title,
      id: clip.id,
      src: clip.attributes.image.data[0].attributes.url,
      width: clip.attributes.image.data[0].attributes.width,
      height: clip.attributes.image.data[0].attributes.height,
      images: [
        { src: clip.attributes.image.data[0].attributes.formats.small.url },
        { src: clip.attributes.image.data[0].attributes.formats.thumbnail.url },
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
