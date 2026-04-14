import styles from "./BannerAbout.module.css";
import img from "./../../../public/about_20.png";
import img2 from "./../../../public/about_19.png";
import { useRef } from "react";
import useInView from "../../components/useInView";

function BannerAbout() {
  const ref = useRef();
  const isVisible = useInView(ref);
  return (
    <div className={styles.container}>
      <div className={styles.line}>
        <h2
          ref={ref}
          className={`${styles.h2} ${isVisible ? styles.show : ""}`}
        >
          WELCOME TO INFINITO
        </h2>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <div className={styles.content2}>
            Infinito is the annual sports fest of IIT Patna. Once a humble
            initiative, after just nine editions, Infinito has already grown
            into the biggest and most awaited sports fest of Bihar. It is an
            endeavor to ensure that no talent goes unnoticed. Through Infinito
            we provide people a platform where they can not only display their
            skills but also learn and develop the qualities of a true sportsman.
            Knit together are the virtues of team spirit, undying determination
            and zeal, and Infinito is an embodiment of them all. Infinito is a
            three days fest and these three days see participation from colleges
            all over India. With a plethora of sporting events and exhilarating
            cultural nights we leave no stones unturned into ensuring that these
            three days are filled with fun and thrill and that everyone who is a
            part of our ever-growing family gets to make the most beautiful of
            memories. Lets sweat to glory, together.
          </div>
        </div>
        <div className={styles.side}>
          <img className={styles.img} src={img} alt="ff" />
          <img className={styles.img2} src={img2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BannerAbout;
