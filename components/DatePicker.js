import React, { useState } from 'react'

function DatePicker({ onChange }) {
    const [start, setStart] = useState(new Date(1645402500000).toISOString().split('T')[0])
    const [end, setEnd] = useState(new Date(1646005500000).toISOString().split('T')[0])

    const MIN = new Date(1645402500000).toISOString().split('T')[0]
    const MAX = new Date(1646005500000).toISOString().split('T')[0]

    const handleStartChange = e => {
        setStart(new Date(e.target.value).toISOString().split('T')[0])
        onChange(new Date(e.target.value).toISOString().split('T')[0], end)
    }

    const handleEndChange = e => {
        setEnd(new Date(e.target.value).toISOString().split('T')[0])
        onChange(start, new Date(e.target.value).toISOString().split('T')[0])
    }

    return (
        <div className='w-full'>
            <p className='text-xl font-bold mb-2'>Pick a date range:</p>
            <div>
                <label className='block text-xl'>Start</label>
                <input type="date" className='outline-none w-full text-2xl my-2 p-2 rounded-md bg-zinc-100' value={start} min={MIN} max={MAX} onChange={handleStartChange} />
            </div>
            <label className='block text-xl'>End</label>
            <input type="date" className='outline-none w-full text-2xl my-2 p-2 rounded-md bg-zinc-100' value={end} min={MIN} max={MAX} onChange={handleEndChange} />
        </div>
    )
}

export default DatePicker