module.exports = class Rating {
  constructor() {
  }

  resolveE(scoreA , scoreB) {
    return 1/(1+Math.pow(10,(scoreA - scoreB)/400))
  }
};
