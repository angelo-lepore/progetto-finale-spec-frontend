// Import Outlet
import { Outlet } from "react-router-dom";

// Import Header
import Header from "../components/Header";

// Layout di default
export default function DefaultLayout() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}
