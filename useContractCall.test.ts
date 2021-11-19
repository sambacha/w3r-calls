import rewire from "rewire"
const useContractCall = rewire("./useContractCall")
const warnOnInvalidContractCall = useContractCall.__get__("warnOnInvalidContractCall")
const encodeCallData = useContractCall.__get__("encodeCallData")
// @ponicode
describe("warnOnInvalidContractCall", () => {
    test("0", () => {
        warnOnInvalidContractCall(true)
    })

    test("1", () => {
        warnOnInvalidContractCall(false)
    })

    test("2", () => {
        warnOnInvalidContractCall(null)
    })
})

// @ponicode
describe("encodeCallData", () => {
    test("0", async () => {
        await encodeCallData(false)
    })

    test("1", async () => {
        await encodeCallData(true)
    })
})
