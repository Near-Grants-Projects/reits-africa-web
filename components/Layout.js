import Head from 'next/head';
import Header from '@/components/Header';

export default function Layout({ title, description, keywords, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header />
      {children}
    </>
  );
}

Layout.defaultProps = {
  title: 'Reits Africa',
  description: 'Buy, rent, or invest in tokenized real estate projects',
};
