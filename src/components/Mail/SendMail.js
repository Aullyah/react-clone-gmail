import React from 'react'
import { useDispatch } from 'react-redux';
import { closeSendMessage,updateData } from '../../features/mail/mailSlice';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from "react-hook-form";
import '../../style/SendMail.css'
import { Button } from '@mui/material';

const SendMail = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const recipient = document.getElementById('recipient');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        if (data.recipient === '') throw alert('please specify atleast one recipient')
        try {
            const date = new Date();
            const request = {
                recipient: data.recipient,
                subject: data.subject,
                message: data.message,
                timeStamp: `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`,
            };

            const requestOption = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(request)
            }

            await fetch('https://625c6a7295cd5855d612ab68.mockapi.io/email?sortBy=id&order=desc', requestOption)

        } catch (error) {
            console.log(error);
        } finally {
            // reset({ ...data });
            dispatch(updateData());
            recipient.value = '';
            subject.value = '';
            message.value = '';
        }

    }

    return (
        <div className='sendMail'>
            <div className='sendMail__header'>
                <h3>New Message</h3>
                <CloseIcon onClick={() => dispatch(closeSendMessage())} className='sendMail__close' />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Recipient' type='email' id='recipient' {...register("recipient")} />
                <input placeholder='Subject' type='text' id='subject' {...register("subject")} />
                {/* <input type='text' name='message' className='message' {...register("message")}/> */}
                <textarea name='message' className='message' id='message' {...register("message")} />
                <div className='sendMail__options'>
                    <Button className='sendMail__send' type='submit'>Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail