'use client'
import React from 'react'
import Image from 'next/image'
import styles from './searchJob.module.css'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdWorkHistory } from 'react-icons/md'
import Link from 'next/link'
import { useLanguage } from '../../language'

export default function InfoAndSearchLayout(props) {
  const { imgUrl, companyName, jobTitle, shortInfo, type, days, link } = props
  const { text } = useLanguage('swe')

  return (
    <div className={styles.infoAndSearchContainer}>
      <div className={styles.titelContainer}>
        <div className={styles.backConatiner}>
          <Link href="/matchJob">
            <p>{text.back}</p>
          </Link>
        </div>
        <div className={styles.titelAndImg}>
          <div className={styles.imgContainer}>
            <Image
              src={imgUrl}
              alt="photo-job"
              width={100}
              height={100}
              className={styles.image}
            />
          </div>
          <div className={styles.rubrikTitelConatiner}>
            <h2>{companyName}</h2>
            <p>{jobTitle}</p>
          </div>
        </div>
      </div>
      <div className={styles.infoConatiner}>
        <h3>{text.jobDescription}</h3>
        <p className={styles.descriptionJob}>{shortInfo}</p>
        <div className={styles.iconAndInfoConatainer}>
          <div className={styles.iconAndInfo}>
            <MdWorkHistory style={{ color: 'white', fontSize: '1.4rem' }} />
            <p>{type}</p>
          </div>
          <div className={styles.iconAndInfo}>
            <AiOutlineClockCircle
              style={{ color: 'white', fontSize: '1.4rem' }}
            />
            <p>
              {text.published}: {days} {text.days}
            </p>
          </div>
        </div>
        <Link className={styles.serachBtn} href={link}>
          {text.apply}
        </Link>
      </div>
    </div>
  )
}
