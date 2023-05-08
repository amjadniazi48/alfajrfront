import React from "react";
import Layout from "@/components/Layout";
const ContactUs = () => {
  return (
    <Layout title="Contact Us">
      <div class="container content-space-t-1 p-4 mt-20 ">
        <div className="block-title-6 text-center">
          <h4 className="h5 border-primary mb-5">
            <span className="bg-primary text-white">Get in Touch</span>
          </h4>
        </div>

        <div class="row justify-content-center">
          <div class="col-6 mb-4 mb-lg-0">
            <div class="card card-lg text-center h-100">
              <div class="card-body">
                <div class="mb-3">
                  <i class="bi bi-geo"></i>
                </div>

                <div class="mb-5">
                  <span class="d-block">
                    Khayaban e Mustafa, Mari Indus Dist Mianwali Mianwali,
                    Punjab, Pakistan-42350
                  </span>
                </div>

                <div class="d-grid mb-3">
                  <a class="btn btn-white" href="mailto: info@ssdo.org.pk ">
                    <i class="bi-envelope-open me-2"></i>info@alfajar.org.pk
                  </a>
                </div>

                <a class="btn btn-ghost-dark btn-sm" href="#">
                  <i class="bi-telephone me-2"></i> +92-304-1115554
                </a>
              </div>
            </div>
          </div>

          <div class="col-6 mb-4 mb-lg-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3348.310149768344!2d71.56432500000001!3d32.94282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392767d52833f655%3A0x41f922270e636337!2sAl%20Fajar%20Institute!5e0!3m2!1sen!2sus!4v1683466435959!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
