import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  if(typeof window !== 'undefined') {
    const preloader = document.getElementById('preloader');
    if(preloader){
      preloader.style.display = 'none';
    }
  }

  return <Component {...pageProps} />
}

export default MyApp
