import React from "react";
import Error from "pages/error";
import Dashboard from "pages/dashboard";

const schema = [
  {
    path: "/",
    exact: true,
    component: Dashboard,
  },
  {
    path: "/people",
    exact: true,
    render: () => <h1>people</h1>,
  },
  {
    path: "/search",
    exact: true,
    render: () => <h1>search</h1>,
  },
  {
    component: Error,
  },
];

export default schema;

export const layoutRoutes = (function () {
   return schema.map((item) => {
    return item = item.path
  });
})();
