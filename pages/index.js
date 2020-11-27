import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './components/header.js'
import Footer from './components/footer.js'
import React from 'react'
import { Container} from '@material-ui/core'
import TextInput from './components/textinput.js'
import { red } from '@material-ui/core/colors'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo List</title>
        <link rel="icon" href="https://www.flaticon.com/svg/static/icons/svg/3014/3014777.svg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <Header> </Header>
      <main className={styles.main}>
      <div >
       <Container  maxWidth="lg">
         <TextInput />
       </Container>
      </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
