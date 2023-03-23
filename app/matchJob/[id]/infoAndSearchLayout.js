import React from 'react'
import Image from 'next/image'
import styles from './searchJob.module.css'
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdWorkHistory } from "react-icons/md";
import Link from 'next/link';

export default function InfoAndSearchLayout(props) {
  const { image, rubrik, titel, info, type, days, link } = props

  return (
    <div className={styles.infoAndSearchContainer}>
      <div className={styles.titelContainer}>
        <div className={styles.backConatiner}>
          <Link href='/matchJob'><p>Tillbaka</p></Link>
        </div>
        <div className={styles.titelAndImg}>
          <Image
            src={image}
            alt='photo-job'
            width={400}
            height={100}
            className={styles.image}
          />
          <div className={styles.rubrikTitelConatiner}>
            <h2>{rubrik}</h2>
            <p>{titel}</p>
          </div>
        </div>
      </div>
      <div className={styles.infoConatiner}>
        <Image
          src={`/image/logo_icon_moatin_white.svg`}
          alt='logo-moatian'
          width={79}
          height={34}
        />
        <p>{info}</p>
        <div className={styles.iconAndInfoConatainer}>
          <div className={styles.iconAndInfo}>
            <MdWorkHistory style={{color:"white", fontSize:"1.4rem"}} />
            <p>{type}</p>
          </div>
          <div className={styles.iconAndInfo}>
            <AiOutlineClockCircle style={{color:"white", fontSize:"1.4rem"}} />
            <p>Publicerat: {days} dagar sedan</p>
          </div>
        </div>
        <Link className={styles.serachBtn} href={link}>Sök Jobb</Link>
      </div>  
    </div>
  )
}