import React from "react";
import Error from "pages/error";
import {Card} from 'antd'

const schema = [
  {
    path: "/",
    exact: true,
    render: () => (
        <>
          <Card>
            <p>aowdkawodk</p><p>aowdkawodk</p><p>aowdkawodk</p><p>aowdkawodk</p>
          </Card>
          <Card>
            <p>aowdkawodk</p><p>aowdkawodk</p><p>aowdkawodk</p><p>aowdkawodk</p>
          </Card>
          <Card>
            <p>aowdkawodk</p><p>aowdkawodk</p><p>aowdkawodk</p><p>aowdkawodk</p>
          </Card>
          <Card>
            <p>aowdkawodk</p><p>aowdkawodk</p><p>aowdkawodk</p><p>aowdkawodk</p>
          </Card>
          <Card>
            <p>aowdkawodk</p><p>aowdkawodk</p><p>aowdkawodk</p><p>aowdkawodk</p>
          </Card>
          <Card>
            <p>aowdkawodk</p><p>aowdkawodk</p><p>aowdkawodk</p><p>aowdkawodk</p>
          </Card>
          <Card>
            <p>aowdkawodk</p><p>aowdkawodk</p><p>aowdkawodk</p><p>aowdkawodk</p>
          </Card>
          </>
    ),
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

export const layoutRoutes = (function () {
   return schema.map((item) => {
    return item = item.path
  });
})();
