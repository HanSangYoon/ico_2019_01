// function ether(n) {
//   const ether = new web3.BigNumber(web3.toWei(n, 'ether'))
//   return ether;
// }

function ether(n) {
  const ether = new web3.utils.BigNumber(web3.utils.toWei(n, 'ether'))
  return ether;
}

module.exports = {
  ether,
};
