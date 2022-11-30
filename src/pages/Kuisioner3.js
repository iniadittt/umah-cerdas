import React from 'react' //, { useState, useEffect }
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Navigasi from '../components/Navigasi'
import Background from '../components/Background'
import { Link } from 'react-router-dom'
// import axios from 'axios'


export default function Kuisioner3() {



  function handlerSubmit(e){
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
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai fasilitas tempat parkir dilokasi Avon Cabang Cirebon</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai fasilitas tempat parkir dilokasi Saralie (kosmetik lain)</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai fasilitas tempat parkir dilokasi Sophie Martin</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>


            
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai fasilitas ruang tunggu dilokasi Avon Cabang Cirebon</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai fasilitas ruang tunggu dilokasi Saralie (kosmetik lain)</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai fasilitas ruang tunggu dilokasi Sophie Martin</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>



            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai fasilitas ruang training dilokasi Avon Cabang Cirebon</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai fasilitas ruang training dilokasi Saralie (kosmetik lain)</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai fasilitas ruang training dilokasi Sophie Martin</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>



            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai fasilitas lain seperti mushola, toilet, penitipan barang dilokasi Avon Cabang Cirebon</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai fasilitas lain seperti mushola, toilet, penitipan barang dilokasi Saralie (kosmetik lain)</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai fasilitas lain seperti mushola, toilet, penitipan barang dilokasi Sophie Martin</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>


            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai kemudahan menuju lokasi Avon Cabang Cirebon</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai kemudahan menuju lokasi Saralie (kosmetik lain)</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai kemudahan menuju lokasi Sophie Martin</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>


            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai keramahan dan kesabaran personil dalam memberikan layanan dilokasi Avon Cabang Cirebon</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai keramahan dan kesabaran personil dalam memberikan layanan dilokasi Saralie (kosmetik lain)</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai keramahan dan kesabaran personil dalam memberikan layanan dilokasi Sophie Martin</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>


            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai pengetahuan personil dalam melayani anda (bagian administrasi, gudang, komputer, training) dilokasi Avon Cabang Cirebon</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai pengetahuan personil dalam melayani anda (bagian administrasi, gudang, komputer, training) dilokasi Saralie (kosmetik lain)</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai pengetahuan personil dalam melayani anda (bagian administrasi, gudang, komputer, training) dilokasi Sophie Martin</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>


            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai prosedur pendaftaran anggota baru dilokasi Avon Cabang Cirebon</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai prosedur pendaftaran anggota baru dilokasi Saralie (kosmetik lain)</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai prosedur pendaftaran anggota baru dilokasi Sophie Martin</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>


            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai ketersediaan produk-produk yang sedang ditawarkan dibrosur pada lokasi Avon Cabang Cirebon</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai ketersediaan produk-produk yang sedang ditawarkan dibrosur pada lokasi Saralie (kosmetik lain)</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai ketersediaan produk-produk yang sedang ditawarkan dibrosur pada lokasi Sophie Martin</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>


            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai ketersediaan produk-produk yang tidak ditawarkan dibrosur pada lokasi Avon Cabang Cirebon</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai ketersediaan produk-produk yang tidak ditawarkan dibrosur pada lokasi Saralie (kosmetik lain)</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai ketersediaan produk-produk yang tidak ditawarkan dibrosur pada lokasi Sophie Martin</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>


            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai ketersediaan produk-produk premium dilokasi Avon Cabang Cirebon</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai ketersediaan produk-produk premium dilokasi Saralie (kosmetik lain)</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai ketersediaan produk-produk premium dilokasi Sophie Martin</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>


            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai ketersediaan produk-produk insetif/hadiah dilokasi Avon Cabang Cirebon</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai ketersediaan produk-produk insetif/hadiah dilokasi Saralie (kosmetik lain)</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai ketersediaan produk-produk insetif/hadiah dilokasi Sophie Martin</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>


            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai keakuratan dan kecepatan dalam penginputan dikasir dilokasi Avon Cabang Cirebon</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai keakuratan dan kecepatan dalam penginputan dikasir dilokasi Saralie (kosmetik lain)</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai keakuratan dan kecepatan dalam penginputan dikasir dilokasi Sophie Martin</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>


            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai prosedur dan proses pembayaran dan pengengajuan kredit dilokasi Avon Cabang Cirebon</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai prosedur dan proses pembayaran dan pengengajuan kredit dilokasi Saralie (kosmetik lain)</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai prosedur dan proses pembayaran dan pengengajuan kredit dilokasi Sophie Martin</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>


            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai pelaksanaan training dilokasi Avon Cabang Cirebon</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai pelaksanaan training dilokasi Saralie (kosmetik lain)</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai pelaksanaan training dilokasi Sophie Martin</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>


            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai AD/ADC Forum dilokasi Avon Cabang Cirebon</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai AD/ADC Forum dilokasi Saralie (kosmetik lain)</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai AD/ADC Forum dilokasi Sophie Martin</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>


            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai pemberian informasi tentang tawaran, training, pertemuan yang diadakan dilokasi Avon Cabang Cirebon</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai pemberian informasi tentang tawaran, training, pertemuan yang diadakan dilokasi Saralie (kosmetik lain)</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" sx={{fontFamily: 'Poppins', fontSize: '1.2rem', color: '#222', mb: 1}}>Penilaian anda mengenai pemberian informasi tentang tawaran, training, pertemuan yang diadakan dilokasi Sophie Martin</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="undefined" name="radio-buttons-group">
                  <FormControlLabel value="Sangat Baik" control={<Radio />} label="Sangat Baik" />
                  <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
                  <FormControlLabel value="Cukup Baik" control={<Radio />} label="Cukup Baik" />
                  <FormControlLabel value="Buruk" control={<Radio />} label="Buruk" />
                  <FormControlLabel value="Sangat Buruk" control={<Radio />} label="Sangat Buruk" />
                </RadioGroup>
              </FormControl>
            </div>
            <button onClick={e => handlerSubmit(e)} className='lg:w-max lg:px-7 lg:py-3 lg:bg-[#0F172A] lg:rounded-md lg:shadow-md lg:text-poppins lg:font-medium lg:text-gray-200 lg:duration-300 lg:hover:duration-300 lg:hover:bg-[#1c2946]'>
              <Link to="/kuisioner/4">Selanjutnya</Link>
            </button>
          </div>
    </div>
  )
}