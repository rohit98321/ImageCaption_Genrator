import {useForm} from "react-hook-form"
import {useDispatch} from "react-redux"
import { asyncPost } from "../../redux/actions/postAction"

const CaptionGenrate = () => {


    const dispatch=useDispatch()
    const {register,reset,handleSubmit}=useForm()


    const handler=(data)=>{

      const formdata=new FormData();
      formdata.append("image",data.image[0])
      console.log("formdata",formdata);

      dispatch(asyncPost(formdata))

      //for appear image data in console
      for (let [key, value] of formdata.entries()) {
        console.log(key, value);
      }
      

    }

  return (
    <div className=' border bg-blue-950 p-4 mx-auto w-[600px] h-[600px]'>


      <form  onSubmit={handleSubmit(handler)}
       className=' flex flex-col gap-20'>

      <input {...register("image")} className='border-b-1 outline-0' type="file" placeholder='image' />

      <button type='submit' className='bg-green-700 rounded uppercase p-2' >generate caption</button>
      </form>


    </div>
  )
}

export default CaptionGenrate