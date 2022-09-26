import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import One from '../public/1.png';
import Three from '../public/9.png';
import Four from '../public/4.png';
import Five from '../public/5.png';
import Six from '../public/6.png';
import Seven from '../public/7.png';
import Eight from '../public/8.png';
import Nine from '../public/9.png';
import { useState, useEffect } from 'react';
import Eleven from '../public/11.png';
import Twelve from '../public/12.png';
import Thirteen from '../public/13.png';


export default function Home() {


  const [image, setImage] = useState(Three);
  const [text, setText] = useState();
  const [show, setShow] = useState(false);
  const [start, setStart] = useState(false);

  const images_arr = [
  { image: One, text: "Sie kennen Grundbedürfnis, Wahlbedürfnis, Individualbedürfnis und Kollektivbedürfnis voneinander unterscheiden." },
  { image: Three, text: "Sie können die Entstehung eines Vertrages erklären." },
  { image: Four, text: "Sie kennen vier Vertragsformen nennen."},
  { image: Five, text: "Sie können drei Vertragsarten mit Rücktrittsrecht nennen." },
  { image: Six, text: "Sie können das Vorgehen bei Lieferverzug und die rechtlichen Möglichkeiten bei Zahlungsverzug aufzählen."},
  { image: Seven, text: "Sie kennen drei Forderungsmöglichkeiten, die ein Käufer hat, wenn mangelhafte Ware zugestellt wird, aufzählen."},
  { image: Eight, text: "Sie können für Debit- und Kreditkarten die Unterschiede be- züglich Einsatzmöglichkeiten und Funktionsweise erklären."},
  { image: Nine, text: "Sie können je einen Vor- und Nachteil des Barkaufs, Kredit- kaufs und des Leasings aufzählen."},
  { image: Eleven, text: "Sie können den einfachen Wirtschaftskreislauf aufzeichnen."},
  { image: Twelve, text: "Sie können die Auswirkung von Veränderungen von Angebot und Nachfrage auf den Preis erklären."},
  { image: Thirteen, text: "Sie können die Begriffe BIP und Volkseinkommen definieren."},

]

function startF() {
  setStart(true)

  const min = 0;
  const max = images_arr.length - 1;
  const rand = min + Math.random() * (max - min);

  console.log(rand)

  setShow(false)
if (rand <= max) {
  setImage(images_arr[Math.round(rand)].image)
  setText(images_arr[Math.round(rand)].text)

}


}



  function randomNumber() {

    const min = 0;
    const max = images_arr.length - 1;
    const rand = min + Math.random() * (max - min);

    console.log(rand)

    setShow(false)
  if (rand <= max) {
    setImage(images_arr[Math.round(rand)].image)
    setText(images_arr[Math.round(rand)].text)
  }

  }

  function showImage() {

    if (show == false) {
      setShow(true)
    } else {
      setShow(false)
    }
   

  }


  return (
    <body className="flex justify-center h-screen text-gray-50 bg-gradient-to-b from-slate-900 to-stone-900 ">
    {start ? (
 
      <div className='grid mx-10'>
<div className="flex justify-center">
      <h1 className="text-4xl text font-bold mt-20 " >Abu Grundwissen</h1>

      </div>
    


<div>
<h2 className='text-2xl'>{text}</h2>

{show ? (
  <div className='mt-5 mb-5 w-full rounded-xl bg-slate-800 flex justify-center'>
  <Image className="bg-slate-800 w-50  rounded-lg" onClick={() => showImage()} src={image}/>
  </div>
):(
  <div onClick={() => showImage()} className='bg-slate-800 h-96 mt-5 mb-5 w-full rounded-xl grid place-content-center'>
    <p>click to show</p>
  

  </div>
) }
<div className='flex justify-center'>
<button onClick={() => randomNumber()} className=" bg-sky-500 hover:bg-sky-700  px-4 py-1 rounded-md text-2xl font-medium text-gray-50">Next</button>
</div>
</div>

</div>
   
  
    ):(
      <div className='grid'>
      <h1 className="text-4xl text font-bold mt-20 " >Abu Grundwissen</h1>
      <div className='flex justify-center'>
      <button onClick={() => startF()} className="bg-sky-500 hover:bg-sky-700 h-12  px-4 py-1 rounded-md text-2xl font-medium text-gray-50">Start</button>
</div>
</div>
    )}
    </body>
  )
}
