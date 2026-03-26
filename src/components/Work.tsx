import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "../components/hooks/useGsapFallback";
gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(useGSAP);

const projects = [
  {
    number: "01",
    name: "Solus Recycle",
    category: "Sustentabilidade / Reciclagem",
    toolsLabel: "Ferramentas e funcionalidades",
    tools: "Javascript, TypeScript, React, Figma",
    image: "/images/Banner Solus Recycle.png",
    alt: "Solus Recycle",
  },
  {
    number: "02",
    name: "WebVulnScanner",
    category: "Segurança",
    toolsLabel: "Ferramentas e funcionalidades",
    tools: "Python, TypeScript",
    image: "/images/Banner Web VulnScanner.png",
    alt: "WebVulnScanner",
  },
  {
    number: "03",
    name: "Projeto em desenvolvimento",
    category: "Em breve",
    toolsLabel: "Ferramentas e funcionalidades",
    tools: "—",
    image: "/images/placeholder.webp",
    alt: "Projeto em desenvolvimento",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  });
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Meus <span>Projetos</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.number}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>{project.toolsLabel}</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
