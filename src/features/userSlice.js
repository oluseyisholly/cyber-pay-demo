import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subAccount: {
        accountName: "",
        accountNumber: "",
        deposit: "",
    },
    product: {
        productName: "",
        productCode: "",
        description: "",
    },
    digitalWallet: {
        walletName: "",
        walletAmount: "",
        walletCode: "",
    },
    paymentLink: {
        pageName: "",
        pageDescription: "",
        pageUpload: "",
    },
    payersDetail: {
        tagName: "",
        payersName: "",
        payersAddress: "",
        emailAddress: "",
        phoneNumber: "",
        callBackUrl: "",
    },
    bankDetails: {
        bank: "",
        accountName: "",
        accountNumber: "",
        frequency: "",
        amount: "",
        variableAmount: "",
        narration: "",
    },
    mandateDetails: {
        subscriberCode: "",
        product: "",
        businessProduct: "",
        startDate: "",
        endDate: "",
        FirstPayoutDate: "",
        mandateFile: "",
    },
    businessInfo: {
        businessName: "",
        phoneNumber: "",
        website: "",
        businessEmail: "",
        contactEmail: "",
        supportEmail: "",
        payersAddress: "",
        businessCode: "",
    },
    addPayOut: {
        scheduleName: "",
        walletName: "",
        debitDescription: "",
    },
    scheduleItems: {
        accountNumber: "",
        beneficiary: "",
        bank: "",
        amount: "",
        narration: "",
    },
    updateSchedule: {
        scheduleName: "",
        debitDescription: ""
    },
    transaction: {
        payersName: "",
        merchantReference: "",
        amount: "",
        reference: "",
    }
}

const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserProducts: (state, action) => {
            state.product = action.payload
        },
        setBusinessInfo: (state, action) => {
            state.businessInfo = action.payload
        },
        setSubAccount: (state, action) => {
            state.subAccount = action.payload;
        },
        setDigitalWallet: (state, action) => {
            state.digitalWallet = action.payload;
        },
        setPayersDetail: (state, action) => {
            state.payersDetail = action.payload;
        },
        setBankDetails: (state, action) => {
            state.bankDetails = action.payload;
        },
        setMandateDetails: (state, action) => {
            state.mandateDetails = action.payload;
        },
        setTransaction: (state, action) => {
            state.transaction = action.payload;
        },
    }  
})

export const {
    setUserProducts, 
    setBusinessInfo, 
    setSubAccount, 
    setDigitalWallet, 
    setPayersDetail, 
    setBankDetails, 
    setMandateDetails,
    setTransaction,
} = user.actions;

export default user.reducer;