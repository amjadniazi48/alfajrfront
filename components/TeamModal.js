import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import Carousel from "react-multi-carousel";
import { API_URL } from "@/config/index";
import ReactMarkdown from "react-markdown";
const TeamModal = (props) => {
  console.log(props);
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
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props?.data?.attributes?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="text-primary">
          {props?.data?.attributes?.Profile.title}
        </h4>
        <p>
          <ReactMarkdown>
            {props?.data?.attributes?.Profile.description}
          </ReactMarkdown>
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default TeamModal;
