import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import Carousel from "react-multi-carousel";
import Image from 'next/image'
import { API_URL } from "./../config/index";
import Link from "next/link";
const AlbumModal = (props) => {
  console.log("props of album", props);
  if (props && props.data && props.data.attributes) {
    console.log("title", props.data.attributes.title);
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Modal
      {...props}
       style={{ position: "absolute", borderRadius: "0px 10px 0px 0px" }}
     className=  "modal-lg "
    >
      <Modal.Header closeButton>
        {props && props.data && props.data.attributes && (
          <Modal.Title id="contained-modal-title-vcenter">
            {props.data.attributes.title}
          </Modal.Title>
        )}
      </Modal.Header>
      <Modal.Body>
        <Carousel
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={10000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"      
        >
          {props.data.attributes &&
            props.data.attributes.image.data.map((image) => {
              return (
                <Link href={ image.attributes.url} key={image.attributes.id}>
               
                <Image
                   src={image.attributes.url} 
                   width={750} 
                   height={550} 
                    alt="Image" 
                    style={{     
                      objectFit: "cover",
                    
                    
                    }}    
                />        
                </Link>
              );
            })}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default AlbumModal;
