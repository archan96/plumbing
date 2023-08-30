'use client';

import React from "react";

import Head from "next/head";
import styles from "./elements.module.css";
import useWindowDimensions from "@/app/hooks/windowDimention";

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
  const {mobile} = useWindowDimensions();

  return (
    <>
      <button
        onClick={() => {
          submit();
        }}
        className={[styles?.btn, btnStyle, shadow && styles?.shadow, transparent && styles?.border, mobile && styles?.mob].join(" ")}
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
