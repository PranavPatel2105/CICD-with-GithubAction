import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<h1 className={styles.title}>CI/CD Pipeline Demo</h1>
				<h2 className={styles.author}>Created by Pranav Patel</h2>
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
				<div className={styles.goals}>
					<h2>🎯 Project Goals</h2>
					<ul>
						<li>🚀 Implement automated deployment workflow</li>
						<li>🔍 Ensure code quality through automated testing</li>
						<li>🛠️ Master modern CI/CD practices</li>
						<li>📱 Create responsive and user-friendly interface</li>
						<li>🔄 Maintain continuous integration standards</li>
					</ul>
					<p className={styles.quote}>
						"Quality is not an act, it is a habit." - Aristotle
					</p>
				</div>
				<div className={styles.technologies}>
					<h2>⚡ Technologies Used</h2>
					<div className={styles.techGrid}>
						<div className={styles.techItem}>
							<span>⚛️</span>
							<h3>Next.js</h3>
							<p>React Framework</p>
						</div>
						<div className={styles.techItem}>
							<span>🔄</span>
							<h3>GitHub Actions</h3>
							<p>CI/CD Pipeline</p>
						</div>
						<div className={styles.techItem}>
							<span>▲</span>
							<h3>Vercel</h3>
							<p>Deployment Platform</p>
						</div>
						<div className={styles.techItem}>
							<span>📦</span>
							<h3>npm</h3>
							<p>Package Manager</p>
						</div>
					</div>
				</div>
				<div className={styles.statusCheck}>
					<h3>🔄 Status Check</h3>
					<p>Last Deployment: <span className={styles.timestamp}>{new Date().toLocaleString()}</span></p>
					<div className={styles.statusBadge}>
						<span className={styles.dot}></span>
						System Status: Online
					</div>
				</div>
			</div>
		</main>
	);
}
