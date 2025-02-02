import * as cdk from 'aws-cdk-lib'
import { Bucket } from 'aws-cdk-lib/aws-s3'
import { Construct } from 'constructs'

export class PhotosStack extends cdk.Stack {
  private stackSuffix: string

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    //call the function
    this.initializeSuffix()

    const photosBucket = new Bucket(this, 'PhotosBucket', {
      bucketName: `photos-bucket-${this.stackSuffix}`,
    })

    //the 'photos-bucket' is from the PhotosHandlerStack
    new cdk.CfnOutput(this, 'photos-bucket', {
      //use bucketArn for referance
      value: photosBucket.bucketArn,
      exportName: 'photos-bucket',
    })
  }

  private initializeSuffix() {
    //grab data in the index 2
    const shortStackId = cdk.Fn.select(2, cdk.Fn.split('/', this.stackId))
    //grab data in the index 4
    this.stackSuffix = cdk.Fn.select(4, cdk.Fn.split('-', shortStackId))
  }
}
