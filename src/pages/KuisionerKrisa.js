import React, { useState } from 'react' //useEffect
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Navigasi from '../components/Navigasi'
import Background from '../components/Background'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default function KuisionerKrisa() {

    const [jawaban, setJawaban] = useState('')

  async function handlerSubmit(e){
    e.preventDefault()
    await axios.post
  }

  return (
    <div>
        <Navigasi/>
        <Background/>
        <div className="lg:px-28 lg:pt-24 lg:flex lg:flex-col lg:gap-10">
            <div className="lg:flex">
                <h1 className="lg:py-3 lg:w-[4rem] lg:border-b-[0.2rem] lg:border-[#0F172A] lg:text-[#0F172A] lg:text-3xl lg:font-semibold">Kuisioner</h1>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Tuliskan Kritik dan Saran Anda</FormLabel>
                <Box component="form" sx={{'& > :not(style)': { m: 1, width: '120ch' }}} noValidate autoComplete="off">
                  <TextField id="outlined-basic" label="Kritik dan Saran" variant="outlined" onChange={e => setJawaban(e.target.value)} value={jawaban} />
                </Box>
              </FormControl>
            </div>
            <button onClick={e => handlerSubmit(e)} className='lg:w-max lg:px-7 lg:py-3 lg:bg-[#0F172A] lg:rounded-md lg:shadow-md lg:text-poppins lg:font-medium lg:text-gray-200 lg:duration-300 lg:hover:duration-300 lg:hover:bg-[#1c2946]'>
              <Link to="/">Selesai</Link>
            </button>
          </div>
    </div>
  )
}