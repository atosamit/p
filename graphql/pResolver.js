const resolvers = {
  Query: {
    getPremiumAdjustment: (_, { id }) => {
      // Placeholder: Fetch premium adjustment by ID
      return {
        id: id,
        comment: "Sample comment",
        totalBorrowerFees: 1000.0,
        cuRetailRate: 3.75,
        protectedLoanAmount: 15000.0,
        payRate: 2.5,
        premiumDue: 450.0,
        totalAmount: 1650.0
      };
    }
  },
  Mutation: {
    editPremiumAdjustment: (_, { input }) => {
      // Placeholder: Edit premium adjustment logic
      return {
        id: input.id,
        comment: input.comment,
        totalBorrowerFees: input.totalBorrowerFees,
        cuRetailRate: input.cuRetailRate,
        protectedLoanAmount: input.protectedLoanAmount,
        payRate: input.payRate,
        premiumDue: input.premiumDue,
        totalAmount: input.totalAmount
      };
    }
  }
};

export default resolvers;