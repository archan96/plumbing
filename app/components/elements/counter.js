import styles from "./elements.module.css";

const CCounter = ({ now, max }) => {
  return (
    <div className={styles?.count}>
      <p>
        {now} / {max}
      </p>
    </div>
  );
};

export default CCounter;
