import {configureStore} from "@reduxjs/toolkit"
import studentSlicereducer from "./studentSlice.js"

const store = configureStore({
    reducer: {
        student : studentSlicereducer
    }
})

export default store;