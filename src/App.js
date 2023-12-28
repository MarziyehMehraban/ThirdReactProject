import { Route, Routes } from "react-router-dom"
import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import Files from './pages/files/Files';
import MainItemList from './pages/main/MainItemList';
import { useEffect, useState } from "react";
import FlagProvider from "./components/FlagProvider";
import Agency from "./pages/agency/Agency";
import FileSubmit from "./pages/fileSubmit/FileSubmit";

function App() {

  const[apii, setApii] = useState("?web=true&cityIds[]=39&lastId=0&");
  const[url, setUrl] = useState("files?cities[]=39");
  // const[my_flag, setMyFalg] = useState(false);

  const getApi = (entryUrl, filterUrl) => {
    setApii(entryUrl);
    setUrl(filterUrl);
  }

  // useEffect(()=> {
  //   console.log(url)
  // },[url])
  // console.log(url);
  // console.log(apii);

  return (
    <div>
        {/* <Main /> */}
        <FlagProvider>
          <Header getApi={getApi} />
          <Routes>
            <Route path="/:id" element={<MainItemList apii={apii} />} />
            <Route path='/files/:fileId' element={<Files />} />
            <Route path='/real-estate/agency/:Id' element={<Agency />} />
            <Route path='/profile/files/create' element={<FileSubmit />} />
          </Routes>
          <Footer />
        </FlagProvider>
        {/* <Files /> */}
    </div>
  );
}

export default App;
