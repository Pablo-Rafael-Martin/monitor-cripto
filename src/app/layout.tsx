import type { Metadata } from "next";
import "./style/index.scss";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, Flex, Layout } from "antd";
import { themeConfig } from './style/theme.js';
import AppMenu from "@/components/AppMenu";
import WebsiteLogo from "@/components/WebsiteLogo";
import { Header, Footer, Content } from "antd/es/layout/layout";

export const metadata: Metadata = {
    title: "Monitor Cripto",
    description: "Importe uma carteira, rastreie preços e outros indicadores e receba alertas de compra e venda.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body>
                <ConfigProvider theme={themeConfig}>
                    <AntdRegistry>
                        <Layout style={{ minHeight: '100vh', }}>
                            <Header style={{ backgroundColor: "transparent" }}>
                                <Flex style={{ justifyContent: 'space-between' }}>
                                    <WebsiteLogo />

                                    <AppMenu />
                                </Flex>
                            </Header>

                            <Content >
                                {children}
                                {/* <LoginContent /> */}

                                {/* <h1>Landing page</h1> */}
                            </Content>

                            <Footer>
                                Este é o footer
                            </Footer>
                        </Layout>
                    </AntdRegistry>
                </ConfigProvider>
            </body>
        </html>
    );
}
