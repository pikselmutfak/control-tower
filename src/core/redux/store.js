import { configureStore } from '@reduxjs/toolkit'
import rootSlice from './slices/rootSlice'

const store = configureStore({
  reducer: {
    root:rootSlice,
  },
  devTools:true
})

export default store