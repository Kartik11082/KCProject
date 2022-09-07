import "./Enquiry.css";
import { useState } from "react";

function Enquiry() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [courses, setCourses] = useState({
    languages: [],
  });

  const hName = (event) => {
    console.log(name);
    setName(event.target.value);
  };

  const hContact = (event) => {
    console.log(contact);
    setContact(event.target.value);
  };

  const hMessage = (event) => {
    setMessage(event.target.value);
  };

  const hCourses = (event) => {
    const { value, checked } = event.target;
    const { languages } = courses;
    // console.log(`${value} is ${checked}`);

    if (checked) {
      setCourses({
        languages: [...languages, value],
      });
    } else {
      setCourses({
        languages: languages.filter((event) => event !== value),
      });
    }
  };

  return (
    <>
      <div className="enquiry">
        <input
          className="name"
          type="text"
          placeholder="Enter Name"
          onChange={hName}
          required
        />
        <input
          className="contact"
          type="text"
          placeholder="Enter contact"
          onChange={hContact}
          required
        />
        <textarea className="message" placeholder="Query" onChange={hMessage} />
        <h3>Interested courses</h3>
        <div>
          <div className="checkbox">
            <label className="container">
              <span className="checkmark" />
              <input type="checkbox" value="Python" onChange={hCourses} />
              Python
            </label>
            <label className="container">
              <span className="checkmark" />
              <input type="checkbox" value="Javascript" onChange={hCourses} />
              Javascript
            </label>
            <label className="container">
              <span className="checkmark" />
              <input type="checkbox" value="Java" onChange={hCourses} />
              Java
            </label>
            <label className="container">
              <span className="checkmark" />
              <input type="checkbox" value="MySQL" onChange={hCourses} />
              MySQL
            </label>
            <label className="container">
              <span className="checkmark" />
              <input type="checkbox" value="ML" onChange={hCourses} />
              Machine Learning
            </label>
          </div>
        </div>
        <input type="submit" className="submit" />
      </div>
    </>
  );
}

export default Enquiry;
