'use client';

import { Flex, Form, Layout, Menu } from "antd";
import styles from "./page.module.css";
import { Header, Content, Footer } from "antd/es/layout/layout";
import AppMenu from "@/components/AppMenu";
import { Roboto } from "next/font/google";
import WebsiteLogo from "@/components/WebsiteLogo";
import LoginContent from "./LoginContent";



const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    style: ['normal'],
    subsets: ['latin'],
});


export default function Entrar() {
    return (
        <>
            <style jsx global>{`html {font-family: ${roboto.style.fontFamily};}`}</style>

            <Layout style={{ minHeight: '100vh', }}>
                <Header style={{ backgroundColor: "transparent" }}>
                    <Flex style={{justifyContent: 'space-between'}}>
                        <WebsiteLogo />

                        <AppMenu />
                    </Flex>
                </Header>

                <Content>
                    <LoginContent />
                </Content>

                <Footer>
                    Este é o footer
                </Footer>
            </Layout>
        </>
    );
}