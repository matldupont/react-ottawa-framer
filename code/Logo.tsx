import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import "./styles.css";

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function Logo() {
  // const [hovering, setHovering] = React.useState(false);
  const controls = useAnimation();

  const logo = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  };

  const ringStyles = {
    stroke: "#ffffff",
    strokeWidth: "2",
    strokeLineJoin: "round",
    strokeLineCap: "round",
    fill: "none"
  };

  const nucleusStyle = {
    stroke: "#ffffff",
    strokeWidth: "2",
    strokeLineJoin: "round",
    strokeLineCap: "round"
  };

  const rings = [
    {
      id: "one",
      d:
        "M160.13366800000003,287.090779a107.208428,266.343216 0 1,0 214.416856,0a107.208428,266.343216 0 1,0 -214.416856,0",
      transform:
        "translate(267.342096, 287.090779) rotate(30.000000) translate(-267.342096, -287.090779)"
    },
    {
      id: "two",
      d:
        "M160.11612100000002,285.65152a107.225975,266.29986 0 1,0 214.45195,0a107.225975,266.29986 0 1,0 -214.45195,0",
      transform:
        "translate(267.342096, 285.651520) rotate(90.000000) translate(-267.342096, -285.651520) "
    },
    {
      id: "three",
      d:
        "M160.13366800000003,285.65152a107.208428,266.343216 0 1,0 214.416856,0a107.208428,266.343216 0 1,0 -214.416856,0",
      transform:
        "translate(267.342096, 285.651520) rotate(150.000000) translate(-267.342096, -285.651520) "
    }
  ];

  controls.start("visible");

  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 535 478"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      onHoverStart={() => {
        controls.start("hidden", {
          default: { duration: 1, ease: "easeInOut" }
        });
      }}
      onHoverEnd={() =>
        controls.start("visible", {
          default: { duration: 1, ease: "easeInOut" }
        })
      }
    >
      <g id="ReactOttawaLogo" transform="translate(-81.000000, -124.000000)">
        <g id="ReactOttawa" transform="translate(81.000000, 77.000000)">
          {rings.map(({ id, d, transform }) => (
            <motion.path
              key={id}
              initial="hidden"
              variants={logo}
              animate={controls}
              style={ringStyles}
              id={id}
              transform={transform}
              d={d}
              transition={{
                default: { duration: 2, ease: "easeInOut" }
              }}
            />
          ))}

          <motion.path
            variants={logo}
            initial="hidden"
            animate={controls}
            id="Oval-2"
            d="M234.3584071,286.5a33.1415929,33.1487603 0 1,0 66.2831858,0a33.1415929,33.1487603 0 1,0 -66.2831858,0"
            style={nucleusStyle}
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] }
            }}
          />
        </g>
      </g>
    </motion.svg>
  );
}
