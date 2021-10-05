import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import { Htag, Rating } from '../components'

export default function Home() {
  return (
    <>
      <Htag tag='h1'>Title</Htag>
      <Rating isEditable={true} rating={1}></Rating>
    </>
  )
}
