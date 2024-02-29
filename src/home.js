import React from 'react';
import Slider from "./components/Slider";
import Card from "./components/Cards";
import Zoomer from "../src/components/Zoomer";

function HomePage() {
  return (
    <>
      <Slider />
      <h1
        style={{
          textAlign: "center",
          lineHeight: "40px",
          backgroundColor: "rgb(1,1,1,1)",
          color: "white",
          padding: "10px",
        }}
      >
        DISCOVER PANCH KEDAR WITH US
      </h1>
      <div style={{ paddingTop: "30px",paddingBottom:"50px" }}>
        <Card />
      </div>
      <h1 style={{
          marginTop:"50px",
          textAlign: "center",
          lineHeight: "40px",
          backgroundColor: "rgb(1,1,1,1)",
          color: "white",
          padding: "10px",
          marginBottom:"15px",
         }}>
        CHECK THIS OUT
      </h1>
      <Zoomer/>   
      <br />
      <h1 style={{
          marginTop:"50px",
          textAlign: "center",
          lineHeight: "40px",
          color: "black ",
          padding: "10px",
          marginBottom:"15px",
          letterSpacing:"1px"
         }}>
        RECOMMENDED VIDEOS 
      </h1>
      <video controls width="800"  style={{ margin: "0 auto", display: "block" }}>
        <source src="videos/Rudranath.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <br />   
    </>
  );
}

export default HomePage; 
