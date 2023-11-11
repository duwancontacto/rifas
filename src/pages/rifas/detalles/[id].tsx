import Layout from "@/components/Layout";
import Rifas from "@/components/Rifas";
import { GetRaffle, selectRaffleState } from "@/store/slices/raffles";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RifaPage() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(
      () => dispatch(GetRaffle(id || "") as any),
      200
    );

    return () => {
      clearTimeout(timeoutId);
    };

    //eslint-disable-next-line
  }, []);

  const { raffle } = useSelector(selectRaffleState);

  return (
    <div>
      <Head>
        <title>Rifa con causa | {raffle?.name}</title>

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={raffle?.name} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={raffle?.image} />
        <meta
          property="og:description"
          content="Descripción de tu página aquí"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={raffle?.name} />
        <meta name="twitter:image" content={raffle?.image} />
        <meta
          name="twitter:description"
          content="Descripción de tu página aquí"
        />
      </Head>

      <Layout>
        <Rifas />
      </Layout>
    </div>
  );
}
