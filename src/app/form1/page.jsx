"use client";

import { useState } from 'react';

export default function FormPage() {
    // Addition State and Handler
    const [firstNumberAdd, setFirstNumberAdd] = useState("");
    const [secondNumberAdd, setSecondNumberAdd] = useState("");
    const [resultAdd, setResultAdd] = useState(0);

    const handleAddition = (e) => {
        e.preventDefault();
        const num1 = parseInt(firstNumberAdd) || 0;
        const num2 = parseInt(secondNumberAdd) || 0;
        setResultAdd(num1 + num2);
    };

    // Subtraction State and Handler
    const [firstNumberSub, setFirstNumberSub] = useState("");
    const [secondNumberSub, setSecondNumberSub] = useState("");
    const [resultSub, setResultSub] = useState(0);

    const handleSubtraction = (e) => {
        e.preventDefault();
        const num1 = parseInt(firstNumberSub) || 0;
        const num2 = parseInt(secondNumberSub) || 0;
        setResultSub(num1 - num2);
    };

    return (
        <div className='flex w-full justify-center gap-10'>
          
            <form onSubmit={handleAddition} className='flex flex-col gap-3'>
                <h2 className='text-xl font-semibold text-red-500'>Addition Form</h2>

                <div className='flex flex-col gap-3'>
                    <input type="text" value={firstNumberAdd} onChange={(e) => setFirstNumberAdd(e.target.value)} className='px-6 py-3 border-2 rounded border-black focus:outline-none focus:border-blue-500' placeholder='Enter First Number' />

                    <input type='text' value={secondNumberAdd} onChange={(e) => setSecondNumberAdd(e.target.value)} className='px-6 py-3 border-2 rounded border-black focus:outline-none focus:border-blue-500' placeholder='Enter Second Number'></input>

                    <button type='submit' className='bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-400'>
                        Add Numbers
                    </button>
                </div>
                <p className='text-xl font-bold text-blue-500'>
                    The result of Addition is {resultAdd}
                </p>
            </form>

            <form onSubmit={handleSubtraction} className='flex flex-col gap-3'>
                <h2 className='text-xl font-semibold text-red-500'>Subtraction Form</h2>

                <div className='flex flex-col gap-3'>
                    <input type="text" value={firstNumberSub} onChange={(e) => setFirstNumberSub(e.target.value)} className='px-6 py-3 border-2 rounded border-black focus:outline-none focus:border-blue-500' placeholder='Enter First Number' />

                    <input type='text' value={secondNumberSub} onChange={(e) => setSecondNumberSub(e.target.value)} className='px-6 py-3 border-2 rounded border-black focus:outline-none focus:border-blue-500' placeholder='Enter Second Number'></input>

                    <button type='submit' className='bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-400'>
                        Subtract Numbers
                    </button>
                </div>
                <p className='text-xl font-bold text-blue-500'>
                    The result of Subtraction is {resultSub}
                </p>
            </form>
        </div>
    );
}
