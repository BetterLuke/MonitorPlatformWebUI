import { Table, Button, Popconfirm } from 'antd';
import React from 'react';
import HostModal from './HostModal'

const columns = [{
  title: '主机名',
  dataIndex: 'hostname'
}, {
  title: '主机内网IP',
  dataIndex: 'ip_in',
}, {
  title: '主机外网IP',
  dataIndex: 'ip_out',
}, {
  title: '域名',
  dataIndex: 'dominname',
}, {
  title: '环境',
  dataIndex: 'env',
}, {
  title: '负责人',
  dataIndex: 'owner',
}, {
  title: "操作",
  render: (text, record) => (
    <span>
      <HostModal record={record} onOk={this.createHandler}>
        <Button>编辑</Button>
      </HostModal>
    </span>
  )
}];

const data = [];

for (let i = 0; i < 25; i++) {
  data.push({
    key: i,
    hostname: "数据检索",
    ip_in: "1.1.1.1",
    ip_out: "202.196.0.2",
    dominname: "luke.zzuli.edu.cn",
    env: "online",
    owner: "小刘",
    comment: '性能超强的服务器'
  })
}

class HostManger extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  createHandler = (values) => {
    console.log(values)
  }

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>

          <HostModal record={{}} onOk={this.createHandler} > 
            <Button type="add">
              添加
            </Button>
          </HostModal>

          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            删除
              </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} expandedRowRender={record => <p style={{ margin: 0 }}>{record.comment}</p>} />
      </div>
    );
  }
}

export default HostManger