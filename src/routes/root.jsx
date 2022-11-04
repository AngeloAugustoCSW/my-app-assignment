import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import CSWErrorPage from "../CSWComponents/ErrorPage";
import { CSWPageLayout, PageLayout } from "../CSWComponents/PageLayout";
import CSWHomeScreen from '../CSWComponents/HomeScreen';
import CSWFetchNews from "../CSWComponents/FetchNews";
import CSWAbout from "../CSWComponents/About";
import CSWAlbum from "../CSWComponents/FetchAlbum";
import CSWContact from "../CSWComponents/ContactPage";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />} errorElement={<CSWErrorPage />}>
      <Route index path="/" element={<CSWHomeScreen />} />
      <Route path="about" element={<CSWAbout />} />
      <Route path="album" element={<CSWAlbum />} />
      <Route path="news" element={<CSWFetchNews />} />
      <Route path="contact" element={<CSWContact />} />
      
    </Route>
  )
);

const Root = () => {
  return <RouterProvider router={route} />;
};
export default Root;
