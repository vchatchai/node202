import React from 'react'
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { DataTable, Column } from 'primereact/datatable';
import './PaymentProduct.css'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class PaymentCommission extends React.Component {
    constructor() {
        super();
        this.state = {
            date1: [new Date('2018-12-01'), new Date()],
            commissions: [
                {
                    order: "1",
                    reference: "D0198760",
                    paymentdate: "01/09/2018",
                    commission: 230000,
                    commissionExcludeVat: 214953.27,
                    vat: 6448.60,
                    withHoldingTax: 6448.60,
                    amount: 223551.40,
                    status: "โอนแล้ว",
                },
                {
                    order: "2",
                    reference: "D0198760",
                    paymentdate: "01/09/2018",
                    commission: 230000,
                    commissionExcludeVat: 214953.27,
                    vat: 6448.60,
                    withHoldingTax: 6448.60,
                    amount: 223551.40,
                    status: "โอนแล้ว",
                },
                {
                    order: "3",
                    reference: "D0198760",
                    paymentdate: "01/09/2018",
                    commission: 230000,
                    commissionExcludeVat: 214953.27,
                    vat: 6448.60,
                    withHoldingTax: 6448.60,
                    amount: 223551.40,
                    status: "โอนแล้ว",
                },
                {
                    order: "4",
                    reference: "D0198760",
                    paymentdate: "01/09/2018",
                    commission: 230000,
                    commissionExcludeVat: 214953.27,
                    vat: 6448.60,
                    withHoldingTax: 6448.60,
                    amount: 223551.40,
                    status: "โอนแล้ว",
                },
                {
                    order: "5",
                    reference: "D0198760",
                    paymentdate: "01/09/2018",
                    commission: 230000,
                    commissionExcludeVat: 214953.27,
                    vat: 6448.60,
                    withHoldingTax: 6448.60,
                    amount: 223551.40,
                    status: "โอนแล้ว",
                },

            ]
        }
        console.log(this.state.date);
    }

    componentDidMount() {

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
                        <h3>ค่าส่งเสริมการขาย(ค่าคอมมิชชั่น)</h3>
                    </div>

                    <div >
                        <label>เดือนที่สรุปรายการ</label>
                    </div>

                    <div   >

                        <Calendar dateFormat="mm/yy"
                            value={this.state.date}
                            onChange={
                                (e) => {
                                    this.setState({ date: e.value })
                                }
                            }
                            
                            showButtonBar={true}
                            locale={th}
                            showIcon={true}
                            readonlyInput={true}
                            className="margin-right-50px fromtocalendar "
                            view="month"
                        ></Calendar>


                        <Button label="ค้นหา" className="p-button-success p-button-rounded width100px  " />

                    </div >
                </div>
                <div>
                    <div className="margin-top-50px">
                        <label>ทั้งหมด {this.state.commissions.length} รายการ</label>
                        <a className="position-right  ui-icon ui-c pi pi-arrow-down" > ดาวโหลดไฟล์</a>
                    </div>
                    <div className="margin-top-10px tableheader">
                        <DataTable value={this.state.commissions}   >
                            <Column field="order" header="ลำดับ" sortable={true} style={{ width: '10%' }} />
                            <Column field="reference" header="เลขที่อ้างอิง" textAlign="center" style={{ width: '20%' }} />
                            <Column field="paymentdate" header="วันที่โอน" sortable={true} style={{ width: '20%' }} />
                            <Column field="commission" header="ค่าคอมมิชชั่น" sortable={true} style={{ width: '20%' }} />
                            <Column field="commissionExcludeVat" header="ค่าคอมมิชชั่น<br\>ไม่รวมภาษี" sortable={true} style={{ width: '20%' }} />
                            <Column field="vat" header="ภาษีมูลค่าเพิ่ม 7%" sortable={true} style={{ width: '20%' }} />
                            <Column field="withHoldingTax" header="หักภาษี ณ ที่จ่าย 3%" sortable={true} style={{ width: '20%' }} />
                            <Column field="amount" header="ยอดจ่ายสุทธิ" sortable={true} style={{ width: '20%' }} />
                            <Column field="status" header="สถานะการโอน" sortable={true} style={{ width: '20%' }} />
                            <Column body={this.actionTemplate} style={{ textAlign: 'center', width: '8em' }} style={{ width: '20%' }} ></Column>
                        </DataTable>
                    </div>
                </div>

            </div>


        )


    }
    actionTemplate(rowData, column) { 


        let url = `/commissiondetail/${rowData.order}`
        // return (<div> <a value={rowData.order}>ดูรายละเอียด</a></div>);
        return ( <Link to={url}  >ดูรายละเอียด</Link>);



       
    }
}