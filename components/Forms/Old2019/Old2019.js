import React from 'react';
import { Form, Input, Button, Typography, Image, Row, Col } from 'antd';

const { Title } = Typography;

const Old2019 = () => {
  const onFinish = ({ email, type }) => {
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, type })
    });
  };

  return (
    <>
      <Row justify="center" align="middle">
        <Title level={2}>Old 2019 version</Title>
      </Row>
      <Row>
        <Col xs={{ span: 20, offset: 2 }} lg={{ span: 10, offset: 1 }}>
          <Form
            name="basic"
            layout="vertical"
            initialValues={{
              remember: true
            }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Please input correct email!'
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="type" hidden name="type" initialValue={1}>
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit Old 2019 Form
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={{ span: 20, offset: 2 }} lg={{ span: 10 }}>
          <Title level={4}>Example</Title>
          <Image
            src="/form-images/old-2019.png"
          />
        </Col>
      </Row>
    </>
  );
};

export default Old2019;