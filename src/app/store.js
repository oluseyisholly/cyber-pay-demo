import {configureStore} from "@reduxjs/toolkit"
import layoutSlice from "../features/layoutSlice";
import mandateSlice from "../features/mandateSlice";
import onBoardingSlice from "../features/onBoardingSlice"
import userSlice from "../features/userSlice";
const store = configureStore({
    reducer: {
        onBoarding: onBoardingSlice,
        user: userSlice,
        stages: mandateSlice,
        route: layoutSlice,
    }
})

export default store;