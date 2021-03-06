/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutubeSquare, FaVoicemail, FaMailBulk, FaMailchimp, FaInbox, FaLinkedin } from 'react-icons/fa';

import Member1 from 'assets/team/member-1.png';
import Member2 from 'assets/team/member-2.png';
import Member3 from 'assets/team/member-3.png';
import Member4 from 'assets/team/member-4.png';



const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Vivek Jha',
    title: 'Vivek Jha',
    designation: 'Founder',
    socialProfile: [
      {
        id: 1,
        name: 'mail',
        path: '#',
        icon: <FaInbox />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Utsav Singla',
    title: 'Utsav Singla',
    designation: 'Founder',
    socialProfile: [
      {
        id: 1,
        name: 'mail',
        path: '#',
        icon: <FaInbox />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Heemank Verma',
    title: 'Heemank Verma',
    designation: 'Technical Lead',
    socialProfile: [
      {
        id: 1,
        name: 'mail',
        path: '#',
        icon: <FaInbox />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member4,
    altText: 'Chirag Bansal',
    title: 'Chirag Bansal',
    designation: 'Collaboration Manager',
    socialProfile: [
      {
        id: 1,
        name: 'mail',
        path: '#',
        icon: <FaInbox />,
      },
    ],
  },

];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader
          slogan="our team"
          title="The most qualified and talented individuals"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
