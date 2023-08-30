import React, { useEffect, useState } from "react";

import Head from "next/head";
import styles from "./elements.module.css";

const options = { day: "numeric", month: "long", year: "numeric" };
const optionsTwo = { year: "numeric", month: "numeric", day: "numeric" };

const CEmail = ({}) => {
  const [val, setVal] = useState('');
  return (
    <>
      <div className={[styles?.search, styles?.email].join(" ")}>
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
