import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'

import { Htag, Rating } from '../components'


export default function Home() {

  const [state, setstate] = useState<number>(1)

  return (
    <>
      <Htag tag='h1'>Title</Htag>
      <Rating isEditable={true} rating={state} setRating={setstate}></Rating>
    </>
  )
}
