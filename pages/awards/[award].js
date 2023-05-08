import React from "react";
import Link from "next/link";
import { API_URL } from "./../../config/index";
import ReactMarkdown from "react-markdown";
import Button from "react-bootstrap/Button";
const Award = ({ data }) => {
  console.log(data.Awards);
  return (
    <div class="container   p-4 mt-20">
      <div className="block-title-6">
        <h4 className="h5 border-primary">
          <span className="bg-primary text-white">Awards</span>
        </h4>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center ">
        {/* <div clasName="d-flex justify-content-center" style={{width : "430px"}}> */}
        <div
          style={{
            width: "393px",
            textAlign: "center",
            fontSize: "29px",
            fontWeight: "bold",
          }}
        >
          {data.Awards.data.attributes.title}
        </div>
        <div
          style={{
            marginTop: "30px",
            color: "black",
          }}
        >
          <ReactMarkdown>
            {data.Awards.data.attributes.upperContent}
          </ReactMarkdown>
        </div>
        <div>
          <Button variant="primary ">
            <Link
              href={data.Awards.data.attributes.link}
              style={{ color: "white" }}
              target="_blank"
            >
              Register Here
            </Link>
          </Button>
        </div>
        <div style={{ marginTop: "20px" }}>
          <img
            src={
              API_URL + data.Awards.data.attributes.image.data.attributes.url
            }
            alt=""
          />
        </div>
        <div
          style={{
            marginTop: "30px",
            color: "black",
          }}
        >
          <ReactMarkdown>
            {data.Awards.data.attributes.lowerContent}
          </ReactMarkdown>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
export async function getServerSideProps({ params }) {
  const { award } = params;
  console.log("param", award);

  const awardsres = await fetch(`${API_URL}/api/${award}?populate=*`);
  const Awards = await awardsres.json();
  //fetching Publications
  console.log("Awards", Awards);
  return {
    props: {
      data: {
        Awards,
      },
    },
  };
}

export default Award;
