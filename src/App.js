import { Provider } from "react-redux";
import store from "./redux/store";
import Result from "./component/Result/result";
import Home from "./component/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/result" element={<Result/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
