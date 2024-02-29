import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import "../css/ActionAreaCard.css";

export default function ActionAreaCard() {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className="card-container">
        <div
          className={`flip-card ${isFlipped ? "is-flipped" : ""}`}
          onClick={handleClick}
        >
          <div className="flip-card-inner" style={{ borderRadius: "20px" }}>
            <div className="flip-card-front" style={{ borderRadius: "20px" }}>
              <Card sx={{ maxWidth: 500, borderRadius: "20px" }}>
                <CardActionArea>
                  <div style={{ position: "relative", height: "320px" }}>
                    <CardMedia
                      component="img"
                      height="320"
                      image="images/img1.jpg"
                      alt="Front Image"
                    />
                    <h2
                      style={{
                        display: "absolute",
                        backgroundColor: "rgb(0,0,0,0.6)",
                        top: "70%",
                        transform: "translate(0%, -150%)",
                        color: "white",
                        fontFamily: "Papyrus",
                        fontSize: "25px",
                      }}
                    >
                      Tungnath
                    </h2>
                  </div>
                </CardActionArea>
              </Card>
            </div>
            <div className="flip-card-back" style={{ borderRadius: " 20px" }}>
              <Card sx={{ maxWidth: 500, borderRadius: " 20px" }}>
                <CardActionArea>
                  <div style={{ position: "relative", height: "320px" }}>
                    <CardMedia
                      className="image"
                      component="img"
                      height="320"
                      image="images/img1.jpg"
                      alt="Front Image"
                    />
                    <h5
                      style={{
                        display: "absolute",
                        backgroundColor: "rgb(0,0,0,0.6)",
                        top: "50%",
                        transform: "translate(0%, -265%)",
                        color: "white",
                        fontFamily: "Papyrus",
                        fontSize: "15px",
                      }}
                    >
                      Tungnath Temple has perched on the Chandrashila Parvat in
                      the Tungnath mountain range, in the state of Uttarakhand.
                    </h5>
                  </div>
                </CardActionArea>
              </Card>
            </div>
          </div>
        </div>
        <div
          className={`flip-card ${isFlipped ? "is-flipped" : ""}`}
          onClick={handleClick}
        >
          {/*second card started*/}
          <div className="flip-card-inner" style={{ borderRadius: "20px" }}>
            <div className="flip-card-front" style={{ borderRadius: "20px" }}>
              <Card sx={{ maxWidth: 500, borderRadius: "20px" }}>
                <CardActionArea>
                  <div style={{ position: "relative", height: "320px" }}>
                    <CardMedia
                      component="img"
                      height="320"
                      image="images/img58.png"
                      alt="Front Image"
                    />
                    <h2
                      style={{
                        display: "absolute",
                        backgroundColor: "rgb(0,0,0,0.6)",
                        top: "70%",
                        transform: "translate(0%, -150%)",
                        color: "white",
                        fontFamily: "Papyrus",
                        fontSize: "25px",
                      }}
                    >
                      Madhamaheswar
                    </h2>
                  </div>
                </CardActionArea>
              </Card>
            </div>
            <div className="flip-card-back" style={{ borderRadius: " 20px" }}>
              <Card sx={{ maxWidth: 500, borderRadius: " 20px" }}>
                <CardActionArea>
                  <div style={{ position: "relative", height: "320px" }}>
                    <CardMedia
                      className="image"
                      component="img"
                      height="320"
                      image="images/img58.png"
                      alt="Front Image"
                    />
                    <h5
                      style={{
                        display: "absolute",
                        backgroundColor: "rgb(0,0,0,0.6)",
                        top: "70%",
                        transform: "translate(0%, -210%)",
                        color: "white",
                        fontFamily: "Papyrus",
                        fontSize: "15px",
                      }}
                    >
                      One such pilgrim site is Madmaheshwar Temple which is part
                      of the famous Panch Kedar. The temple lies in the Goundar
                      village of Garhwal Himalayas in Uttarakhand.
                    </h5>
                  </div>
                </CardActionArea>
              </Card>
            </div>
          </div>
        </div>
        <div
          className={`flip-card ${isFlipped ? "is-flipped" : ""}`}
          onClick={handleClick}
        >
          <div className="flip-card-inner" style={{ borderRadius: "20px" }}>
            <div className="flip-card-front" style={{ borderRadius: "20px" }}>
              <Card sx={{ maxWidth: 500, borderRadius: "20px" }}>
                <CardActionArea>
                  <div style={{ position: "relative", height: "320px" }}>
                    <CardMedia
                      component="img"
                      height="320"
                      image="images/Kalpeshwar.png"
                      alt="Front Image"
                    ></CardMedia>
                    <h2
                      style={{
                        display: "absolute",
                        backgroundColor: "rgb(0,0,0,0.6)",
                        top: "70%",
                        transform: "translate(0%, -150%)",
                        color: "white",
                        fontFamily: "Papyrus",
                        fontSize: "25px",
                      }}
                    >
                      Kalpeswar
                    </h2>
                  </div>
                </CardActionArea>
              </Card>
            </div>
            <div className="flip-card-back" style={{ borderRadius: "20px" }}>
              <Card sx={{ maxWidth: 500, borderRadius: "20px" }}>
                <CardActionArea>
                  <div style={{ position: "relative", height: "320px" }}>
                    <CardMedia
                      className="image"
                      component="img"
                      height="320"
                      image="images/Kalpeshwar.png"
                      alt="Back Image"
                    />
                    <h5
                      style={{
                        display: "absolute",
                        backgroundColor: "rgb(0,0,0,0.6)",
                        top: "70%",
                        transform: "translate(0%, -210%)",
                        color: "white",
                        fontFamily: "Papyrus",
                        fontSize: "15px",
                      }}
                    >
                      {" "}
                      The term “Kalpeshwar” itself signifies the power to
                      fulfill one’s desires and wishes. Thus, the temple is
                      considered a sanctum of divine blessings and a conduit to
                      spiritual liberation.
                    </h5>
                  </div>
                </CardActionArea>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="secondRowContainer">
        <div
          className={`flip-card ${isFlipped ? "is-flipped" : ""}`}
          onClick={handleClick}
        >
          {/*second card started*/}
          <div className="flip-card-inner" style={{ borderRadius: "20px" }}>
            <div className="flip-card-front" style={{ borderRadius: "20px" }}>
              <Card sx={{ maxWidth: 500, borderRadius: "20px" }}>
                <CardActionArea>
                  <div style={{ position: "relative", height: "320px" }}>
                    <CardMedia
                      component="img"
                      height="320"
                      image="images/img34.jpg"
                      alt="Front Image"
                    />
                    <h2
                      style={{
                        display: "absolute",
                        backgroundColor: "rgb(0,0,0,0.6)",
                        top: "70%",
                        transform: "translate(0%, -150%)",
                        color: "white",
                        fontFamily: "Papyrus",
                        fontSize: "25px",
                      }}
                    >
                      Rudranath
                    </h2>
                  </div>
                </CardActionArea>
              </Card>
            </div>
            <div className="flip-card-back" style={{ borderRadius: " 20px" }}>
              <Card sx={{ maxWidth: 500, borderRadius: " 20px" }}>
                <CardActionArea>
                  <div style={{ position: "relative", height: "320px" }}>
                    <CardMedia
                      className="image"
                      component="img"
                      height="320"
                      image="images/img34.jpg"
                      alt="Front Image"
                    />
                    <h2
                      style={{
                        display: "absolute",
                        backgroundColor: "rgb(0,0,0,0.6)",
                        top: "70%",
                        transform: "translate(0%, -200%)",
                        color: "white",
                        fontFamily: "Papyrus",
                        fontSize: "15px",
                      }}
                    >
                      Rudranath is the toughest of the famous Panch Kedar
                      pilgrimage treks. Even seasoned trekkers say, and locals
                      agree, 'Rudranath ki Chadai, German ki Ladai'.
                    </h2>
                  </div>
                </CardActionArea>
              </Card>
            </div>
          </div>
        </div>
        <div
          className={`flip-card ${isFlipped ? "is-flipped" : ""}`}
          onClick={handleClick}
        >
          {" "}
          {/*second card started*/}
          <div className="flip-card-inner" style={{ borderRadius: "20px" }}>
            <div className="flip-card-front" style={{ borderRadius: "20px" }}>
              <Card sx={{ maxWidth: 500, borderRadius: "20px" }}>
                <CardActionArea>
                  <div style={{ position: "relative", height: "320px" }}>
                    <CardMedia
                      component="img"
                      height="320"
                      image="images/kedar.jpg"
                      alt="Front Image"
                    />
                    <h2
                      style={{
                        display: "absolute",
                        backgroundColor: "rgb(0,0,0,0.6)",
                        top: "70%",
                        transform: "translate(0%, -150%)",
                        color: "white",
                        fontFamily: "Papyrus",
                        fontSize: "25px",
                      }}
                    >
                      Kedarnath
                    </h2>
                  </div>
                </CardActionArea>
              </Card>
            </div>
            <div className="flip-card-back" style={{ borderRadius: " 20px" }}>
              <Card sx={{ maxWidth: 500, borderRadius: " 20px" }}>
                <CardActionArea>
                  <div style={{ position: "relative", height: "320px" }}>
                    <CardMedia
                      className="image"
                      component="img"
                      height="320"
                      image="images/kedar.jpg"
                      alt="Front Image"
                    />
                    <h2
                      style={{
                        display: "absolute",
                        backgroundColor: "rgb(0,0,0,0.6)",
                        top: "70%",
                        transform: "translate(0%, -200%)",
                        color: "white",
                        fontFamily: "Papyrus",
                        fontSize: "15px",
                      }}
                    >
                      The Kedarnath shrine is surrounded by breathtakingly
                      beautiful snow-covered mountains. You will definitely feel
                      at peace after visiting this place.
                    </h2>
                  </div>
                </CardActionArea>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
