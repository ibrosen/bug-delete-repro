import { privyClient } from "./lib/privy";
import { getNewMock } from "./mock/account";



const addNewPrivyUser = async ({ address, emailAddress }: { address: string, emailAddress: string }) => {
    const user = await privyClient.importUser({ linkedAccounts: [{ address: address, type: 'wallet', chainType: 'ethereum' }, { address: emailAddress, type: 'email' }] })
    if (!user) throw "user creation failed"
    return user
}

const createdIds: string[] = []

try {

    const { emailAddress, address } = getNewMock()

    const privyUser = await addNewPrivyUser({ address, emailAddress })
    console.log({ user: privyUser.id })
    if (privyUser) createdIds.push(privyUser.id)
    await privyClient.deleteUser(privyUser.id)
    console.log(
        "deleted"
    )
}
catch (e) {
    console.log(e)
    console.log(JSON.stringify(e))
    for (const id of createdIds) {
        await privyClient.deleteUser(id)
    }
}



