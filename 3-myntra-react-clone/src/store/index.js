import {configureStore} from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";
//Store configuration
const myntraStore = configureStore({
    reducer :{
        items : itemsSlice.reducer,
        fetchStatus : fetchStatusSlice.reducer,
        bag : bagSlice.reducer,
    }
});

export default myntraStore;