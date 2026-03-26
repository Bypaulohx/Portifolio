import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contatos</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>E-mail</h4>
            <p>
              <a href="mailto:paulo.britoouril@gmail.com" data-cursor="disable">
                paulo.britoouril@gmail.com
              </a>
            </p>
            <h4>Telefone</h4>
            <p>
              <a href="tel:+55 (94) 99136-2771" data-cursor="disable">
                +55 (94) 99136-2771
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Bypaulohx"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/bypaulohx/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.behance.net/sixdesignbr"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Behance <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/bypaulohx"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designer e Developer <br /> by <span>Paulo Henrique</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
