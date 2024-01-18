import React from 'react'
import { POSTER_IMG } from '../utils/constants'

export default function MovieCard({posterPath}) {
  return (
    <div>
        <img className="w-[180px] pr-2 " src={POSTER_IMG+posterPath}></img>
    </div>
  )
}
