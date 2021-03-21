import React from 'react'
import { Row, Col, Card, Avatar, Typography } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import dayjs from 'dayjs'

const { Title } = Typography;

export default class Home2 extends React.Component {
    render() {
        let { obj, idx, colBlock } = this.props
        return (
            <Col key={idx} span={colBlock}>
                <Card className='card-radius text-align-left' title={<React.Fragment>Personnel Id : <span className="text-color">{obj.personnelId}</span> </React.Fragment>} bordered={false} extra={<EllipsisOutlined />}>
                    <Row>
                        <Col>
                            <Avatar size={160} src={obj.picture.large} />
                        </Col>
                    </Row>
                    <Row className='card-paddingtop'>
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
                    <Row>
                        <Col>
                            <Title className='card-title' level={5}>Birthday</Title>
                            <Title className='card-content' level={4}>{dayjs(obj.dob.date).format('DD-MM')}</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Title className='card-title' level={5}>Email</Title>
                            <Title className='card-content' level={4}>{obj.email}</Title>
                        </Col>
                    </Row>
                </Card>
            </Col>
        )
    }
}