import { Inter, Lusitana } from 'next/font/google'; 

export const inter = Inter({ subsets: ['latin'] }); 

console.log(`Current font class name: ${inter.className}`); // Debugging line to check the class name

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-lusitana',
    display: 'swap',
}); 