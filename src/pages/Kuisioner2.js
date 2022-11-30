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
// import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Kuisioner2() {

  const [jawaban1, setJawaban1] = useState('')
  const [jawaban2, setJawaban2] = useState('')
  const [jawaban3, setJawaban3] = useState('')
  const [jawaban4, setJawaban4] = useState('')
  const [jawaban5, setJawaban5] = useState('')
  const [jawaban6, setJawaban6] = useState('')
  const [jawaban7, setJawaban7] = useState('')
  const [jawaban8, setJawaban8] = useState('')
  const [jawaban9, setJawaban9] = useState('')
  const [jawaban10, setJawaban10] = useState('')
  const [jawaban11, setJawaban11] = useState('')
  const [jawaban12, setJawaban12] = useState('')
  const [jawaban13, setJawaban13] = useState('')
  const [jawaban14, setJawaban14] = useState('')
  const [jawaban15, setJawaban15] = useState('')
  const [jawaban16, setJawaban16] = useState('')
  const [jawaban17, setJawaban17] = useState('')
  const [jawaban18, setJawaban18] = useState('')
  const [jawaban19, setJawaban19] = useState('')
  const [jawaban20, setJawaban20] = useState('')

  async function handlerSubmit(e){
    e.preventDefault()
  }

  return (
    <div className='lg:pb-24'>
        <Navigasi/>
        <Background/>
        <div className="lg:px-28 lg:pt-24 lg:flex lg:flex-col lg:gap-10">
            <div className="lg:flex">
                <h1 className="lg:py-3 lg:w-[4rem] lg:border-b-[0.2rem] lg:border-[#0F172A] lg:text-[#0F172A] lg:text-3xl lg:font-semibold">Kuisioner</h1>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Tempat parkir yang memadai</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban1(e.target.value)} value="Sangat Penting" control={<Radio />} label="Sangat Penting" />
                  <FormControlLabel onChange={e => setJawaban1(e.target.value)} value="Penting" control={<Radio />} label="Penting" />
                  <FormControlLabel onChange={e => setJawaban1(e.target.value)} value="Cukup Penting" control={<Radio />} label="Cukup Penting" />
                  <FormControlLabel onChange={e => setJawaban1(e.target.value)} value="Tidak Penting" control={<Radio />} label="Tidak Penting" />
                  <FormControlLabel onChange={e => setJawaban1(e.target.value)} value="Sangat Tidak Penting" control={<Radio />} label="Sangat Tidak Penting" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Ruang tunggu yang nyaman</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban2(e.target.value)} value="Sangat Penting" control={<Radio />} label="Sangat Penting" />
                  <FormControlLabel onChange={e => setJawaban2(e.target.value)} value="Penting" control={<Radio />} label="Penting" />
                  <FormControlLabel onChange={e => setJawaban2(e.target.value)} value="Cukup Penting" control={<Radio />} label="Cukup Penting" />
                  <FormControlLabel onChange={e => setJawaban2(e.target.value)} value="Tidak Penting" control={<Radio />} label="Tidak Penting" />
                  <FormControlLabel onChange={e => setJawaban2(e.target.value)} value="Sangat Tidak Penting" control={<Radio />} label="Sangat Tidak Penting" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Ruang Training yang memadai dan nyaman</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban3(e.target.value)} value="Sangat Penting" control={<Radio />} label="Sangat Penting" />
                  <FormControlLabel onChange={e => setJawaban3(e.target.value)} value="Penting" control={<Radio />} label="Penting" />
                  <FormControlLabel onChange={e => setJawaban3(e.target.value)} value="Cukup Penting" control={<Radio />} label="Cukup Penting" />
                  <FormControlLabel onChange={e => setJawaban3(e.target.value)} value="Tidak Penting" control={<Radio />} label="Tidak Penting" />
                  <FormControlLabel onChange={e => setJawaban3(e.target.value)} value="Sangat Tidak Penting" control={<Radio />} label="Sangat Tidak Penting" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Adanya fasilitas lain seperti mushola,toilet,penitipan barang</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban4(e.target.value)} value="Sangat Penting" control={<Radio />} label="Sangat Penting" />
                  <FormControlLabel onChange={e => setJawaban4(e.target.value)} value="Penting" control={<Radio />} label="Penting" />
                  <FormControlLabel onChange={e => setJawaban4(e.target.value)} value="Cukup Penting" control={<Radio />} label="Cukup Penting" />
                  <FormControlLabel onChange={e => setJawaban4(e.target.value)} value="Tidak Penting" control={<Radio />} label="Tidak Penting" />
                  <FormControlLabel onChange={e => setJawaban4(e.target.value)} value="Sangat Tidak Penting" control={<Radio />} label="Sangat Tidak Penting" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Lokasi yang mudah dijangkau/strategis </FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban5(e.target.value)} value="Sangat Penting" control={<Radio />} label="Sangat Penting" />
                  <FormControlLabel onChange={e => setJawaban5(e.target.value)} value="Penting" control={<Radio />} label="Penting" />
                  <FormControlLabel onChange={e => setJawaban5(e.target.value)} value="Cukup Penting" control={<Radio />} label="Cukup Penting" />
                  <FormControlLabel onChange={e => setJawaban5(e.target.value)} value="Tidak Penting" control={<Radio />} label="Tidak Penting" />
                  <FormControlLabel onChange={e => setJawaban5(e.target.value)} value="Sangat Tidak Penting" control={<Radio />} label="Sangat Tidak Penting" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Keramahan dan kesabaran personil dalam memberikan pelayanan</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban6(e.target.value)} value="Sangat Penting" control={<Radio />} label="Sangat Penting" />
                  <FormControlLabel onChange={e => setJawaban6(e.target.value)} value="Penting" control={<Radio />} label="Penting" />
                  <FormControlLabel onChange={e => setJawaban6(e.target.value)} value="Cukup Penting" control={<Radio />} label="Cukup Penting" />
                  <FormControlLabel onChange={e => setJawaban6(e.target.value)} value="Tidak Penting" control={<Radio />} label="Tidak Penting" />
                  <FormControlLabel onChange={e => setJawaban6(e.target.value)} value="Sangat Tidak Penting" control={<Radio />} label="Sangat Tidak Penting" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Pengetahuan personil yang sesuai dan dapat diandalkan</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban7(e.target.value)} value="Sangat Penting" control={<Radio />} label="Sangat Penting" />
                  <FormControlLabel onChange={e => setJawaban7(e.target.value)} value="Penting" control={<Radio />} label="Penting" />
                  <FormControlLabel onChange={e => setJawaban7(e.target.value)} value="Cukup Penting" control={<Radio />} label="Cukup Penting" />
                  <FormControlLabel onChange={e => setJawaban7(e.target.value)} value="Tidak Penting" control={<Radio />} label="Tidak Penting" />
                  <FormControlLabel onChange={e => setJawaban7(e.target.value)} value="Sangat Tidak Penting" control={<Radio />} label="Sangat Tidak Penting" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Prosedur pendaftaran anggota baru yang mudah dan cepat</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban8(e.target.value)} value="Sangat Penting" control={<Radio />} label="Sangat Penting" />
                  <FormControlLabel onChange={e => setJawaban8(e.target.value)} value="Penting" control={<Radio />} label="Penting" />
                  <FormControlLabel onChange={e => setJawaban8(e.target.value)} value="Cukup Penting" control={<Radio />} label="Cukup Penting" />
                  <FormControlLabel onChange={e => setJawaban8(e.target.value)} value="Tidak Penting" control={<Radio />} label="Tidak Penting" />
                  <FormControlLabel onChange={e => setJawaban8(e.target.value)} value="Sangat Tidak Penting" control={<Radio />} label="Sangat Tidak Penting" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Ketersediaan produk-produk yang sedang ditawarkan dibrosur </FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban9(e.target.value)} value="Sangat Penting" control={<Radio />} label="Sangat Penting" />
                  <FormControlLabel onChange={e => setJawaban9(e.target.value)} value="Penting" control={<Radio />} label="Penting" />
                  <FormControlLabel onChange={e => setJawaban9(e.target.value)} value="Cukup Penting" control={<Radio />} label="Cukup Penting" />
                  <FormControlLabel onChange={e => setJawaban9(e.target.value)} value="Tidak Penting" control={<Radio />} label="Tidak Penting" />
                  <FormControlLabel onChange={e => setJawaban9(e.target.value)} value="Sangat Tidak Penting" control={<Radio />} label="Sangat Tidak Penting" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Ketersediaan produk-produk yang tidak ditawarkan dibrosur</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban10(e.target.value)} value="Sangat Penting" control={<Radio />} label="Sangat Penting" />
                  <FormControlLabel onChange={e => setJawaban10(e.target.value)} value="Penting" control={<Radio />} label="Penting" />
                  <FormControlLabel onChange={e => setJawaban10(e.target.value)} value="Cukup Penting" control={<Radio />} label="Cukup Penting" />
                  <FormControlLabel onChange={e => setJawaban10(e.target.value)} value="Tidak Penting" control={<Radio />} label="Tidak Penting" />
                  <FormControlLabel onChange={e => setJawaban10(e.target.value)} value="Sangat Tidak Penting" control={<Radio />} label="Sangat Tidak Penting" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Ketersediaan produk-produk premium</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban11(e.target.value)} value="Sangat Penting" control={<Radio />} label="Sangat Penting" />
                  <FormControlLabel onChange={e => setJawaban11(e.target.value)} value="Penting" control={<Radio />} label="Penting" />
                  <FormControlLabel onChange={e => setJawaban11(e.target.value)} value="Cukup Penting" control={<Radio />} label="Cukup Penting" />
                  <FormControlLabel onChange={e => setJawaban11(e.target.value)} value="Tidak Penting" control={<Radio />} label="Tidak Penting" />
                  <FormControlLabel onChange={e => setJawaban11(e.target.value)} value="Sangat Tidak Penting" control={<Radio />} label="Sangat Tidak Penting" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Ketersediaan produk-produk insentif/hadiah</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban12(e.target.value)} value="Sangat Penting" control={<Radio />} label="Sangat Penting" />
                  <FormControlLabel onChange={e => setJawaban12(e.target.value)} value="Penting" control={<Radio />} label="Penting" />
                  <FormControlLabel onChange={e => setJawaban12(e.target.value)} value="Cukup Penting" control={<Radio />} label="Cukup Penting" />
                  <FormControlLabel onChange={e => setJawaban12(e.target.value)} value="Tidak Penting" control={<Radio />} label="Tidak Penting" />
                  <FormControlLabel onChange={e => setJawaban12(e.target.value)} value="Sangat Tidak Penting" control={<Radio />} label="Sangat Tidak Penting" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Keakuratan dan kecepatan dalam penginputan dikasir</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban13(e.target.value)} value="Sangat Penting" control={<Radio />} label="Sangat Penting" />
                  <FormControlLabel onChange={e => setJawaban13(e.target.value)} value="Penting" control={<Radio />} label="Penting" />
                  <FormControlLabel onChange={e => setJawaban13(e.target.value)} value="Cukup Penting" control={<Radio />} label="Cukup Penting" />
                  <FormControlLabel onChange={e => setJawaban13(e.target.value)} value="Tidak Penting" control={<Radio />} label="Tidak Penting" />
                  <FormControlLabel onChange={e => setJawaban13(e.target.value)} value="Sangat Tidak Penting" control={<Radio />} label="Sangat Tidak Penting" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Prosedur dan proses pembayaran dan pengajuan kredit yang mudah </FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban14(e.target.value)} value="Sangat Penting" control={<Radio />} label="Sangat Penting" />
                  <FormControlLabel onChange={e => setJawaban14(e.target.value)} value="Penting" control={<Radio />} label="Penting" />
                  <FormControlLabel onChange={e => setJawaban14(e.target.value)} value="Cukup Penting" control={<Radio />} label="Cukup Penting" />
                  <FormControlLabel onChange={e => setJawaban14(e.target.value)} value="Tidak Penting" control={<Radio />} label="Tidak Penting" />
                  <FormControlLabel onChange={e => setJawaban14(e.target.value)} value="Sangat Tidak Penting" control={<Radio />} label="Sangat Tidak Penting" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Pelaksanaan training </FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban15(e.target.value)} value="Sangat Penting" control={<Radio />} label="Sangat Penting" />
                  <FormControlLabel onChange={e => setJawaban15(e.target.value)} value="Penting" control={<Radio />} label="Penting" />
                  <FormControlLabel onChange={e => setJawaban15(e.target.value)} value="Cukup Penting" control={<Radio />} label="Cukup Penting" />
                  <FormControlLabel onChange={e => setJawaban15(e.target.value)} value="Tidak Penting" control={<Radio />} label="Tidak Penting" />
                  <FormControlLabel onChange={e => setJawaban15(e.target.value)} value="Sangat Tidak Penting" control={<Radio />} label="Sangat Tidak Penting" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Pelaksanaan AD/ADC forum</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban16(e.target.value)} value="Sangat Penting" control={<Radio />} label="Sangat Penting" />
                  <FormControlLabel onChange={e => setJawaban16(e.target.value)} value="Penting" control={<Radio />} label="Penting" />
                  <FormControlLabel onChange={e => setJawaban16(e.target.value)} value="Cukup Penting" control={<Radio />} label="Cukup Penting" />
                  <FormControlLabel onChange={e => setJawaban16(e.target.value)} value="Tidak Penting" control={<Radio />} label="Tidak Penting" />
                  <FormControlLabel onChange={e => setJawaban16(e.target.value)} value="Sangat Tidak Penting" control={<Radio />} label="Sangat Tidak Penting" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Informasi tentang tawaran,training,pertemuan yang cepat dan akurat</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel onChange={e => setJawaban17(e.target.value)} value="Sangat Penting" control={<Radio />} label="Sangat Penting" />
                  <FormControlLabel onChange={e => setJawaban17(e.target.value)} value="Penting" control={<Radio />} label="Penting" />
                  <FormControlLabel onChange={e => setJawaban17(e.target.value)} value="Cukup Penting" control={<Radio />} label="Cukup Penting" />
                  <FormControlLabel onChange={e => setJawaban17(e.target.value)} value="Tidak Penting" control={<Radio />} label="Tidak Penting" />
                  <FormControlLabel onChange={e => setJawaban17(e.target.value)} value="Sangat Tidak Penting" control={<Radio />} label="Sangat Tidak Penting" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Jenis produk apa saja yang paling banyak anda jual</FormLabel>
                <Box component="form" sx={{'& > :not(style)': { m: 1, width: '50ch' }}} noValidate autoComplete="off">
                  <TextField id="outlined-basic" label="Nama Produk" variant="outlined" onChange={e => setJawaban18(e.target.value)} value={jawaban18}/>
                </Box>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Jenis produk apa yang belum pernah anda jual, berikan alasan anda</FormLabel>
                <Box component="form" sx={{'& > :not(style)': { m: 1, width: '50ch' }}} noValidate autoComplete="off">
                  <TextField id="outlined-basic" label="Alasan Anda" variant="outlined" onChange={e => setJawaban19(e.target.value)} value={jawaban19}/>
                </Box>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Jika ada produk baru, produk apa yang anda inginkan</FormLabel>
                <Box component="form" sx={{'& > :not(style)': { m: 1, width: '50ch' }}} noValidate autoComplete="off">
                  <TextField id="outlined-basic" label="Produk Lainnya" variant="outlined" onChange={e => setJawaban20(e.target.value)} value={jawaban20}/>
                </Box>
              </FormControl>
            </div>
            <button onClick={e => handlerSubmit(e)} className='lg:w-max lg:px-7 lg:py-3 lg:bg-[#0F172A] lg:rounded-md lg:shadow-md lg:text-poppins lg:font-medium lg:text-gray-200 lg:duration-300 lg:hover:duration-300 lg:hover:bg-[#1c2946]'>
              <Link to="/kuisioner/3">Selanjutnya</Link>
            </button>
          </div>
    </div>
  )
}