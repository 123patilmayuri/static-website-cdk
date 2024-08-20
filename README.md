# Static Website Deployment using AWS CDK (TypeScript)

This project demonstrates how to deploy a static website using AWS CDK with TypeScript. The website will be hosted on an S3 bucket with CloudFront for content delivery.

Prerequisites
Before you begin, ensure that you have the following installed:

Node.js (v14 or later)
npm (Node Package Manager)
AWS CLI (configured with your credentials)
AWS CDK (installed globally)
To install AWS CDK globally, run:
```npm install -g aws-cdk```

## Project Setup
1. Clone the Repository
git clone <repository-url>
cd <repository-directory>

The `cdk.json` file tells the CDK Toolkit how to execute your app√

2. Install Dependencies
Navigate to the project directory and install the required dependencies:
```npm install```

3. Configure AWS CLI
Ensure that your AWS CLI is configured with appropriate access. Run the following command to configure your credentials:
```aws configure```
4. Create a CDK Stack

The CDK stack will include resources like an S3 bucket for hosting, a CloudFront distribution for content delivery, and Route 53 for DNS configuration (if applicable).

## Deployment Steps
1. Bootstrap the CDK Environment
Before deploying the stack, you need to bootstrap your AWS environment if you haven't done so already:
```cdk bootstrap```
This command prepares your AWS account to host the resources defined by the CDK.

2. Define and Synthesize the CDK Stack
To check the CloudFormation template that will be generated by CDK, you can synthesize the stack:
```cdk synth```

3. Deploy the Stack
Deploy the resources defined in the CDK stack to your AWS account:
```cdk deploy``

4. Verify the Deployment
After the deployment completes successfully, the URL for the CloudFront distribution (or your custom domain) will be provided in the output. Navigate to this URL to verify that your static website is up and running.

5. Cleanup Resources (Optional)
If you want to delete the resources created by the CDK stack:
```cdk destroy```

Code Quality and Testing
1. Run ESLint - npm run lint
2. Run Unit Tests - npm test
3. Format Code with Prettier - npm run format


## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
