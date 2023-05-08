import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "./../components/Layout";
import HighlightsSlider from "./../components/HighlightsSlider";

import Header from "../components/Header";

import { API_URL } from "@/config/index";

import Upcomings from "../components/Upcomings";
import Highlights from "@/components/Highlights";
import ThematicAreas from "@/components/ThematicAreas";
import SocialNetworksSidebar from "./../components/SocialNetworksSidebar";
import Blog from "./../components/Blog";
import AlbumsSlider from "./../components/AlbumsSlider";
import MobileSidebar from "./../components/MobileSidebar";
import AcademicPrograms from "../components/AcademicPrograms";

export default function Home({ data }) {
  return (
    <Layout title="Alfajr Institute">
      <div className="wrapper ">
        {/* main content */}
        <main id="content">
          <div className="container">
            <div className="row">
              <div className="col-12 mt-05">
                {data && data.Upcomings && data.Upcomings.data && (
                  <Upcomings Upcomings={data.Upcomings} />
                )}
                {data && data.SliderHighlights && data.Notifications && (
                  <HighlightsSlider
                    Notifications={data.Notifications}
                    SliderHighlights={data.SliderHighlights}
                  />
                )}
              </div>

              {/* reports*/}
              {data && data.Academic_Programs && (
                <AcademicPrograms Academic_Programs={data.Academic_Programs} />
              )}

              {/* reports*/}

              {/* content start */}
              {/* left column */}
              {data && data.Highlights && (
                <Highlights Highlights={data.Highlights} />
              )}

              {/* right column */}

              <SocialNetworksSidebar />

              {/* album slider */}

              {data && data.Videos && <AlbumsSlider Galleries={data.Videos} />}

              {/* start full column */}

              {/* start left column */}

              {/* start right column */}
              <aside className="col-md-4 end-sidebar-lg">
                <div className="sticky">
                  <aside className="widget">
                    <div className="small-post"></div>
                    <div className="gap-0"></div>
                  </aside>
                </div>
              </aside>
            </div>
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  // Fetching upcomings
  const upcomingsres = await fetch(`${API_URL}/api/upcomings?sort=rank:asc`);
  const Upcomings = await upcomingsres.json();

  //fetching Press Releases
  const notification_res = await fetch(
    `${API_URL}/api/notifications?populate=*&sort=rank:asc&pagination[limit]=5`
  );
  const Notifications = await notification_res.json();

  //fetching sliderimgs
  const sliderhighlightsres = await fetch(
    `${API_URL}/api/sliders?populate=*&sort=rank:asc&pagination[limit]=9`
  );
  const SliderHighlights = await sliderhighlightsres.json();

  //fetching sliderimgs
  const academic_programs_res = await fetch(
    `${API_URL}/api/academic-programs?populate=*&sort=rank:asc&pagination[limit]=4`
  );
  const Academic_Programs = await academic_programs_res.json();

  //fetching Highlights
  const highlightsres = await fetch(
    `${API_URL}/api/posts?sort=rank:asc&pagination[limit]=4&populate=*`
  );
  const Highlights = await highlightsres.json();

  //fetching Gallery
  const videos_res = await fetch(`${API_URL}/api/videos?sort=rank`);
  const Videos = await videos_res.json();

  //Getting thematic areas
  const thematicareares = await fetch(
    `${API_URL}/api/thematic-area?populate=*&pagination[limit]=5`
  );
  const ThematicAreas = await thematicareares.json();

  // console.log("Galleries", Galleries);
  return {
    props: {
      data: {
        Upcomings,
        Notifications,
        SliderHighlights,
        Academic_Programs,
        Highlights,
        Videos,
        ThematicAreas,
      },
    },
  };
}
