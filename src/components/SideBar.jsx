import React, { useState } from 'react'
import {FaBox,FaBars,FaUserAlt,FaRegChartBar,FaCommentAlt,FaShoppingBag,FaThList} from 'react-icons/fa'
import { AiOutlineQrcode,AiTwotoneSetting } from "react-icons/ai";
import { NavLink } from 'react-router-dom'

const SideBar = ({children}) => {
    const[isOpen,setIsopen]=useState(false)
    const toggle=()=>setIsopen(!isOpen)
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaRegChartBar/>
        },
        {
            path:"/order",
            name:"Orders",
            icon:<FaBox/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList/>
        } ,
        {
            path:"/qrcode",
            name:"QR Code",
            icon:<AiOutlineQrcode/>
        },
        {
            path:"/table",
            name:"Table",
            icon:<FaShoppingBag/>
        },
        {
            path:"/customer",
            name:"Customer",
            icon:<FaUserAlt/>
        },
        {
            path:"/setting",
            name:"Settings",
            icon:<AiTwotoneSetting/>
            
        }
    ]
  return (
    <div className="container">
        <div  style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                    <FaBars style={{color:'#4040ec'}} onClick={toggle}/>
                </div>
            </div>
            {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">
                                {item.icon}
                            </div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">
                                {item.name}
                            </div>
                        </NavLink>
                    ))
                }
        </div>
        <main>{children}</main>
    </div>
  )
}

export default SideBar