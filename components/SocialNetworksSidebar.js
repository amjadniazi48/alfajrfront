import React from "react";
import Link from "next/link";
import { TwitterTimelineEmbed } from "react-twitter-embed";
const SocialNetworksSidebar = (props) => {
  return (
    <aside className="col-md-4 end-sidebar-lg">
      <div className="sticky">
        <aside className="widget">
          <div className="block-title-4">
            <h4 className="h5 title-arrow">
              <span>Social network</span>
            </h4>
          </div>

          <ul className="list-unstyled social-two">
            <div className="row">
              <li className="facebook">
                <Link
                  className="bg-facebook text-white"
                  href="https://www.facebook.com/AlFajarInstitute/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="facebook"
                >
                  Facebook
                </Link>
              </li>

              <div className="row">
                <li className="twitter">
                  <Link
                    className="bg-twitter text-white"
                    href="https://twitter.com/AlFajarInstitute"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="twitter"
                  >
                    Twitter
                  </Link>
                </li>
              </div>
            </div>
            <div className="row">
              <li className="youtube">
                <Link
                  className="bg-youtube text-white"
                  href="https://www.youtube.com/@mumtazali512"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="youtube"
                >
                  Youtube
                </Link>
              </li>
            </div>
          </ul>
          <div className="gap-15"></div>
        </aside>

        <aside className="widget">
          <div className="block-title-4">
            <h4 className="h5 title-arrow">
              <span>Media</span>
            </h4>
          </div>
        </aside>

        {/* timeline */}
        <aside
          id="bootnews_custompost-10"
          className="widget widget_categories widget_categories_custom"
        >
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="AIFajrInstitute"
            options={{ height: 830 }}
          />
        </aside>
        {/* <aside className="widget">
          <div className="hover-a text-center">
            <div className="py-2">
              <span className="text-mute small">- Advertisement -</span>
            </div>

            <a href="#">
              <img
                className="img-fluid bg-light"
                src="../../assets/img/ads/300-demo.png"
                alt="ads space"
              />
            </a>
          </div>
          <div className="gap-15"></div>
        </aside> */}
      </div>
    </aside>
  );
};

export default SocialNetworksSidebar;
