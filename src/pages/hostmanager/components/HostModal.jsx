import React from 'react';
import {Modal, Form, Input, Select} from 'antd';

const FormItem = Form.Item;
const {TextArea} = Input;
const Option = Select.Option;

class HostModal extends React.Component {
    state = {
        visible: false
    }

    showModelHandler = (e) => {
        if (e) 
            e.stopPropagation();
        this.setState({visible: true});
    }

    hideModalHandler = () => {
        this.setState({visible: false});
    }

    okHandler = () => {
        const {onOk} = this.props;
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {
                    onOk(values);
                    this.hideModalHandler();
                }
            })
    }

    render() {
        const {children} = this.props;
        const {getFieldDecorator} = this.props.form;
        const {hostname, ip_inner, ip_out, comment, env, owner,dominname} = this.props.record;
        const formItemLayout = {
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 14
            }
        };
        const envValues = ['test','dev','online']
        const envOptions = envValues.map((v,i) => (<Option key={v}>{v}</Option>))
        const ownerValues = ['小明', '小李', '小红', '小刘', '小白', 'admin']
        const ownerOptions = ownerValues.map((v,i) => ( <Option key={v}>{v}</Option> ))
        return (
            <span>
                <span onClick={this.showModelHandler}>
                    {children}
                </span>
                <Modal
                    title="编辑主机信息"
                    visible={this.state.visible}
                    onOk={this.okHandler}
                    onCancel={this.hideModalHandler}>
                    <Form horizontal="true" onSubmit={this.okHandler}>
                        <FormItem {...formItemLayout} label="主机名">
                            {getFieldDecorator('hostname', {initialValue: hostname})(<Input placeholder="请以不带空格的英文表述"/>)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="内网IP">
                            {getFieldDecorator('ip_inner', {initialValue: ip_inner})(<Input/>)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="外网IP">
                            {getFieldDecorator('ip_out', {initialValue: ip_out})(<Input/>)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="域名">
                            {getFieldDecorator('dominname', {initialValue: dominname})(<Input placeholder="xxxxxx.zzuli.edu.cn" />)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="环境">
                            {getFieldDecorator('env', {initialValue: env})(<Select>
                                {envOptions}
                            </Select>)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="责任人">
                            {getFieldDecorator('owner', {initialValue: owner})(<Select>
                                {ownerOptions}
                            </Select> )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="备注">
                            {getFieldDecorator('comment', {initialValue: comment})(<TextArea placeholder="填写主机的备注信息：配置，使用说明等" autosize={{ minRows: 2, maxRows: 6 }}/>)}
                        </FormItem>
                    </Form>
                </Modal>
            </span>
        )
    }
}

export default Form.create()(HostModal)