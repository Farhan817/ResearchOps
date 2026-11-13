import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoute } from "./utils/routes";
import AuthLayout from "./components/AuthLayout";
import MainLayout from "./components/MainLayout";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
      <Routes>
        <Route element={<AuthLayout />}>
          {publicRoute.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
        </Route>

        <Route element={<MainLayout />}>
          {privateRoutes.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
