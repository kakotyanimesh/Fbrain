import React, {useState} from 'react'
import { Button } from '../components/Button'
import { ShareIcon } from '../Icons/ShareIcon'
import { PlusIcon } from '../Icons/PlusIcon'
import { Card } from '../components/Card'
import { ContentModal } from '../components/FormModal'
import { SideBar } from '../components/SideBar'

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className='flex w-full'>
      <div className=''>
        <SideBar/>
      </div>
      <div className='sm:p-10 p-3 w-full'>
       <ContentModal open={openModal} onClose={() => setOpenModal(false)}/>
      
      <div className='flex gap-5 sm:flex-row flex-col justify-end pb-10 '>
        <Button variants='primary' onClickfn={() => setOpenModal(true)} title='Add Content' startIcon={<PlusIcon/>} /> 
        <Button variants='secondary' title='Share  Brain' startIcon={<ShareIcon/>} /> 
      </div>

      <div  className='flex gap-10 sm:flex-row flex-col'>
        <Card title='youtube video' type='youtube' link='https://www.youtube.com/watch?v=RMd2hXlVEQg'/>
        <Card title='tweet psot' type='tweet' link='https://x.com/_animeshkakoty/status/1822527796918329356'/> 
      </div>
 
      </div>
    </div>
  )
}

export default Dashboard