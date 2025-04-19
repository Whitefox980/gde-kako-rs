import { GeistSans, GeistMono } from 'geist/font';
   
   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode
   }) {
     return (
       <html lang="sr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
         <body>{children}</body>
       </html>
     )
   }
