import React, { useState } from "react";

import Link from "next/link";
import ReactPlayer from "react-player";
import Carousel from "react-multi-carousel";
const AlbumsSlider = ({ Galleries }) => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };
  const [showGallery, setshowGallery] = useState({});

  return (
    <div className="col-12 mb-4 ">
      <div className="block-area p-4 border bg-light-black">
        <div className="block-title-6">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Videos</span>
          </h4>
        </div>
        <Carousel
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {Galleries.data.map((gallery) => {
            return (
              <div
                key={gallery.id}
                className="card"
                style={{ height: "18rem" }}
              >
                <ReactPlayer
                  className="react-player"
                  width="100%"
                  height="100%"
                  controls={true}
                  url={gallery.attributes.url}
                />
              </div>
            );
          })}
        </Carousel>
        <p
        style={{
          textAlign: "right",
          color: "blue",
          cursor: "pointer",
          paddingTop:"20px"
        }}
      >
        <Link href="/albums">view more</Link>
      </p>
      </div>
   
    </div>
  );
};

export default AlbumsSlider;
