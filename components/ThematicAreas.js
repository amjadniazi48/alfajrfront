import ReactMarkdown from "react-markdown";
import Link from "next/link";
const ThematicAreas = ({ ThematicAreas }) => {
  //console.log("mythematicdata", ThematicAreas);
  //return false;
  return (
    <>
    <div className="block-area border bg-light-black" style={{backgroundColor:"#f8f9fa",padding : "20px 10px 1px 20px"}}>
        <div className="block-title-6">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white">Thematic Areas</span>
          </h4>
        </div>
      <div className="">
        {ThematicAreas.data.attributes.categories.data?.map(function (
          cat,
          index,
          array
        ) {
          let bgColor = cat.attributes.BackgroundColor;
          if (array.indexOf(cat) < 4) {
            return (
              <div class="col mb-3 " key={cat.attributes.id}>
                <div
                  className="card  d-flex  rgba-black-strong py-5 px-2 shadow-sm"
                  style={{
                    width: "19rem",
                    height: "12.3rem",
                    backgroundColor: `${bgColor}`,
                    justifyContent: "center",
                  }}
                >
                  <div className="card-body">
                    <Link
                      className="text-white"
                      href={`thematic-areas/${cat.attributes.slug}`}
                      target="_blank"
                      style={{ textAlign: "justify" }}
                    >
                      <div style={{ marginBottom: "20px", paddingTop: "30px" }}>
                        <i
                          className={cat.attributes.icon}
                          color="white"
                          style={{
                            color: "white",
                            fontSize: "4rem",
                            marginLeft: "6rem",
                          }}
                        />
                        <p
                          style={{
                            textAlign: "center",
                            color: "white",
                            marginTop: "20px",
                          }}
                        >
                          {cat.attributes.title}{" "}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        })}
        <Link href="/thematic-areas">
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
    </>
  );
};
export default ThematicAreas;
