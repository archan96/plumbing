import useWindowDimensions from "@/app/hooks/windowDimention";
import CButton from "../elements/button";
import Styles from "./header.module.css";

const Header = () => {
  const { mobile } = useWindowDimensions();
  const menu = [
    {
      id: 1,
      name: "Home",
      route: "/",
    },
    {
      id: 2,
      name: "About",
      route: "/about",
    },
    {
      id: 3,
      name: "Contact Us",
      route: "/contact",
    },
  ];

  return (
    <header className={[Styles?.head].join(" ")}>
      <div className={Styles?.first}>
        <a className={[Styles?.logo, mobile && Styles?.mob].join(" ")}>
          <img src="/assets/images/LLOYD.png" />
        </a>
        {!mobile && (
          <div className={Styles?.nav}>
            {menu?.map((i) => {
              return <a key={i?.id}>{i?.name}</a>;
            })}
          </div>
        )}
      </div>
      <CButton title="Get a Quote" btnStyle={[mobile && Styles?.btn].join(" ")} />
    </header>
  );
};

export default Header;
