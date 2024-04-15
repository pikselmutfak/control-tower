import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  isLoading:true,
  isAuthenticate:false,
  toasts:[],
}

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
      setIsLoading: (state, action) => {
        state.isLoading = action.payload
      },
      setAuthenticate: (state, action) => {
        state.isAuthenticate = action.payload
      },
      addToast: (state, action) => {
        state.toasts = [...state.toasts, action.payload];
      },
      deleteToast: (state) => {
        state.toasts.shift();
      },
  },
})

export const { setIsLoading,setAuthenticate,addToast,deleteToast } = rootSlice.actions

export default rootSlice.reducer