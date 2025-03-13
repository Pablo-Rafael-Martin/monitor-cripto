import { Layout, Menu } from "antd";
import styles from "./page.module.css";
import { Header, Content, Footer } from "antd/es/layout/layout";
import AppMenu from "@/components/AppMenu";


export default function Home() {
    return (
        <Layout style={{ minHeight: '100vh', }}>
            <Header style={{ backgroundColor: "transparent" }}>
                {/* Este é o header */}
                {/* Logo */}

                <AppMenu />
            </Header>

            <Content >
                {/* <div className="col-5 offset-1">
                    <h1>Landing Page</h1>
                </div> */}
                <div className="main-frame flex">
                    <div className="col-5">
                        <h1>Form</h1>
                    </div>
                </div>
            </Content>

            <Footer>
                Este é o footer
            </Footer>
        </Layout>
    );
}