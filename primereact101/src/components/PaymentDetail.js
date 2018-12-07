import React from 'react';
import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { DataTable, Column } from 'primereact/datatable';
import './PaymentDetail.css'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import currentFormatter from 'currency-formatter';

export default class PaymentDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            date21:   new Date(),
            details: [
                {id:"1", date:"2018/91/10", reference: "1234556", name: "ฉัตรชัย วิชัย", brand: "yamaha", series: "series", chassie: "ASSAF12314", amountIncludeVat: 107, advancePayment:100, totalPayment:9000 }


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
            <div className=" payment-detail-background-color padding-20px" >

                <div  >
                    <div>
                        <h3>รายละเอียดการจ่ายเงินค่าสินค้า</h3>
                    </div>
                    <div className="bg ">
                        <div className="payment-detail-float-left ">
                            <div className="payment-detail-text-align-center  payment-detail-padding-top-16px payment-detail-padding-left-right-20px payment-detail-width-320px">
                                เลขที่อ้างอิง
                            </div>
                            <div className="payment-detail-text-align-center  payment-detail-padding-top-10px payment-detail-padding-left-right-20px payment-detail-width-320px">
                                <b>D0196759</b>
                            </div>
                        </div>
                        <div className="payment-detail-float-left ">
                            <div className="payment-detail-text-align-center payment-detail-padding-top-16px payment-detail-padding-left-right-20px payment-detail-width-320px">
                                วันที่จ่ายเงิน
                            </div>
                            <div className="payment-detail-text-align-center  payment-detail-padding-top-10px payment-detail-padding-left-right-20px payment-detail-width-320px">
                                <b>02/09/2018</b>
                            </div>
                        </div>
                        <div className="payment-detail-float-left ">
                            <div className="payment-detail-text-align-center payment-detail-padding-top-16px payment-detail-padding-left-right-20px payment-detail-width-320px">
                                ยอดสุทธิ
                            </div>
                            <div className="payment-detail-text-align-center  payment-detail-padding-top-10px payment-detail-padding-left-right-20px payment-detail-width-320px">
                                <b>{ currentFormatter.format( this.state.details.reduce((acc, val) =>{ return acc + val.totalPayment},0), {code: 'TH'})}</b>
                            </div>
                        </div>
                    </div>
                    <div >
                        <label>วันที่ทำสัญญา</label>
                    </div>

                    <div   >

                        <Calendar dateFormat="dd/mm/yy"
                            value={this.state.date}
                            onChange={
                                (e) => {
                                    this.setState({ date: e.value }) 
                                }
                            }
                            showButtonBar={true}
                            numberOfMonths={3}
                            locale={th} 
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
                        <label>ทั้งหมด {this.state.details.length} รายการ | รวมเป็นเงิน { currentFormatter.format( this.state.details.reduce((acc, val) =>{ return acc + val.totalPayment},0), {code: 'TH'})}</label>
                        <a className="position-right  ui-icon ui-c pi pi-arrow-down" > ดาวโหลดไฟล์</a>
                    </div>
                    <div className="margin-top-10px payment-detail">
                        <DataTable value={this.state.details}   >
                            <Column field="id" header="ลำดับ" sortable={true} style={{ width: '5%' }} />
                            <Column field="date" header="วันที่ทำสัญญา" style={{ width: '10%' }} />
                            <Column field="reference" header="เลขที่สัญญา" style={{ width: '10%' }} />
                            <Column field="name" header="ชื่อลูกค้า" style={{ width: '20%' }} />
                            <Column field="brand" header="ยี่ห้อรถ" style={{ width: '5%' }} />
                            <Column field="series" header="Series" style={{ width: '10%' }} />
                            <Column field="chassie" header="เลขโครง" style={{ width: '10%' }} />
                            <Column field="amountIncludeVat" header="มูลค่าสินค้า(รวม Vat)" sortable={true} style={{ width: '10%' }} />
                            <Column field="advancePayment" header="ค่างวดล่วงหน้า" style={{ width: '10%' }} />
                            <Column field="totalPayment" header="จ่ายสุทธิ"  sortable={true} style={{ width: '=10%' }} />
                        </DataTable>
                    </div>
                </div>

            </div>
            
        )
    }
    actionTemplate(rowData, column) {
        console.log(rowData)
        return (<div> <a value={rowData.order}>ดูรายละเอียด</a></div>);
    }
}
