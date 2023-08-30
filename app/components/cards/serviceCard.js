import Styles from "./sc.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ServiceCard = ({ item }) => {
    const [isLarge, setIsLarge] = useState(false);
    const ref = useRef(null);

    useEffect(()=>{
        let width = ref?.current?.offsetWidth;
        let height = ref?.current?.offsetHeight;

        if(width > height*2) {
            setIsLarge(true);
        } else {
            setIsLarge(false);
        }
    },[]);


  
  return (
    <div ref={ref} className={Styles?.container}>
      <Image
        src={item?.img}
        width={1000}
        height={1000}
        className={Styles?.img}
      />
      <div className={[Styles?.card, isLarge && Styles?.large].join(" ")}>
        <p>{item?.title}</p>
        <p>Install - Repair - Clean</p>
      </div>
    </div>
  );
};

export default ServiceCard;
