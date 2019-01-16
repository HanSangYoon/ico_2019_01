const chai = require('chai');

const BigNumber = web3.utils.BigNumber;
const should = chai.use(require('chai-bignumber')(BigNumber)).should();

module.exports = {
  BigNumber,
  should,
};
