
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
import { AAA} from '@store/OBS/headerschoolspace/action'
import { Tabs,Row,Col } from 'antd';
const { TabPane } = Tabs;

const mapStateToProps = ({HEADERSCHOOLSPACE}) => {
    return {
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (class Headerschoolspace extends React.Component {
    render() {
        return (
            <div className='headerschoolspace'>
            <div className='Common-content'>
                <div className='header-cont'>
                    <div className='header-l'>
                        <Link to={"/"}>
                        <img className='header-logo' src={require('../../assets/img/header-logo.png')}/>
                        </Link>
                        <Tabs className='header-menu'  onChange={this.callback}>
                            <TabPane tab="智慧教育解决方案" key="1" ></TabPane>
                            <TabPane tab="高职院校" key="2"></TabPane>
                            <TabPane tab="双高院校" key="11"></TabPane>
                            <TabPane tab="教师发展计划" key="3"></TabPane>
                        </Tabs>
                    </div>

                <div className='header-right'>
                    <Link to={"/"} className="gobackmain">
                        返回首页
                    </Link>
                    <Link to={"/"}className='reg-btn login-btn'>
                        登录
                    </Link>
                    <Link className='reg-btn' to={"/"} >
                        注册
                    </Link>
                </div>
                </div>
            </div>
            </div>
        )
    }
})
