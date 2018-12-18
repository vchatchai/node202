import React from 'react'
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { DataTable, Column } from 'primereact/datatable';
import './PaymentProduct.css'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import currentFormatter from 'currency-formatter';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PaymentDetail from './PaymentDetail';
export default class PaymentProduct extends React.Component {
    constructor() {
        super();
        this.state = {
            date1: [new Date('2018-12-01'), new Date()],
            products: [
                {
                    order: 1,
                    reference: "P123455",
                    paymentdate: '02/09/2018',
                    amount: 699990
                }, {
                    order: 2,
                    reference: "P123455",
                    paymentdate: '02/09/2018',
                    amount: 699990
                }, {
                    order: 3,
                    reference: "P123455",
                    paymentdate: '02/09/2018',
                    amount: 699990
                }, {
                    order: 4,
                    reference: "P123455",
                    paymentdate: '02/09/2018',
                    amount: 699990
                }, {
                    order: 5,
                    reference: "P123455",
                    paymentdate: '02/09/2018',
                    amount: 699990
                }, {
                    order: 6,
                    reference: "P123455",
                    paymentdate: '02/09/2018',
                    amount: 699990
                }, {
                    order: 7,
                    reference: "P123455",
                    paymentdate: '02/09/2018',
                    amount: 699990
                }, {
                    order: 8,
                    reference: "P123455",
                    paymentdate: '02/09/2018',
                    amount: 699990
                }, {
                    order: 9,
                    reference: "P123455",
                    paymentdate: '02/09/2018',
                    amount: 699990
                }, {
                    order: 10,
                    reference: "P123455",
                    paymentdate: '02/09/2018',
                    amount: 699990
                }, {
                    order: 11,
                    reference: "P123455",
                    paymentdate: '02/09/2018',
                    amount: 699990
                }, {
                    order: 12,
                    reference: "P123455",
                    paymentdate: '02/09/2018',
                    amount: 699990
                },

            ]
        }
        console.log(this.state.date);
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

                <div >
                    <div>
                        <h3>รายการจ่ายเงินค่าสินค้า</h3>
                    </div>

                    <div >
                        <label>วันที่จ่ายเงิน</label>
                    </div>

                    <div   >

                        <Calendar dateFormat="dd/mm/yy"
                            value={this.state.date}
                            onChange={
                                (e) => {
                                    this.setState({ date: e.value })
                                    console.log(this.state.date)
                                }
                            }
                            showButtonBar={true}
                            numberOfMonths={3}
                            locale={th}
                            // dateTemplate={this.dateTemplate}
                            // monthNavigator={true} 
                            // yearNavigator={true}
                            // yearRange="2010:2030"
                            showIcon={true}
                            selectionMode="range"
                            readonlyInput={true}
                            className="margin-right-50px fromtocalendar "
                        // view="month"  
                        ></Calendar>


                        <Button label="ค้นหา" className="p-button-success p-button-rounded width100px  " />

                    </div >
                </div>
                <div>
                    <div className="margin-top-50px">
                        <label>ทั้งหมด {this.state.products.length} รายการ|รวมเป็นเงิน {currentFormatter.format(this.state.products.reduce((acc, val) => { return acc + val.amount }, 0), { code: 'TH' })}</label>
                        <a className="position-right  ui-icon ui-c pi pi-arrow-down" > ดาวโหลดไฟล์</a>
                    </div>
                    <div className="margin-top-10px tableheader">
                        <DataTable value={this.state.products}   >
                            <Column field="order" header="ลำดับ" sortable={true} style={{ width: '10%' }} />
                            <Column field="reference" header="เลขที่อ้างอิง" textAlign="center" style={{ width: '20%' }} />
                            <Column field="paymentdate" header="วันที่จ่าย" sortable={true} style={{ width: '20%' }} />
                            <Column field="amount" header="ยอดจ่ายสุทธิ" sortable={true} style={{ width: '20%' }} />
                            <Column body={this.actionTemplate} style={{ textAlign: 'center', width: '8em' }} style={{ width: '20%' }} ></Column>
                        </DataTable>
                    </div>
                </div>

            </div>


        )
    }
    actionTemplate(rowData, column) {
        console.log(rowData.order)

        let url = `/paymentdetail/${rowData.order}`
        return (<div>
            {/* <a value={rowData.order} >ดูรายละเอียด</a> */}
            <Link to={url}  >ดูรายละเอียด</Link>

            {/* <Route path='/paymentdetail/${rowData.order}' component={PaymentDetail} /> */}


        </div>);
    }
}