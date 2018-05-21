import React, { Component, Fragment } from 'react';
import { ChartCard, yuan, Field, MiniArea, MiniBar,MiniProgress } from 'ant-design-pro/lib/Charts';
import NumberInfo from 'ant-design-pro/lib/NumberInfo'
import Trend from 'ant-design-pro/lib/Trend';
import { Row, Col, Icon, Tooltip } from 'antd';
import numeral from 'numeral';
import styles from './MyDashboard.less'
import 'ant-design-pro/dist/ant-design-pro.css';
import moment from 'moment';

const visitData = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 20; i += 1) {
    visitData.push({
        x: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * i))).format('YYYY-MM-DD'),
        y: Math.floor(Math.random() * 100) + 10,
    });
}

class Dashboard extends Component {


    render() {

        const topColResponsiveProps = {
            xs: 24,
            sm: 12,
            md: 12,
            lg: 12,
            xl: 8,
            style: { marginBottom: 24 },
        };

        return (
            <Fragment>
                <Row gutter={8}>
                    <Col {...topColResponsiveProps}>
                        <ChartCard
                            title="邮件数量"
                            action={
                                <Tooltip title="指标说明">
                                    <Icon type="info-circle-o" />
                                </Tooltip>
                            }
                            total={() => (
                                <span>8898</span>
                            )}
                            footer={
                                <div>
                                    <span>
                                        周同比
                                        <Trend flag="up">
                                            <span style={{ marginLeft: 8, color: 'rgba(0,0,0,.85)' }}> 12% </span>
                                        </Trend>
                                    </span>

                                    <span style={{ marginLeft: 16 }} >
                                        日环比
                                        <Trend flag="down">
                                            <span style={{ marginLeft: 8, color: 'rgba(0,0,0,.85)' }}> 24% </span>
                                        </Trend>
                                    </span>
                                </div>
                            }
                            contentHeight={134}
                        >
                            <NumberInfo
                                subTitle={<span>本天发送</span>}
                                total={numeral(356).format('0,0')}
                                status="up"
                                subTotal={17.1}
                            />
                            <MiniArea 
                                line
                                height={45}
                                data={visitData}
                            />
                        </ChartCard>
                    </Col>
                    <Col  {...topColResponsiveProps}>
                        <ChartCard
                            title="报警邮件"
                            action={<Tooltip title="报警邮件数据"><Icon type="info-circle-o" /></Tooltip>}
                            total={numeral(5366).format('0,0')}
                            footer={<Field label="平均每天报警量"  value={numeral(235).format('0,0')} />}
                            contentHeight={134}
                        >
                            <MiniBar
                                height={46}
                                data={visitData}
                            />
                        </ChartCard>
                    </Col>
                    <Col  {...topColResponsiveProps}>
                        <ChartCard
                            title="邮箱额度"
                            total={numeral(100000).format('0,0')}
                            footer={
                                <a href="#">企业邮箱充值页面</a>
                            }
                            contentHeight={134}
                        >   
                            <NumberInfo
                                subTitle={<span>剩余额度</span>}
                                total={"65%"}
                            />
                            <MiniProgress percent={65} strokeWidth={8}  />
                        </ChartCard>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default Dashboard;