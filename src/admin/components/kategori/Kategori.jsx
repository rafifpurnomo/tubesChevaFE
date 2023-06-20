import React from 'react'
import './Kategori.css'
import { Icon } from '@iconify/react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function Kategori() {
  var [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/getkategori", {
      headers: {
          'Content-Type': 'application/json'
      }
  }).then((response) => {
      setData(response.data)
    });
  },[]);
 
  
  return (
    <div>
        <div className='addIcon'>
            <a href="/AddKategori"><Icon icon="icon-park-outline:add"/></a>
        </div>
        <div className="containerTampilan">
        {
          data.map((kategori,index) =>{
            return <a
              key={index}
              href={'/DetailKategori/'+index}
              className='tampilanData'>
                {kategori.kategori}
              
            </a>
          })
        }
          
        </div>
    </div>
  )
}

export default Kategori