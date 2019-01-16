//const BigNumber = web3.BigNumber;
require('../helpers/setup');
const DappToken = artifacts.require('DappToken');

//require('chai').use(require('chai-bignumber')(BigNumber)).should();

contract('DappToken', function () {
  const _name = 'DappToken';
  const _symbol = 'DAPP';
  const _decimals = 18;

  beforeEach(async function () {
    this.tokens = await DappToken.new(_name, _symbol, _decimals);
  });

  describe('token attributes', function(){
    it('has a correct name', async function () {
      const name = await this.tokens.name();
      (await this.tokens.name()).should.be.equal(_name);
    });

    it('has a correct symbol', async function () {
      const symbol = await this.tokens.symbol();
      (await this.tokens.symbol()).should.be.equal(_symbol);
    });

    it('has an correct amount of decimals', async function () {
      const decimalss = await this.tokens.decimals();
      //decimalss.should.be.bignumber.equal(_decimals);
    });
  });
});
