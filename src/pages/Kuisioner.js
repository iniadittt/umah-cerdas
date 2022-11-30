import React, { useState, useEffect } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Navigasi from '../components/Navigasi'
import Background from '../components/Background'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Kuisioner() {

  const [jawaban1, setJawaban1] = useState('')
  const [jawaban2, setJawaban2] = useState('')
  const [jawaban3, setJawaban3] = useState('')
  const [jawaban4, setJawaban4] = useState('')
  const [jawaban5, setJawaban5] = useState('')
  const [jawaban6, setJawaban6] = useState('')


  const [jawaban3Text, setJawaban3Text] = useState('')
  const [jawaban5Text, setJawaban5Text] = useState('')

  const [lainnyaPekerjaan, setLainnyaPekerjaan] = useState('hidden')
  const [lainnyaBisnis, setLainnyaBisnis] = useState('hidden')

  useEffect(() => {
    if(jawaban3 === 'Lainnya'){
      setLainnyaPekerjaan('block')
    }else{
      setLainnyaPekerjaan('hidden')
    }
  },[jawaban3])

  useEffect(() => {
    if(jawaban5 === 'Lainnya'){
      setLainnyaBisnis('block')
    }else{
      setLainnyaBisnis('hidden')
    }
  },[jawaban5])

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
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Nama Responden</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban1(e.target.value)} value="AGC (Avon Group Coordinator)" control={<Radio />} label="AGC (Avon Group Coordinator)" />
                  <FormControlLabel onChange={e => setJawaban1(e.target.value)} value="ADC (Avon Diamond Club)" control={<Radio />} label="ADC (Avon Diamond Club)" />
                  <FormControlLabel onChange={e => setJawaban1(e.target.value)} value="AD (Avon Dealer)" control={<Radio />} label="AD (Avon Dealer)" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Lamanya bergabung dengan Avon</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban2(e.target.value)} value="< 6 Bulan" control={<Radio />} label="< 6 Bulan" />
                  <FormControlLabel onChange={e => setJawaban2(e.target.value)} value="< 2 Tahun" control={<Radio />} label="< 2 Tahun" />
                  <FormControlLabel onChange={e => setJawaban2(e.target.value)} value=">= 2 Tahun" control={<Radio />} label=">= 2 Tahun" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Pekerjaan anda</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban3(e.target.value)} value="Pegawai Negeri/BUMN" control={<Radio />} label="Pegawai Negeri/BUMN" />
                  <FormControlLabel onChange={e => setJawaban3(e.target.value)} value="Pegawai Swasta" control={<Radio />} label="Pegawai Swasta" />
                  <FormControlLabel onChange={e => setJawaban3(e.target.value)} value="Ibu Rumahtangga" control={<Radio />} label="Ibu Rumahtangga" />
                  <FormControlLabel onChange={e => setJawaban3(e.target.value)} value="Lainnya" control={<Radio />} label="Lainnya" />
                </RadioGroup>
                <Box component="form" sx={{'& > :not(style)': { m: 1, width: '50ch' }}} noValidate autoComplete="off" className={lainnyaPekerjaan}>
                  <TextField id="outlined-basic" label="Pekerjaan Anda" variant="outlined" onChange={e => setJawaban3Text(e.target.value)} value={jawaban3Text} />
                </Box>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Pendidikan terakhir Anda</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban4(e.target.value)} value="SD" control={<Radio />} label="SD" />
                  <FormControlLabel onChange={e => setJawaban4(e.target.value)} value="SLTP" control={<Radio />} label="SLTP" />
                  <FormControlLabel onChange={e => setJawaban4(e.target.value)} value="SLTA" control={<Radio />} label="SLTA" />
                  <FormControlLabel onChange={e => setJawaban4(e.target.value)} value="Diploma" control={<Radio />} label="Diploma" />
                  <FormControlLabel onChange={e => setJawaban4(e.target.value)} value="Perguruan Tinggi" control={<Radio />} label="Perguruan Tinggi" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Bisnis lain (Dirrect Selling) yang anda geluti sekarang</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban5(e.target.value)} value="Saralie" control={<Radio />} label="Saralie" />
                  <FormControlLabel onChange={e => setJawaban5(e.target.value)} value="Sophie Martin" control={<Radio />} label="Sophie Martin" />
                  <FormControlLabel onChange={e => setJawaban5(e.target.value)} value="Lainnya" control={<Radio />} label="Lainnya" />
                </RadioGroup>
                <Box component="form" sx={{'& > :not(style)': { m: 1, width: '50ch' }}} noValidate autoComplete="off" className={lainnyaBisnis}>
                  <TextField id="outlined-basic" label="Bisnis Lainnya" variant="outlined" onChange={e => setJawaban5Text(e.target.value)} value={jawaban5Text}/>
                </Box>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Rata-rata belanja produk Avon tiap bulan</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban6(e.target.value)} value="< Rp. 100.000" control={<Radio />} label="< Rp. 100.000" />
                  <FormControlLabel onChange={e => setJawaban6(e.target.value)} value="< Rp. 500.000" control={<Radio />} label="< Rp. 500.000" />
                  <FormControlLabel onChange={e => setJawaban6(e.target.value)} value=">= Rp. 1.000.000" control={<Radio />} label=">= Rp. 1.000.000" />
                </RadioGroup>
              </FormControl>
            </div>
            <button onClick={e => handlerSubmit(e)} className='lg:w-max lg:px-7 lg:py-3 lg:bg-[#0F172A] lg:rounded-md lg:shadow-md lg:text-poppins lg:font-medium lg:text-gray-200 lg:duration-300 lg:hover:duration-300 lg:hover:bg-[#1c2946]'>
              <Link to="/kuisioner/2">Selanjutnya</Link>
            </button>
          </div>
    </div>
  )
}