'use client';

import React from "react";

import Head from "next/head";
import styles from "./elements.module.css";

const options = { day: "numeric", month: "long", year: "numeric" };
const optionsTwo = { year: "numeric", month: "numeric", day: "numeric" };


const CButton = ({
  submit,
  btnStyle,
  color = "var(--brand-100)",
  shadow = true,
  title = "Submit",
  transparent = false
}) => {


  return (
    <>
      <button
        onClick={() => {
          submit();
        }}
        className={[styles?.btn, btnStyle, shadow && styles?.shadow, transparent && styles?.border].join(" ")}
        style={{
          backgroundColor: transparent ? 'transparent' : color,
          borderColor: !transparent ? 'transparent' : color,
        }}
      >
        <p>{title ?? "Submit"}</p>
      </button>
    </>
  );
};

export default CButton;
