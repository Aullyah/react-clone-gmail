import { Checkbox, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../../style/EmailList.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Section from './Section';
import EmailRow from './EmailRow';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { notUpdateData, selectUpdateDataList, selectUpdateTotal, updateTotal } from '../../features/mail/mailSlice';


const EmailList = () => {
    const isUpdateData = useSelector(selectUpdateDataList);
    const total = useSelector(selectUpdateTotal);
    const dispatch = useDispatch();
    const [email, setEmail] = useState([]);
    const [isAllCheck, setIsAllCheck] = useState(false);

    useEffect(() => {
        const getEmail = async () => {
            const { data } = await axios.get('https://625c6a7295cd5855d612ab68.mockapi.io/email');
            setEmail(data);
            dispatch(notUpdateData())
            dispatch(updateTotal({ inbox: data.length, stared: total.stared, important: total.important }))
        }

        getEmail();
    }, [dispatch, isUpdateData, total])
    return (
        <div className='emailList'>
            <div className='emailList__settings'>
                <div className='emailList__settingsLeft'>
                    <Checkbox onClick={() => setIsAllCheck((isAllCheck) => !isAllCheck)}/>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className='emailList__settingsRight'>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className='emailList__sections'>
                <Section Icon={InboxIcon} title='Primary' color='red' selected />
                <Section Icon={PeopleIcon} title='Social' color='#1a73eb' />
                <Section Icon={LocalOfferIcon} title='Promotion' color='green' />
            </div>
            <div className='emailList__List'>
                {email && email.map((mail) => {
                    return (
                        <EmailRow
                            key={mail.id}
                            isAllCheck = {isAllCheck}
                            id={mail.id}
                            title={mail.recipient}
                            subject={mail.subject}
                            description={mail.message}
                            time={mail.timeStamp} />
                    )


                })}
            </div>
        </div>
    )
}

export default EmailList