import React, { useEffect, useState } from 'react'
import { useCallback } from 'react'
import BlockUi from 'react-block-ui';
import { Row, Col, Card, Avatar, Button, Typography, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { handleState, getDataEmployee, onSearch } from "../../redux/employeeReducer/actions";
import { EllipsisOutlined, SearchOutlined, PlusOutlined, DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons';

import Home1 from './Home1'
import Home2 from './Home2'

const { Title } = Typography;

const Home = () => {
    let dispatch = useDispatch();
    const [innerWidth, setInnerWidth] = useState(0)
    const [colBlock, setColBlock] = useState(6)

    let employeeState = useSelector(state => state.EmployeeReducer);

    useEffect(() => {
        dispatch(handleState('searchList', undefined))
        if (employeeState.listEmployee.length === 0) dispatch(getDataEmployee(employeeState.currentPage))
        onResize()
    }, [dispatch])

    let onSearchEmployee = useCallback((field, param) => {
        if (field === 'searchList') dispatch(onSearch(param))
        dispatch(handleState(field, param))
    })

    let onUpdatePage = useCallback((param) => {
        let _page = param === 'plus' ? employeeState.currentPage + 1 : employeeState.currentPage - 1
        dispatch(handleState('currentPage', _page))
        dispatch(onSearch('change', { param, page: _page }))
    })

    let onResize = useCallback(() => {
        // let IH = window.innerHeight;
        let IW = window.innerWidth;

        if (IW > 1060) setColBlock(6)
        else if (IW > 680 && IW < 1059) setColBlock(8)
        else if (IW > 515 && IW < 679) setColBlock(12)
        else setColBlock(24)
    })

    window.onresize = onResize


    return (
        <React.Fragment>
            <BlockUi tag="div" blocking={employeeState.loading}>
                <main>
                    <div className="content">
                        <Row className='row-personnel-box'>
                            <Col span={24}>
                                <Card>
                                    <Row>
                                        <Col span={colBlock === 24 ? 24 : 15}>
                                            <Row className="text-color text-capslock text-header">Personnel List</Row>
                                            <Row className="text-subheader">List of all personnel</Row>
                                        </Col>
                                        {
                                            colBlock === 24 ? null :
                                                <Col span={9}>
                                                    <Input prefix={<SearchOutlined />} className="card-inputsearch" value={employeeState.searchList} onChange={(e) => onSearchEmployee('searchList', e.target.value)} placeholder="Find Personnels" size="large" />
                                                    <Button className='text-color-white color-background-blue' size={'large'}>Add Personnel <PlusOutlined /></Button>
                                                </Col>
                                        }
                                    </Row>
                                    {
                                        colBlock === 24 ?
                                            <Row>
                                                <Col span={24}>
                                                    <Input prefix={<SearchOutlined />} value={employeeState.searchList} onChange={(e) => onSearchEmployee('searchList', e.target.value)} placeholder="Find Personnels" size="large" />
                                                    <Button style={{ width: '100%' }} className='text-color-white color-background-blue' size={'large'}>Add Personnel <PlusOutlined /></Button>
                                                </Col>
                                            </Row> : null
                                    }
                                </Card>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            {
                                employeeState.currentList.map((obj, idx) => {
                                    if (colBlock === 24) {
                                        return (
                                            <Home1 key={idx} obj={obj} idx={idx} colBlock={colBlock}/>
                                        )
                                    } else {
                                        return (
                                            <Home2 key={idx} obj={obj} idx={idx} colBlock={colBlock}/>
                                        )
                                    }
                                })
                            }
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Button type="text" onClick={() => onUpdatePage('min')} disabled={employeeState.currentPage <= 1}><DoubleLeftOutlined /> Previous Page</Button>
                                <Button type="text" onClick={() => onUpdatePage('plus')} disabled={employeeState.currentPage === employeeState.lastPage}>Next Page <DoubleRightOutlined /></Button>
                            </Col>
                        </Row>
                    </div>
                </main>
            </BlockUi>
        </React.Fragment >
    )
}

export default Home