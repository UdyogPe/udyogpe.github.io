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
  subTitle: 'our services',
  title: 'Why Companies choose UdyogPe?',
  features: [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Efficient and Fast Processing',
      title: 'Efficient and Fast Processing',
      text:
        'Get payment disbursal within 24 hours and allow direct payment to sub contractors.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Secure Contents',
      title: 'No Surprise or Hidden Payment', 
      text:
        "We'll never ask you to pay twice for a transaction, simply make the payment on credit dates.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Secure Contents',
      title: 'Manage your invoices the right way',
      text:
        'Providing you with instant Invoice approval system and Reminder for due date and even history of payments.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Secure Contents',
      title: 'Speed up your project',
      text:
        'Increase efficiency upto 40% by making early payments on the go.',
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
