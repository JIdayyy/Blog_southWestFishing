/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import "tailwindcss/tailwind.css";
import React from "react";
import { AppProps } from "next/app";
import "@styles/global.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { Provider } from "react-redux";
import store from "@redux/store";
import Layout from "@components/Layout";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Provider store={store}>
                    <Layout page="South West Fishing">
                        <Component {...pageProps} />
                        <ToastContainer autoClose={3000} />
                    </Layout>
                </Provider>
            </Hydrate>
        </QueryClientProvider>
    );
}

export default MyApp;
