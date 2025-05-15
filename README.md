# CICD with GitHub Actions

This project demonstrates a CI/CD pipeline using GitHub Actions and Vercel deployment.

## Pipeline Features

- **Continuous Integration**:
  - Linting
  - Testing
  - Building

- **Continuous Deployment**:
  - Staging deployment on Pull Requests
  - Production deployment on merge to master

## Deployment URLs

- Production: https://cicd-with-github-action.vercel.app/
- Staging: Generated dynamically for each PR

## Technology Stack

- Next.js
- GitHub Actions
- Vercel

## Features

- Automated Testing
- Code Linting
- Build Verification
- Staging Deployment
- Production Deployment

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and continuous deployment. The pipeline includes:

1. **Lint**: Checks code quality using ESLint
2. **Test**: Runs Jest tests
3. **Build**: Verifies the build process
4. **Deploy**: 
   - Staging deployment for pull requests
   - Production deployment for main branch

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Vercel Platform](https://vercel.com/)
