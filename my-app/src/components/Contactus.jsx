import React from "react";
import kerala4 from "./kerala4.jpg";

const Contactus = () => {
  return (
    <div>
      <div class="container">
        <section class="mb-4">
          <h2 class="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>
          <div class="row">
            <div class="col-md-4">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="form-control"
                      />
                      <label for="name" class="">
                        Your name
                      </label>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        class="form-control"
                      />
                      <label for="email" class="">
                        Your email
                      </label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        class="form-control"
                      />
                      <label for="subject" class="">
                        Subject
                      </label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        class="form-control md-textarea"
                      ></textarea>
                      <label for="message">Your message</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-md-8 p-8">
              <img
                src={kerala4}
                className="kerala-img4"
                height={200}
                alt="keralaimage"
              />
            </div>
          </div>
        </section>
      </div>

      <footer>
        <p>
          kerala_tourism_web@gmail.com
          <br />
          <span>contact ph::9678789889</span>
        </p>
      </footer>
    </div>
  );
};

export default Contactus;
