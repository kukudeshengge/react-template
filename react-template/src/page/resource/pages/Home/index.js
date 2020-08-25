import React from "react";
import { Form, Radio, Button } from "antd";
import "./index.scss";
import { withRouter } from "react-router-dom";

export default Form.create()(
  withRouter(
    class ResourceCenterHome extends React.Component {
      state = {};
      componentDidMount() {
        // console.log(this.props, "`````````````````");
      }

      render() {
        return (
          <div className="resource_center_wrap resource_center_home">
            {/* banner */}
            <div className="banner_w">
              <div className="banner">
                <dl className="txt">
                  <dt>Resource Center</dt>
                  <dd>资源中心</dd>
                </dl>
                <img
                  alt=""
                  src={require("../../../../assets/img/resource_center/home_banner.png")}
                />
              </div>
            </div>
            {/* banner */}
            {/* advertising */}
            <div className="advertising_w">
              <div className="advertising">
                {[1, 2, 3, 4].map((item, index) => {
                  return (
                    <dl key={index}>
                      <dt>
                        <img
                          alt=""
                          src={require("@/assets/img/resource_center/advertising_icon.png")}
                        />
                      </dt>
                      <dd>
                        <h2>广告位</h2>
                        <p>广告位辅助文案辅助文案</p>
                      </dd>
                    </dl>
                  );
                })}
              </div>
            </div>
            {/* advertising */}
            {/* content */}
            <div className="content">
              {/* title */}
              <dl className="title">
                <dt>
                  <img
                    alt=""
                    src={require("@/assets/img/resource_center/advertising_icon.png")}
                  />
                  <b>推荐课程</b>
                  <span>对应文案对应文案对应文案对应文案对应文案</span>
                </dt>
                <dd>
                  <span>查看更多</span>
                  <img
                    alt=""
                    src={require("@/assets/img/resource_center/advertising_icon.png")}
                  />
                </dd>
              </dl>
              {/* tag */}
              <dl className="resource_classify">
                <dt>资源分类</dt>
                <dd>
                  <Radio.Group defaultValue={""}>
                    <Radio.Button value="">全部</Radio.Button>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                      return (
                        <Radio.Button key={index} value={index}>
                          国际货运代理实务
                        </Radio.Button>
                      );
                    })}
                  </Radio.Group>
                </dd>
              </dl>
              {/* classify_list */}
              <div className="classify_list">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                  return (
                    <dl key={index}>
                      <dt>
                        <img
                          alt=""
                          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598350430750&di=8f4962bffe9ad2a3a40079f46eac779c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F01%2F20180601112640_kqitp.jpg"
                        />
                        <div name="遮罩层">
                          <img
                            alt=""
                            src={require("@/assets/img/resource_center/advertising_icon.png")}
                          />
                        </div>
                      </dt>
                      <dd>
                        <h2>
                          数据库技术及应用数据库应数据库技术及应用数据库应
                        </h2>
                        <p>
                          <span>主讲:李老师</span>
                          <span>学时：99999+</span>
                        </p>
                      </dd>
                    </dl>
                  );
                })}
              </div>
              {/* title */}
              <dl className="title">
                <dt>
                  <img
                    alt=""
                    src={require("@/assets/img/resource_center/advertising_icon.png")}
                  />
                  <b>(v)实训资源</b>
                  <span>对应文案对应文案对应文案对应文案对应文案</span>
                </dt>
                <dd>
                  <Button>12+热门方向</Button>
                  <Button>400+资源</Button>
                  <span>查看更多</span>
                  <img
                    alt=""
                    src={require("@/assets/img/resource_center/advertising_icon.png")}
                  />
                </dd>
              </dl>
              {/* practical_training  */}
              <div className="practical_training">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => {
                  return (
                    <dl key={index}>
                      <dt>
                        <img
                          alt=""
                          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598350430750&di=8f4962bffe9ad2a3a40079f46eac779c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F01%2F20180601112640_kqitp.jpg"
                        />
                      </dt>
                      <dd>
                        <h2>智慧制造</h2>
                        <p>Intelligent Manufacturing</p>
                      </dd>
                    </dl>
                  );
                })}
              </div>
              {/* title */}
              <dl className="title">
                <dt>
                  <img
                    alt=""
                    src={require("@/assets/img/resource_center/advertising_icon.png")}
                  />
                  <b>职教体系标准</b>
                  <span>对应文案对应文案对应文案对应文案对应文案</span>
                </dt>
                <dd>
                  <span>查看更多</span>
                  <img
                    alt=""
                    src={require("@/assets/img/resource_center/advertising_icon.png")}
                  />
                </dd>
              </dl>
            </div>
            {/* content */}
          </div>
        );
      }
    }
  )
);
