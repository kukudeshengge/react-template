
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA} from '@store/OBS/footer/action'
import { Button, Row,Col, } from 'antd';


const mapStateToProps = ({FOOTER}) => {
    return {
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (class Footer extends React.Component {
    render() {
        return (
            <div className="footer-wrap">
                <div className="Common-content">
                    <Row >
                        <Col span={7}>
                            <img
                                className="footer-logo-img"
                                src={require('../../assets/img/footer_logo.png')}
                                alt="logo"
                            />
                            <p className="footer-common-information">中教云迪数字科技有限公司</p>
                            <p className="footer-common-information">电话：010-85952290</p>
                            <p className="footer-common-information">地址：北京市海淀区中关村北一街甲15号</p>
                            <p className="footer-number">CopyRight©2020 zjyve.com  京ICP备20020432号-3</p>
                        </Col>
                        <Col span={5}>
                            <h3 className="footer-common-tit">应用解决方案</h3>
                            <div className="footer-common-mt20">
                                <p className="footer-common-desc">院校中心</p>
                                <p className="footer-common-desc">实训中心</p>
                                <p className="footer-common-desc">资源中心</p>
                                <p className="footer-common-desc">证书中心</p>
                            </div>
                        </Col>
                        <Col span={5}>
                            <h3 className="footer-common-tit">整体解决方案</h3>
                            <div className="footer-common-mt20">
                                <p className="footer-common-desc">智慧教育云平台</p>
                                <p className="footer-common-desc">教育大数据平台</p>
                                <p className="footer-common-desc">终身学习档案</p>
                                <p className="footer-common-desc">终身发展档案</p>
                            </div>
                        </Col>
                        <Col span={5}>
                            <h3 className="footer-common-tit">友情链接</h3>
                            <div className="footer-common-mt20">
                                <p className="footer-common-desc">教育部</p>
                                <p className="footer-common-desc">职业教育与成人教育司</p>
                                <p className="footer-common-desc">国家发展和改革委员会</p>
                                <p className="footer-common-desc">工业与信息化部</p>
                            </div>
                        </Col>
                        <Col span={2}  style={{textAlign: 'center'}}>
                            <h3 className="footer-common-tit">关注我们</h3>
                            <div className="footer-common-mt20">
                                <img
                                    className="footer-code-img"
                                    src={require('../../assets/img/footer_code.png')}
                                    alt="二维码图片"
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
})
