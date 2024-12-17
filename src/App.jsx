
import { Stack, TextField, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {

    const [invalidPrinciple,setInvalidprinciple] = useState(false)

    const [invalidRate,setInvalidrate] = useState(false)

    const [invalidYear,setInvalidyear] = useState(false)

    const handleCalculate = (e)=>{
      e.preventDefault()
      if(principle && rate && year){
        setInterest(principle*rate*year/100)
      }else{
        alert("please fill the from completely")
      }
    }

    const handleReset = ()=>{
      setInterest(0)
      setYear(0)
      setRate(0)
      setPrinciple(0)
      setInvalidprinciple(false)
      setInvalidrate(false)
      setInvalidyear(false)
    }

    const [principle,setPrinciple] = useState(0)
    const [rate,setRate] = useState(0)
    const [year,setYear] = useState(0)
    const [interest,setInterest] = useState(0)

    const inputField = (tagName)=>{
      const {name,value} = tagName
      /* console.log(typeof name,value);
      console.log(!!value.match(/^\d+(\.\d+)?$/)); */
      if(name=='principle'){
        setPrinciple(value)
        if(!!value.match(/^\d+(\.\d+)?$/)){
          setInvalidprinciple(false)
        }else{
          setInvalidprinciple(true)
        }
      }else if(name=='rate'){
        setRate(value)
        if(!!value.match(/^\d+(\.\d+)?$/)){
          setInvalidrate(false)
        }else{
          setInvalidrate(true)
        }
      }else{
        setYear(value)
        if(!!value.match(/^\d+(\.\d+)?$/)){
          setInvalidyear(false)
        }else{
          setInvalidyear(true)
        }
      }

    }
  

  return (
    <>
    <div style={{width:"100%",minHeight:"100vh", backgroundColor:'red'}} className='d-flex justify-content-center align-items-center'>
    <div style={{width:"600px"}} className='bg-light rounded p-5'>
      <h1>Simple Interest Calculator</h1>
      <p className='text-info'>calculate your simple interest easily !!</p>
      <div className='bg-warning p-5 text-light text-center rounded'>
        <h1>₹{interest}</h1>
        <p>Total Simple Interest</p>
      </div>
      <form className='mt-4'>
        <div>
        <TextField value={principle || ""} name='principle' onChange={(e)=>inputField(e.target)} id="outlined-principle" label="Principle" variant="outlined" className='w-100'/>
        </div>

        {/* Inavlid principle */}

        { 
            invalidPrinciple && 
          <div className='mb-3 text-danger'>
        Invalid principle Amount !!
        </div>
        }

        <div className='mt-3'>
        <TextField value={rate || ""}  name='rate'
        onChange={(e)=>inputField(e.target)} id="outlined-rate" label="Rate" variant="outlined" className='w-100'/>
        </div>

        {/* Invalid Rate */}

        {
          invalidRate &&
          <div className='mb-3 text-danger'>
          Invalid Rate !!
        </div>}


        <div className='mt-3'>
        <TextField value={year || ""} name='Year' onChange={(e)=>inputField(e.target)} id="outlined-year" label="Year" variant="outlined" className='w-100'/>
        </div>

        {/* Invalid Year */}

        {
          invalidYear && 
          <div className='mb-3 text-danger'>
        Invalid Year !!
        </div>}

        <Stack direction="row" spacing={2}>
        <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} variant="contained" style={{width:"50%",height:"50px"}} className='mt-3'>Calculate</Button>
        <Button onClick={handleReset} variant="outlined" style={{width:"50%",height:"50px"}} className='mt-3'>Reset</Button>  
      </Stack>
      </form>
    </div>
    </div> 
    </>
  )
}

export default App
