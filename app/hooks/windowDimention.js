import React, { useState, useEffect } from "react";

function getWindowDimensions() {
  let width = 1920;
  let height = 1080;
  let outHeight = 1080;
  if (typeof window !== "undefined") {
    // console.log("You are on the browser,You are good to go");
    // const { innerWidth: width, innerHeight: height } = window;
    width = window.innerWidth;
    height = window.innerHeight;
    outHeight = window.outerHeight;
  } else {
    console.log("You are on the server,Cannot execute");
  }
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [mobile, setMobile] = useState();

  useEffect(() => {
    handleResize();
    function handleResize() {
      let obj = getWindowDimensions();
      setWindowDimensions(obj);
      let { width, height } = getWindowDimensions();
      if (height > width) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { windowDimensions, mobile };
}
