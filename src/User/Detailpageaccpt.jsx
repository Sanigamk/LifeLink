import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Detailpageaccpt = () => {
    const [data, setData] = useState([''])
    let { id } = useParams()
    console.log(id);
    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get(`http://localhost:5000/users/vwuseraccptdreqhist/${id}`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()
    }, [])
  return (
    <div className='image3'>
        <div class="bg-transparent w-[50%] m-auto overflow-hidden shadow rounded-lg border mt-10">
                <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Name
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        {data.users?.name}
                    </p>
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl class="sm:divide-y sm:divide-gray-200">
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Age
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" >
                                {data.users?.age}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Email
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span placeholder:text-black "  >
                                {data.users?.email}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Contact
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                               {data.users?.contact}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>  
    </div>
  )
}
