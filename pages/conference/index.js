import React from 'react'
import Image from 'next/image'
function conference() {
  return (
    <div style={{backgroundColor:'#f5f5f5', alignContent:'center', justifyContent:'center', display:'flex', flexDirection:'column', alignItems:'center', padding:"20px"}}>
        <Image src="https://res.cloudinary.com/dh6yabuea/image/upload/conference.jpg" alt="whatsapp"
         width={700} height={1000}/>

    </div>
  )
}

export default conference