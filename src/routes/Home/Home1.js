import React from 'react'
import { Row, Col, Card, Avatar, Typography } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
const { Title } = Typography;

export default class Home1 extends React.Component {
    render() {
        let { obj, idx, colBlock } = this.props
        return (
            <Col key={idx} span={colBlock}>
                <Card className='card-radius text-align-left' title={<React.Fragment>Personnel Id : <span className="text-color">{obj.personnelId}</span> </React.Fragment>} bordered={false} extra={<EllipsisOutlined />}>
                    <Row>
                        <Col span={10}>
                            <Avatar size={100} src={obj.picture.large} />
                        </Col>
                        <Col span={14}>
                            <Row>
                                <Col>
                                    <Row><Title className='card-title' level={5}>Name</Title></Row>
                                    <Row><Title className='card-content' level={4}>{obj.name.first + " " + obj.name.last}</Title></Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Title className='card-title' level={5}>Telephone</Title>
                                    <Title className='card-content' level={4}>{obj.phone}</Title>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Col>
        )
    }
}