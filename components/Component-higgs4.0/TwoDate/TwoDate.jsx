/*
 * @component DateComponent 日期选择组件
 * @author yxc
 *
 * @props { Function } callback	    回调函数，参数分别代表选择的两个日期
 *
 * eg：
 <TwoDate
    callback={(date1, date2) => console.log(date1, date2)}
 />
 * */

import React, { Component }from "react"
import "./TwoDate.scss"
import DateComponent from "../Date/DateComponent"

class TwoDate extends Component {

    state = {
        date1_year: null,
        date1_month: null,
        date1_day: null,

        date2_year: null,
        date2_month: null,
        date2_day: null,
    }

    /*
    * @method callback 重写props中的callback，判断两个日期选择是否合理
    * */
    callback(y, m, d, date_id){

        let {callback} = this.props;

        let {
            date1_year,
            date1_month,
            date1_day,

            date2_year,
            date2_month,
            date2_day,
        } = this.state;

        let date1 = "";
        let date2 = "";
        let o = {};

        if(date_id == 1){

            date1 = `${y}/${m}/${d}`;
            date2 = `${date2_year}/${date2_month}/${date2_day}`;

            if(new Date(date1) > new Date(date2)){

                o = {
                    date2_year: y,
                    date2_month: m,
                    date2_day: d
                };

                date2 = date1;
            }

            this.setState(Object.assign({},{
                date1_year: y,
                date1_month: m,
                date1_day: d
            }, o));

        }else {
            date2 = `${y}/${m}/${d}`;
            date1 = `${date1_year}/${date1_month}/${date1_day}`;

            if(new Date(date1) > new Date(date2)){

                o = {
                    date1_year: y,
                    date1_month: m,
                    date1_day: d
                };

                date1 = date2;
            }

            this.setState(Object.assign({}, {
                date2_year: y,
                date2_month: m,
                date2_day: d
            }, o));
        }

        callback(date1, date2);
    }

    render(){

        return (
            <div className="twoDate__root">
                <DateComponent
                    year={this.state.date1_year}
                    month={this.state.date1_month}
                    day={this.state.date1_day}
                    showYearNum={9}
                    callback={(y, m, d)=>{
                        this.callback(y, m, d, 1);
                    }}
                />

                <DateComponent
                    year={this.state.date2_year}
                    month={this.state.date2_month}
                    day={this.state.date2_day}
                    showYearNum={9}
                    callback={(y, m, d)=>{
                        this.callback(y, m, d, 2);
                    }}
                />
            </div>
        )
    }
}

export default TwoDate;



