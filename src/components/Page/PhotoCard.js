import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const PhotoCard = ({ width, height, url, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Card
        style={{
          position: "relative",
          width: width,
          height: height,
          borderRadius: "0",
          margin: "0.75em",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div
          className="photo-container"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Card.Img
            variant="top"
            src={url}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "0",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "0",
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.375)",
              color: "white",
              padding: "0.25em",
              textAlign: "center",
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          >
            {description}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PhotoCard;
