import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<h1 className={styles.title}>CI/CD Pipeline Demo</h1>
				<p className={styles.description}>
					A Next.js project demonstrating GitHub Actions CI/CD pipeline
				</p>
				<div className={styles.features}>
					<h2>Pipeline Features:</h2>
					<ul>
						<li>✅ Automated Testing</li>
						<li>✅ Code Linting</li>
						<li>✅ Build Verification</li>
						<li>✅ Staging Deployment</li>
						<li>✅ Production Deployment</li>
					</ul>
				</div>
			</div>
		</main>
	);
}
