import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import NProgress from "nprogress";
import SSRProvider from 'react-bootstrap/SSRProvider';
import { AuthProvider } from '../contexts/AuthContext';
import { AnnouncementProvider } from '../contexts/AnnouncementContext';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import '../styles/globals.css';
import '../styles/nprogress.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'react-loading-skeleton/dist/skeleton.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { MotorcycleProvider } from '../contexts/MotorcycleContext';
import { ModalActionProvider } from '../contexts/ModalActionContext';
import { UserProvider } from '../contexts/UserContext';
import { GalleryProvider } from '../contexts/GalleryContext';
import { CarProvider } from '../contexts/CarContext';
import { ModalAction } from '../components/ModalAction';
import { FilterProvider } from "../contexts/FilterContext";
import { AlertProvider } from '../contexts/AlertContext';
import { Alert } from '../components/Alert';
import ImgDefault from "../assets/image-default.png";
import { Loading } from '../components/Loading';
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleStart = (url) => {
      setLoading(true);
      NProgress.start();
    };
    const handleStop = () => {
      setLoading(false);
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return (
    <SSRProvider>
      <Head>
        <title>PortalAutos - Compre, venda e financie carros usados, novos e motos.</title>
        <meta name="description" content="Se voc?? est?? procurando o carro ou moto perfeito para a sua vida e n??o quer pagar rios de dinheiro por isso, n??s podemos te ajudar! O PortalAutos oferece a voc?? uma forma de encontrar o seu ve??culo ideal de forma r??pida, f??cil e segura." />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ModalActionProvider>
          <FilterProvider>
            <GalleryProvider>
              <AnnouncementProvider>
                <UserProvider>
                  <CarProvider>
                    <MotorcycleProvider>
                      <AuthProvider>
                        <AlertProvider>
                          <Component {...pageProps} />
                          <Alert />
                          {loading && <Loading />}
                        </AlertProvider>
                        <ModalAction />
                      </AuthProvider>
                    </MotorcycleProvider>
                  </CarProvider>
                </UserProvider>
              </AnnouncementProvider>
            </GalleryProvider>
          </FilterProvider>
        </ModalActionProvider>
      </QueryClientProvider>
    </SSRProvider>
  )
}

export default MyApp
