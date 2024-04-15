import { useSelector } from "react-redux"

export const useRedux = () => {

    const isLoading = useSelector(state => state.root.isLoading)
    const isAuthenticate = useSelector(state => state.root.isAuthenticate)
    const toasts = useSelector(state => state.root.toasts)
    const isMobile = useSelector(state => state.root.isMobile)
    const isDrawerOpen = useSelector(state => state.root.isDrawerOpen)
    

    return { isLoading,isAuthenticate,toasts,isMobile,isDrawerOpen }
}