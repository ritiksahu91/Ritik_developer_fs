import React from "react";
import "./Workexp.css";
import { MdSchool } from "react-icons/md";
import { LiaSchoolSolid } from "react-icons/lia";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Workexp = () => {
  return (
    <>
      <div id="workexp" className="container work neon-3d-card">
        <div className="work-exp">
          <h2 className="col-12 mt-5 text-center mb-1 text-uppercase">
            Work Experience
          </h2>
          <hr />
        </div>
        <div className="work-3d-scene">
        <VerticalTimeline lineColor="var(--theme-accent)">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentClassName="work-tilt-card"
            contentArrowStyle={{ borderRight: "7px solid var(--theme-accent)" }}
            date="2025-present"
            iconStyle={{ background: "var(--theme-accent)", color: "black", border: "2px solid var(--theme-accent)" }}
            icon={<LiaSchoolSolid />}
          >
            <h3 className="vertical-timeline-element-title">GET AT MPSEDC</h3>
            <h4 className="vertical-timeline-element-subtitle">
              full time role in bhopal
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentClassName="work-tilt-card"
            contentArrowStyle={{ borderRight: "7px solid var(--theme-accent)" }}
            date="2024  - 6 months"
            iconStyle={{ background: "var(--theme-accent)", color: "black", border: "2px solid var(--theme-accent)" }}
            icon={<LiaSchoolSolid />}
          >
            <h3 className="vertical-timeline-element-title">Intern at ISRO</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Internship in ahembdabad
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentClassName="work-tilt-card"
            contentArrowStyle={{ borderRight: "7px solid var(--theme-accent)" }}
            date="2023 - 3 months"
            iconStyle={{ background: "var(--theme-accent)", color: "black", border: "2px solid var(--theme-accent)" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              XIntern @Acmegrade
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Virtual internship
            </h4>
            <p>
              In this internship my role was to develop the ecommerce website
            </p>
          </VerticalTimelineElement>
          
        </VerticalTimeline>
        </div>
      </div>
    </>
  );
};
