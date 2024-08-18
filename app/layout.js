import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/elitecons.css"
import "public/assets/css/elitecons-responsive.css"



import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import {yantramanav} from '@/lib/font'
export const metadata = {
    title: 'Innovabuild Yorkshire Limited | Quality Construction & Renovation Services',
    description: 'Innovabuild Yorkshire Limited offers top-quality construction, renovation, and extension services across Yorkshire. We specialise in creating sustainable, tailored spaces that enhance the way you live and work. Trust us to bring your vision to life with precision and care.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${ yantramanav.variable }`}>
            <body>{children}</body>
        </html>
    )
}
