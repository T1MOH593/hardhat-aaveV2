const { ethers } = require("hardhat")

async function approveErc20(erc20Address, spenderAddress, amount, signer) {
    const contract = await ethers.getContractAt("IERC20", erc20Address, signer)
    await contract.approve(spenderAddress, amount)
}

module.exports = {
    approveErc20,
}
