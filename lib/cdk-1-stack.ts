import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3'

// create L3 level constructor
class L3Bucket extends Construct {
  constructor(scope: Construct, id: string, expiration: number) {
    super(scope, id)

    new Bucket(this, 'L3Bucket', {
      lifecycleRules: [
        {
          expiration: cdk.Duration.days(expiration),
        },
      ],
    })
  }
}

export class Cdk1Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // create L1 constructor
    new CfnBucket(this, 'myL1Bucket', {
      lifecycleConfiguration: {
        rules: [
          {
            expirationInDays: 1,
            status: 'Enabled',
          },
        ],
      },
    })

    // create L2 level constructor
    const MyL2Bucket = new Bucket(this, 'MyL2Bucket', {
      //expired based on time and auto-delete
      lifecycleRules: [
        {
          expiration: cdk.Duration.days(2),
        },
      ],
    })
    // console.log('🚀 MyL2Bucket:', MyL2Bucket.bucketName) //this will give us ${Token[TOKEN.31]}, which is not useful

    // log bucket name with CnOutput
    new cdk.CfnOutput(this, 'MyL2BucketName', {
      value: MyL2Bucket.bucketName,
    })

    // call L3 level constructor
    new L3Bucket(this, 'MyL3Bucket', 3)
  }
}
