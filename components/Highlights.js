import React from "react";
import { API_URL } from "./../config/index";
import moment from "moment";
import Image from 'next/image'
import Link from "next/link";

const Highlights = ({ Highlights }) => {
 // console.log("Highlights", Highlights);
  return (
    <div className="col-md-8">
      <div className="block-area">
        <div className="block-title-6">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Highligths</span>
          </h4>
        </div>
        <div className="border-bottom-last-0 first-pt-0">
          {Highlights.data.map((highlight) => {
            return (
              <article className="card card-full hover-a py-4" key={highlight.id}>
                <div className="row">
                  <div className="col-sm-6 col-md-12 col-lg-6">
                    <div className="">
                      <Image
                       width={360}
                       height={202}
                        className="img-fluid"
                        src={ highlight.attributes.image.data[0].attributes.url}
                        data-src="../../assets/img/360x202/img17.jpg"
                        alt="Image description"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-12 col-lg-6">
                    <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                      <Link href={`highlights/${highlight.attributes.slug}`}>
                      <h3 className="card-title h2 h3-sm h2-md">
                        {highlight.attributes.title}
                      </h3>
                      </Link>
                      <div className="card-text mb-2 text-muted small">
                        {/* <span className="d-none d-sm-inline me-1">
                              <a className="fw-bold" href="#">
                                John Doe
                              </a>
                            </span> */}
                        <time dateTime="2019-10-21">
                          {moment(highlight.attributes.createdAt).format(
                            "Do MMMM YYYY"
                          )}
                        </time>
                      </div>
                      <p className="card-text" style={{textAlign:"justify"}}>
                        {highlight.attributes.description.substring(0, 300).concat("...")}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        
        </div>
        <Link href="/highlights">
          <p
            style={{
              textAlign: "right",
              color: "blue",
              cursor: "pointer",
            }}
          >
            view more
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Highlights;
