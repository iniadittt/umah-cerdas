import React from 'react'

export default function Login() {
    return ( 
      <div className="flex flex-col flex-auto w-full h-screen">
        <div className="h-full">
          <div className="grid grid-cols-3 h-full">
            <div className="bg-blue-900 overflow-hidden">
              <img src="https://source.usplash.com/random/600x1000"/>
            </div>
            <div className="col-span-2 flex justify-center">
              <div className="min-w-[500] h-auto px-8 flex flex-col justify-center">
                <div className="mb-8">
                  <h1 className="text-3xl font-poppins">Selamat Datang</h1>
                </div>
                <div>
                  <form> {/* LOGIN FORM */}
                    <div className="mb-3">
                      <label className="font-poppins mb-2 flex">Username</label>
                      <input type="Username" placeholder="Masukkan Username Anda" className="w-full border rounded-md bg-transparent border-gray-400 p-3"/>
                    </div>
                    <div className="mb-3">
                      <label className="font-poppins mb-2 flex">Password</label>
                      <input type="password" placeholder="Masukkan Password Anda" className="w-full border rounded-md bg-transparent border-gray-400 p-3"/>
                    </div>
                    <div className="flex justify-between mb-6">
                      <label>
                        <input type="checkbox" className="mr-2" />
                        Ingat Saya
                      </label>
                      <span>Lupa Password?</span>                    
                    </div>
                    <button className="block bg-blue-700 hover:bg-blue-800 text-white w-full py-2 px rounded">Login</button>
                    <div className="mt-4 text-center">
                      Belum punya akun?
                      <span className="text-blue-700 cursor-pointer">Daftar</span>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}