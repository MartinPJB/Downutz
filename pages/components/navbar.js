import styles from "../../styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={styles.NavbarContent} role="navigation" aria-label="Main navigation bar">
            <article className={styles.Image}>
                <Image
                    src="/donuts/brand.png"
                    alt="Branding"
                    layout="fill"
                    loading="lazy"
                />
            </article>

            <ul className={styles.Liens}>
                <li>
                    <Link href="./" >
                        <span>Our donuts</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}