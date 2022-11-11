import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    stage: 1,
    shows: false
}

const mandateStages = createSlice({
    name: "stages",
    initialState,
    reducers: {
        setStages: (state, action) => {
            state.stage = action.payload.stage
        },
        setSubmit: (state, action) =>{
            state.shows = action.payload.state
        }
    }
})
export const {setStages, setTitle, setSubmit} = mandateStages.actions;
export default mandateStages.reducer;