// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Thread, Post, Contact, S3Object } = initSchema(schema);

export {
  Thread,
  Post,
  Contact,
  S3Object
};