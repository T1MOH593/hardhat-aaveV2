const { getNamedAccounts, ethers } = require("hardhat")

const AMOUNT = ethers.utils.parseEther("0.099")
async function getWeth() {
    const { deployer } = await getNamedAccounts()
    const wethContract = await ethers.getContractAt(
        "IWeth",
        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        deployer
    )
    await wethContract.deposit({ value: AMOUNT })
    const wethBalance = await wethContract.balanceOf(deployer)
    console.log(`Got ${wethBalance.toString()} WETH`)
}

module.exports = {
    getWeth,
    AMOUNT,
}
