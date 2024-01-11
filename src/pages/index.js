import { Home } from '@components/pages';
import { getCloakingLink } from '@utilities/dev';

export default function Index() {
  return <Home />;
}

export async function getStaticProps() {
  // Fetch data from external API
  const clid = getCloakingLink();
  // Pass data to the page via props

  const seo = {
    linkTo: '/',
    Title: {
      title: 'Capstone project',
    },
  };
  return {
    props: {
      seo,
      clid,
    },
    revalidate: 10, // In seconds
  };
}
