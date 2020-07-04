// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Thread, Post, Contact } = initSchema(schema);

export {
  Thread,
  Post,
  Contact
};