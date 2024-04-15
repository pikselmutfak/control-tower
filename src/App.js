import { Routes, Route } from "react-router-dom";
import { useRedux } from "@/core/redux/hooks";
import LoaderScreen from "@/components/Loader/LoaderScreen";
import Toast from "@/components/ui/Toast/Toast";
import MUIWrapper from "@/components/MUIWrapper";
import ScrollToTopOnPageChange from "@/core/hooks/useScrollToTop";
import NotFound from "@/components/NotFound/Page";
import LayoutMain from "./layout/Page";
import Home from "@/components/Home/Page";
import Storage from "@/components/Storage/Page"
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App = () => {
  const { isLoading } = useRedux();

  if (isLoading) {
    return <LoaderScreen />;
  }

  return (
    <>
      <MUIWrapper>
        <Toast />
        <ScrollToTopOnPageChange />

        <Routes>
        <Route path="/" element={<LayoutMain />}>
    <Route index element={<Home />} />
    <Route path="Storage" element={<Storage />} />
  </Route>
  <Route path="*" element={<NotFound />} />
        </Routes>
      </MUIWrapper>
    </>
  );
};

export default App;
