import React from 'react'
import '../../style/Header.css'
import HeaderIcon from './HeaderIcon'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineSearch, AiOutlineQuestionCircle, AiOutlineSetting } from "react-icons/ai";


function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <button style={{border: 'none', backgroundColor: 'transparent'}}>
                    <HeaderIcon Icon={GiHamburgerMenu} />
                </button>
                <img src='https://cdn-icons-png.flaticon.com/512/281/281769.png' className='logo' alt='gmail logo' />
            </div>
            <div className='header__middle'>
                <HeaderIcon Icon={AiOutlineSearch} />
                <input type='text' placeholder='Search mail' />
                <HeaderIcon Icon={IoMdArrowDropdown} />
            </div>
            <div className='header__right'>
                <HeaderIcon Icon={AiOutlineQuestionCircle} />
                <HeaderIcon Icon={AiOutlineSetting} />
                <HeaderIcon Icon={CgMenuGridO} />
                <HeaderIcon avatar='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80' />
            </div>
        </div>
    )
}

export default Header