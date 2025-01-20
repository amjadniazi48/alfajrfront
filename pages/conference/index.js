import React from 'react'
import Image from 'next/image'
function conference() {
  return (
    <>
    <div style={{backgroundColor:'#f5f5f5', alignContent:'center', justifyContent:'center', display:'flex', flexDirection:'column', alignItems:'center', padding:"20px"}}>
        <Image src="https://res.cloudinary.com/dh6yabuea/image/upload/v1737394293/conf_1_70a5f4a9ac.jpg" alt="whatsapp"
         width={700} height={1000}/>

    </div>
     <div style={{backgroundColor:'#f5f5f5', alignContent:'center', justifyContent:'center', display:'flex', flexDirection:'column', alignItems:'center', padding:"20px"}}>
     <Image src="https://res.cloudinary.com/dh6yabuea/image/upload/v1737394293/conf_2_8e8b8294c1.jpg" alt="whatsapp"
      width={700} height={1000}/>

 </div>
 <div style={{backgroundColor:'#f5f5f5', alignContent:'center', justifyContent:'center', display:'flex', flexDirection:'column', alignItems:'center', padding:"20px"}}>
     <Image src="https://res.cloudinary.com/dh6yabuea/image/upload/v1737394293/conf_3_dc81a4b056.jpg" alt="whatsapp"
      width={700} height={1000}/>

 </div>
 </>
  )
}

export default conference