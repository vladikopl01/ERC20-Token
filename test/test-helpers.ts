import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import { Contract } from "ethers";
import { expect } from "chai";

export async function checkContractOwner(
  address: string,
  contract: Contract,
  expectOwner: boolean
): Promise<void> {
  const ownerAddress = await contract.owner();
  if (expectOwner) {
    expect(ownerAddress).to.be.eq(address);
  } else {
    expect(ownerAddress).to.not.be.eq(address);
  }
}
