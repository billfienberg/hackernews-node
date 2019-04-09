// Code generated by Prisma (prisma@1.30.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  link: (where?: LinkWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
  vote: (where?: VoteWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  link: (where: LinkWhereUniqueInput) => LinkPromise;
  links: (
    args?: {
      where?: LinkWhereInput;
      orderBy?: LinkOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Link>;
  linksConnection: (
    args?: {
      where?: LinkWhereInput;
      orderBy?: LinkOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => LinkConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  vote: (where: VoteWhereUniqueInput) => VotePromise;
  votes: (
    args?: {
      where?: VoteWhereInput;
      orderBy?: VoteOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Vote>;
  votesConnection: (
    args?: {
      where?: VoteWhereInput;
      orderBy?: VoteOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => VoteConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createLink: (data: LinkCreateInput) => LinkPromise;
  updateLink: (
    args: { data: LinkUpdateInput; where: LinkWhereUniqueInput }
  ) => LinkPromise;
  updateManyLinks: (
    args: { data: LinkUpdateManyMutationInput; where?: LinkWhereInput }
  ) => BatchPayloadPromise;
  upsertLink: (
    args: {
      where: LinkWhereUniqueInput;
      create: LinkCreateInput;
      update: LinkUpdateInput;
    }
  ) => LinkPromise;
  deleteLink: (where: LinkWhereUniqueInput) => LinkPromise;
  deleteManyLinks: (where?: LinkWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;
  createVote: (data: VoteCreateInput) => VotePromise;
  updateVote: (
    args: { data: VoteUpdateInput; where: VoteWhereUniqueInput }
  ) => VotePromise;
  upsertVote: (
    args: {
      where: VoteWhereUniqueInput;
      create: VoteCreateInput;
      update: VoteUpdateInput;
    }
  ) => VotePromise;
  deleteVote: (where: VoteWhereUniqueInput) => VotePromise;
  deleteManyVotes: (where?: VoteWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  link: (
    where?: LinkSubscriptionWhereInput
  ) => LinkSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
  vote: (
    where?: VoteSubscriptionWhereInput
  ) => VoteSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type LinkOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "description_ASC"
  | "description_DESC"
  | "url_ASC"
  | "url_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type VoteOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type LinkWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface LinkWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  url?: String;
  url_not?: String;
  url_in?: String[] | String;
  url_not_in?: String[] | String;
  url_lt?: String;
  url_lte?: String;
  url_gt?: String;
  url_gte?: String;
  url_contains?: String;
  url_not_contains?: String;
  url_starts_with?: String;
  url_not_starts_with?: String;
  url_ends_with?: String;
  url_not_ends_with?: String;
  postedBy?: UserWhereInput;
  votes_every?: VoteWhereInput;
  votes_some?: VoteWhereInput;
  votes_none?: VoteWhereInput;
  AND?: LinkWhereInput[] | LinkWhereInput;
  OR?: LinkWhereInput[] | LinkWhereInput;
  NOT?: LinkWhereInput[] | LinkWhereInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  links_every?: LinkWhereInput;
  links_some?: LinkWhereInput;
  links_none?: LinkWhereInput;
  votes_every?: VoteWhereInput;
  votes_some?: VoteWhereInput;
  votes_none?: VoteWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface VoteWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  link?: LinkWhereInput;
  user?: UserWhereInput;
  AND?: VoteWhereInput[] | VoteWhereInput;
  OR?: VoteWhereInput[] | VoteWhereInput;
  NOT?: VoteWhereInput[] | VoteWhereInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export type VoteWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface LinkCreateInput {
  description: String;
  url: String;
  postedBy?: UserCreateOneWithoutLinksInput;
  votes?: VoteCreateManyWithoutLinkInput;
}

export interface UserCreateOneWithoutLinksInput {
  create?: UserCreateWithoutLinksInput;
  connect?: UserWhereUniqueInput;
}

export interface UserCreateWithoutLinksInput {
  name: String;
  email: String;
  password: String;
  votes?: VoteCreateManyWithoutUserInput;
}

export interface VoteCreateManyWithoutUserInput {
  create?: VoteCreateWithoutUserInput[] | VoteCreateWithoutUserInput;
  connect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput;
}

export interface VoteCreateWithoutUserInput {
  link: LinkCreateOneWithoutVotesInput;
}

export interface LinkCreateOneWithoutVotesInput {
  create?: LinkCreateWithoutVotesInput;
  connect?: LinkWhereUniqueInput;
}

export interface LinkCreateWithoutVotesInput {
  description: String;
  url: String;
  postedBy?: UserCreateOneWithoutLinksInput;
}

export interface VoteCreateManyWithoutLinkInput {
  create?: VoteCreateWithoutLinkInput[] | VoteCreateWithoutLinkInput;
  connect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput;
}

export interface VoteCreateWithoutLinkInput {
  user: UserCreateOneWithoutVotesInput;
}

export interface UserCreateOneWithoutVotesInput {
  create?: UserCreateWithoutVotesInput;
  connect?: UserWhereUniqueInput;
}

export interface UserCreateWithoutVotesInput {
  name: String;
  email: String;
  password: String;
  links?: LinkCreateManyWithoutPostedByInput;
}

export interface LinkCreateManyWithoutPostedByInput {
  create?: LinkCreateWithoutPostedByInput[] | LinkCreateWithoutPostedByInput;
  connect?: LinkWhereUniqueInput[] | LinkWhereUniqueInput;
}

export interface LinkCreateWithoutPostedByInput {
  description: String;
  url: String;
  votes?: VoteCreateManyWithoutLinkInput;
}

export interface LinkUpdateInput {
  description?: String;
  url?: String;
  postedBy?: UserUpdateOneWithoutLinksInput;
  votes?: VoteUpdateManyWithoutLinkInput;
}

export interface UserUpdateOneWithoutLinksInput {
  create?: UserCreateWithoutLinksInput;
  update?: UserUpdateWithoutLinksDataInput;
  upsert?: UserUpsertWithoutLinksInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateWithoutLinksDataInput {
  name?: String;
  email?: String;
  password?: String;
  votes?: VoteUpdateManyWithoutUserInput;
}

export interface VoteUpdateManyWithoutUserInput {
  create?: VoteCreateWithoutUserInput[] | VoteCreateWithoutUserInput;
  delete?: VoteWhereUniqueInput[] | VoteWhereUniqueInput;
  connect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput;
  set?: VoteWhereUniqueInput[] | VoteWhereUniqueInput;
  disconnect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput;
  update?:
    | VoteUpdateWithWhereUniqueWithoutUserInput[]
    | VoteUpdateWithWhereUniqueWithoutUserInput;
  upsert?:
    | VoteUpsertWithWhereUniqueWithoutUserInput[]
    | VoteUpsertWithWhereUniqueWithoutUserInput;
  deleteMany?: VoteScalarWhereInput[] | VoteScalarWhereInput;
}

export interface VoteUpdateWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput;
  data: VoteUpdateWithoutUserDataInput;
}

export interface VoteUpdateWithoutUserDataInput {
  link?: LinkUpdateOneRequiredWithoutVotesInput;
}

export interface LinkUpdateOneRequiredWithoutVotesInput {
  create?: LinkCreateWithoutVotesInput;
  update?: LinkUpdateWithoutVotesDataInput;
  upsert?: LinkUpsertWithoutVotesInput;
  connect?: LinkWhereUniqueInput;
}

export interface LinkUpdateWithoutVotesDataInput {
  description?: String;
  url?: String;
  postedBy?: UserUpdateOneWithoutLinksInput;
}

export interface LinkUpsertWithoutVotesInput {
  update: LinkUpdateWithoutVotesDataInput;
  create: LinkCreateWithoutVotesInput;
}

export interface VoteUpsertWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput;
  update: VoteUpdateWithoutUserDataInput;
  create: VoteCreateWithoutUserInput;
}

export interface VoteScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  AND?: VoteScalarWhereInput[] | VoteScalarWhereInput;
  OR?: VoteScalarWhereInput[] | VoteScalarWhereInput;
  NOT?: VoteScalarWhereInput[] | VoteScalarWhereInput;
}

export interface UserUpsertWithoutLinksInput {
  update: UserUpdateWithoutLinksDataInput;
  create: UserCreateWithoutLinksInput;
}

export interface VoteUpdateManyWithoutLinkInput {
  create?: VoteCreateWithoutLinkInput[] | VoteCreateWithoutLinkInput;
  delete?: VoteWhereUniqueInput[] | VoteWhereUniqueInput;
  connect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput;
  set?: VoteWhereUniqueInput[] | VoteWhereUniqueInput;
  disconnect?: VoteWhereUniqueInput[] | VoteWhereUniqueInput;
  update?:
    | VoteUpdateWithWhereUniqueWithoutLinkInput[]
    | VoteUpdateWithWhereUniqueWithoutLinkInput;
  upsert?:
    | VoteUpsertWithWhereUniqueWithoutLinkInput[]
    | VoteUpsertWithWhereUniqueWithoutLinkInput;
  deleteMany?: VoteScalarWhereInput[] | VoteScalarWhereInput;
}

export interface VoteUpdateWithWhereUniqueWithoutLinkInput {
  where: VoteWhereUniqueInput;
  data: VoteUpdateWithoutLinkDataInput;
}

export interface VoteUpdateWithoutLinkDataInput {
  user?: UserUpdateOneRequiredWithoutVotesInput;
}

export interface UserUpdateOneRequiredWithoutVotesInput {
  create?: UserCreateWithoutVotesInput;
  update?: UserUpdateWithoutVotesDataInput;
  upsert?: UserUpsertWithoutVotesInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateWithoutVotesDataInput {
  name?: String;
  email?: String;
  password?: String;
  links?: LinkUpdateManyWithoutPostedByInput;
}

export interface LinkUpdateManyWithoutPostedByInput {
  create?: LinkCreateWithoutPostedByInput[] | LinkCreateWithoutPostedByInput;
  delete?: LinkWhereUniqueInput[] | LinkWhereUniqueInput;
  connect?: LinkWhereUniqueInput[] | LinkWhereUniqueInput;
  set?: LinkWhereUniqueInput[] | LinkWhereUniqueInput;
  disconnect?: LinkWhereUniqueInput[] | LinkWhereUniqueInput;
  update?:
    | LinkUpdateWithWhereUniqueWithoutPostedByInput[]
    | LinkUpdateWithWhereUniqueWithoutPostedByInput;
  upsert?:
    | LinkUpsertWithWhereUniqueWithoutPostedByInput[]
    | LinkUpsertWithWhereUniqueWithoutPostedByInput;
  deleteMany?: LinkScalarWhereInput[] | LinkScalarWhereInput;
  updateMany?:
    | LinkUpdateManyWithWhereNestedInput[]
    | LinkUpdateManyWithWhereNestedInput;
}

export interface LinkUpdateWithWhereUniqueWithoutPostedByInput {
  where: LinkWhereUniqueInput;
  data: LinkUpdateWithoutPostedByDataInput;
}

export interface LinkUpdateWithoutPostedByDataInput {
  description?: String;
  url?: String;
  votes?: VoteUpdateManyWithoutLinkInput;
}

export interface LinkUpsertWithWhereUniqueWithoutPostedByInput {
  where: LinkWhereUniqueInput;
  update: LinkUpdateWithoutPostedByDataInput;
  create: LinkCreateWithoutPostedByInput;
}

export interface LinkScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  url?: String;
  url_not?: String;
  url_in?: String[] | String;
  url_not_in?: String[] | String;
  url_lt?: String;
  url_lte?: String;
  url_gt?: String;
  url_gte?: String;
  url_contains?: String;
  url_not_contains?: String;
  url_starts_with?: String;
  url_not_starts_with?: String;
  url_ends_with?: String;
  url_not_ends_with?: String;
  AND?: LinkScalarWhereInput[] | LinkScalarWhereInput;
  OR?: LinkScalarWhereInput[] | LinkScalarWhereInput;
  NOT?: LinkScalarWhereInput[] | LinkScalarWhereInput;
}

export interface LinkUpdateManyWithWhereNestedInput {
  where: LinkScalarWhereInput;
  data: LinkUpdateManyDataInput;
}

export interface LinkUpdateManyDataInput {
  description?: String;
  url?: String;
}

export interface UserUpsertWithoutVotesInput {
  update: UserUpdateWithoutVotesDataInput;
  create: UserCreateWithoutVotesInput;
}

export interface VoteUpsertWithWhereUniqueWithoutLinkInput {
  where: VoteWhereUniqueInput;
  update: VoteUpdateWithoutLinkDataInput;
  create: VoteCreateWithoutLinkInput;
}

export interface LinkUpdateManyMutationInput {
  description?: String;
  url?: String;
}

export interface UserCreateInput {
  name: String;
  email: String;
  password: String;
  links?: LinkCreateManyWithoutPostedByInput;
  votes?: VoteCreateManyWithoutUserInput;
}

export interface UserUpdateInput {
  name?: String;
  email?: String;
  password?: String;
  links?: LinkUpdateManyWithoutPostedByInput;
  votes?: VoteUpdateManyWithoutUserInput;
}

export interface UserUpdateManyMutationInput {
  name?: String;
  email?: String;
  password?: String;
}

export interface VoteCreateInput {
  link: LinkCreateOneWithoutVotesInput;
  user: UserCreateOneWithoutVotesInput;
}

export interface VoteUpdateInput {
  link?: LinkUpdateOneRequiredWithoutVotesInput;
  user?: UserUpdateOneRequiredWithoutVotesInput;
}

export interface LinkSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: LinkWhereInput;
  AND?: LinkSubscriptionWhereInput[] | LinkSubscriptionWhereInput;
  OR?: LinkSubscriptionWhereInput[] | LinkSubscriptionWhereInput;
  NOT?: LinkSubscriptionWhereInput[] | LinkSubscriptionWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface VoteSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: VoteWhereInput;
  AND?: VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput;
  OR?: VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput;
  NOT?: VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Link {
  id: ID_Output;
  createdAt: DateTimeOutput;
  description: String;
  url: String;
}

export interface LinkPromise extends Promise<Link>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  description: () => Promise<String>;
  url: () => Promise<String>;
  postedBy: <T = UserPromise>() => T;
  votes: <T = FragmentableArray<Vote>>(
    args?: {
      where?: VoteWhereInput;
      orderBy?: VoteOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface LinkSubscription
  extends Promise<AsyncIterator<Link>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  description: () => Promise<AsyncIterator<String>>;
  url: () => Promise<AsyncIterator<String>>;
  postedBy: <T = UserSubscription>() => T;
  votes: <T = Promise<AsyncIterator<VoteSubscription>>>(
    args?: {
      where?: VoteWhereInput;
      orderBy?: VoteOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  links: <T = FragmentableArray<Link>>(
    args?: {
      where?: LinkWhereInput;
      orderBy?: LinkOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  votes: <T = FragmentableArray<Vote>>(
    args?: {
      where?: VoteWhereInput;
      orderBy?: VoteOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  links: <T = Promise<AsyncIterator<LinkSubscription>>>(
    args?: {
      where?: LinkWhereInput;
      orderBy?: LinkOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  votes: <T = Promise<AsyncIterator<VoteSubscription>>>(
    args?: {
      where?: VoteWhereInput;
      orderBy?: VoteOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface Vote {
  id: ID_Output;
}

export interface VotePromise extends Promise<Vote>, Fragmentable {
  id: () => Promise<ID_Output>;
  link: <T = LinkPromise>() => T;
  user: <T = UserPromise>() => T;
}

export interface VoteSubscription
  extends Promise<AsyncIterator<Vote>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  link: <T = LinkSubscription>() => T;
  user: <T = UserSubscription>() => T;
}

export interface LinkConnection {
  pageInfo: PageInfo;
  edges: LinkEdge[];
}

export interface LinkConnectionPromise
  extends Promise<LinkConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<LinkEdge>>() => T;
  aggregate: <T = AggregateLinkPromise>() => T;
}

export interface LinkConnectionSubscription
  extends Promise<AsyncIterator<LinkConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<LinkEdgeSubscription>>>() => T;
  aggregate: <T = AggregateLinkSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface LinkEdge {
  node: Link;
  cursor: String;
}

export interface LinkEdgePromise extends Promise<LinkEdge>, Fragmentable {
  node: <T = LinkPromise>() => T;
  cursor: () => Promise<String>;
}

export interface LinkEdgeSubscription
  extends Promise<AsyncIterator<LinkEdge>>,
    Fragmentable {
  node: <T = LinkSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateLink {
  count: Int;
}

export interface AggregateLinkPromise
  extends Promise<AggregateLink>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateLinkSubscription
  extends Promise<AsyncIterator<AggregateLink>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface VoteConnection {
  pageInfo: PageInfo;
  edges: VoteEdge[];
}

export interface VoteConnectionPromise
  extends Promise<VoteConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<VoteEdge>>() => T;
  aggregate: <T = AggregateVotePromise>() => T;
}

export interface VoteConnectionSubscription
  extends Promise<AsyncIterator<VoteConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<VoteEdgeSubscription>>>() => T;
  aggregate: <T = AggregateVoteSubscription>() => T;
}

export interface VoteEdge {
  node: Vote;
  cursor: String;
}

export interface VoteEdgePromise extends Promise<VoteEdge>, Fragmentable {
  node: <T = VotePromise>() => T;
  cursor: () => Promise<String>;
}

export interface VoteEdgeSubscription
  extends Promise<AsyncIterator<VoteEdge>>,
    Fragmentable {
  node: <T = VoteSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateVote {
  count: Int;
}

export interface AggregateVotePromise
  extends Promise<AggregateVote>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateVoteSubscription
  extends Promise<AsyncIterator<AggregateVote>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface LinkSubscriptionPayload {
  mutation: MutationType;
  node: Link;
  updatedFields: String[];
  previousValues: LinkPreviousValues;
}

export interface LinkSubscriptionPayloadPromise
  extends Promise<LinkSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = LinkPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = LinkPreviousValuesPromise>() => T;
}

export interface LinkSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<LinkSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = LinkSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = LinkPreviousValuesSubscription>() => T;
}

export interface LinkPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  description: String;
  url: String;
}

export interface LinkPreviousValuesPromise
  extends Promise<LinkPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  description: () => Promise<String>;
  url: () => Promise<String>;
}

export interface LinkPreviousValuesSubscription
  extends Promise<AsyncIterator<LinkPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  description: () => Promise<AsyncIterator<String>>;
  url: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface VoteSubscriptionPayload {
  mutation: MutationType;
  node: Vote;
  updatedFields: String[];
  previousValues: VotePreviousValues;
}

export interface VoteSubscriptionPayloadPromise
  extends Promise<VoteSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = VotePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = VotePreviousValuesPromise>() => T;
}

export interface VoteSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<VoteSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = VoteSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = VotePreviousValuesSubscription>() => T;
}

export interface VotePreviousValues {
  id: ID_Output;
}

export interface VotePreviousValuesPromise
  extends Promise<VotePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
}

export interface VotePreviousValuesSubscription
  extends Promise<AsyncIterator<VotePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Link",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Vote",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
