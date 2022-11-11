import React from "react";
import { useParams } from "react-router-dom";
import MenuItem from "../modules/menu/MenuItemContainer";

const MenuItemPage = () => (
  <div>
    <MenuItem />
    <h2>Hello</h2>
  </div>
);
// function MenuItemPage() {
//   const params = useParams();
//   const menuId = params.id;
//   return <MenuItem id={menuId} />;
// }

export default MenuItemPage;
