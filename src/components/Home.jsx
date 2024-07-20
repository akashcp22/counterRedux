import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,incrementByAmount } from './redux/counterSlice'
function Home() {
  const [amnt,setAmnt]=useState()
  const dispatch=useDispatch()
  const count=useSelector((state)=>state.counterReducer.count)
  return (
    <>

    <div className=' container bg-light w-100'>
        <div className='bg-white border border-primary border-2 shadow w-50 justify-content-center align-items-center'>
            <h3 className='text-center text-dark'>Counter app</h3>
            <h4 className='text-center text-info'>{count}</h4>
            <div className='d-flex justify-content-between mt-4'>
                <div className="ms-4 btn btn-success"onClick={()=>{dispatch(increment())}}>Increment</div>
                <div className="btn btn-dark"onClick={()=>{dispatch(reset())}}>Reset</div>
                <div className="me-4 btn btn-danger"onClick={()=>{dispatch(decrement())}}>Decrement</div>
            </div>
            
            <div className='mt-5 container text-center' >
              <input type="text" placeholder='enter amount to increment' onChange={(e)=>{setAmnt(e.target.value)}} />
              <button className='btn btn-secondary'onClick={()=>dispatch(incrementByAmount(Number(amnt)))}>Add</button>
            </div>

        </div>
        
    </div>
    </>
  )
}

export default Home
