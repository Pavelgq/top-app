import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'

import { Htag, Rating, Button, Ptag } from '../components'


export default function Home() {

  const [state, setstate] = useState<number>(1)

  return (
    <>
      <Htag tag='h1'>Title</Htag>
      <Rating isEditable={true} rating={state} setRating={setstate}></Rating>
      <Button appearence='primary' arrow = 'right'>Push me</Button>
      <Button appearence='ghost' arrow='down'>Push me</Button>
      <Ptag size='m'>Paragraph</Ptag>
    </>
  )
}
