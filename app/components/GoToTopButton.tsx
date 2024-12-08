"use client"
import React from 'react';
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const GoToTopButton: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }


    return (<Link href="#top" onClick={scrollToTop} className="dark:bg-white bg-slate-900 text-white dark:text-slate-700 p-1 rounded-3xl w-1/12 z-50 fixed bottom-10 right-10 h-12 w-12 flex items-center justify-center"><FontAwesomeIcon icon={faChevronUp} /></Link>)
}

export default GoToTopButton