import { useRouteError } from "react-router-dom";

const CSWErrorPage = () => {
    const error = useRouteError();
  return (
    <div id="error_page">
      <h1>Deu ruim</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};
export default CSWErrorPage;
