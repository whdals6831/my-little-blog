import { Geist } from "next/font/google";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export { RootLayout as default, metadata } from '@/app/layouts';
