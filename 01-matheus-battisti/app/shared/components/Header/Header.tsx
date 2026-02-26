import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles.list}>
					<li className={styles.item}>
						<Link href="/">Início</Link>
					</li>
					<li>
						<Link href="/about">Sobre</Link>
					</li>
					<li>
						<Link href="/products">Produtos</Link>
					</li>
					<li className={styles.item}>
						<Link href="/products/3">Produto</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
