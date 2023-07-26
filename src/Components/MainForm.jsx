import  Navbar  from './Components/Navbar'
import { Box } from './Components/PhoneUi/PhoneUI'
import Card from './Components/form/form'

import './background.css'

export default function MainForm() {
  return (
    <>
      <div className="md:w-full md:h-full md:flex md:overflow-y-hidden items-center" id='main-page'>
        <div className=" fixed top-0 left-0 w-full">
          <Navbar />
        </div>
        <div className=" w-full px-8 flex justify-between items-center">
          <div className='flex justify-center my-16 pl-12 pb-8'>
            <Card />
          </div>
          <div className='flex justify-center w-full mt-8 overflow-auto'>

          <Box />
          </div>
        </div>
      </div>
    </>
  )
}
