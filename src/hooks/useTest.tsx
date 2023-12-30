import { useEffect } from 'react'
import app from '../core/app'

export default function () {
    useEffect(() => {
        //@ts-ignore
        window.app = app;
    }, [])
}