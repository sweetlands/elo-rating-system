module.exports = class Rating {

  constructor (scoreA , scoreB , pi) {
    this.scoreA = scoreA;
    this.scoreB= scoreB;
    this.pi = pi | 400;
  }

  resolveE() {
    return [
      1/(1+Math.pow(10,(this.scoreA - this.scoreB)/this.pi)),
      1/(1+Math.pow(10,(this.scoreB - this.scoreA)/this.pi))
    ]
  }
};
