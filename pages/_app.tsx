// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import MainLayout from '../src/components/MainLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return <MainLayout pageContext={pageProps}>
    <Component {...pageProps} />
    </MainLayout>
}
export default MyApp
