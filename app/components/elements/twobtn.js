import React, { useEffect, useState} from "react";

import Head from "next/head";
import styles from "./elements.module.css";

const options = { day: "numeric", month: "long", year: "numeric" };
const optionsTwo = { year: "numeric", month: "numeric", day: "numeric" };

const CTwoBtn = ({
  btnStyle,
  shadow = true,
  labelOne = "Submit",
  labelTwo = "Cancel",
  leftPress,
  rightPress,
}) => {
  const [useNow, setUserrNow] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className={[styles?.twobtn].join(" ")}>
        <button
          onClick={() => {
            leftPress();
          }}
          className={[
            styles?.btn,
            styles?.twobtn,
            styles?.one,
            btnStyle,
            shadow && "shadow",
          ].join(" ")}
        >
          <p>{labelOne}</p>
        </button>
        <button
          onClick={() => {
            rightPress();
          }}
          className={[
            styles?.btn,
            styles?.twobtn,
            styles?.two,
            btnStyle,
            shadow && "shadow",
          ].join(" ")}
        >
          <p>{labelTwo}</p>
        </button>
      </div>
    </>
  );
};

export default CTwoBtn;
