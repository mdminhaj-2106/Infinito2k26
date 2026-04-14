import { useRef } from "react";
import styles from "./BannerEvent.module.css";
import useInView from "../../components/useInView";

function BannerEvent() {
  const ref = useRef();
  const isVisible = useInView(ref);
  return (
    <div className={styles.container}>
      <h1>EVENTS</h1>
      <div className={styles.slid} style={{ display: "flex" }}>
        <a
          href="#"
          ref={ref}
          className={`${styles.event}  ${isVisible ? styles.show : ""}`}
          style={{ backgroundImage: `url("./../../../public/dj.jpg")` }}
        >
          CULTURAL
        </a>
        <a
          ref={ref}
          className={`${styles.event} ${styles.event1} ${
            isVisible ? styles.show : ""
          }`}
          href="#"
          style={{ backgroundImage: `url("./../../../public/game.png")` }}
        >
          TECHNICAL
        </a>
        <a
          ref={ref}
          className={`${styles.event} ${isVisible ? styles.show : ""}`}
          href="#"
          style={{ backgroundImage: `url("./../../../public/robot.jpg")` }}
        >
          INFORMALS
        </a>
      </div>
    </div>
  );
}

export default BannerEvent;
