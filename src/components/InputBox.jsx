import React from 'react'


const InputBox = ({ label, amount, currency = "usd", onAmountChange, currencyOptions }) => {
    return (
        <div className='bg-white p-4 flex flex-col gap-3 rounded-md w-full'>
            <div className='flex justify-between'>
                <legend className=" text-md text-neutral-400">{label}</legend>
                <legend className=" text-md text-neutral-400">Currency Type</legend>
            </div>
            <div className='flex justify-between items-center'>
                <input type="number" placeholder="Amount" id='amount' className="input px-0 bg-white text-black placeholder:text-gray-400 text-lg outline-0 shadow-none border-0" value={amount} onChange={(e) => { onAmountChange(Number(e.target.value)) }} />
                <select defaultValue="usd" className="select bg-white border-gray-200 pe-0 text-black" >
                    {
                        currencyOptions.slice(1).map((c) => (
                            <option key={c} value={c}>{c}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default InputBox
