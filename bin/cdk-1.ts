#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib'
import { Cdk1Stack } from '../lib/cdk-1-stack'
import { PhotosStack } from '../lib/PhotosStack'

const app = new cdk.App()
// new Cdk1Stack(app, 'Cdk1Stack', {})
new PhotosStack(app, 'PhotosStack')
