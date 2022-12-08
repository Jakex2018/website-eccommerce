import React , {useState , useEffect} from 'react';
import '../../styles/Clock.css';
const Clock = () => {
    const[days , setDays] = useState();
    const[hours , setHours] = useState();
    const[minutes , setMinutes] = useState();
    const[seconds , setSeconds] = useState();

    let interval;
    const downClock = () =>{
        const destiny = new Date('Dec 10, 2022').getTime();
        interval = setInterval(()=>{
            const now = new Date().getTime()
            const diferent = destiny - now

            const days = Math.floor(diferent / (1000 * 60 * 60 *24))
            const hours = Math.floor(diferent % (1000 *60*60*24) / (1000 *60*60))
            const minutes = Math.floor(diferent % (1000 *60*60) / (1000*60))
            const seconds = Math.floor(diferent % (1000 *60) / 1000)

            if(destiny < 0) clearImmediate(interval.current)
            else{
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        });
    };

    useEffect(() => {
        downClock(); 
    });

    return (
        <div className="clock_content d-flex align-items-center gap-3">
            <div className="clock_data text-center">
                <h1 className='text-white fs-3'>{days}</h1>
                <h5 className='text-white fs-6'>Days</h5>
            </div>
            <span className='text-white fs-2'>:</span>

            <div className="text-center">
                <h1 className='text-white fs-3'>{hours}</h1>
                <h5 className='text-white fs-6'>Hours</h5>
            </div>
            <span className='text-white fs-2'>:</span>
            <div className="text-center">
                <h1 className='text-white fs-3'>{minutes}</h1>
                <h5 className='text-white fs-6'>Minutes</h5>
            </div>
            <div className="text-center">
                <h1 className='text-white fs-3'>{seconds}</h1>
                <h5 className='text-white fs-6'>Seconds</h5>
            </div>
        </div>
        
    );
}

export default Clock;
