import { Detail } from '@components/pages';
import { seoDefualt } from '@constants';
import { tran } from '@utilities/i18n';

export default function Index({ locale, apiData }) {
  const { locale: trans } = tran(locale);
  return <Detail locale={locale} trans={trans} apiData={apiData} />;
}

export async function getServerSideProps(ctx) {
  try {
    const apiEndpoint = process.env.NEXT_PUBLIC_PACKAGE_URL;
    const response = await fetch(apiEndpoint);
    const apiData = await response.json();
    // const apiEndpoint1 = process.env.NEXT_PUBLIC_CHECKOUT_URL; // this api not work
    // const response1 = await fetch(apiEndpoint1);
    // const apiData1 = await response1.json();

    return {
      props: {
        locale: ctx.locale,
        seo: {
          ...seoDefualt,
          linkTo: '/detail',
        },
        apiData,
      },
    };
  } catch (error) {
    console.error('Error fetching data from API:', error);
    return {
      props: {
        locale: ctx.locale,
        seo: {
          ...seoDefualt,
          linkTo: '/detail',
        },
        apiData: null,
      },
    };
  }
}
