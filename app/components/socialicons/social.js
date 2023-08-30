import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Styles from "./social.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcons = () => {
  const array = [
    {
      id: 1,
      title: "Instagram",
      icon: faInstagram,
    },
    {
      id: 2,
      title: "Twitter",
      icon: faTwitter,
    },
    {
      id: 3,
      title: "Facebook",
      icon: faFacebook,
    },
  ];
  return (
    <div className={Styles?.socialIcons}>
      {array?.map((i, index) => {
        return (
          <a
            title={i?.title}
            style={{
              marginLeft: index == 0 ? 0 : "1vw",
              cursor: "pointer",
            }}
            key={i?.id}
          >
            <FontAwesomeIcon
              icon={i?.icon}
              style={{
                height: "4vh",
              }}
              color={"var(--dark-100)"}
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
