/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';

const story = ['Construction projects often get delayed due to late payment cycles. It takes a median of about 90 days to get paid, which means contractors are often stuck without enough working capital. This is a nightmare for contractors who need cash flow in order to continue working on projects.','UdyogPay changes this with its early payment system for contractors.','We not only handle invoices for contractors but also digitize the paper-based billing into a fast and efficent way to release payment to the contractors’ bank accounts in just a few clicks. With our partner banks and our proprietary technology, we make sure the payment reaches your contractors not in days but minutes.']

export default function Story() {
  return (
    <section sx={{ variant: 'section.feature' }}>
    <Container>
      <SectionHeader
        slogan="Some Insights"
        title="Our Story will Connect with you"
      />
      <br />
      <Box sx={styles.paragraph}>
        {story[0]}
        <br />
        {story[1]}
        <br />
        <br />
        {story[2]}
      </Box>
    </Container>
  </section>
  );
}

const styles = {
  
  paragraph: {
    textAlign: 'center'
  },
};
