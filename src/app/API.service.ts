/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateThreadInput = {
  id?: string | null;
  subject: string;
  featuredImg?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  _version?: number | null;
};

export type ModelThreadConditionInput = {
  subject?: ModelStringInput | null;
  featuredImg?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
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
  featuredImg?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
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
  featuredImg?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  threadID: string;
  _version?: number | null;
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  featuredImg?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
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
  featuredImg?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
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
  createdAt?: string | null;
  updatedAt?: string | null;
  _version?: number | null;
};

export type ModelContactConditionInput = {
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  subject?: ModelStringInput | null;
  content?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
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
  createdAt?: string | null;
  updatedAt?: string | null;
  _version?: number | null;
};

export type DeleteContactInput = {
  id?: string | null;
  _version?: number | null;
};

export type ModelThreadFilterInput = {
  id?: ModelIDInput | null;
  subject?: ModelStringInput | null;
  featuredImg?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelThreadFilterInput | null> | null;
  or?: Array<ModelThreadFilterInput | null> | null;
  not?: ModelThreadFilterInput | null;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  featuredImg?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
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
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelContactFilterInput | null> | null;
  or?: Array<ModelContactFilterInput | null> | null;
  not?: ModelContactFilterInput | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type SearchableThreadFilterInput = {
  id?: SearchableIDFilterInput | null;
  subject?: SearchableStringFilterInput | null;
  featuredImg?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableThreadFilterInput | null> | null;
  or?: Array<SearchableThreadFilterInput | null> | null;
  not?: SearchableThreadFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
};

export type SearchableThreadSortInput = {
  field?: SearchableThreadSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableThreadSortableFields {
  id = "id",
  subject = "subject",
  featuredImg = "featuredImg",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}

export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc"
}

export type SearchablePostFilterInput = {
  id?: SearchableIDFilterInput | null;
  title?: SearchableStringFilterInput | null;
  content?: SearchableStringFilterInput | null;
  featuredImg?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  threadID?: SearchableIDFilterInput | null;
  and?: Array<SearchablePostFilterInput | null> | null;
  or?: Array<SearchablePostFilterInput | null> | null;
  not?: SearchablePostFilterInput | null;
};

export type SearchablePostSortInput = {
  field?: SearchablePostSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchablePostSortableFields {
  id = "id",
  title = "title",
  content = "content",
  featuredImg = "featuredImg",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  threadID = "threadID"
}

export type SearchableContactFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  email?: SearchableStringFilterInput | null;
  subject?: SearchableStringFilterInput | null;
  content?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableContactFilterInput | null> | null;
  or?: Array<SearchableContactFilterInput | null> | null;
  not?: SearchableContactFilterInput | null;
};

export type SearchableContactSortInput = {
  field?: SearchableContactSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableContactSortableFields {
  id = "id",
  name = "name",
  email = "email",
  subject = "subject",
  content = "content",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}

export type CreateThreadMutation = {
  __typename: "Thread";
  id: string;
  subject: string;
  featuredImg: string | null;
  createdAt: string;
  updatedAt: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      featuredImg: string | null;
      createdAt: string;
      updatedAt: string;
      threadID: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type UpdateThreadMutation = {
  __typename: "Thread";
  id: string;
  subject: string;
  featuredImg: string | null;
  createdAt: string;
  updatedAt: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      featuredImg: string | null;
      createdAt: string;
      updatedAt: string;
      threadID: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type DeleteThreadMutation = {
  __typename: "Thread";
  id: string;
  subject: string;
  featuredImg: string | null;
  createdAt: string;
  updatedAt: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      featuredImg: string | null;
      createdAt: string;
      updatedAt: string;
      threadID: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type CreatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  featuredImg: string | null;
  createdAt: string;
  updatedAt: string;
  threadID: string;
  thread: {
    __typename: "Thread";
    id: string;
    subject: string;
    featuredImg: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type UpdatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  featuredImg: string | null;
  createdAt: string;
  updatedAt: string;
  threadID: string;
  thread: {
    __typename: "Thread";
    id: string;
    subject: string;
    featuredImg: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type DeletePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  featuredImg: string | null;
  createdAt: string;
  updatedAt: string;
  threadID: string;
  thread: {
    __typename: "Thread";
    id: string;
    subject: string;
    featuredImg: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type CreateContactMutation = {
  __typename: "Contact";
  id: string;
  name: string;
  email: string;
  subject: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type UpdateContactMutation = {
  __typename: "Contact";
  id: string;
  name: string;
  email: string;
  subject: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type DeleteContactMutation = {
  __typename: "Contact";
  id: string;
  name: string;
  email: string;
  subject: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type SyncThreadsQuery = {
  __typename: "ModelThreadConnection";
  items: Array<{
    __typename: "Thread";
    id: string;
    subject: string;
    featuredImg: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetThreadQuery = {
  __typename: "Thread";
  id: string;
  subject: string;
  featuredImg: string | null;
  createdAt: string;
  updatedAt: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      featuredImg: string | null;
      createdAt: string;
      updatedAt: string;
      threadID: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type ListThreadsQuery = {
  __typename: "ModelThreadConnection";
  items: Array<{
    __typename: "Thread";
    id: string;
    subject: string;
    featuredImg: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
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
    featuredImg: string | null;
    createdAt: string;
    updatedAt: string;
    threadID: string;
    thread: {
      __typename: "Thread";
      id: string;
      subject: string;
      featuredImg: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetPostQuery = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  featuredImg: string | null;
  createdAt: string;
  updatedAt: string;
  threadID: string;
  thread: {
    __typename: "Thread";
    id: string;
    subject: string;
    featuredImg: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    featuredImg: string | null;
    createdAt: string;
    updatedAt: string;
    threadID: string;
    thread: {
      __typename: "Thread";
      id: string;
      subject: string;
      featuredImg: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
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
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
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
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
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
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type ListPostsByThreadQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    featuredImg: string | null;
    createdAt: string;
    updatedAt: string;
    threadID: string;
    thread: {
      __typename: "Thread";
      id: string;
      subject: string;
      featuredImg: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SearchThreadsQuery = {
  __typename: "SearchableThreadConnection";
  items: Array<{
    __typename: "Thread";
    id: string;
    subject: string;
    featuredImg: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null> | null;
  nextToken: string | null;
  total: number | null;
};

export type SearchPostsQuery = {
  __typename: "SearchablePostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    featuredImg: string | null;
    createdAt: string;
    updatedAt: string;
    threadID: string;
    thread: {
      __typename: "Thread";
      id: string;
      subject: string;
      featuredImg: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null> | null;
  nextToken: string | null;
  total: number | null;
};

export type SearchContactsQuery = {
  __typename: "SearchableContactConnection";
  items: Array<{
    __typename: "Contact";
    id: string;
    name: string;
    email: string;
    subject: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null> | null;
  nextToken: string | null;
  total: number | null;
};

export type OnCreateThreadSubscription = {
  __typename: "Thread";
  id: string;
  subject: string;
  featuredImg: string | null;
  createdAt: string;
  updatedAt: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      featuredImg: string | null;
      createdAt: string;
      updatedAt: string;
      threadID: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateThreadSubscription = {
  __typename: "Thread";
  id: string;
  subject: string;
  featuredImg: string | null;
  createdAt: string;
  updatedAt: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      featuredImg: string | null;
      createdAt: string;
      updatedAt: string;
      threadID: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteThreadSubscription = {
  __typename: "Thread";
  id: string;
  subject: string;
  featuredImg: string | null;
  createdAt: string;
  updatedAt: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      featuredImg: string | null;
      createdAt: string;
      updatedAt: string;
      threadID: string;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
    } | null> | null;
    nextToken: string | null;
    startedAt: number | null;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  featuredImg: string | null;
  createdAt: string;
  updatedAt: string;
  threadID: string;
  thread: {
    __typename: "Thread";
    id: string;
    subject: string;
    featuredImg: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  featuredImg: string | null;
  createdAt: string;
  updatedAt: string;
  threadID: string;
  thread: {
    __typename: "Thread";
    id: string;
    subject: string;
    featuredImg: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  featuredImg: string | null;
  createdAt: string;
  updatedAt: string;
  threadID: string;
  thread: {
    __typename: "Thread";
    id: string;
    subject: string;
    featuredImg: string | null;
    createdAt: string;
    updatedAt: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
      startedAt: number | null;
    } | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateContactSubscription = {
  __typename: "Contact";
  id: string;
  name: string;
  email: string;
  subject: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateContactSubscription = {
  __typename: "Contact";
  id: string;
  name: string;
  email: string;
  subject: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteContactSubscription = {
  __typename: "Contact";
  id: string;
  name: string;
  email: string;
  subject: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
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
          featuredImg
          createdAt
          updatedAt
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              featuredImg
              createdAt
              updatedAt
              threadID
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
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
          featuredImg
          createdAt
          updatedAt
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              featuredImg
              createdAt
              updatedAt
              threadID
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
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
          featuredImg
          createdAt
          updatedAt
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              featuredImg
              createdAt
              updatedAt
              threadID
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
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
          featuredImg
          createdAt
          updatedAt
          threadID
          thread {
            __typename
            id
            subject
            featuredImg
            createdAt
            updatedAt
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
          }
          _version
          _deleted
          _lastChangedAt
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
          featuredImg
          createdAt
          updatedAt
          threadID
          thread {
            __typename
            id
            subject
            featuredImg
            createdAt
            updatedAt
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
          }
          _version
          _deleted
          _lastChangedAt
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
          featuredImg
          createdAt
          updatedAt
          threadID
          thread {
            __typename
            id
            subject
            featuredImg
            createdAt
            updatedAt
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
          }
          _version
          _deleted
          _lastChangedAt
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
            featuredImg
            createdAt
            updatedAt
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
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
          featuredImg
          createdAt
          updatedAt
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              featuredImg
              createdAt
              updatedAt
              threadID
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
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
            featuredImg
            createdAt
            updatedAt
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
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
            featuredImg
            createdAt
            updatedAt
            threadID
            thread {
              __typename
              id
              subject
              featuredImg
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            _version
            _deleted
            _lastChangedAt
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
          featuredImg
          createdAt
          updatedAt
          threadID
          thread {
            __typename
            id
            subject
            featuredImg
            createdAt
            updatedAt
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
          }
          _version
          _deleted
          _lastChangedAt
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
            featuredImg
            createdAt
            updatedAt
            threadID
            thread {
              __typename
              id
              subject
              featuredImg
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            _version
            _deleted
            _lastChangedAt
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
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
  async ListPostsByThread(
    threadID?: string,
    createdAt?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsByThreadQuery> {
    const statement = `query ListPostsByThread($threadID: ID, $createdAt: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPostsByThread(threadID: $threadID, createdAt: $createdAt, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            content
            featuredImg
            createdAt
            updatedAt
            threadID
            thread {
              __typename
              id
              subject
              featuredImg
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (threadID) {
      gqlAPIServiceArguments.threadID = threadID;
    }
    if (createdAt) {
      gqlAPIServiceArguments.createdAt = createdAt;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
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
    return <ListPostsByThreadQuery>response.data.listPostsByThread;
  }
  async SearchThreads(
    filter?: SearchableThreadFilterInput,
    sort?: SearchableThreadSortInput,
    limit?: number,
    nextToken?: string
  ): Promise<SearchThreadsQuery> {
    const statement = `query SearchThreads($filter: SearchableThreadFilterInput, $sort: SearchableThreadSortInput, $limit: Int, $nextToken: String) {
        searchThreads(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            subject
            featuredImg
            createdAt
            updatedAt
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          total
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
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
    return <SearchThreadsQuery>response.data.searchThreads;
  }
  async SearchPosts(
    filter?: SearchablePostFilterInput,
    sort?: SearchablePostSortInput,
    limit?: number,
    nextToken?: string
  ): Promise<SearchPostsQuery> {
    const statement = `query SearchPosts($filter: SearchablePostFilterInput, $sort: SearchablePostSortInput, $limit: Int, $nextToken: String) {
        searchPosts(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            content
            featuredImg
            createdAt
            updatedAt
            threadID
            thread {
              __typename
              id
              subject
              featuredImg
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          total
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
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
    return <SearchPostsQuery>response.data.searchPosts;
  }
  async SearchContacts(
    filter?: SearchableContactFilterInput,
    sort?: SearchableContactSortInput,
    limit?: number,
    nextToken?: string
  ): Promise<SearchContactsQuery> {
    const statement = `query SearchContacts($filter: SearchableContactFilterInput, $sort: SearchableContactSortInput, $limit: Int, $nextToken: String) {
        searchContacts(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            email
            subject
            content
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          total
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
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
    return <SearchContactsQuery>response.data.searchContacts;
  }
  OnCreateThreadListener: Observable<OnCreateThreadSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateThread {
        onCreateThread {
          __typename
          id
          subject
          featuredImg
          createdAt
          updatedAt
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              featuredImg
              createdAt
              updatedAt
              threadID
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
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
          featuredImg
          createdAt
          updatedAt
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              featuredImg
              createdAt
              updatedAt
              threadID
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
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
          featuredImg
          createdAt
          updatedAt
          posts {
            __typename
            items {
              __typename
              id
              title
              content
              featuredImg
              createdAt
              updatedAt
              threadID
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
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
          featuredImg
          createdAt
          updatedAt
          threadID
          thread {
            __typename
            id
            subject
            featuredImg
            createdAt
            updatedAt
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
          }
          _version
          _deleted
          _lastChangedAt
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
          featuredImg
          createdAt
          updatedAt
          threadID
          thread {
            __typename
            id
            subject
            featuredImg
            createdAt
            updatedAt
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
          }
          _version
          _deleted
          _lastChangedAt
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
          featuredImg
          createdAt
          updatedAt
          threadID
          thread {
            __typename
            id
            subject
            featuredImg
            createdAt
            updatedAt
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
          }
          _version
          _deleted
          _lastChangedAt
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<OnDeleteContactSubscription>;
}
