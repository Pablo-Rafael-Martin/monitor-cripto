import type { Metadata } from "next";
import "./style/index.scss";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { themeConfig } from './style/theme.js';

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
                    <AntdRegistry>{children}</AntdRegistry>
                </ConfigProvider>
            </body>
        </html>
    );
}
