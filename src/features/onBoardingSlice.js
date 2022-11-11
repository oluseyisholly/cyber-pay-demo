import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    createAccount: {
        bank: "",
        accountName: "",
        accountNumber: ""
    },
    testIntegration: {
        integrationStatus: "",
        businessName: "",
        businessCode: "",
        integrationKey: "",
    },
    updateProfile: {
        businessType: "",
        businessEmail: "",
        supportEmail: "",
        businessCategory: "",
        streetAddress: "",
        residenceState: "",
        businessWebsite: "",
        contactEmail: "",
        disputeEmail: "",
        phoneNumber: "",
        townCity: "",
        country: "",
    },
    uploadDocuments:{
        addDocument: "",
        documentType: "",

    }
}

const onBoarding = createSlice({
    name: "onBoarding",
    initialState,
    reducers: {
        setCreateAccount: (state, action) =>{
            state.createAccount= action.payload
        },
        setTestIntegration: (state, action) =>{
            state.testIntegration = action.payload;
        },
        setUpdateProfile: (state, action) =>{
            state.updateProfile = action.payload;
        },
        setUploadDocument: (state, action) =>{
            state.updateProfile = action.payload;
        }
    }
})

export const {setCreateAccount, setTestIntegration, setUpdateProfile, setUploadDocument} = onBoarding.actions
export default onBoarding.reducer;