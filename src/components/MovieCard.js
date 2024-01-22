import React from 'react'
import { POSTER_IMG } from '../utils/constants'

export default function MovieCard({posterPath}) {
   
    if(!posterPath) return null
  return (
    <div className=' py-1'>
        <img className="w-[160px] p-0 md:w-[180px] pr-2 " src={POSTER_IMG+posterPath}></img>
    </div>
  )
}
