import { theme } from "antd"

export const themeConfig = {
    algorithm: theme.darkAlgorithm,
    token: {
        colorBgBase: '#f5f5f5',
        colorPrimary: '#0057FF',
        colorInfo: '#0057FF',
        colorLink: '#0057FF',
    },
    components: {
        Button: {
            // defaultColor: 'red',
            primaryColor: 'white !important',
            // solidTextColor: 'red',
        }
    }
}