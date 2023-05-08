import React from "react";
import moment from "moment";
import Link from "next/link"
import ReactMarkdown from "react-markdown";
const Blog = ({ Blogs }) => {
  return (
    <div className="col-md-8">
      <div className="block-area border bg-light-black" style={{backgroundColor:"#f8f9fa",padding : "20px 20px 10px 20px"}}>
        <div className="block-title-6">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Blogs</span>
          </h4>
        </div>
        <div className="border-bottom-last-0 first-pt-0 " >
          {Blogs.data.map((blog) => {
            return (
              <article
                className="card card-full hover-a py-4"
                key={blog.id}
              >
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                      <Link href={`blogs/`+blog.attributes.slug}>
                      <h3 className="card-title h2 h3-sm h2-md">
                        {blog.attributes.title}
                      </h3>
                      </Link>
                      <div className="card-text mb-2 text-muted small">
                        <span className="d-none d-sm-inline me-1">
                          <a className="fw-bold" href="#">
                            Admin
                          </a>
                        </span>
                        <time dateTime="2019-10-21">
                          {moment(blog.attributes.createdAt).format(
                            "Do MMMM YYYY"
                          )}
                        </time>
                      </div>
                      <p className="card-text" style={{textAlign:"justify"}}><ReactMarkdown>{blog.attributes.description.substring(0, 300).concat("...")}</ReactMarkdown></p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <Link href="/blogs">
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

export default Blog;