import Layout from "@/components/Layout";
import React, { useState } from "react";
import { API_URL } from "@/config/index";
import TeamModel from "../../components/TeamModal";
import Image from "next/image";
function Team({ data }) {
  console.log(data);
  const [showProfile, setshowProfile] = useState({});
  console.log(showProfile);
  const [modalShow, setmodalShow] = useState(false);

  return (
    <Layout title="Team">
      <div className="wrapper ">
        <main id="content mt-2">
          <div className="container ">
            <div className="row p-4 mt-20">
              <div className="col-sm-12">
                <div className="block-title-6 text-center">
                  <h4 className="h5 border-primary">
                    <span className="bg-primary text-white">Meet Our Team</span>
                  </h4>
                </div>
                <div
                  className="row text-center mt-3 myteam shadow-sm"
                  style={{ padding: "18px", borderRadius: "10px" }}
                >
                  {data.Profiles.data.map((profile) => {
                    //  console.log("Hello",profile.attributes.Profile.sociallinks[0]?.href)
                    return (
                      <div
                        style={{ cursor: "pointer" }}
                        key={profile.attributes.id}
                        className="col-md-3 col-sm-6 col-xs-12 wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay="0.1s"
                        data-wow-offset="0"
                        onClick={() => {
                          setshowProfile(profile);
                          setmodalShow(true);
                        }}
                      >
                        <div className="our-team">
                          <div className="team_img">
                            <Image
                              width={225}
                              height={225}
                              src={
                                profile.attributes.Profile.image.data
                                  ?.attributes.url
                              }
                              alt="Image Description"
                            />
                            <ul className="social">
                              <li>
                                <a
                                  href={
                                    profile.attributes.Profile.sociallinks[0]
                                      ?.href
                                  }
                                >
                                  <i className="bi bi-linkedin"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="team-content">
                            <h3 className="title">
                              {profile.attributes.title}
                            </h3>
                            <span
                              className="post"
                              style={{ fontSize: "12px", color: "#626262" }}
                            >
                              {profile.attributes.Profile.position}
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
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
export default Team;
export async function getServerSideProps() {
  //fetching profiles
  const profileres = await fetch(
    `${API_URL}/api/teams?populate=*&populate[0]=Profile&populate[1]=Profile.image&populate[2]=Profile.sociallinks.iconClass&sort=rank:asc`
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
