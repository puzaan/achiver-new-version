import React from 'react';
import { Switch, Route } from 'react-router-dom';
//, Redirect
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
  ItTraning as ItTraning,
  //WebService as WebServiceView,
  Webservices as WebservicesView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <IndexView />} />
      <Route exact path="/home" render={() => <HomeView />} />
      <Route exact path="/enroll" render={() => <EnrollFormView />} />
      <Route exact path="/it-traning" render={() => <ItTraning />} />
      <Route exact path="/web-service" render={() => <WebservicesView />} />
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
        path="/career-opening/:jobList"
        render={() => <CareerOpeningView />}
      />
      <Route exact path="/contact-page" render={() => <ContactPageView />} />
      <Route exact path="/service" render={() => <ServiceView />} />
      <Route exact path="/job-listing" render={() => <JobListingView />} />
      <Route exact path="/about" render={() => <AboutView />} />
      <Route exact path="/not-found" render={() => <NotFoundView />} />
      {/* <Redirect to="/not-found" /> */}
    </Switch>
  );
};

export default Routes;
