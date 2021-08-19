import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Story from '../sections/story';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="UdyogPe" />
          <Banner />
          <br />
          <WorkFlow />
          <br />
          <br />
          <Story /> 
          <KeyFeature />
          {/* <ServiceSection /> */}
          {/* <CoreFeature /> Not Removing for future use  */}
          {/* <Package />     Not Removing for future use  */}
          <TeamSection />
          <TestimonialCard />
        </Layout>
    </ThemeProvider>
  );
}
