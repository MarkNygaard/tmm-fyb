import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='da' className='scroll-smooth'>
      <Head />
      <body className='pb-safe'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
