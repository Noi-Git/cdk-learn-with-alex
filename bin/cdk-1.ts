#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib'
import { Cdk1Stack } from '../lib/cdk-1-stack'
import { PhotosStack } from '../lib/PhotosStack'
import { PhotosHandlerStack } from '../lib/PhotosHandlerStack'

const app = new cdk.App()
// new Cdk1Stack(app, 'Cdk1Stack', {})
new PhotosStack(app, 'PhotosStack')
new PhotosHandlerStack(app, 'PhotosHandlerStack')
