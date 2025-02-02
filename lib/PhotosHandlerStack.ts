import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { Fn } from 'aws-cdk-lib'
import { Function as LambdaFunction } from 'aws-cdk-lib/aws-lambda'

export class PhotosHandlerStack extends cdk.Stack {
  private targetBucket = Fn.importValue('photos-bucket')

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // new LambdaFunction()
  }
}
