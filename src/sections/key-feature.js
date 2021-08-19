/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = {
  subTitle: 'our features',
  title: 'Our Core Product features',
  features: [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Early Payments to Contractors',
      title: 'Early Payments to Contractors',
      text:
        'With UdyogPe contractors can get early payment to their invoices and maintain the cashflow.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Secure Contents',
      title: 'Invoice Approval System', 
      text:
        "No more managing of invoices in folders, instant approval system for invoices and digital management.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Secure Contents',
      title: 'Easy Payment Options',
      text:
        'Instant payment of invoices on due date with UdyogPe payment options',
  },
  ],
};

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan={data.subTitle}
          title={data.title}
        />

        <Grid sx={styles.grid}>
          {data.features.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
