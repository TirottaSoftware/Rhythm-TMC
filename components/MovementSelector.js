import React from 'react'

function MovementSelector({ options, handleChange }) {
    return (
        <div>
            <p className='text-xl font-bold mb-2'>Choose a movement type:</p>
            <select className='w-full outline-none my-2 p-2 text-xl bg-zinc-100 rounded-md' onChange={handleChange}>
                {
                    options.map((o, index) => {
                        return <option key={index}>{o}</option>
                    })
                }
            </select>
        </div>
    )
}

export default MovementSelector