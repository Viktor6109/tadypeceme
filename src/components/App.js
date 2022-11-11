import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import AppHeader from "./AppHeader/AppHeader";
import MenuPage from "../pages/Menu";
import MenuItemPage from "../pages/MenuItem";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import DeliveryPage from "../pages/Delivery";
import AccountPage from "../pages/Account";
import OrderHistoryPage from "../pages/OrderHistory";
import MealPlannerPage from "../pages/Planner";

import routes from "../configs/routes";

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<AppHeader />}>
        <Route path={routes.MENU}>
          <Route path="" element={<MenuPage />} />
          <Route path={routes.MENU_ITEM} element={<MenuItemPage />} />
          <Route path="*" element={<h2>Ресурс не найден</h2>} />
        </Route>
        {/* <Route path={routes.MENU} element={<MenuPage />} /> */}
        {/* <Route path={routes.MENU_ITEM} elemety={<MenuItemPage />} /> */}
        <Route path={routes.ABOUT} element={<AboutPage />} />
        <Route path={routes.CONTACT} element={<ContactPage />} />
        <Route path={routes.DELIVERY} element={<DeliveryPage />} />
        <Route path={routes.ACCOUNT} element={<AccountPage />} />
        <Route path={routes.ORDER_HISTORY} element={<OrderHistoryPage />} />
        <Route path={routes.PLANNER} element={<MealPlannerPage />} />
      </Route>
    </Routes>
  </div>
);

export default App;
