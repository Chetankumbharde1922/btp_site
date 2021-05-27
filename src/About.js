import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="conta">
      <h1>About Project</h1>
      <div className="back">
        <p>
          Lung cancer is one of the leading causes of death worldwide in both
          men and women. Most lung cancer patients are diagnosed at an advanced
          stage when the symptoms (i.e., cough, dyspnoea, fatigue, pain in the
          thorax) appear and this often leads to a poor prognosis. Various
          methods in the past have been taken into use but none have met
          standards of simultaneous speed detection and accuracy. With the
          growing age of technology and continuous urge to build and use things
          that are effective to use and also easy enough to operate, we need a
          diagnostic technique that can detect lungs cancer at an early stage.
        </p>
        <p>
          In recent times VOC’s <b>[Volatile organic compounds]</b> have been
          identified to show a richer presence in the respiratory tract of an
          affected person compared to that of a healthy person. These VOCs can
          be detected using various sensors to mark the prediction of the
          presence/absence of lung cancer in the study. So we have compiled the
          list of VOC’s from different research articles on one platform and to
          make it accessible to everyone.
        </p>
      </div>
    </div>
  );
};

export default About;
