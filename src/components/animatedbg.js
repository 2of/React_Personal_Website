import React, { useState, useEffect } from "react";

// Function to generate random orbs
const generateOrb = () => ({
  x: Math.random() * 100, // Percentage position horizontally
  y: Math.random() * 100, // Percentage position vertically
  vx: Math.random() * 2 - 1, // Horizontal velocity
  vy: Math.random() * 2 - 1, // Vertical velocity
  size: Math.random() * 100 + 100, // Initial size of the orb
  sizeChangeRate: Math.random() * 2 - 1, // Rate of size change
  minSize: Math.random() * 900 + 50, // Minimum size
  maxSize: Math.random() * 2050 + 150, // Maximum size
  color: `radial-gradient(circle, rgba(${Math.floor(
    Math.random() * 200 + 55
  )}, ${Math.floor(Math.random() * 200 + 55)}, ${Math.floor(
    Math.random() * 200 + 55
  )}, 0.8), rgba(0, 0, 0, 0))`, // Vibrant gradient color
});

const BG_Animation = ({ theme, speedMultiplier = 0.1 }) => {
  const [orbs, setOrbs] = useState([]);

  useEffect(() => {
    // Initialize orbs
    const initialOrbs = Array.from({ length: 5 }, generateOrb);
    setOrbs(initialOrbs);
  }, []);

  useEffect(() => {
    const updateOrbs = () => {
      setOrbs((prevOrbs) =>
        prevOrbs.map((orb) => {
          let newX = orb.x + orb.vx * speedMultiplier;
          let newY = orb.y + orb.vy * speedMultiplier;
          let newVx = orb.vx;
          let newVy = orb.vy;
          let newSize = orb.size + orb.sizeChangeRate;

          // Reverse direction if hitting the edges
          if (newX <= 0 || newX >= 100) newVx *= -1;
          if (newY <= 0 || newY >= 100) newVy *= -1;

          // Keep orbs within bounds
          newX = Math.min(Math.max(newX, 0), 100);
          newY = Math.min(Math.max(newY, 0), 100);

          // Reverse size change if out of range
          if (newSize <= orb.minSize || newSize >= orb.maxSize) {
            orb.sizeChangeRate *= -1;
            newSize = Math.min(Math.max(newSize, orb.minSize), orb.maxSize);
          }

          return {
            ...orb,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            size: newSize,
          };
        })
      );
    };

    const interval = setInterval(updateOrbs, 30); // Update every 30ms
    return () => clearInterval(interval);
  }, [speedMultiplier]);

  // Conditionally change background color based on theme prop
  const backgroundColor = theme === "dark" ? "#121212" : "#ffffff";

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -1,
        backgroundColor: backgroundColor, // Use the background color based on the theme prop
      }}
    >
 
      {orbs.map((orb, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: `${orb.y}%`,
            left: `${orb.x}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: orb.color,
            borderRadius: "50%",
            filter: "blur(40px)", // More pronounced blur for larger orbs
            transform: "translate(-50%, -50%)",
            transition: "transform 0.03s linear, width 0.03s linear, height 0.03s linear",
          }}
        ></div>
      ))}
    </div>
  );
};

export default BG_Animation;