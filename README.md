# CI/CD with GitHub Actions Demo

This is a [Next.js](https://nextjs.org/) project demonstrating CI/CD pipeline implementation using GitHub Actions.

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
