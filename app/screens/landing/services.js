"use client"; 
import ServiceCard from "@/app/components/cards/serviceCard";
import Styles from "./services.module.css";

const Services = () => {
  const array = [
    {
      id: 1,
      title: "Designer Washroom",
      img: "/assets/images/washroom.webp",
    },
    {
      id: 2,
      title: "Modern Kitchen",
      img: "/assets/images/kitchen.webp",
    },
    {
      id: 3,
      title: "Industry - Office",
      img: "/assets/images/industry.webp",
    },
    {
      id: 4,
      title: "Complete House",
      img: "/assets/images/house.webp",
    },
  ];
  return (
    <div className={Styles.container}>
      <div className={Styles?.first}>
        <div className={Styles?.paragraphs}>
          <p>Our Services</p>
          <p>
            We work with your comfort. Providing a clean and hassle free
            service.
          </p>
        </div>

        <div
          style={{
            flex: 1,
            height: "100%",
          }}
        >
          <ServiceCard item={array[0]} />
        </div>
      </div>
      <div className={Styles?.second}>
        {array?.slice(1, 4)?.map((i, index) => {
          return (
            <div key={i?.id} className={Styles?.items}>
              <ServiceCard item={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
