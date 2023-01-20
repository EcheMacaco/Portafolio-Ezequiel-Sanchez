import React from "react";
import "./Contact.css";


const Contact = ({on}) => {
  return (
    <div className="contact-container" data-on={on}>
      <h2 className="h2-c">CONTACTO</h2>
      <div className="div-contact">
        <a href="https://github.com/EcheMacaco" alt="github">
          Github
        </a>
        <a href="https://linkedin.com/in/ezequiel-sanchez-pais">Linkedin</a>
        <p> Telefono: (221) 3040789 </p>
        <p> Mail: eche_@hotmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
