import React from "react";
import Error from "pages/error";

const schema = [
  {
    path: "/",
    exact: true,
    render: () => <h1>Main page</h1>,
  },
  {
    path: "/dash",
    exact: true,
    render: () => <h1>dash</h1>,
  },
  {
    component: Error,
  },
];

export default schema;

export const routes = (function () {
   return schema.map((item) => {
    return item = item.path
  });
})();
