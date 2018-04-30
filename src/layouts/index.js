import {Layout, Row, Col} from 'antd';
import styles from "./index.less";
import CoolSider from './Sider';
import Link from 'umi/link';
import withRouter from 'umi/withRouter';
import Header from './Header';
import {connect} from 'dva';


const { Footer, Content} = Layout;

/**
 * @description 主布局组件
 * @param {object} children 当前路由下的所有子组件
 * @param {object} location 当前路由状态对象
 * @param {bollean} collapsed 当前侧边栏闭合状态
 * @returns {JSX} 一个标准的ant design pro式的布局组件
 */
function MyLayout({children, location, collapsed}) {
    return (
        <Layout>
            
            <CoolSider location={location}></CoolSider>

            <Layout>
                <Header/>

                <Content className={styles.content}>
                    <Row type="flex" justify="center">
                        <Col span={24}>
                            <div className={styles.content_box_uncollapsed}>
                                {children}
                            </div>
                        </Col>
                    </Row>
                </Content>

                <Footer style={{
                    textAlign: 'center'
                }}>
                    My AweSome Project
                </Footer>
            </Layout>
        </Layout>
    )
}

export default withRouter(connect((state) => (state.app))(MyLayout))