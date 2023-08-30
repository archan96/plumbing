"use client"; 
import useWindowDimensions from "@/app/hooks/windowDimention";
import CEmail from "../elements/email";
import SocialIcons from "../socialicons/social";
import Styles from "./footer.module.css";

const Footer = () => {
  const {mobile} = useWindowDimensions();
  return (
    <div className={[Styles?.footer, mobile && Styles?.mob].join(" ")}>
      <div className={[Styles?.first, mobile && Styles?.mob].join(" ")}>
        <p>Sign up for our newsletter.</p>
        <CEmail />
        <p>
          © In association with <span>xynes</span>
        </p>
      </div>
      <div className={[Styles?.second, mobile && Styles?.mob].join(" ")}>
        <p>Lloyd Plumbing Services</p>
        <a href="tel:+1 869 766 1987">+1 869 766 1987</a>
        <a href="mailto:hi@lloyed.com">hi@lloyed.com</a>
        <p>14, Souther Avenue, USA, 712201</p><br/>
        <SocialIcons/>
      </div>
    </div>
  );
};

export default Footer;
