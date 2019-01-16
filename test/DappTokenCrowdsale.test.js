//import ether from '../helpers/ether';

//const BigNumber = web3.BigNumber;
//require('../helpers/setup');
//require('../helpers/ether');

//const chai = require('chai');

const BigNumber = web3.utils.BigNumber;
//const should = chai.use(require('chai-bignumber')(BigNumber)).should();


function ether(n) {
  const ether = new web3.utils.BigNumber(web3.utils.toWei(n, 'ether'))
  return ether;
}

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .use(require('chai-as-promised')).should();

const DappToken = artifacts.require('DappToken');
const DappTokenCrowdsale = artifacts.require('DappTokenCrowdsale');

//require('chai').use(require('chai-bignumber')(BigNumber)).should();

contract('DappTokenCrowdsale', function ([_, wallet, investor1, investor2]) {

  beforeEach(async function () {
    this.name = 'DappToken';
    this.symbol = 'DAPP';
    this.decimals = 18;

    this.tokens = await DappToken.new(this.name, this.symbol, this.decimals);

    this.rate = 500;
    this.wallet = wallet;
    //this.token = 18;

    this.crowdsale = await DappTokenCrowdsale.new(this.rate, this.wallet, this.tokens.address);

    //Transfer token ownsership to crowdsale
    //await this.tokens.transferOwnership(this.crowdsale.address);
  });

  describe('crowdsale', function(){
    it('tracks the token', async function () {
      const tokenC = await this.crowdsale.token();
      tokenC.should.equal(this.tokens.address);
    });

    it('has a correct rate', async function () {
      const rates = await this.crowdsale.rate();
      rates.should.be.utils.bignumber.equal(500);
    });

    it('track the wallet', async function () {
      const wallets = await this.crowdsale.wallet();
      wallets.should.equal(this.wallet);
    });

  });

  describe('accepting payments', function(){
    it('should accept payments', async function(){
      const value = ether(1);
      await this.crowdsale.sendTransaction({ value: value, from: investor1 })
    });
  });

  // describe('minted crowdsale', function(){
  //   it('mints tokens after purchase', async function(){
  //     const originalTotalSupply = await this.tokens.totalSupply();
  //     await this.crowdsale.sendTransaction({ value: ether(1), from: investor1});
  //
  //     const newTotalSupply = await this.tokens.totalSupply();
  //     assert.isTrue(newTotalSupply > originalTotalSupply);
  //   });
  // });
  //
  //
  // describe('accepting payments', function() {
  //   it('should accept payments', async function() {
  //     const value = ether(1);
  //     await this.crowdsale.sendTransaction({ value: value, from: investor1}).should.be.fulfilled;
  //     await this.crowdsale.buyTokens(investor1, {value: value, from: purchaser }).should.be.fulfilled;
  //   });
  // });
});
