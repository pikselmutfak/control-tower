import { useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import { setIsLoading, setAuthenticate } from "@/core/redux/actions/rootActions";
import Cookies from 'js-cookie';

const Landing = () => {
 

  useEffect(() => {
    const userToken = Cookies.get("APIToken");
    if (userToken !==  "null" && userToken !== undefined && userToken !== "") {
      setIsLoading(false)
      setAuthenticate(true)
    } else {
      setIsLoading(false)
      setAuthenticate(false)
    }
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: "center", width: "100vw", height: '100vh', alignItems: 'center' }}>
    <Bars
  height="130"
  width="130"
  color="#AFDEE8"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
    </div>
  );
}

export default Landing;