import NavBar from "./navbar";
import styles from "@/styles/Contact.module.css";
import { useState } from "react";

const Contact = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    desc: "",
  });

  const handleInputDetails = (e) => {
    console.log("handleInputDetails");
    const { name, value } = e.target;
    setDetails((data) => ({
      ...data,
      [name]: value,
    }));
    console.log(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <div className={styles.main}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter your name
          </label>
          <input
            value={details.name}
            onChange={handleInputDetails}
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            Email address
          </label>
          <input
            value={details.email}
            onChange={handleInputDetails}
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Phone
          </label>
          <input
            value={details.phone}
            onChange={handleInputDetails}
            type="number"
            className="form-control"
            name="phone"
            id="phone"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc">Elaborate your concern</label>
          <textarea
            value={details.desc}
            onChange={handleInputDetails}
            className="form-control"
            placeholder="Write your concern here"
            name="desc"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
