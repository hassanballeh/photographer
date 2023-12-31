import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Auth from "./components/Auth";
import Sidebar from "./components/Sidebar";
import Posts from "./components/Posts";
import Admin from "./components/Admin";
import Bookings from "./components/Bookings";
import UserDetails from "./components/UserDetails";
import BookingDetails from "./components/BookingDetails";
import AdminAuth from "./components/AdminAuth";
import Complaints from "./components/Complaints";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" exact component={Auth} />
        <Route path="/adminauth" exact component={AdminAuth} />
        <Route path="/">
          <MainLayout />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const MainLayout = () => {
  return (
    <div className="relative flex">
      <Sidebar />
      <div className="md:w-[calc(100%-240px)] md:ml-[240px] w-full px-20">
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/bookings" exact component={Bookings} />
          <Route path="/user/:id" exact component={UserDetails} />
          <Route path="/booking/:id" exact component={BookingDetails} />
          <Route path="/complaints" exact component={Complaints} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
