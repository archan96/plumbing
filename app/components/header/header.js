import CButton from "../elements/button";
import Styles from "./header.module.css";

const Header = () => {
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
        <a className={Styles?.logo}>
          <img src="/assets/images/LLOYD.png" />
        </a>
        <div className={Styles?.nav}>
          {menu?.map((i) => {
            return <a key={i?.id}>{i?.name}</a>;
          })}
        </div>
      </div>
      <CButton title="Get a Quote" />
    </header>
  );
};

export default Header;
