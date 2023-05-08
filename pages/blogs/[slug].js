import { API_URL } from "@/config/index";
import ReactMarkdown from "react-markdown";
import Layout from "@/components/Layout";
const BlogDetails = ({ data }) => {
  //console.log(data);
  //return false;
  //consl
  return (
    <Layout
      title="Highlights Details"
      image={
        data.data[0].attributes.image.length > 0
          ? data.data[0].attributes.image.data[0]?.attributes.url
          : ""
      }
      description={data.data[0].attributes.description}
    >
      <div className="wrapper ">
        {/* main content */}
        <main id="content">
          <div className="container">
            <div className="d-flex flex-row mt-3 p-3  mb-3">
              <div className=" h-auto col-md-12">
                <div className="block-title-6 text-center">
                  <h4 className="h5 border-primary ">
                    <span className="bg-primary text-white">Blog details</span>
                  </h4>
                </div>

                <div className="">
                  <div className="card border-0  p-3">
                    <h3 className="card-title">
                      {data.data[0].attributes.title}
                    </h3>
                    <div className="card-body">
                      <p>
                        <ReactMarkdown>
                          {data.data[0].attributes.description}
                        </ReactMarkdown>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  //fetching profiles
  const res = await fetch(
    `${API_URL}/api/posts?populate=*&filters[type][$eq]=Blog&filters[slider][$eq]=false&filters[slug][$eq]=${slug}`
  );
  const posts = await res.json();
  const data = posts.data;
  //fetching profiles
  //console.log("Profiles", Profiles);
  return {
    props: {
      data: {
        data,
      },
    },
  };
}
export default BlogDetails;
