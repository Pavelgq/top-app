import axios, { AxiosResponse } from 'axios'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'

import { Htag, Rating, Button, Ptag, Tag } from '../components'
import { MenuItem } from '../interfaces/menu.interface'
import { withLayout } from '../layout/Layout'


function Home({menu, firstCategory} : HomeProps) : JSX.Element {

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
      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<any, AxiosResponse<MenuItem[]>>(process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find', {firstCategory});
  return {
    props: {
      menu,
      firstCategory
    }
  }
}


interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}