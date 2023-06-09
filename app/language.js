/* eslint-disable react-hooks/rules-of-hooks */

'use client'
import { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import languageText from './textContent'
import { languageAtom } from './languageAtom'

export const useLanguage = () => {
  const [language, setLanguage] = useAtom(languageAtom)
  const [text, setText] = useState('')

  useEffect(() => {
    language === 'swe' ? setText(languageText.swe) : setText(languageText.eng)
  }, [language])

  const toggleLanguage = () => {
    const newLanguage = language === 'swe' ? 'eng' : 'swe'
    setLanguage(newLanguage)
  }

  return { language, text, toggleLanguage }
}
