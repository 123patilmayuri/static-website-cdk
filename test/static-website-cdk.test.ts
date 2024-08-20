import { Template } from 'aws-cdk-lib/assertions';
import { StaticWebsiteCdkStack } from '../lib/static-website-cdk-stack';
import { App } from 'aws-cdk-lib';

test('S3 Bucket Created', () => {
  const app = new App();
  const stack = new StaticWebsiteCdkStack(app, 'MyTestStack');

  // Prepare the template
  const template = Template.fromStack(stack);

  // Assert that an S3 bucket is created with the correct properties
  template.hasResourceProperties('AWS::S3::Bucket', {
    WebsiteConfiguration: {
      IndexDocument: 'index.html',
      ErrorDocument: 'error.html',
    },
  });

  // Assert that CloudFront distribution is created
  template.resourceCountIs('AWS::CloudFront::Distribution', 1);
});
