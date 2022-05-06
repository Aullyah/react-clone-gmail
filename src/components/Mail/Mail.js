import React, { useEffect, useState } from 'react'
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import '../../style/Mail.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Mail = () => {
    const [email, setEmail] = useState({});
    const id = localStorage.getItem('currentId');
    useEffect(() => {
        const getEmail = async () => {
            const { data } = await axios.get(`https://625c6a7295cd5855d612ab68.mockapi.io/email/${id}`);
            setEmail(data);
        }
        getEmail();
    },[id])
    return (
        <div className='mail'>
            <div className='mail__tools'>
                <div className='mail__toolsLeft'>
                    <IconButton>
                        <Link to='/'>
                            <ArrowBackIcon />
                        </Link>
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>
                    <IconButton>
                        <ErrorIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <EmailIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className='mail__toolsRight'>
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>
                    <IconButton>
                        <PrintIcon />
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
                </div>
            </div>
            <div className='mail__body'>
                <div className='mail__bodyHeader'>
                    <h2>{email.subject}</h2>
                    <LabelImportantIcon className='mail__important' />
                    <p>{email.recipient}</p>
                    <p>{email.timeStamp}</p>
                </div>
                <div className='mail__mesage'>
                    {email.message}
                </div>
            </div>
        </div>
    )
}

export default Mail