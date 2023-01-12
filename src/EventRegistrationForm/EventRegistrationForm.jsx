import classNames from "classnames";
import { useState } from "react";
import styles from "./EventRegistrationForm.module.scss";

const cn = classNames.bind(styles);

const EventRegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLasttName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [areaCode, setAreaCode] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [isCustomer, setIsCustomer] = useState("yes");

  const [formData, setFormData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData((prevData) => [
      ...prevData,
      {
        firstName,
        lasttName,
        company,
        email,
        areaCode,
        number,
        subject,
        isCustomer,
      },
    ]);
    setFirstName("");
    setLasttName("");
    setCompany("");
    setEmail("");
    setAreaCode("");
    setNumber("");
    setSubject("");
    setIsCustomer("yes");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>EVENT REGISTRATION FORM</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.form__nameLabel}>Name</label>
        <div className={styles.form__firstName}>
          <label
            className={cn(styles["form__firstName"], [
              "form__firstName--small",
            ])}
          >
            First Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          ></input>
        </div>
        <div className={styles.form__lastName}>
          <label>Last Name</label>
          <input
            type="text"
            value={lasttName}
            onChange={(event) => setLasttName(event.target.value)}
          ></input>
        </div>

        <label className={styles.form__companyLabel}>Company</label>
        <input
          className={styles.form__company}
          type="text"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        ></input>

        <label className={styles.form__emailLabel}>Email</label>
        <input
          className={styles.form__email}
          placeholder="example@email.com"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>

        <label className={styles.form__phoneLabel}>Phone</label>
        <div className={styles.form__areaCode}>
          <label>Area code</label>
          <input
            type="number"
            value={areaCode}
            onChange={(event) => setAreaCode(event.target.value)}
          ></input>
        </div>
        <div className={styles.form__number}>
          <label>Phone Number</label>
          <input
            type="number"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          ></input>
        </div>

        <label className={styles.form__subjectLabel}>Subject</label>
        <select
          className={styles.form__subject}
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        >
          <option value="">Choose an option</option>
          <option value="first">First Option</option>
          <option value="second">Second Option</option>
          <option value="third">Third</option>
        </select>

        <fieldset className={styles.form__checkmark}>
          <legend>Are you existing customer?</legend>
          <input
            type="radio"
            value="yes"
            checked={isCustomer === "yes"}
            onChange={(event) => setIsCustomer(event.target.value)}
          ></input>
          <label>Yes</label>
          <input
            type="radio"
            value="no"
            checked={isCustomer === "no"}
            onChange={(event) => setIsCustomer(event.target.value)}
          ></input>
          <label>No</label>
        </fieldset>

        <button className={styles.form__button}>REGISTER</button>
      </form>

      {formData.length > 0 && <pre>{JSON.stringify(formData, null, 2)}</pre>}
    </div>
  );
};

export default EventRegistrationForm;
