import { Service } from '@components/pages';
import { seoDefualt } from '@constants';
import { tran } from '@utilities/i18n';

export default function Index({ locale, apiData }) {
  // console.log(apiData);
  const { locale: trans } = tran(locale);
  return <Service locale={locale} trans={trans} apiData={apiData} />;
}

export async function getServerSideProps(ctx) {
  try {
    const apiEndpoint = process.env.NEXT_PUBLIC_PACKAGE_URL;
    const response = await fetch(apiEndpoint);
    const apiData = await response.json();

    return {
      props: {
        locale: ctx.locale,
        seo: {
          ...seoDefualt,
          linkTo: '/service',
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
          linkTo: '/service',
        },
        apiData: null,
      },
    };
  }
}
