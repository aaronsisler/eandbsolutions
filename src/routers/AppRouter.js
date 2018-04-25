import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LandingPage from '../components/LandingPage'
import ContactPage from '../components/ContactPage'
import AboutPage from '../components/AboutPage'
import PricingPage from '../components/PricingPage'
import PortfolioPage from '../components/PortfolioPage'
import PrivacyPolicyPage from '../components/PrivacyPolicyPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = (props) => (
    <BrowserRouter>
        <div>
            <Navbar />
            <Switch>
                <Route path="/" component={LandingPage} exact={true} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/pricing" component={PricingPage} />
                <Route path="/portfolio" component={PortfolioPage} />
                <Route path="/privacy" component={PrivacyPolicyPage} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;