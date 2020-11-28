import styles from '../styles/Home.module.css'
import React from 'react'
import { Container, Button} from '@material-ui/core'
import TextForm from './components/textform.jsx'


export default function Home() {
  return (
       <Container variant="contained" maxWidth="sm">
         <TextForm />
       </Container>
  );
}
