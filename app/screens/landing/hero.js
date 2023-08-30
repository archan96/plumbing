import CButton from "@/app/components/elements/button";
import Styles from "./hero.module.css";
import Image from "next/image";
import SocialIcons from "@/app/components/socialicons/social";

const Hero = () => {
  return (
    <div className={[Styles?.container].join(" ")}>
      <div className={[Styles?.first].join(" ")}>
        <Image
          src={"/assets/images/hero.webp"}
          width={1920}
          height={1920}
          className={Styles?.img}
        />
      </div>
      <div className={[Styles?.second].join(" ")}>
        <p className={[Styles?.title].join(" ")}>
          Your solution for every plumbing problem.
        </p>
        <CButton transparent={true} title="Book Now" />
      </div>
      <div className={Styles?.social}>
        <SocialIcons />
      </div>
    </div>
  );
};

export default Hero;
