import React from 'react'

export default function AdvanceTab() {
    return (
        <div className='block mt-4'>
            <div className='block mb-4'>
                <label className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg> <span className='ml-2'>Max priority fee (GWEI)</span>
                </label>
                <div className='flex mt-2 justify-between items-center bg-gray-2 py-2 px-3 rounded-md'>
                    <h4 className='text-gray-9 text-md'>1.5</h4>
                    <p className='text-gray-4'>$0.0</p>
                </div>
            </div>
            <div className='block mb-4'>
                <label className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg> <span className='ml-2'>Max fee (GWEI)</span>
                </label>
                <div className='flex mt-2 justify-between items-center bg-gray-2 py-2 px-3 rounded-md'>
                    <h4 className='text-gray-9 text-md'>17.63</h4>
                    <p className='text-gray-4'>$0.0</p>
                </div>
            </div>
            <div className='block mb-4'>
                <label className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg> <span className='ml-2'>Gas Limit</span>
                </label>
                <div className='flex mt-2 justify-between items-center bg-gray-2 py-2 px-3 rounded-md'>
                    <p className='text-gray-4'>273</p>
                    <p className='text-primary'>Edit</p>
                </div>
            </div>
            <div className='block mb-4'>
                <button className='bg-primary text-white rounded-md w-full h-12'>Save</button>
            </div>
        </div>
    )
}
