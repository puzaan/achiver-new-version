import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  IndexView,
  Home as HomeView,
  CareerListing as CareerListingView,
  CareerListingMinimal as CareerListingMinimalView,
  CareerOpening as CareerOpeningView,
  ContactPage as ContactPageView,
  Service as ServiceView,
  JobListing as JobListingView,
  About as AboutView,
  NotFound as NotFoundView,
  EnrollForm as EnrollFormView,
} from './views';
// Documentation pages


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <IndexView />} />
      <Route exact path="/home" render={() => <HomeView />} />
      <Route exact path="/enroll" render={() => <EnrollFormView />} />

      <Route
        exact
        path="/career-listing"
        render={() => <CareerListingView />}
      />
      <Route
        exact
        path="/career-listing-minimal"
        render={() => <CareerListingMinimalView />}
      />
      <Route
        exact
        path="/career-opening/:id"
        render={() => <CareerOpeningView />}
      />
      <Route exact path="/contact-page" render={() => <ContactPageView />} />
      <Route exact path="/service" render={() => <ServiceView />} />
      <Route exact path="/job-listing" render={() => <JobListingView />} />
      <Route exact path="/about" render={() => <AboutView />} />
      <Route exact path="/not-found" render={() => <NotFoundView />} />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;