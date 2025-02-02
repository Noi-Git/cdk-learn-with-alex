import * as cdk from 'aws-cdk-lib'
import { Bucket } from 'aws-cdk-lib/aws-s3'
import { Construct } from 'constructs'

export class PhotosStack extends cdk.Stack {
  private stackSuffix: string

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    new Bucket(this, 'PhotosBucket')
  }

  private initializeSufix() {
    //grab data in the index 2
    const shortStackId = cdk.Fn.select(2, cdk.Fn.split('/', this.stackId))
    //grab data in the index 4
    this.stackSuffix = cdk.Fn.select(4, cdk.Fn.split('-', this.stackId))
  }
}
