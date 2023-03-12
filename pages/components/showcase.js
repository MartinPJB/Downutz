import styles from "../../styles/showcase.module.css";
import Image from "next/image";

export default function Showcase() {
    return (
        <section id="showcase" className={styles.ShowcaseContent}>
            <article className={`${styles.Parallax} ${styles.Simpson}`}>
                <article className={styles.DonutPic}>
                    <Image
                        src="/donuts/TheSimpson.png"
                        alt="The Simpson donut"
                        layout="fill"
                        loading="lazy"
                    />
                </article>
                <h1>The Simpson</h1>
                <button>Read more</button>
            </article>

            <article className={`${styles.Parallax} ${styles.Chocolate}`}>
                <article className={styles.DonutPic}>
                    <Image
                        src="/donuts/ChocolateTasty.png"
                        alt="The Chocolate donut"
                        layout="fill"
                        loading="lazy"
                    />
                </article>
                <h1>The Chocolate-Tasty</h1>
                <button>Read more</button>
            </article>

            <article className={`${styles.Parallax} ${styles.Bubble}`}>
                <article className={styles.DonutPic}>
                    <Image
                        src="/donuts/BubbleBerry.png"
                        alt="The Blueberry donut"
                        layout="fill"
                        loading="lazy"
                    />
                </article>
                <h1>The Bubble-Berry</h1>
                <button>Read more</button>
            </article>

            <article className={`${styles.Parallax} ${styles.Banana}`}>
                <article className={styles.DonutPic}>
                    <Image
                        src="/donuts/BananaBlondie.png"
                        alt="The Banana donut"
                        layout="fill"
                        loading="lazy"
                    />
                </article>
                <h1>The Banana-Blondie</h1>
                <button>Read more</button>
            </article>
        </section>
    );
}