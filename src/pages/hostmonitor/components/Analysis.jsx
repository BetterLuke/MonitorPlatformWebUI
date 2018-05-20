import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import {
    Row,
    Col,
    Icon,
    Card,
    Tabs,
    Table,
    Radio,
    DatePicker,
    Tooltip,
    Menu,
    Dropdown,
} from 'antd';

import {ChartCard} from '../../../components/Chart/ChartCard';
import { Field} from '../../../components/Chart/Field';
import {MiniArea} from '../../../components/Chart/MiniArea';

import numeral from 'numeral';

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;

// mock data
const visitData = [];
const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i],
  });
}

class Analysis extends Component {
    render() {

        const topColResponsiveProps = {
            xs: 24,
            sm: 12,
            md: 12,
            lg: 12,
            xl: 6,
            style: { marginBottom: 24 },
          };

        return (
            <Fragment>
                <Row gutter={24}>
                    <Col {...topColResponsiveProps}>
                        <ChartCard
                            bordered = {false} 
                            title = "访问量"
                            action = {
                                <Tooltip title="指标说明" >
                                    <Icon type="info-circle-o"></Icon>
                                </Tooltip>
                            }
                            total = {numeral(8848).format(0,0)}
                            footer = {<Field lable="日访问量" value={numeral(1334).format(0,0)} />} 
                            contentHeight = {46}>
                            <MiniArea color="#975FE4" data={visitData} />
                        </ChartCard>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}