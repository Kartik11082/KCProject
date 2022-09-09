import "./Testimonials.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Testimonials() {
  return (
    <>
      <div className="testimonials__container">
        <div className="testimonials">
          <Carousel
            className="c"
            // autoPlay
            // infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            swipeable={false}
            // interval={5000}
          >
            <div className="carousel">
              <div className="myCarousel">
                <h2>Testimonials</h2>
                <div className="courses">
                  <p>Courses joined: </p>
                  <p>Java and Django</p>
                </div>
                <div className="feedback">
                  Feedback
                  <p>
                    Hello sir, Yogita here. | am very glad to inform you that |
                    got placed at nVent as a software developer. 1 want to thank
                    you for ail your support and guidance.your notes helped me
                    to clear all the interview rounds. The knowledge that |
                    gained from all the courses has been helpful to me
                    throughout my entire journey, during internships, projects,
                    and interviews. My interview was based on Java, Python,
                    MySQL, oops concepts and collection frameworks. The examples
                    you give while teaching oops are very helpful. Thank you so
                    much, sir, for boosting my confidence in coding and for all
                    your immense support during the entire journey. Thanks a
                    lot, looking forward to learn much more courses from you.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="myCarousel">
                <h2>Testimonials</h2>
                <div className="courses">
                  <p>Courses joined: </p>
                  <p>Java and Django</p>
                </div>
                <div className="feedback">
                  Feedback
                  <p>
                    Hello sir Muskan here Sir I got placed into Oracle Adv java
                    notes were really helpful. They asked me questions regarding
                    the project and I was able to answer them properly because
                    you explained concepts very well. Thankyou so much sir for
                    your guidance.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="myCarousel">
                <h2>Testimonials</h2>
                <div className="courses">
                  <p>Courses joined: </p>
                  <p>Java and Django</p>
                </div>
                <div className="feedback">
                  Feedback
                  <p>
                    Hello sir, Sachin Tambe here , I'm so glad to inform you
                    that I am placed in Infosys For System Engineer role and In
                    Quality Kiosk As a Automation Tester. Your Python notes help
                    me a lot to crack the interviews and Solving the code during
                    the test. Thank you so much for your Support & Guidance.
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
