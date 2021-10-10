import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'

import { Htag, Rating, Button, Ptag, Tag } from '../components'
import { withLayout } from '../layout/Layout'


function Home() {

  const [state, setstate] = useState<number>(1)

  return (
    <>
      <Htag tag='h1'>Title</Htag>
      <Rating isEditable={true} rating={state} setRating={setstate}></Rating>
      <Button appearence='primary' arrow = 'right'>Push me</Button>
      <Button appearence='ghost' arrow='down'>Push me</Button>
      <Ptag size='s'>Paragraph</Ptag>
      <Ptag size='m'>Paragraph</Ptag>
      <Ptag size='l'>Paragraph</Ptag>
      <Tag size='m' href='#' color='red'>Tag 1</Tag>
      <Tag size='s' href='#' >Tag 2</Tag>
      <Tag size='m'  color='green'>Tag 3</Tag>
      <Tag size='s' href='#' color='gray'>Tag 4</Tag>
    </>
  )
}

export default withLayout(Home)
