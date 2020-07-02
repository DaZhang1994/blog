import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

export declare class Thread {
  readonly id: string;
  readonly subject: string;
  readonly featuredImg?: S3Object;
  readonly posts?: Post[];
  constructor(init: ModelInit<Thread>);
  static copyOf(source: Thread, mutator: (draft: MutableModel<Thread>) => MutableModel<Thread> | void): Thread;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly featuredImg?: S3Object;
  readonly thread?: Thread;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class Contact {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly content: string;
  constructor(init: ModelInit<Contact>);
  static copyOf(source: Contact, mutator: (draft: MutableModel<Contact>) => MutableModel<Contact> | void): Contact;
}