import Quotes from "./Quotes/Quotes";
import Testimonials from "./Testimonials/Testimonials";
import Courses from "./Courses/Courses";

function Home() {
  return (
    <>
      <div className="home__div">
        <Quotes />
        <Testimonials />
        <Courses />
      </div>
    </>
  );
}

export default Home;
