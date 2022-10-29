import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import CSWErrorPage from "../CSWComponents/ErrorPage";
import CSWFetchNews from "../CSWComponents/FetchNews";
import { CSWPageLayout, PageLayout } from "../CSWComponents/PageLayout";

const HomeScreen = () => <div>oi</div>;
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />} errorElement={<CSWErrorPage />}>
      <Route index path="/" element={<HomeScreen />} />
      <Route path="albuns" element={<CSWFetchNews />} />
      <Route path="news" element={<CSWFetchNews />} />
    </Route>
  )
);

const Root = () => {
  return <RouterProvider router={route} />;
};
export default Root;
