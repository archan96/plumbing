"use client";

import Header from "../components/header/header";
import Styles from "./root.module.css";
import toast, { Toaster } from "react-hot-toast";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className={Styles?.container}>
        <Header />
        {children}
      </div>
      <Toaster
        position="top-left"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "var(--background-300)",
            color: "var(--dark-100)",
          },

          // Default options for specific types
          success: {
            duration: 5000,
            theme: {
              primary: "var(--background-300)",
              secondary: "var(--accent-100)",
            },
          },
          error: {
            duration: 5000,
            theme: {
              primary: "var(--background-300)",
              secondary: "var(--accent-200)",
            },
          },
        }}
      />
    </>
  );
};

export default MainLayout;
