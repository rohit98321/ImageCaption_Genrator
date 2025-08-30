import React from 'react'
import {useForm} from "react-hook-form"

const CaptionGenrate = () => {

    const {register,reset,handleSubmit}=useForm()
    const handler=(data)=>{

     
      const formdata=new FormData();
      formdata.append("image",data.image[0])
      console.log(formdata);
    }

  return (
    <div className=' border p-4 mx-auto w-[600px] h-[600px]'>


      <form  onSubmit={handleSubmit(handler)} className='border flex flex-col gap-2.5'>

      <input className='border-b-1 outline-0' type="file" placeholder='image' />

      <button>generate caption</button>
      </form>


    </div>
  )
}

export default CaptionGenrate