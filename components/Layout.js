import React from "react";
import Head from "next/head";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";
import { useRouter } from "next/router";

const Layout = ({ children, title, description, keywords, image }) => {
  //

  //  console.log(description);
  const router = useRouter();
  const { asPath, pathname } = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description.substring(0, 200).concat("...")}
        />
        <meta name="keywords" content={keywords} />
        <meta property="og:url" content={`https://alfajr.org.pk${asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Alfajr Pakistan" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="168" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alfajr" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content={description.substring(0, 300).concat("...")}
        />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:creator" content="@ssdo" />
      </Head>
      <div class="sticky-container">
        <ul class="sticky">
          <li style={{ marginBottom: "8px" }}>
            <FacebookShareButton url={`https://alfajr.org.pk${asPath}`}>
              <FacebookIcon size={50} />
            </FacebookShareButton>
          </li>
          <li style={{ marginBottom: "8px" }}>
            <TwitterShareButton url={`https://alfajr.org.pk${asPath}`}>
              <TwitterIcon size={50} />
            </TwitterShareButton>
          </li>
          <li>
            <LinkedinShareButton url={`https://alfajr.org.pk${asPath}`}>
              <LinkedinIcon size={50} />
            </LinkedinShareButton>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
};
Layout.defaultProps = {
  title: "Alfajr Institute",
  description:
    "An excellent educational institution located at Mari Indus near the city of Kalabagh and 5 km away from CPEC route in Mianwali District. A state of the art building with modern facilities available including spacious classrooms, library, modern computer labs, sports ground, cafeteria and mosque. Equal and safe opportunity for male and female students according to Pakistan and eastern values with all facilities.Sustainable Social Development Organization (SSDO) is a non-governmental organization founded in 2015 and registered under Societies Registration Act 1860.",
  keywords:
    "Alfajr,Alfajar,Institute,careers,education,BS programs,Mari Indus, Mianwali",
};
export default Layout;
