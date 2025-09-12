import React from "react";
import "./educations.css";
import { MdSchool } from "react-icons/md";
import { LiaSchoolSolid } from "react-icons/lia";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Educations = () => {
  return (
    <>
      <div id="education" className="container educations neon-3d-card">
        <h2 className="col-12 mt-3 text-center mb-1 text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline lineColor="var(--theme-accent)">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid var(--theme-accent)" }}
            date="2021-2025"
            iconStyle={{ background: "var(--theme-accent)", color: "black" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">BTECH-CSE</h3>
            <h4 className="vertical-timeline-element-subtitle">LNCTE BHOPAL</h4>
            <p>
              Frontend developer,problem solver,ui designer,mern stack developer
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid var(--theme-accent)" }}
            date="2020-2021"
            iconStyle={{ background: "var(--theme-accent)", color: "black" }}
            icon={<LiaSchoolSolid />}
          >
            <h3 className="vertical-timeline-element-title">Class 12th</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ritik convent hr.sec School
            </h4>
            <p>GOT 9.1 CGPA in HSC</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work z-index-0"
            contentArrowStyle={{ borderRight: "7px solid var(--theme-accent)" }}
            date="2021-2025"
            iconStyle={{ background: "var(--theme-accent)", color: "black" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Class 10th</h3>
            <h4 className="vertical-timeline-element-subtitle">GGSS School</h4>
            <p>GOT 9 CGPA in SSC</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
