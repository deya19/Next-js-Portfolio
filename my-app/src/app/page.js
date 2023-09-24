import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png"; // we don't need to write width or hight
import Button from "@/components/button/button";
{
  /* <Image height={500} width={500} src='https://images.pexels.com/photos/5812094/pexels-photo-5812094.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' className={styles.img}/> */
}

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
