import React from 'react'
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import './PaymentProduct.css'
import PaymentTable from './PaymentTable';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
export default class PaymentProduct extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {

    }

    dateTemplate(date) {
        // if (date.day > 10 && date.day < 15) {
        //     return (
        //         <span style={{ backgroundColor: '#1d8ccb', color: '#ffffff', fontWeight: 'bold', borderRadius: '50%', padding: '.25em' }}>{date.day}</span>
        //     );
        // }
        // else {
        return date.day;
        // }
    }


    render() {
        let th = {
            firstDayOfWeek: 1,
            dayNames: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์"],
            dayNamesShort: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
            dayNamesMin: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
            monthNames: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
            monthNamesShort: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]
        };
        return (
            <div className=" padding-20px" >

                <div className="white">
                    <div>
                        <h3>รายการจ่ายเงินค่าสินค้า</h3>
                    </div>

                    <div >
                        <label>วันที่จ่ายเงิน</label>
                    </div>

                    <div   >

                        <Calendar dateFormat="dd/mm/yy"
                            value={this.state.fromdate} onChange={(e) => this.setState({ fromdate: e.value })}
                            showButtonBar={true}
                            numberOfMonths={3}
                            locale={th}
                            // dateTemplate={this.dateTemplate}
                            // monthNavigator={true} 
                            // yearNavigator={true}
                            // yearRange="2010:2030"
                            showIcon={true}

                            className="margin-right-50px "
                        // view="month"  
                        ></Calendar>


                        <Calendar dateFormat="dd/mm/yy"
                            value={this.state.todate} onChange={(e) => this.setState({ todate: e.value })}
                            showButtonBar={true}
                            numberOfMonths={3}
                            locale={th}
                            // dateTemplate={this.dateTemplate}
                            // monthNavigator={true} 
                            // yearNavigator={true}
                            // yearRange="2010:2030"
                            showIcon={true}
                            className="margin-right-50px"
                        // view="month"  
                        ></Calendar>
                        <Button label="ค้นหา" className="p-button-success p-button-rounded width100px " />

                    </div >
                </div>
                    <PaymentTable></PaymentTable>

            </div>


        )
    }
}