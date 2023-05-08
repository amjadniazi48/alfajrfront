import React, { useState } from "react";
import { API_URL } from "@/config/index";
import TeamModel from "../../components/TeamModal";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const Profile = ({ data }) => {
  const router = useRouter();
  if (router.query.path == "team") {
    var heading = "Our Team";
  } else if (router.query.path == "directors") {
    var heading = "Board of Directors";
  } else {
    var heading = "Advisory Board";
  }
  const [showProfile, setshowProfile] = useState({});
  console.log(showProfile);
  const [modalShow, setmodalShow] = useState(false);

  return (
    <Layout title={heading}>
      <div
        className="container content-space-1 p-4 mt-20"
        style={{ overflowX: "hidden" }}
      >
        <div className="block-title-6 text-center ">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white fw-bolder">{heading}</span>
          </h4>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 myteam">
          {data.Profiles.data.map((profile) => {
            return (
              <div
                className="col mb-10 mt-10"
                style={{ marginTop: "30px", cursor: "pointer" }}
                onClick={() => {
                  setshowProfile(profile);
                  setmodalShow(true);
                }}
                key={profile.attributes.id}
              >
                <div
                  className="card p-3  box-shadow mb-5 bg-white rounded"
                  style={{ width: "16rem" }}
                >
                  <Image
                    width={225}
                    height={225}
                    src={
                      profile.attributes.Profile.image.data[0].attributes.url
                    }
                    alt="Image Description"
                  />
                  <div className="card-body">
                    <h5 className="mb-1 text-center fw-bold">
                      {profile.attributes.title}
                    </h5>
                    <span
                      className="d-block text-center"
                      style={{ color: "grey" }}
                    >
                      {profile.attributes.Profile.title}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <TeamModel
          show={modalShow}
          onHide={() => setmodalShow(false)}
          data={showProfile}
        />
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const { path } = params;

  //fetching profiles
  const profileres = await fetch(
    `${API_URL}/api/profiles?filters[navType][$eq]=${path}&populate[Profile][populate]=image&sort=rank:asc`
  );
  const Profiles = await profileres.json();
  //fetching profiles
  //console.log("Profiles", Profiles);
  return {
    props: {
      data: {
        Profiles,
      },
    },
  };
}
export default Profile;
