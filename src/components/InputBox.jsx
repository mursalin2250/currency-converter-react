import React from 'react'


const InputBox = () => {
    return (
        <div className='bg-white p-4 flex flex-col gap-3 rounded-md'>
            <div className='flex justify-between'>
                <legend className=" text-md text-neutral-400">From</legend>
                <legend className=" text-md text-neutral-400">Currency Type</legend>
            </div>
            <div className='flex justify-between items-center'>
                <input type="text" placeholder="Type here" className="input px-0 bg-white text-black placeholder:text-gray-400" />
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn text-black bg-neutral-200 border-0 shadow-none">Item</div>
                    <ul tabindex="-1" class="dropdown-content menu bg-white rounded-box z-1 w-52 p-2">
                        <li className='text-black'><a>Item 1</a></li>
                        <li className='text-black'><a>Item 1</a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default InputBox
