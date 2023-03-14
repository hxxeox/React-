import React from 'react'
import Dialog from './Dialog'

export default function ThankyouDialog() {
  return (
    <Dialog 
        title={<h1 style={{color:'purple'}}>Thanks</h1>}
        description="Is is honor to meet you!" 
        button={<buttom style={{backgroundColor:"blue",color:"white",border:"1px solid black",padding:"3px 20px"}}>close</buttom>}
    />
  )
}
