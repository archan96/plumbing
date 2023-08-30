import React, { useEffect, useState } from "react";

import Head from "next/head";
import styles from "./elements.module.css";
import useWindowDimensions from "@/app/hooks/windowDimention";

const options = { day: "numeric", month: "long", year: "numeric" };
const optionsTwo = { year: "numeric", month: "numeric", day: "numeric" };

const CEmail = ({}) => {
  const [val, setVal] = useState('');
  const {mobile} = useWindowDimensions();
  return (
    <>
      <div className={[styles?.search, styles?.email, mobile && styles?.mob].join(" ")}>
        <input
          placeholder={`Your Email Id`}
          type="email"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <button>Join</button>
      </div>
    </>
  );
};

export default CEmail;
