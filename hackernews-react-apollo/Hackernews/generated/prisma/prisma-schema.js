module.exports = {
        typeDefs: /* GraphQL */ `type AggregateLink {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Link {
  description: String!
  url: String!
}

type LinkConnection {
  pageInfo: PageInfo!
  edges: [LinkEdge]!
  aggregate: AggregateLink!
}

input LinkCreateInput {
  description: String!
  url: String!
}

type LinkEdge {
  node: Link!
  cursor: String!
}

enum LinkOrderByInput {
  description_ASC
  description_DESC
  url_ASC
  url_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LinkPreviousValues {
  description: String!
  url: String!
}

type LinkSubscriptionPayload {
  mutation: MutationType!
  node: Link
  updatedFields: [String!]
  previousValues: LinkPreviousValues
}

input LinkSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LinkWhereInput
  AND: [LinkSubscriptionWhereInput!]
  OR: [LinkSubscriptionWhereInput!]
  NOT: [LinkSubscriptionWhereInput!]
}

input LinkUpdateInput {
  description: String
  url: String
}

input LinkWhereInput {
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [LinkWhereInput!]
  OR: [LinkWhereInput!]
  NOT: [LinkWhereInput!]
}

scalar Long

type Mutation {
  createLink(data: LinkCreateInput!): Link!
  updateManyLinks(data: LinkUpdateInput!, where: LinkWhereInput): BatchPayload!
  deleteManyLinks(where: LinkWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  links(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Link]!
  linksConnection(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LinkConnection!
  node(id: ID!): Node
}

type Subscription {
  link(where: LinkSubscriptionWhereInput): LinkSubscriptionPayload
}
`
      }
    