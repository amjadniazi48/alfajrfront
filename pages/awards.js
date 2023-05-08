import React from "react";
import { API_URL } from "@/config/index";
import Card from "react-bootstrap/Card";
import Link from "next/link";
const Awards = ({ data }) => {
  console.log(data);
  return (
    <div className="container p-4 mt-20" style={{ height: "400px" }}>
      <div className="block-title-6">
        <h4 className="h5 border-primary">
          <span className="bg-primary text-white">Awards</span>
        </h4>
      </div>
      <div className="d-flex flex-row">
        {data.Award.data[0].attributes.award.map((award) => {
          return (
            <Link href={award.href} target={award.target} key={award.id}>
              <Card style={{ width: "30rem", margin: "20px" }}>
                <Card.Body>
                  <Card.Title className="text-center">{award.label}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {/* {policy.attributes.description} */}
                  </Card.Subtitle>

                  {/* <Card.Link href={award.href} target="_blank">
                  View
                </Card.Link> */}
                </Card.Body>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export async function getServerSideProps() {
  const awardres = await fetch(`${API_URL}/api/awards?populate=*`);
  const Award = await awardres.json();
  //fetching Publications
  console.log("job", Award);
  return {
    props: {
      data: {
        Award,
      },
    },
  };
}
export default Awards;
