import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    className: "image",
    imgPath: "images/img3.jpeg",
    text: "Explore With...",
    subText: "A Journey To The Abodes Of Shiva!",
    title: '|| RUDRA HIMALAYAN TREKKING ||',
  },
  {
    imgPath: "images/img111.jpeg",
    text: "Explore With",
    subText: "A Journey To The Abodes Of Shiva!",
    title: "|| RUDRA HIMALAYAN TREKKING ||",
  },
  {
    imgPath: "images/img44.jpeg",
    text: "Explore With",
    subText: "A Journey To The Abodes Of Shiva!",
    title: "|| RUDRA HIMALAYAN TREKKING ||",
  },
  {
    imgPath: "images/img112.jpeg",
    text: "Explore With...",
    subText: "A Journey To The Abodes Of Shiva!",
    title: "|| RUDRA HIMALAYAN TREKKING ||",
  },
  {
    imgPath: "images/img8.jpeg",
    text: "Explore With...",
    subText: "A Journey To The Abodes Of Shiva!",
    title: "|| RUDRA HIMALAYAN TREKKING ||",
  },
  {
    imgPath: "images/img9.jpeg",
    text: "Explore With...",
    subText: "A Journey To The Abodes Of Shiva!",
    title: "|| RUDRA HIMALAYAN TREKKING ||",
  },
  {
    imgPath: "images/img11.jpeg",
    text: "Explore With...",
    subText: "A Journey To The Abodes Of Shiva!",
    title: "|| RUDRA HIMALAYAN TREKKING ||",
  },
  {
    imgPath: "images/img12.jpeg",
    text: "Explore With...",
    subText: "A Journey To The Abodes Of Shiva!",
    title: "|| RUDRA HIMALAYAN TREKKING ||",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ position: "relative", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={2000}
      >
        {images.map((step, index) => (
          <div key={step.imgPath}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow:"hidden",
                 
                }}
              >
                <img
                  src={step.imgPath}
                  alt={`Image ${index + 1}`}
                  style={{
                    height: "500px",
                    width: "100%",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    color: "whitesmoke",
                    alignItems: "center",
                    paddingTop: "11rem",
                    fontSize: "40px",
                    textAlign: "center",
                    width: "100%",
                    height: "500px",
                    letterSpacing: "3px",
                    fontFamily: "Papyrus",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    lineHeight:"5rem"
                  }}
                >
                  {step.text}
                  <Box
                    sx={{
                      position: "absolute",
                      color: "white",
                      fontSize: "24px",
                      textAlign: "center",
                      width: "100%",
                      top: "22rem",
                      fontFamily: "serif",
                    }}
                  >
                    {step.subText}
                  </Box>
                  <Box
                    sx={{
                      letterSpacing: "0",
                    }}
                  >
                    {step.title}
                  </Box>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#FFBF00",
                    position: "absolute",
                    bottom: "1rem",
                    textAlign:"center",
                    padding: "15px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    fontSize: "18px",
                    color:"white",
                    width:"8rem"
                  }}
                >
                  Book Now
                </Box>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="null"
        activeStep={activeStep}
        nextButton={null}
        backButton={null}
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
