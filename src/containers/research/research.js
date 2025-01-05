import React, {useContext} from "react";
import "./research.scss";
import ResearchCard from "../../components/researchCard/ResearchCard";
import {research} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Research() {
  const {isDark} = useContext(StyleContext);
  if (research.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {research.experience.map((card, i) => {
                  return (
                    <ResearchCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
