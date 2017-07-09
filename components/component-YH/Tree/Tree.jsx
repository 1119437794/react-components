import React, { Component } from 'react'
import './Tree.scss'

class Tree extends Component {

    static defaultProps = {
        className: 'tree_root' // 菜单根组件样式
    }

    constructor () {
        super();

        this.state = {
            childShowArr: [] // 子菜单显隐
        }

        /*
        * 点击展开子组件
        * @params index { Num } 点击的菜单项下标
        * @params flag { Bool } 递归组件显隐状态
        * */
        this.showChild = (index, flag) => {
            const tmpArr = [];
            tmpArr[index] = flag;
            this.setState({
                childShowArr: tmpArr
            })
        }

        /*
        * 点击选择菜单项
        * @params e { Obj } 事件对象
        * @params item { Obj } 菜单项信息
        * */
        this.selectItem = (e, item) => {
            e.stopPropagation();
            this.props.select(item);
        }
    }

    render () {
        const {
            list, // 菜单列表
            className, // 菜单样式
            select // 菜单点击回调
        } = this.props;

        if (!list) return null; // 递归结束

        const That = this.constructor; // 自我组件
        let childShowArr = this.state.childShowArr; // 子组件显隐

        return (
            <div className={className}>
                <ul className="tree_list">
                    {
                        list.map((item, index) => {
                            const childClass = childShowArr[index] ? 'tree_rootChild' : 'tree_rootChild-hide';

                            return (
                                <li
                                    key={index}
                                    className="tree_item"
                                    onClick={(e) => this.selectItem(e, item)}
                                    onMouseEnter={() => this.showChild(index, true)}
                                    onMouseLeave={() => this.showChild(index, false)}
                                >
                                    <span className="tree_name">{item.name}</span>
                                    <That
                                        select={select}
                                        list={item.childList}
                                        className={childClass}
                                    />
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        )
    }

    componentWillReceiveProps (next) {
        /*
        * 这里主要针对 组件隐藏时 递归调用组件也必须隐藏
        * */
        const nextClass = next.className;
        if(this.props.className !== nextClass && nextClass === 'tree_rootChild-hide') {
            this.setState({
                childShowArr: []
            });
        }
    }
}

export default Tree;