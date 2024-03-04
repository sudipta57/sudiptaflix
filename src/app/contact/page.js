import React from "react";
import ContactCard from "../components/Contactcard";
import styles from "./contact.module.css";
import ContactForm from "../components/contactform";
const Page = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>
            we'd love to hear <span>from you </span>
          </h2>
          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29620.680425898794!2d88.1688877631624!3d21.87353561969419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02553f5d1f7cd5%3A0xc59d9234282d36ea!2sKakdwip%2C%20West%20Bengal%20743347!5e0!3m2!1sen!2sin!4v1709454915731!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.mapping}
      ></iframe>
    </>
  );
};

export default Page;
