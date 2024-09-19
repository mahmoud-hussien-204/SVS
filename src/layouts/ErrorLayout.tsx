import {useRouteError, isRouteErrorResponse} from "react-router";

const ErrorLayout = () => {
  const routeError = useRouteError();
  console.log(routeError);

  return (
    <div>
      ErrorLayout
      {isRouteErrorResponse(routeError) && <pre>{JSON.stringify(routeError)}</pre>}
    </div>
  );
};

export default ErrorLayout;
