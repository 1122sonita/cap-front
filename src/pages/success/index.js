import { Successful } from '@components/pages';
import { seoDefualt } from '@constants';
import { tran } from '@utilities/i18n';

export default function Index({ locale }) {
  const { locale: trans } = tran(locale);

  return <Successful locale={locale} trans={trans} />;
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      locale: ctx.locale,
      seo: {
        ...seoDefualt,
        linkTo: '/success',
      },
    },
  };
}
