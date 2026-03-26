import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Career.css";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  useEffect(() => {
    const careerTimeline = gsap.timeline({
      scrollTrigger: {
        id: "career-timeline",
        trigger: ".career-section",
        start: "top 30%",
        end: "100% center",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    careerTimeline
      .fromTo(
        ".career-timeline",
        { maxHeight: "10%" },
        { maxHeight: "100%", duration: 0.5 },
        0
      )
      .fromTo(".career-timeline", { opacity: 0 }, { opacity: 1, duration: 0.1 }, 0)
      .fromTo(
        ".career-info-box",
        { opacity: 0 },
        { opacity: 1, stagger: 0.1, duration: 0.5 },
        0
      )
      .fromTo(
        ".career-dot",
        { animationIterationCount: "infinite" },
        { animationIterationCount: "1", delay: 0.3, duration: 0.1 },
        0
      );

    if (window.innerWidth > 1024) {
      careerTimeline.fromTo(
        ".career-section",
        { y: 0 },
        { y: "20%", duration: 0.5, delay: 0.2 },
        0
      );
    } else {
      careerTimeline.fromTo(
        ".career-section",
        { y: 0 },
        { y: 0, duration: 0.5, delay: 0.2 },
        0
      );
    }

    return () => {
      ScrollTrigger.getById("career-timeline")?.kill();
      careerTimeline.kill();
    };
  }, []);

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Minha Carreira <span>&</span>
          <br /> Experiência
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Início da Graduação em ADS</h4>
                <h5>Faculdade Serra do Carmo - Fasec</h5>
              </div>
              <h3>2024 - Atual</h3>
            </div>
            <p>
            Início dos estudos em Análise e Desenvolvimento de Sistemas na FASEC. Foco em fundamentos de programação, algoritmos e introdução ao ecossistema de TI.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Desenvolvedor Frontend (Projetos)</h4>
                <h5></h5>
              </div>
              <h3>2025 - Atual</h3>
            </div>
            <p>
            Desenvolvimento do Solus Recycle, focando em interfaces sustentáveis com React e TypeScript. Aplicação de conceitos de UI/UX para melhorar a experiência do usuário.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cibersegurança</h4>
                <h5></h5>
              </div>
              <h3>2025 - Atual</h3>
            </div>
            <p>
            Início de formações especializadas em Segurança da Informação, com foco em proteção de dados, análise de vulnerabilidades e defesa de redes. Desenvolvimento de Projetos autorais utilizando Python para a automação de testes de segurança e análise de cabeçalhos. 
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Em busca de Estágio</h4>
                <h5></h5>
              </div>
              <h3>Atualmente</h3>
            </div>
            <p>
            Aplico minha experiência em UI/UX com Figma e Photoshop para criar interfaces modernas em React e TypeScript , enquanto aprofundo conhecimentos em Redes, Linux e infraestrutura (DevOps) em busca da minha primeira oportunidade de estágio na área de TI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
