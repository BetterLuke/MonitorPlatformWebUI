import { Table, Button, Popconfirm } from 'antd';
import React from 'react';
import HostModal from './HostModal';
import { connect } from 'dva';

class HostManger extends React.Component {

  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  createHandler = (values) => {
    console.log(values)
  }

  deleteHandler = () => {

  }

  updateHandler = () => {

  }

  columns = [{
    title: '主机名',
    dataIndex: 'hostname'
  }, {
    title: '主机内网IP',
    dataIndex: 'ip_inner',
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

  render() {
    const { data, message, error, loading } = this.props;
    const { selectedRowKeys } = this.state;
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
            onClick={this.deleteHandler}
            disabled={!hasSelected}
            loading={loading}
          >
            删除
              </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table 
          rowSelection={rowSelection}
          columns={this.columns}
          loading={loading}
          dataSource={data}
          rowKey = {record => record.id}
          expandedRowRender={record => <p style={{ margin: 0 }}>{record.comment}</p>} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { data, message, error} = state.hostmanager;
  return {data, message, error, loading: state.loading.models.hostmanager}
}

export default connect(mapStateToProps)(HostManger)