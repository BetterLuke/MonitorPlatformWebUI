import { Button, Breadcrumb, Layout, Icon } from 'antd';
import { connect } from 'dva';
import styles from "./header.less";


const Header = Layout.Header;

function CoolHeader({onCollapse, collapsed, breadcrumb}) {
    return (
        <Header
            className={styles.header} >
             <Breadcrumb className={styles.bread} >
                        <Breadcrumb.Item>{breadcrumb}</Breadcrumb.Item>
            </Breadcrumb>
        </Header>
    )
}

const mapStateToProps = (state) => (state.app)

const mapDispatchToProps = {
    onCollapse: () => ({type: 'app/switchSider'})
}

export default connect(mapStateToProps, mapDispatchToProps)(CoolHeader)