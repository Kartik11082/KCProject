import "./Enquiry.css";
import { useState } from "react";
import { set, ref } from "firebase/database";
import db from "../../FBConfig";

function Enquiry() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [courses, setCourses] = useState({
    languages: [],
  });

  const hName = (event) => {
    // console.log(name);
    setName(event.target.value);
  };

  const hContact = (event) => {
    // console.log(contact);
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

  const submitQuery = (event) => {
    event.preventDefault();
    // const msg = `${name}, ${contact}, ${message}, ${courses.languages}`;
    const date = new Date().toString();
    const node = name + "==>" + date;
    const reference = ref(db, "query/" + node);
    if (courses.languages.length === 0) {
      alert("Please select atleast one course");
      window.location.reload();
    }
    const data = { name, contact, message, courses, date };
    set(reference, data)
      .then(() => {
        alert("We will get back to you soon");
        window.location.reload();
      })
      .catch((error) => {
        alert("Error: " + error);
      });
    setContact("");
    setName("");
    setMessage("");
    setCourses({
      languages: [],
    });
  };

  return (
    <>
      <form onSubmit={submitQuery}>
        <div className="enquiry">
          <input
            className="name"
            type="text"
            placeholder="Enter Name"
            onChange={hName}
            value={name}
            required
          />
          <input
            className="contact"
            type="number"
            placeholder="Enter contact"
            onChange={hContact}
            value={contact}
            required
          />
          <textarea
            className="message"
            placeholder="Query"
            onChange={hMessage}
            value={message}
            required
          />
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
      </form>
    </>
  );
}

export default Enquiry;
