import React from 'react';
import { Table } from 'reactstrap';
import { DataTable, Column } from 'primereact/datatable';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default class PaymentTable extends React.Component {


    constructor() {
        super();
        this.state = {
            cars: [
                {
                    order: 1,
                    reference: "P123455",
                    paymentdate: '02/09/2018',
                    amount: 699990
                },  {
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
                },{
                    order: 5,
                    reference: "P123455",
                    paymentdate: '02/09/2018',
                    amount: 699990
                },  {
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
                },{
                    order: 9,
                    reference: "P123455",
                    paymentdate: '02/09/2018',
                    amount: 699990
                },  {
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
        };

    }
    actionTemplate(rowData, column) {
        console.log(rowData)
        return (<div> <a value={rowData.order}>ดูรายละเอียด</a></div>);
    }

    render() {
        return (
            <div>

                <div className="margin-top-50px">
                    <label>ทั้งหมด 30 รายการ|รวมเป็นเงิน 20,000,00</label>
                    <label className="position-right" >ดาวโหลดไฟล์</label>
                </div>
                <div className="margin-top-10px tableheader">
                    <DataTable value={this.state.cars}   >
                        <Column field="order" header="ลำดับ" sortable={true}  />
                        <Column field="reference" header="เลขที่อ้างอิง"  />
                        <Column field="paymentdate" header="วันที่จ่าย" sortable={true} />
                        <Column field="amount" header="ยอดจ่ายสุทธิ" sortable={true} />
                        <Column body={this.actionTemplate} style={{ textAlign: 'center', width: '8em' }} ></Column>
                    </DataTable>
                </div>

            </div>


        );
    }
}


// order: 12,
// reference: "P123455",
// paymentdate: '02/09/2018',
// amount: 699990