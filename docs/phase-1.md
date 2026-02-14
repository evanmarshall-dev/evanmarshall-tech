# Tech Services Website

## Architecture

![Phase 1 Architecture Diagram](./images/Tech%20Services%20Website%20Architecture.svg)

## Skills Breakdown

- DevOps:
  - API gateway + Lambda: Serverless REST API architecture (No server management and auto-scaling)
  - S3 + Cloudfront static hosting and CDN global content delivery, respectively
  - Infrastructure as code (Stretch goal to use AWS CDK)
  - Separation of concerns (Static content (S3 Bucket) vs dynamic API (Contact Form))
  - Cost Optimized (Pay only for what you use)
- Machine Learning (ML):
  - API gateway pattern to expose ML models (API Gateway -> Lambda -> ML Model)
  - Lambda for model inference endpoints
  - Scalable to allow adding a recommendation engine

## Minimum Viable Product (MVP)

- Pages:
  - Homepage (Hero section, services overview, and social proof)
  - Services (Detailed description of services)
  - About (Expertise and why to choose service provider)
  - Contact (Form with email integration)
- Features:
  - Responsive mobile-first design
  - Contact form that emails owner
  - Fast loading
  - SEO optimized
  - SSL certificate (HTTPS)
- Stretch MVP:
  - ML recommendation engine
  - User accounts/authentication
  - Payment processing
  - Booking system
  - Blog/CMS

## Setup

1. Makes sure node.js and npm are installed
2. Install AWS CLI: `Windows: Download from aws.amazon.com/cli` `Mac: brew install awscli`
3. Verify AWS CLI: `aws --version`
4. Configure AWS CLI:

```bash
aws configure
```

### Required for AWS Configure

**_AWS Access Key_**:

- Login to AWS Console at [aws.amazon](https://us-east-1.console.aws.amazon.com/console/home?nc2=h_uta_mc&region=us-east-1#)
