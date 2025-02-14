import React from "react";
import "./Contact.css";

const Contact = ({ on }) => {
  return (
    <div className="contact-container" data-on={on}>
      <h2 className="h2-c">CONTACTO</h2>
      <div className="div-contact">
        <a href="https://github.com/EcheMacaco" alt="github" data-on={on}>
          Github
        </a>
        <a href="https://linkedin.com/in/ezequiel-sanchez-pais" data-on={on}>
          Linkedin
        </a>
        <p data-on={on}> Telefono: (221) 3143643 </p>
        <p data-on={on}> Mail: eche_@hotmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
