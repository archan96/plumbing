
import React, { useEffect, useState} from "react";

import Head from "next/head";
import styles from "./elements.module.css";

const options = { day: "numeric", month: "long", year: "numeric" };
const optionsTwo = { year: "numeric", month: "numeric", day: "numeric" };



const CInput = ({
  max = null,
  inputType = "text",
  hidden = false,
  val,
  setVal,
  title = "",
  flexClass,
  inputClass,
}) => {
  const [useNow, setUserrNow] = useState();
  const [loading, setLoading] = useState(false);

  const [signUpError, setSignUpError] = useState(false);
  const [signUpErrorMSG, setSignUpErrorMSG] = useState("Can't sign up now.");

  return (
    <>
      <div className={[styles?.container, flexClass].join(" ")}>
        {title?.length > 0 && <p>{title} :</p>}
        <input
          maxLength={max == null ? 99999999999 : max}
          inputMode={inputType}
          className={[styles?.inputNow, inputClass].join(" ")}
          placeholder={`Enter ${title}`}
          type={hidden ? "password" : "text"}
          value={val}
          onChange={(e) => {
            if (max != null) {
              if (e.target.value.length > max) {
                return;
              }
            }
            inputType == "number"
              ? setVal(e.target.value.replace(/\D/g, ""))
              : setVal(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default CInput;
