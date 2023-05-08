import React from "react";
import { API_URL } from "@/config/index";
import Link from "next/link";
const Profile = ({ data }) => {
  return (
    <div className="wrapper ">
      {/* main content */}
      <main id="content">
        <div className="container">
          <div className="container p-4 mt-20">
            <div className="block-title-6">
              <h4 className="h5 border-primary">
                <span className="bg-primary text-white">
                  Organisation Profile
                </span>
              </h4>
            </div>
            <div className="d-flex justify-content-center  gap-8 h-auto mt-5 mb-3">
              <Link
                href={`${
                  API_URL +
                  data.Profile.data.attributes.file?.data?.attributes.url
                } `}
                target="_blank"
              >
                <article
                  style={{
                    width: "430px",
                    height: "auto",
                    cursor: "pointer",
                  }}
                >
                  <div className="mb-2">
                    <img
                      width="100%"
                      height="350px"
                      src={
                        API_URL +
                        data.Profile.data.attributes.cover.data.attributes.url
                      }
                      alt=""
                    />
                  </div>
                  <div
                    style={{ display: "flex", flexDirection: "column" }}
                    class=" p-4 rounded border-bottom shadow-lrb-lg"
                  >
                    <h4 class="card-title h3 h2-md display-6-lg mb-1">
                      {data.Profile.data.attributes.title}
                    </h4>
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const profileres = await fetch(
    `${API_URL}/api/organisation-profile?populate=*`
  );
  const Profile = await profileres.json();
  //fetching Publications
  console.log("job", Profile);
  return {
    props: {
      data: {
        Profile,
      },
    },
  };
}
export default Profile;
