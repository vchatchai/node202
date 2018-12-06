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

        this.state = {
            items: [
                {
                    label: 'File',
                    icon: 'pi pi-fw pi-file',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-fw pi-plus',
                            items: [
                                {
                                    label: 'Bookmark',
                                    icon: 'pi pi-fw pi-bookmark'
                                },
                                {
                                    label: 'Video',
                                    icon: 'pi pi-fw pi-video'
                                },

                            ]
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-trash'
                        },
                        {
                            separator: true
                        },
                        {
                            label: 'Export',
                            icon: 'pi pi-fw pi-external-link'
                        }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Left',
                            icon: 'pi pi-fw pi-align-left'
                        },
                        {
                            label: 'Right',
                            icon: 'pi pi-fw pi-align-right'
                        },
                        {
                            label: 'Center',
                            icon: 'pi pi-fw pi-align-center'
                        },
                        {
                            label: 'Justify',
                            icon: 'pi pi-fw pi-align-justify'
                        },

                    ]
                },
                {
                    label: 'Users',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-fw pi-user-plus',

                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-user-minus',

                        },
                        {
                            label: 'Search',
                            icon: 'pi pi-fw pi-users',
                            items: [
                                {
                                    label: 'Filter',
                                    icon: 'pi pi-fw pi-filter',
                                    items: [
                                        {
                                            label: 'Print',
                                            icon: 'pi pi-fw pi-print'
                                        }
                                    ]
                                },
                                {
                                    icon: 'pi pi-fw pi-bars',
                                    label: 'List'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Events',
                    icon: 'pi pi-fw pi-calendar',
                    items: [
                        {
                            label: 'Edit',
                            icon: 'pi pi-fw pi-pencil',
                            items: [
                                {
                                    label: 'Save',
                                    icon: 'pi pi-fw pi-calendar-plus'
                                },
                                {
                                    label: 'Delete',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                },

                            ]
                        },
                        {
                            label: 'Archieve',
                            icon: 'pi pi-fw pi-calendar-times',
                            items: [
                                {
                                    label: 'Remove',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        }
                    ]
                },
                {
                    separator: true
                },
                {
                    label: 'Quit',
                    icon: 'pi pi-fw pi-power-off'
                }
            ]
        };
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
            <div>
                <div class="navbar">
                    <img src={logo} className="gl-logo" alt="logo" />
                    <a href="#home">รายการจ่ายเงินค่าสินค้า</a>
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