import React, { useEffect, useState} from "react";

import Head from "next/head";
import styles from "./elements.module.css";

const options = { day: "numeric", month: "long", year: "numeric" };
const optionsTwo = { year: "numeric", month: "numeric", day: "numeric" };

const CTextArea = ({
  max = null,
  inputType = "text",
  hidden = false,
  val,
  setVal,
  title = "",
  flexClass,
  inputClass,
  inverted = false
}) => {
  const [useNow, setUserrNow] = useState();
  const [loading, setLoading] = useState(false);

  const [signUpError, setSignUpError] = useState(false);
  const [signUpErrorMSG, setSignUpErrorMSG] = useState("Can't sign up now.");


  return (
    <>
      <div className={[styles?.container, styles?.taCOntain, inverted && styles?.inverted, flexClass].join(" ")}>
        {title?.length > 0 && <p>{title} :</p>}
        <textarea
          maxLength={max == null ? 99999999999 : max}
          rows={4}
          cols={40}
          className={[styles?.inputNow, styles?.textarea, inputClass].join(" ")}
          placeholder={`Enter ${title}`}
          type={hidden ? "password" : "text"}
          value={val}
          onChange={(e) => {
            if (max != null) {
              if (e.target.value.length > max) {
                return;
              }
            }
            setVal(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default CTextArea;
