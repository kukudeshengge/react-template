import React, { Component } from 'react';
import './index.scss';
import { Input, Col } from 'antd';
const { Search } = Input;


export default class index extends Component {
    state = {
        isBlock: false
    }
    changeBlock = () => {
        this.setState({ isBlock: !this.state.isBlock });
    }
    render() {
        let { isBlock } = this.state;
        return (
            <div className='list_box'>
                <div className="top_wai">
                    <div className="top">
                        <div className="filter">
                            <div className="left">
                                <span>
                                    筛选条件：
                            </span>
                                <p>
                                    产品设计-高职-水利
                                </p>
                                <i>重置</i>
                            </div>
                            <div className="right">
                                <span>🐕</span>
                                <span onClick={this.changeBlock} style={{ marginLeft: '7px' }}>切换其他分类方式</span>
                            </div>
                        </div>
                        <div className="classify">
                            <div className="type" style={{ display: isBlock ? 'flex' : 'none' }}>
                                <div className="left">
                                    <span>资源类型</span>
                                    <i>|</i>
                                </div>
                                <div className="right">
                                    <div className="right_list">
                                        <div className="item">高职</div>
                                        <div className="item active">中职</div>
                                    </div>
                                </div>
                            </div>
                            <div className="hot">
                                <div className="left">
                                    <span>{isBlock?'专业大类':'热门分类'}</span>
                                    <i>|</i>
                                </div>
                                <div className="right">
                                    <div className="right_list">
                                        <div className="item">全部</div>
                                        <div className="item">产品、设计</div>
                                        <div className="item active">人工智能</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="search_box">
                            <div className='left'>
                                <span>共查到20门课</span>
                            </div>
                            <div className='right'>
                                <Search
                                    placeholder="请输入主讲人/课程名称查询"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom_wai">
                    <div className="bottom">
                        {
                            [...new Array(32)].map((v, i) => {
                                return <Col key={i} className='item' span={6}>
                                    <div className="top">
                                        <div className="none"></div>
                                        <img src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h2>数据库技术及应用数据库应用废弃物废大旗网大旗网弃物</h2>
                                        <p className='vertical_j'>
                                            <span>主讲：李老师</span>
                                            <span>学时：989</span>
                                        </p>
                                    </div>
                                </Col>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
