import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    midRoute: " Get Started/",
    endRoute: " Create Account",
    getStartedStyle: "d-inline ",
    otherStyle: "d-inline text-dark"
}

const route = createSlice({
    name: "route",
    initialState,
    reducers: {
        setRoute: (state, action) => {
            state.midRoute = action.payload.midRoute
            state.endRoute = action.payload.endRoute
            state.getStartedStyle = action.payload.getStartedStyle
            state.otherStyle = action.payload.otherStyle
        },
    }
})

export const {setRoute} = route.actions;
export default route.reducer;