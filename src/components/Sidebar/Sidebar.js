import React from 'react'
import '../../style/Sidebar.css'
// import { AiOutlinePlus } from 'react-icons/ai';
// import { BiVideo } from 'react-icons/bi';
// import { BsFillChatQuoteFill, BsKeyboardFill } from 'react-icons/bs';
import { HiInbox, HiStar } from 'react-icons/hi';
// import { FaTrash } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go';
import { MdAccessTimeFilled, MdOutlineLabelImportant } from 'react-icons/md';
import { IoMdSend, IoMdDocument } from 'react-icons/io';
// import { ImHangouts, ImPlus } from 'react-icons/im';
import SidebarOption from './SidebarOption';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { openSendMesage, selectUpdateTotal } from '../../features/mail/mailSlice';

function Sidebar() {
    const dispatch = useDispatch();
    const total = useSelector(selectUpdateTotal);
    return (
        <div className='sidebar'>
            <Button
                startIcon={<GoPlus fontSize='large' />}
                className='sidebar__compose'
                onClick={() => dispatch(openSendMesage())}>
                Compose
            </Button>
            <SidebarOption Icon={HiInbox} title='inbox' number={total.inbox} selected={true} />
            <SidebarOption Icon={HiStar} title='Stared' number={total.stared} />
            <SidebarOption Icon={MdAccessTimeFilled} title='Snoozed' number={1} />
            <SidebarOption Icon={MdOutlineLabelImportant} title='Important' number={total.important} />
            <SidebarOption Icon={IoMdSend} title='Send' number={10} />
            <SidebarOption Icon={IoMdDocument} title='Draft' number={29} />
        </div>
    )
}

export default Sidebar