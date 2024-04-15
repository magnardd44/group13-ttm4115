'use client'

import { supabase } from "@/utils/supabase/client";
import Image from "next/image";


import { FcGoogle } from "react-icons/fc";




export default function Home() {

  const LogIn = async() => {

    try {
      await supabase.auth.signInWithOAuth({
        provider: 'google'
      });


    } catch (error) {
      
    }

  }


  const GetUser = async () => {
    try {
      const {data, error } = await supabase.auth.getUser();

      console.log(data);
      
    } catch (error) {
      console.error(error)
    }
  }


  const addNew = async () => {
    try {
      
      const {error} = await supabase.from('cars').insert({"plate_number": "testtest"})

      console.log(error)
    } catch (error) {
      console.error(error)
    }
  }


  const getCars = async () => {
    try {
      
      const {data, error} = await supabase.from('cars').select("*")

      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className="">
      <div className="h-14 w-full border flex justify-center items-center">
        <h1 className="font-semibold">Charger App</h1>  
      </div>
      
      <div className="z-10 h-screen w-full items-center justify-center font-mono text-sm flex flex-col gap-4 bg-gray-200">
        
        <button className="bg-white border-black border-2 flex flex-row justify-center items-center gap-2 px-4 py-2 text-2xl" onClick={LogIn}>Login with Google<FcGoogle /></button>



        <button className="bg-white border-black border-2 flex flex-row justify-center items-center gap-2 px-4 py-2 text-2xl" onClick={GetUser}>Get user</button>


        <button className="bg-white border-black border-2 flex flex-row justify-center items-center gap-2 px-4 py-2 text-2xl" onClick={addNew}>Insert car</button>



        <button className="bg-white border-black border-2 flex flex-row justify-center items-center gap-2 px-4 py-2 text-2xl" onClick={getCars}>Fetch cars</button>


      </div>
    </main>
  );
}
