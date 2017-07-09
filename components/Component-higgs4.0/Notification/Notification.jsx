/*
 * @component Drag 简易上传组件
 * @author yxc
 *
 * @props { String } duration	  通知停留时间，毫秒单位
 * @props { String } message	  通知标题
 * @props { String } description  通知详情描述
 *
 * eg：
 <Notification
    duration="6000"
    message={this.state.message}
    description={this.state.description}
 />
 * */

import React, { Component } from "react"
import "./Notification.scss"

class Notification extends Component {

    state = {
        // 是否显示通知
        isShowNotification: false
    }

    render(){
        let title = this.props.message;
        let content = this.props.description;
        let isShowNotification = this.state.isShowNotification;

        if((title || content) && isShowNotification) {
            return (
                <div className="notification show-notification">

                    <h3 className="notification-title" >{title}</h3>

                    <p className="notification-content" >{content}</p>

                    <span className="notification-close" onClick={() => this.setState({isShowNotification: false})}></span>
                </div>
            )
        }else {
            return (
                <div className="notification"></div>
            )
        }
    }

    componentWillReceiveProps(){
        // 每次render之前重置isShowNotification
        this.setState({isShowNotification: true});
    }

    componentDidUpdate(){
        // 根据duration，设置时间到达时自定关闭通知
        let duration = +this.props.duration;
        let isShowNotification = this.state.isShowNotification;
        if(isShowNotification && duration){
            setTimeout(() => {
                this.setState({isShowNotification: false});
            }, duration);
        }
    }
}

export default Notification;