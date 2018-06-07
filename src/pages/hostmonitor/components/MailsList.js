import React from 'react';
import { List, message, Avatar, Spin } from 'antd';
import reqwest from 'reqwest';
import './MailsList.css'

import InfiniteScroll from 'react-infinite-scroller';
import { isReturnStatement } from 'typescript';

const fakeDataUrl = '/api/maillog';

class InfiniteListExample extends React.Component {
    state = {
        data: [],
        loading: false,
        hasMore: true,
    }

    getData = (callback) => {
        reqwest({
            url: fakeDataUrl,
            type: "json",
            method: "get",
            contentType: 'application/json',
            success: (res) => {
                callback(res)
            }
        })
    }

    componentDidMount() {
        this.getData((res) => {
            this.setState({
                data: res.data
            })
        })
    }

    handleInfiniteOnLoad = () => {
        let data = this.state.data;
        this.setState({
            loading: true,
        });
        if (data.length > 14) {
            message.warning("Infinite List loaded all");
            this.setState({
                hasMore: false,
                loading: false,
            });
            return;
        }
        this.getData((res) => {
            data = data.concat(res.data);
            this.setState({
                data,
                loading: false,
            });
        });
    }

    render() {
        return (
            <div  className="demo-infinite-container">
                <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={this.handleInfiniteOnLoad}
                    hasMore={!this.state.loading && this.state.hasMore}
                    useWindow={false}
                >

                <List
                    dataSource={this.state.data}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{item.name.last}</a>}
                                description={item.email}
                            />
                        </List.Item>
                    )}
                >
                    {this.state.loading && this.state.hasMore && (
                        <div className="demo-loading-container">
                            <Spin/>
                        </div>
                    )}
                </List>
                
                </InfiniteScroll>
            </div>
        )
    }
}

export default InfiniteListExample;
