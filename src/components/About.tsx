import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-box">
        <h2 className="title about-title">
          SOBRE
          <div>
            <span className="about-do-h2">MIM</span>
          </div>
        </h2>
      </div>
      <div className="about-box">
        <div className="about-me">
          <p className="para">
            Tenho 20 anos e curso Análise e Desenvolvimento de Sistemas na
            FASEC. Desde cedo, a curiosidade pela tecnologia me inspira a
            transformar ideias em soluções reais. Cada projeto e cada linha de
            código são oportunidades de aprendizado e crescimento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
