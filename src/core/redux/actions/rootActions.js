import * as actions from '../slices/rootSlice'
import store from '@/core/redux/store'

export const setIsLoading = (payload) => store.dispatch(actions.setIsLoading(payload))
export const setAuthenticate = (payload) => store.dispatch(actions.setAuthenticate(payload))
export const addToast = (payload) => store.dispatch(actions.addToast(payload))
export const deleteToast = (payload) => store.dispatch(actions.deleteToast(payload))
