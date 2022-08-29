import React from "react";
import "./dashboard.css";
import Navigationbar from "./Navbar";
import {MdPerson, MdDashboard} from 'react-icons/md'
import {GiCancel} from "react-icons/gi"
import {ImCheckmark} from "react-icons/im"
import {FiClock} from "react-icons/fi"
import {BiTransferAlt} from "react-icons/bi";
import { Charting } from "./chart";


const Dashboard = () => {




    return(
        <div className="dashboardbody" >
            <Navigationbar/>
            <div className="dashboard_sub">
                <p className="subtopics">Organization Overview</p>
                <p className="subtopics">Profile Details</p>
                <p className="subtopics">Order Page</p>
                <p className="subtopics">Product Page</p>
                <p className="subtopics"> Page</p>
            </div>
            <div>
                <div className="productmonitor">
                    <div className="ongoing"> <span className="icon_body"><BiTransferAlt  style={{color:'#ebb752', fontSize:"25px", marginLeft:"8px", marginTop:"8px"}}/> </span>
                    <div className="no_div">
                        <p className="number">345</p>
                        <p className="no_topic">Ongoing transactions</p>
                    </div>
                    </div>
                    <div className="ongoing"> <span className="icon_body2"><ImCheckmark color='#09781a' style={{fontSize:"25px", marginLeft:"8px", marginTop:"8px"}}/> </span>
                    <div className="no_div">
                        <p className="number">345</p>
                        <p className="no_topic">Completed transactions</p>
                    </div>
                    </div>
                    <div className="ongoing"> <span className="icon_body1"><FiClock color='#1031e2' style={{fontSize:"25px", marginLeft:"8px", marginTop:"8px"}}/> </span>
                    <div className="no_div">
                        <p className="number">345</p>
                        <p className="no_topic">Time based transactions</p>
                    </div>
                    </div>
                    <div className="ongoing"> <span className="icon_body3"><GiCancel color='rgb(248, 47, 47)' style={{fontSize:"25px", marginLeft:"8px", marginTop:"8px"}}/> </span>
                    <div className="no_div">
                        <p className="number">345</p>
                        <p className="no_topic">Cancelled transactions</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="chart_details">
            <div className="dashboard_graph">
                <div className="graph_select">
                <p className="total_trans">Total Transactions</p>
                <select className="selection_bar">
                    <option>All month</option>
                    <option>Last month</option>
                    <option>Last week</option>
                </select>
                </div>
            <Charting/>
            </div>
            <div className="topcust_cat">
                <p className="top_cust">Top Customers</p><hr/>
                <div className='topcust_list'>
                    <div className="topcust_listName">
                        <div className="topcust_rounded">DJ</div>
                        <div className="topcust_custDetails">
                            <span className="topcust_common topcust_name">David Janes </span>
                            <span className='topcust_common topcust_email'>David@xyz.com</span>
                        </div>                        
                    </div>
                    <p className="topcust_amount" >N400K</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Dashboard;