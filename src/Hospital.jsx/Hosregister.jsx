import React, { useState } from 'react'
import axios from 'axios'

export const Hosregister = () => {
  const [data,setData]=useState('')
    
    
     
        let handleChange=(event)=>{
            setData({...data,[event.target.name]:event.target.value})
        }
        let handleSubmit=async (event)=>{
            event.preventDefault()
            console.log(data);
           let response=await axios.post('http://localhost:5000/user/register',{...data,userType:'hospital'})
           console.log(response);
            
        }
  return (
    <div className='images2 w-[100%]'>
        <form onSubmit={handleSubmit} class="w-[100%] ">

<div className='flex w-[100%] justify-center sm:gap-10'>

  <div className='w-[25%]'>

    <div class="mb-5">
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hospital name :</label>
      <input onChange={handleChange} value={data.name} name="name" type="text" id="name" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
    </div>
    
    <div class="mb-5">
      <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Place :</label>
      <input onChange={handleChange} value={data.place} name="place" type="text" id="place" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
      <input onChange={handleChange} value={data.email} name="email" type="email" id="place" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact :</label>
      <input onChange={handleChange} value={data.contact} name="contact" type="text" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Liscence number :</label>
      <input onChange={handleChange} value={data.liscence} name="liscence" type="text" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Proof :</label>
      <input onChange={handleChange} value={data.proof} name="proof" type="file" id="file" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    
    
  </div>
  <div className='w-[25%]'>

    <div class="mb-5">
      <label for="house name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post office :</label>
      <input onChange={handleChange} value={data.postoffice} name="postoffice" type="text" id="house name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
    </div>
    <div class="mb-5">
      <label for="post" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pin :</label>
      <input onChange={handleChange} value={data.pin} name="pin" type="text" id="post" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="pin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">District :</label>
      <input onChange={handleChange} value={data.district} name="district" type="text" id="pin" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    
    <div class="mb-5">
      <label for="district" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password :</label>
      <input onChange={handleChange} value={data.password} name="password" type="password" id="district" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
    <div class="mb-5">
      <label for="district" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Conform Password:</label>
      <input onChange={handleChange} value={data.conformpassword} name="conformpassword" type="password" id="district" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
    </div>
  </div>
  
</div>




<div class="flex flex-wrap mb-5 mt-8">

<button type="submit" class="text-white m-auto m-a bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SUBMIT</button>

</div>
</form>
    </div>
  )
}
