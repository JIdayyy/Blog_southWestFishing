import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { Provider } from "react-redux";
import store from "@redux/store";
import { Layout } from "@components/Layout";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Router from "next/router";

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
                    </Layout>
                </Provider>
            </Hydrate>
        </QueryClientProvider>
    );
}

export default MyApp;
