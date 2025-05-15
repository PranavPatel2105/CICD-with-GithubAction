import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<h1 className={styles.title}>Hi! This is CICD with GithubAction developed by Pranav Patel</h1>
			</div>
		</main>
	);
}
