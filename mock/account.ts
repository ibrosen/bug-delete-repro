import { Account, LinkedWallet } from "@prisma/client"
import { Address, getAddress } from "viem"

let nonce = 0
let runNonce = 'a'

const getNewMockAddress = (): Address => {
    const paddedNonce = String(nonce).padStart(40, '0');
    return `0x${paddedNonce}`;
}

export const getNewMock = () => {
    nonce++
    console.log(`Creating ${nonce}`)
    const mockAddress = getNewMockAddress()

    return { address: mockAddress, emailAddress: `ilan+test${runNonce}-${nonce}@ourzora.com` }

}