import { useState } from "react";

import styles from "./elements.module.css";

const Cham = ({ active, setActive, inverted = false }) => {
  const [show, setShow] = useState(false);
  return (
    <a
      onClick={() => {
        !active ? setActive(true) : setShow(false);
        !active &&
          setTimeout(() => {
            setShow(true);
          }, 50);
        active &&
          setTimeout(() => {
            setActive(false);
          }, 50);
      }}
      style={{
        // position: "absolute",
        zIndex: 1,
        all: "unset",
        width: "5vh",
        height: "3.5vh",
        padding: "2vh 1vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        //   backgroundColor: "red",
      }}
    >
      {[
        { id: 1, active: styles.lineOneActive },
        { id: 2, active: styles.lineTwoActive },
        { id: 3, active: styles.lineThreeActive },
      ].map((i, index) => {
        return (
          <div
            key={i?.id}
            className={[
              styles.line,
              show && i?.active,
              inverted && styles?.inverted,
            ].join(" ")}
          ></div>
        );
      })}
    </a>
  );
};

export default Cham;
