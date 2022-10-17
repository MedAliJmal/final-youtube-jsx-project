import React from "react";
import { Accordion } from "react-bootstrap";

const Description = () => {
  return (
    <div>
      {" "}
      <Accordion
        defaultActiveKey="0"
        style={{ width: "950px", marginTop: "20px" }}
      >
        <Accordion.Item eventKey="1" style={{ width: "950px" }}>
          <Accordion.Header style={{ width: "950px" }}>
            Description
          </Accordion.Header>
          <Accordion.Body style={{ width: "950px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Description;
