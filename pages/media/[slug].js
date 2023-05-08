import { API_URL } from "@/config/index";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
//-----------liberaris for the lightbox-----------
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Layout from "@/components/Layout";
//=================
import { PhotoAlbum, renderContainer, RenderPhoto } from "react-photo-album";
import React, { useState, useEffect } from "react";
const Notifications = ({ data }) => {
  //console.log("hightlights", data);
  // return false;
  const [index, setIndex] = useState(-1);
  //====================================
  //getting array for the gallery
  let gallerydata = new Array();
  data.data[0].attributes.image.data.map((clip) => {
    gallerydata.push({
      src: clip.attributes.url,
      width: clip.attributes.width,
      height: clip.attributes.height,
      images: [
        {
          src: clip.attributes.formats.thumbnail.url,
        },
      ],
    });
  });
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
  const renderPhoto = ({
    layout,
    layoutOptions,
    imageProps: { alt, style, ...restImageProps },
    photo: { file, tags },
  }) => (
    <div className="card shadow-sm" style={{ margin: "10px" }}>
      <div class="card-body">
        <img
          alt={alt}
          style={{ ...style, width: "100%", padding: 0 }}
          {...restImageProps}
        />
        <h5 className="card-title text-center mt-2">
          {file && (
            <Link href={file}>
              <span className="badge  bg-danger text-light">Download</span>
            </Link>
          )}
        </h5>
      </div>
    </div>
  );
  //=======================
  return (
    <Layout
      title="Highlights Details"
      image={data.data[0].attributes.image.data[0]?.attributes.url}
      description={data.data[0].attributes.description}
    >
      <div className="wrapper ">
        {/* main content */}
        <main id="content">
          <div className="container">
            <div className="d-flex flex-row mt-3 p-3  mb-3">
              <div className=" h-auto col-md-12">
                <div className="block-title-6 text-center">
                  <h4 className="h5 border-primary ">
                    <span className="bg-primary text-white">
                      HighLights details
                    </span>
                  </h4>
                </div>
                <div className="">
                  {data && (
                    <div className="card border-1  p-3 mb-3 shadow-sm">
                      <h3 className="card-title">
                        {data.data[0].attributes.title}
                      </h3>
                      <div className="card-body">
                        <p>
                          <ReactMarkdown>
                            {data.data[0].attributes.description}
                          </ReactMarkdown>
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <PhotoAlbum
                  layout="rows"
                  photos={gallerydata}
                  containerWidth={900}
                  spacing={20}
                  padding={20}
                  targetRowHeight={170}
                  renderContainer={renderContainer}
                  renderPhoto={renderPhoto}
                  onClick={({ photo: { File }, index }) => setIndex(index)}
                />

                <Lightbox
                  slides={gallerydata}
                  open={index >= 0}
                  index={index}
                  close={() => setIndex(-1)}
                  // enable optional lightbox plugins
                  plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
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

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(
    `${API_URL}/api/notifications?&populate=*&filters[slug][$eq]=${slug}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
