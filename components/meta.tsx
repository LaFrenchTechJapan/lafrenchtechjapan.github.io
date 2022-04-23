import Head from 'next/head'
import { HOME_OG_URL, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="192x192" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <title>La French Tech Tokyo › A network of entrepreneurs in Japan</title>
      <meta
        name="description"
        content={`A community of entrepreneurs in Japan and French entrepreneurs around the world, looking to create business opportunities in the Japanese startup ecosystem.`}
      />
      <meta property="og:url" content={HOME_OG_URL} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <meta property="og:image:secure_url" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}