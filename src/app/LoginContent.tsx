import { Button, Flex, Form, FormProps, Input, Space, Typography } from "antd";
import MyForm from "@/components/MyForm";
import { ArrowRightOutlined } from "@ant-design/icons";


type FieldType = {
    email: string;
    password: string;
}


const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success: ', values)
}


function LoginContent() {
    return (
        <>
            <div className="main-frame flex">
                <div className="col-3 offset-1 stack" style={{paddingTop: 160}}>
                    <Typography.Title level={1}>
                        <span>Sign in</span>
                    </Typography.Title>
                    {/* <h2>Sign in</h2> */}

                    <Form name="login"
                        layout="vertical"
                        initialValues={{ remember: true }}
                        autoComplete="off"
                        style={{
                            width: "100%",
                        }}
                        onFinish={onFinish}>

                        <Flex vertical >
                            <Form.Item<FieldType> name="email" rules={[{ required: true, message: 'Input your email.', }]}>
                                <Input style={{ height: 56 }} placeholder="Email *" variant="outlined" />
                            </Form.Item>

                            <Form.Item<FieldType> name="password" rules={[{ required: true, message: 'Input your password.', }]}>
                                <Input style={{ height: 56 }} placeholder="Password *" variant="outlined" />
                            </Form.Item>

                            <Flex justify="space-between" align="center" >
                                <Form.Item label={null} style={{margin: 0}}>
                                    <Button style={{ fontSize: 15, width: 115, height: 42, textTransform: 'uppercase'}} type="primary" htmlType="submit">
                                        Login

                                        <ArrowRightOutlined />
                                    </Button>
                                </Form.Item>

                                <Typography.Link style={{color: 'black'}} href="#">Forgot your password?</Typography.Link>
                            </Flex>
                        </Flex>
                    </Form>

                    <Space direction="vertical" style={{ width: "100%", textAlign: "center", paddingTop: 44}}>
                        <Button variant="solid" color="default" block style={{height: 42, width: '100%'}}>CREATE NEW ACCOUNT</Button>
                    </Space>

                </div>

                <div className="col-5 offset-1" ></div>
            </div>
        </>
    );
}

export default LoginContent;