import React from 'react'
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Sidebar() {
    const [Open,setOpen ]=useState(true);
    const [SubmenuOpen,setSubmenuOpen ]=useState(true);
    const Menus = [
        // {title:"Dashboard"},
        // {title:"Dashboard2"},
        {title:"Dashboard", spacing: true, linki:"/dashboard"},
        {
            title:"My private channel",
            submenu:true,
            submenuItems:[
                {title:"Getting started",linki:"/gettingstarted"},
                {title:"Its me",linki:"/itsme"},
                {title:"My feed",linki:"/myfeed"},
            ]
         },
        //  {title:"Dashboard5"},
        //  {title:"Dashboard6"},
         {title:"Dashboard7", spacing:true, linki:"/dashboard7"},
         {title:"Dashboard8", linki:"dashboard8"},
        //  {title:"Dashboard8"},
    ]
    
  return (
    <>
    <div className="fixed-left flex">
        <div className={`bg-blue-600 h-screen p-5 pt-8 ${Open?"w-[300px]":"w-[90px]"} duration-300 relative`}>
        <BsArrowLeftShort className={`bg-white text-black text-3xl rounded-full absolute -right-2 top-9 border border-black cursor-pointer ${!Open&&"rotate-180"} `} onClick={()=>setOpen(!Open)}/>
        <Link to="/" className="inline-flex items-center" >
            <IoIosSearch className={`bg-amber-300 text-black text-4xl rounded cursor-pointer block-float mr-2 duration-300 ${Open && 'rotate-[360deg]'}`}/>
            <Link className={`font-bold text-white text-2xl origin-left duration-300 ${!Open && 'scale-0'}  `} to="/">DashBoard</Link>
        </Link>
        {/* <div
        class="p-2.5 flex items-center rounded-md px-2 duration-300 cursor-pointer bg-gray-700 text-white my-4"
      >
        <IoIosSearch className={`bg-white text-black text-3xl rounded-full  top-9 border border-black cursor-pointer`} />
        <input
          type="text"
          placeholder="Search"
          class={`text-[15px] ml-4 w-full bg-transparent focus:outline-none ${!Open && 'scale-0'}`}
        />
      </div> */}
        <div className="p-2.5 flex items-center rounded-md px-2 duration-300 cursor-pointer bg-gray-700 text-white my-4">
            <IoIosSearch className='text-white mx-1'/>
            <input
          type="text"
          placeholder="Search"
          class={`text-base text-white w-full bg-transparent focus:outline-none mr-2 ${!Open && 'hidden'}`}
        />
        </div>
        <ul className='pt-2'>
            {Menus.map((menu,index)=>(
                <>
                <li key={index} className={`rounded text-white gap-x-4 cursor-pointer p-2 text-sm flex items-center hover:bg-gray-400 ${menu.spacing? "mt:9":"mt-1"} `}>
                    
                    <Link to={menu.linki}><IoIosSearch className='bg-amber-300 text-black text-4xl rounded cursor-pointer block-float mr-2 duration-300'/></Link>
                    <Link to={menu.linki} className={`text-base font-medium flex-1 ${!Open &&'hidden'}`}>{menu.title}</Link>
                    {menu.submenu && Open && <BsChevronDown className={`${SubmenuOpen&&'rotate-180'}`} onClick={()=>(setSubmenuOpen(!SubmenuOpen))}/>}
                    

                </li>
                {menu.submenu && SubmenuOpen && Open &&
                   ( <ul>
                    {menu.submenuItems.map((submenuItem,index)=>(
                        <>
                        <li key={index} className='rounded text-white gap-x-4 cursor-pointer p-2 text-sm flex items-center hover:bg-gray-400 px-5'>
                            <Link to={`/myprivatechannel${submenuItem.linki}`} className='text-base font-medium flex-1'>
                            {submenuItem.title}

                            </Link>
                        </li>
                        </>
                    ))}
                    </ul>)
                    }
                </>
            ))}
        </ul>
        </div>
    </div>
    </>
    
  )
}

export default Sidebar
