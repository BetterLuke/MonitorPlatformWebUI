import React from 'react';
import Link from 'umi/link';
import { Icon, Menu, Layout } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu
const { Sider } = Layout

class CoolSider extends React.Component {

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        const { handleClick, location } = this.props
        return (
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}>
                <div className={styles.logo} key="logo">
                    <Link to="/">
                        毕设
                    </Link>
                </div>
                <Menu
                    theme="dark"
                    onClick={handleClick}
                    selectedKeys={[location.pathname]}
                    mode="inline"
                    inlineCollapsed={this.state.collapsed}>
                    <SubMenu
                        key="infrastructure"
                        title={<span><Icon type="user" /><span>DashBoard</span></span>}>

                        <MenuItem key="/hostMonitor" title="主机监控">
                            <Link to="/hostMonitor">
                                <span> 主机监控 </span>
                            </Link>
                        </MenuItem>

                        <MenuItem key="/serviceMonitor" title="服务监控">
                            <Link to="/serviceMonitor">
                                <span>服务监控</span>
                            </Link>
                        </MenuItem>

                        <MenuItem key="/apiMonitor" title="接口管理">
                            <Link to="/apiMonitor">
                                <span>接口监控</span>
                            </Link>
                        </MenuItem>

                    </SubMenu>

                    <MenuItem key="/hostManage" title="主机管理">
                        <Link to="/hostManage">
                            <Icon type="solution" />
                            <span> 主机管理 </span>
                        </Link>
                    </MenuItem>

                    <MenuItem key="/apiManager" title="接口管理">
                        <Link to="/apiManager">
                            <Icon type="share-alt" />
                            <span>接口管理</span>
                        </Link>
                    </MenuItem>

                    <MenuItem key="/hostInitManager" title="初始化服务管理">
                        <Link to="/hostInitManager">
                            <Icon type="schedule" />
                            <span> 初始化组件管理 </span>
                        </Link>
                    </MenuItem>


                    <MenuItem key="/probeManager" title="测试任务">
                        <Link to="/probeManager">
                            <Icon type="schedule" />
                            <span>探针管理</span>
                        </Link>
                    </MenuItem>
                    <MenuItem key="/mailserver" title="报警邮件查询">
                        <Link to="/mailserver">
                            <Icon type="schedule" />
                            <span>报警邮件查询</span>
                        </Link>
                    </MenuItem>
                    <MenuItem key="/cronserver" title="定时任务">
                        <Link to="/cronserver">
                            <Icon type="schedule" />
                            <span>定时任务</span>
                        </Link>
                    </MenuItem>
                </Menu>
            </Sider>

        )
    }
}

export default CoolSider;