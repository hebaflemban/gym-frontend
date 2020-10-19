import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";
import Signup from "./SignupForm";
import Login from "./LoginForm";
import BookList from "./BookList";
import BookingList from "./BookingList";
import {connect} from "react-redux";
import Loading from "./Loading";

const App = ({ loading, user }) => {
  console.log(user)
  if (loading) return <Login />;
  return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar/>
          </div>
          <div className="content col-10">
            <Switch>
              <Route path="/authors/:authorID">
                <AuthorDetail/>
              </Route>
              <Route path="/authors">
                <AuthorsList/>
              </Route>
              <Route path="/books/:type?">
                <BookList/>
              </Route>
              <Route path="/bookings/:bookingID?">
                <BookingList/>
              </Route>
              <Route path="/signup">
                <Signup/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Redirect to="/authors"/>
            </Switch>
          </div>
        </div>
      </div>
  );
}
const mapStateToProps = ({ authors, user }) => ({
  authors,
  user,
  loading: !user,
});

export default connect(mapStateToProps)(App);
