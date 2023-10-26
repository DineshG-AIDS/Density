import HomeScreen from "./Screen/HomeScreen";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
// import Screen2 from "./Screen/Screen2";
// import About from "./Screen/About";
// import FaqScreen from "./Screen/FaqScreen";

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<HomeScreen />} />
        {/* <Route path="/search" element={<Screen2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FaqScreen />} /> */}
      </Route>
    )
  );
  return (
    <RouterProvider router={Router}>
      <Outlet />
    </RouterProvider>
  );
}

export default App;
