import { Avatar } from '@mui/material'
import React from 'react'
import '../../style/HeaderIcon.css'

function HeaderIcon({Icon, avatar}) {
  return (
    <div className='headerIcon'>
        {Icon && <Icon />}
        {avatar && <Avatar src={avatar} alt='profile'/>}
    </div>
  )
}

export default HeaderIcon