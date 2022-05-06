import { Checkbox, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../style/EmailRow.css';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUpdateTotal, updateTotal} from '../../features/mail/mailSlice';
// import {useHref} from 'react-router-dom';

const EmailRow = ({ id, isAllCheck, title, subject, description, time }) => {
    const [year, month , date] = time.split('/');
    const [isStared, setIsStared] = useState(false);
    const [isImportant, setIsImportant] = useState(false);
    const dispatch = useDispatch();
    const total = useSelector(selectUpdateTotal);
    const months = ["January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"];
    const handleStared = () => {
       setIsStared((isStared) => !isStared);
       console.log(isStared);
    }
    const handleImportant = () => {
        setIsImportant((isImportant) => !isImportant);
    }
    console.log(isAllCheck);
    return (
        <div className='emailRow'>
            <div className='emailRow__options'>
                {/* {console.log(isStared,isImportant)} */}
                {/* {isAllCheck ? <Checkbox checked={isAllCheck}/> : <Checkbox/>} */}
                <Checkbox/>
                <IconButton onClick={handleStared}>
                    {isStared ? <StarBorderPurple500Icon style={{color:'orange'}}/> : <StarBorderOutlinedIcon />}
                </IconButton>
                <IconButton onClick={handleImportant}>
                    {isImportant ? <LabelImportantOutlinedIcon style={{color:'orange'}}/> : <LabelImportantOutlinedIcon />}
                </IconButton>
            </div>
            <Link to='/mail' onClick={() => localStorage.setItem('currentId', id)} className='emailRow__Right' >
            <h3 className='emailRow__title'>
                {title}
            </h3>
            <div className='emailRow__message'>
                <h4>{subject}{" "}
                    <span className='emailRow__description'>
                        -{description}
                    </span>
                </h4>
            </div>
            <div className='emailRow__time'>
                {parseInt(year) === new Date().getFullYear() ? `${months[month].substring(0,3)} ${date}` : `${month}/${date}/${year.substring(0,2)}`}
            </div>
            </Link>
        </div>
    )
}

export default EmailRow