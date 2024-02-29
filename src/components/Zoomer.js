import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

export const Zoomer = () => {
  const [startingPoint, setStartingPoint] = useState("");
  const [destination, setDestination] = useState("");
  const [numberOfDays, setNumberOfDays] = useState("");

  useEffect(() => {
    // Reset the values to placeholders on page refresh
    setStartingPoint("");
    setDestination("");
    setNumberOfDays("");
  }, []);

  return (
    <>
      <div
        style={{
          position: "relative",
          minHeight: "40vh",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <img
          src="images/trekk.jpg"
          style={{ width: "100%", height:"20rem", objectFit: "cover",filter:"blur(3px)" }}
          alt="background"
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            zIndex: 1,
            width: "100%",
          }}
        >
          <h2>PICK A TRIP</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <Form.Select
              value={startingPoint}
              onChange={(e) => setStartingPoint(e.target.value)}
              style={{ borderRadius: 0, width: "300px", borderColor: "grey" }}
            >
              <option value="" disabled hidden>
                Starting Point
              </option>
              <option value="1">Action</option>
              <option value="2">Another action</option>
              <option value="3">Something else here</option>
            </Form.Select>
            <Form.Select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              style={{
                borderRadius: 0,
                width: "300px",
                borderColor: "grey",
                marginLeft: "1rem",
              }}
            >
              <option value="" disabled hidden>
                Destination
              </option>
              <option value="1">Action</option>
              <option value="2">Another action</option>
              <option value="3">Something else here</option>
            </Form.Select>
            <Form.Select
              value={numberOfDays}
              onChange={(e) => setNumberOfDays(e.target.value)}
              style={{
                borderRadius: 0,
                width: "300px",
                borderColor: "grey",
                marginLeft: "1rem",
              }}
            >
              <option value="" disabled hidden>
                No. Of Days
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
            <Button
              style={{
                backgroundColor: "black",
                borderRadius: "0",
                marginLeft: "1rem",
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Zoomer;
