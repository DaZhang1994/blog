/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from '@angular/core';
import API, { graphqlOperation } from '@aws-amplify/api';
import { Observable } from 'zen-observable-ts';

export type CreateThreadInput = {
  id?: string | null;
  subject: string;
  featuredImg?: S3ObjectInput | null;
  _version?: number | null;
};

export type S3ObjectInput = {
  bucket: string;
  region: string;
  key: string;
};

export type ModelThreadConditionInput = {
  subject?: ModelStringInput | null;
  and?: Array<ModelThreadConditionInput | null> | null;
  or?: Array<ModelThreadConditionInput | null> | null;
  not?: ModelThreadConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateThreadInput = {
  id: string;
  subject?: string | null;
  featuredImg?: S3ObjectInput | null;
  _version?: number | null;
};

export type DeleteThreadInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreatePostInput = {
  id?: string | null;
  title: string;
  content: string;
  featuredImg?: S3ObjectInput | null;
  threadID: string;
  _version?: number | null;
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  threadID?: ModelIDInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdatePostInput = {
  id: string;
  title?: string | null;
  content?: string | null;
  featuredImg?: S3ObjectInput | null;
  threadID?: string | null;
  _version?: number | null;
};

export type DeletePostInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateContactInput = {
  id?: string | null;
  name: string;
  email: string;
  subject: string;
  content: string;
  _version?: number | null;
};

export type ModelContactConditionInput = {
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  subject?: ModelStringInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelContactConditionInput | null> | null;
  or?: Array<ModelContactConditionInput | null> | null;
  not?: ModelContactConditionInput | null;
};

export type UpdateContactInput = {
  id: string;
  name?: string | null;
  email?: string | null;
  subject?: string | null;
  content?: string | null;
  _version?: number | null;
};

export type DeleteContactInput = {
  id?: string | null;
  _version?: number | null;
};

export type ModelThreadFilterInput = {
  id?: ModelIDInput | null;
  subject?: ModelStringInput | null;
  and?: Array<ModelThreadFilterInput | null> | null;
  or?: Array<ModelThreadFilterInput | null> | null;
  not?: ModelThreadFilterInput | null;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  threadID?: ModelIDInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelContactFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  subject?: ModelStringInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelContactFilterInput | null> | null;
  or?: Array<ModelContactFilterInput | null> | null;
  not?: ModelContactFilterInput | null;
};

export type CreateThreadMutation = {
  __typename: "Thread";
  id: string;
  subject: string;
  featuredImg: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      threadID: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateThreadMutation = {
  __typename: "Thread";
  id: string;
  subject: string;
  featuredImg: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      threadID: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteThreadMutation = {
  __typename: "Thread";
  id: string;
  subject: string;
  featuredImg: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      threadID: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  featuredImg: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  threadID: string;
  thread: {
    __typename: "Thread";
    id: string;
    subject: string;
    featuredImg: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  featuredImg: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  threadID: string;
  thread: {
    __typename: "Thread";
    id: string;
    subject: string;
    featuredImg: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeletePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  featuredImg: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  threadID: string;
  thread: {
    __typename: "Thread";
    id: string;
    subject: string;
    featuredImg: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateContactMutation = {
  __typename: "Contact";
  id: string;
  name: string;
  email: string;
  subject: string;
  content: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateContactMutation = {
  __typename: "Contact";
  id: string;
  name: string;
  email: string;
  subject: string;
  content: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteContactMutation = {
  __typename: "Contact";
  id: string;
  name: string;
  email: string;
  subject: string;
  content: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type SyncThreadsQuery = {
  __typename: "ModelThreadConnection";
  items: Array<{
    __typename: "Thread";
    id: string;
    subject: string;
    featuredImg: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetThreadQuery = {
  __typename: "Thread";
  id: string;
  subject: string;
  featuredImg: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      threadID: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListThreadsQuery = {
  __typename: "ModelThreadConnection";
  items: Array<{
    __typename: "Thread";
    id: string;
    subject: string;
    featuredImg: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncPostsQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    featuredImg: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    threadID: string;
    thread: {
      __typename: "Thread";
      id: string;
      subject: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetPostQuery = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  featuredImg: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  threadID: string;
  thread: {
    __typename: "Thread";
    id: string;
    subject: string;
    featuredImg: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    featuredImg: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    threadID: string;
    thread: {
      __typename: "Thread";
      id: string;
      subject: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncContactsQuery = {
  __typename: "ModelContactConnection";
  items: Array<{
    __typename: "Contact";
    id: string;
    name: string;
    email: string;
    subject: string;
    content: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetContactQuery = {
  __typename: "Contact";
  id: string;
  name: string;
  email: string;
  subject: string;
  content: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListContactsQuery = {
  __typename: "ModelContactConnection";
  items: Array<{
    __typename: "Contact";
    id: string;
    name: string;
    email: string;
    subject: string;
    content: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type OnCreateThreadSubscription = {
  __typename: "Thread";
  id: string;
  subject: string;
  featuredImg: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      threadID: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateThreadSubscription = {
  __typename: "Thread";
  id: string;
  subject: string;
  featuredImg: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      threadID: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteThreadSubscription = {
  __typename: "Thread";
  id: string;
  subject: string;
  featuredImg: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      threadID: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  featuredImg: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  threadID: string;
  thread: {
    __typename: "Thread";
    id: string;
    subject: string;
    featuredImg: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  featuredImg: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  threadID: string;
  thread: {
    __typename: "Thread";
    id: string;
    subject: string;
    featuredImg: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  featuredImg: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  threadID: string;
  thread: {
    __typename: "Thread";
    id: string;
    subject: string;
    featuredImg: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateContactSubscription = {
  __typename: "Contact";
  id: string;
  name: string;
  email: string;
  subject: string;
  content: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateContactSubscription = {
  __typename: "Contact";
  id: string;
  name: string;
  email: string;
  subject: string;
  content: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteContactSubscription = {
  __typename: "Contact";
  id: string;
  name: string;
  email: string;
  subject: string;
  content: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateThread(
    input: CreateThreadInput,
    condition?: ModelThreadConditionInput
  ): Promise<CreateThreadMutation> {
    const statement = `mutation CreateThread($input: CreateThreadInput!, $condition: ModelThreadConditionInput) {
        createThread(input: $input, condition: $condition) {
          __typename
          id
          subject
          featuredImg {
            __typename
            bucket
            region
            key
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              threadID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateThreadMutation>response.data.createThread;
  }
  async UpdateThread(
    input: UpdateThreadInput,
    condition?: ModelThreadConditionInput
  ): Promise<UpdateThreadMutation> {
    const statement = `mutation UpdateThread($input: UpdateThreadInput!, $condition: ModelThreadConditionInput) {
        updateThread(input: $input, condition: $condition) {
          __typename
          id
          subject
          featuredImg {
            __typename
            bucket
            region
            key
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              threadID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateThreadMutation>response.data.updateThread;
  }
  async DeleteThread(
    input: DeleteThreadInput,
    condition?: ModelThreadConditionInput
  ): Promise<DeleteThreadMutation> {
    const statement = `mutation DeleteThread($input: DeleteThreadInput!, $condition: ModelThreadConditionInput) {
        deleteThread(input: $input, condition: $condition) {
          __typename
          id
          subject
          featuredImg {
            __typename
            bucket
            region
            key
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              threadID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteThreadMutation>response.data.deleteThread;
  }
  async CreatePost(
    input: CreatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
        createPost(input: $input, condition: $condition) {
          __typename
          id
          title
          content
          featuredImg {
            __typename
            bucket
            region
            key
          }
          threadID
          thread {
            __typename
            id
            subject
            featuredImg {
              __typename
              bucket
              region
              key
            }
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async UpdatePost(
    input: UpdatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<UpdatePostMutation> {
    const statement = `mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
        updatePost(input: $input, condition: $condition) {
          __typename
          id
          title
          content
          featuredImg {
            __typename
            bucket
            region
            key
          }
          threadID
          thread {
            __typename
            id
            subject
            featuredImg {
              __typename
              bucket
              region
              key
            }
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePostMutation>response.data.updatePost;
  }
  async DeletePost(
    input: DeletePostInput,
    condition?: ModelPostConditionInput
  ): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
        deletePost(input: $input, condition: $condition) {
          __typename
          id
          title
          content
          featuredImg {
            __typename
            bucket
            region
            key
          }
          threadID
          thread {
            __typename
            id
            subject
            featuredImg {
              __typename
              bucket
              region
              key
            }
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async CreateContact(
    input: CreateContactInput,
    condition?: ModelContactConditionInput
  ): Promise<CreateContactMutation> {
    const statement = `mutation CreateContact($input: CreateContactInput!, $condition: ModelContactConditionInput) {
        createContact(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          subject
          content
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateContactMutation>response.data.createContact;
  }
  async UpdateContact(
    input: UpdateContactInput,
    condition?: ModelContactConditionInput
  ): Promise<UpdateContactMutation> {
    const statement = `mutation UpdateContact($input: UpdateContactInput!, $condition: ModelContactConditionInput) {
        updateContact(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          subject
          content
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateContactMutation>response.data.updateContact;
  }
  async DeleteContact(
    input: DeleteContactInput,
    condition?: ModelContactConditionInput
  ): Promise<DeleteContactMutation> {
    const statement = `mutation DeleteContact($input: DeleteContactInput!, $condition: ModelContactConditionInput) {
        deleteContact(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          subject
          content
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteContactMutation>response.data.deleteContact;
  }
  async SyncThreads(
    filter?: ModelThreadFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncThreadsQuery> {
    const statement = `query SyncThreads($filter: ModelThreadFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncThreads(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            subject
            featuredImg {
              __typename
              bucket
              region
              key
            }
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncThreadsQuery>response.data.syncThreads;
  }
  async GetThread(id: string): Promise<GetThreadQuery> {
    const statement = `query GetThread($id: ID!) {
        getThread(id: $id) {
          __typename
          id
          subject
          featuredImg {
            __typename
            bucket
            region
            key
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              threadID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetThreadQuery>response.data.getThread;
  }
  async ListThreads(
    filter?: ModelThreadFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListThreadsQuery> {
    const statement = `query ListThreads($filter: ModelThreadFilterInput, $limit: Int, $nextToken: String) {
        listThreads(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            subject
            featuredImg {
              __typename
              bucket
              region
              key
            }
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListThreadsQuery>response.data.listThreads;
  }
  async SyncPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncPostsQuery> {
    const statement = `query SyncPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncPosts(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            title
            content
            featuredImg {
              __typename
              bucket
              region
              key
            }
            threadID
            thread {
              __typename
              id
              subject
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncPostsQuery>response.data.syncPosts;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          id
          title
          content
          featuredImg {
            __typename
            bucket
            region
            key
          }
          threadID
          thread {
            __typename
            id
            subject
            featuredImg {
              __typename
              bucket
              region
              key
            }
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            content
            featuredImg {
              __typename
              bucket
              region
              key
            }
            threadID
            thread {
              __typename
              id
              subject
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  async SyncContacts(
    filter?: ModelContactFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncContactsQuery> {
    const statement = `query SyncContacts($filter: ModelContactFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncContacts(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            email
            subject
            content
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncContactsQuery>response.data.syncContacts;
  }
  async GetContact(id: string): Promise<GetContactQuery> {
    const statement = `query GetContact($id: ID!) {
        getContact(id: $id) {
          __typename
          id
          name
          email
          subject
          content
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetContactQuery>response.data.getContact;
  }
  async ListContacts(
    filter?: ModelContactFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListContactsQuery> {
    const statement = `query ListContacts($filter: ModelContactFilterInput, $limit: Int, $nextToken: String) {
        listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            email
            subject
            content
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListContactsQuery>response.data.listContacts;
  }
  OnCreateThreadListener: Observable<OnCreateThreadSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateThread {
        onCreateThread {
          __typename
          id
          subject
          featuredImg {
            __typename
            bucket
            region
            key
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              threadID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateThreadSubscription>;

  OnUpdateThreadListener: Observable<OnUpdateThreadSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateThread {
        onUpdateThread {
          __typename
          id
          subject
          featuredImg {
            __typename
            bucket
            region
            key
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              threadID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateThreadSubscription>;

  OnDeleteThreadListener: Observable<OnDeleteThreadSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteThread {
        onDeleteThread {
          __typename
          id
          subject
          featuredImg {
            __typename
            bucket
            region
            key
          }
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              threadID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteThreadSubscription>;

  OnCreatePostListener: Observable<OnCreatePostSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePost {
        onCreatePost {
          __typename
          id
          title
          content
          featuredImg {
            __typename
            bucket
            region
            key
          }
          threadID
          thread {
            __typename
            id
            subject
            featuredImg {
              __typename
              bucket
              region
              key
            }
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreatePostSubscription>;

  OnUpdatePostListener: Observable<OnUpdatePostSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePost {
        onUpdatePost {
          __typename
          id
          title
          content
          featuredImg {
            __typename
            bucket
            region
            key
          }
          threadID
          thread {
            __typename
            id
            subject
            featuredImg {
              __typename
              bucket
              region
              key
            }
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdatePostSubscription>;

  OnDeletePostListener: Observable<OnDeletePostSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeletePost {
        onDeletePost {
          __typename
          id
          title
          content
          featuredImg {
            __typename
            bucket
            region
            key
          }
          threadID
          thread {
            __typename
            id
            subject
            featuredImg {
              __typename
              bucket
              region
              key
            }
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeletePostSubscription>;

  OnCreateContactListener: Observable<
    OnCreateContactSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateContact {
        onCreateContact {
          __typename
          id
          name
          email
          subject
          content
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateContactSubscription>;

  OnUpdateContactListener: Observable<
    OnUpdateContactSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateContact {
        onUpdateContact {
          __typename
          id
          name
          email
          subject
          content
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateContactSubscription>;

  OnDeleteContactListener: Observable<
    OnDeleteContactSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteContact {
        onDeleteContact {
          __typename
          id
          name
          email
          subject
          content
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteContactSubscription>;
}
