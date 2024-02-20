import { Home } from '@components/pages';
import { seoDefualt } from '@constants';
import { tran } from '@utilities/i18n';

export default function Index({ locale, apiData, apiData1 }) {
  const { locale: trans } = tran(locale);
  return <Home locale={locale} trans={trans} apiData={apiData} apiData1={apiData1} />;
}

export async function getServerSideProps(ctx) {
  try {
    const apiEndpoint = process.env.NEXT_PUBLIC_BANNER_URL;
    const response = await fetch(apiEndpoint);
    const apiData = await response.json();
    const apiEndpoint1 = process.env.NEXT_PUBLIC_RECOMMENDED_PACKAGE_URL;
    const response1 = await fetch(apiEndpoint1);
    const apiData1 = await response1.json();

    return {
      props: {
        locale: ctx.locale,
        seo: {
          ...seoDefualt,
          linkTo: '/',
        },
        apiData,
        apiData1,
      },
    };
  } catch (error) {
    console.error('Error fetching data from API:', error);
    return {
      props: {
        locale: ctx.locale,
        seo: {
          ...seoDefualt,
          linkTo: '/',
        },
        apiData: null,
        apiData1: null,
      },
    };
  }
}
