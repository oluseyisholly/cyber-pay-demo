
const createAccount = "/cyberpaymerchant/getstarted/createaccount"
export const getStartedRoutes = {
    createAccount: createAccount,
    testIntegration: createAccount + "/test-integration",
    updateProfile: createAccount + "/update-profile",
    updateDocument: createAccount + "/update-document",
}

export const getStartedList = [
    getStartedRoutes.createAccount, 
    getStartedRoutes.testIntegration, 
    getStartedRoutes.updateProfile, 
    getStartedRoutes.updateDocument,
    "/"
]



export const routes = {
    dashboard: "/cybermerchant/dashboard",
    transaction: "/cybermerchant/transaction",
    subAccount: "/cybermerchant/subaccount",
    digitalwallet: "/cybermerchant/digitalwallet",
    products: "/cybermerchant/products",
    paymentLink: "/cybermerchant/paymentlink",
    payouts: "/cybermerchant/payouts",
    mandates: "/cybermerchant/mandates",
    switchBiz: "/cybermerchant/switchbiz",
    settings: "/cybermerchant/settings",
    profile:  "/cybermerchant/business-profile",
}
export const allRoutes = [
    routes.transaction,
    routes.subAccount,
    routes.digitalwallet,
    routes.products,
    routes.paymentLink,
    routes.mandates,
    routes.switchBiz,
    routes.settings,
    routes.profile,
    getStartedRoutes.createAccount, 
    getStartedRoutes.testIntegration, 
    getStartedRoutes.updateProfile, 
    getStartedRoutes.updateDocument,
    "/"
]
