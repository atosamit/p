import { gql } from 'apollo-server';

const typeDefs = `
  type PremiumAdjustment {
    id: ID!
    comment: String!
    totalBorrowerFees: Float!
    cuRetailRate: Float!
    protectedLoanAmount: Float!
    payRate: Float!
    premiumDue: Float!
    totalAmount: Float!
  }

  input EditPremiumAdjustmentInput {
    id: ID!
    comment: String!
    totalBorrowerFees: Float!
    cuRetailRate: Float!
    protectedLoanAmount: Float!
    payRate: Float!
    premiumDue: Float!
    totalAmount: Float!
  }

  type Mutation {
    editPremiumAdjustment(input: EditPremiumAdjustmentInput!): PremiumAdjustment
  }

  type Query {
    getPremiumAdjustment(id: ID!): PremiumAdjustment
  }
`;

export default typeDefs;