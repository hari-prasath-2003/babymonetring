import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import App from "./App";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Video from "./pages/Video";
import CradleControl from "./pages/CradleControl";
import HealthMonitor from "./pages/HealthMonitor";
import Sensor from "./pages/Sensor";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/">
          <Route element={<Home />} index />
          <Route element={<Video />} path="/video" />
          <Route element={<CradleControl />} path="/cradle-control" />
          <Route element={<HealthMonitor />} path="/health-monitor" />
          <Route element={<Sensor />} path="/sensor" />
        </Route>
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/signup" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
