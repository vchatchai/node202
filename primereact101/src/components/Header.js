import React from 'react'
import { DataTable, Column } from 'primereact/datatable';
import { Calendar } from 'primereact/calendar';
import './Header.css'
import logo from './gl_logo.png';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// import {Link} from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";

export default class Header extends React.Component {
    constructor() {
        super();

         
    }

    render2() {
        return (
            <div>
                <div className="content-section implementation">
                    <img src={logo} className="gl-logo" alt="logo" />
                    <Menubar model={this.state.items}>
                        <InputText placeholder="Search" type="text" />
                        <Button label="Logout" icon="pi pi-power-off" style={{ marginLeft: 4 }} />
                    </Menubar>
                </div>
            </div>
        );
    }


    render3() {
        return (

            <div class="navbar">

                <img src={logo} className="gl-logo" alt="logo" />

                <a href="#news">รายการจ่ายเงินค่าสินค้า</a>
                <a >ค่าส่งเสริมการขาย</a>
                <div class="dropdown">
                    <a class="dropbtn">ฉัตรชัย วิชัย
                    <i class="fa fa-caret-down"></i>
                    </a>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>

            // <div>
            //     <hr className="padding-0 margin-0 " />
            // </div>
        )
    }

    render() {
        return (
            <div className="header-background-color ">
                <div class="navbar">
                    <img src={logo} className="gl-logo" alt="logo" />
                    <a href="#home" className="active" >รายการจ่ายเงินค่าสินค้า</a>
                    <a href="#news">ค่าส่งเสริมการขาย</a>
                    <div class="dropdown">
                        <button class="dropbtn">ฉัตรชัย วิชัย
                    <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content"> 
                            <a href="#">ออกจากระบบ</a>
                        </div>
                    </div>
                </div>
                <hr className="padding-0 margin-0 " />
            </div>
        )
    }

    render1() {



        return (
            <div>
                <ul >
                    <li> <img src={logo} className="gl-logo" alt="logo" /></li>
                    <li><a >รายการจ่ายเงินค่าสินค้า</a></li>
                    <li><a >ค่าส่งเสริมการขาย</a></li>

                </ul>
                <div class="dropdown">
                    <button class="dropbtn">Chatchai
                    <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <hr className="padding-0 margin-0 " />



            </div>



            // <div >
            //     <div >
            //         <img src={logo} className="gl-logo" alt="logo" />
            //     </div>
            //     <div className="label-link " >
            //         <label   > รายการจ่ายเงินค่าสินค้า </label>

            //     </div>
            //     <div className="label-link ">
            //         <label  >ค่าส่งเสริมการขาย</label>

            //     </div>
            //     {/* <div>
            //         <hr />
            //     </div> */}
            // </div>

        );
    }

}