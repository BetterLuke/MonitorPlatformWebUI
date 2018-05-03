import { Button, Breadcrumb, Layout, Icon } from 'antd';
import { connect } from 'dva';
import styles from "./header.less";


const Header = Layout.Header;

function CoolHeader({onCollapse, collapsed, breadcrumb}) {
    return (
        <Header
            className={styles.header} >
        </Header>
    )
}

export default CoolHeader;