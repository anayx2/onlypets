import { Footer } from "@/components/Footer";
// import Navbar1 from "@/components/Navbar";
// import { usePathname } from 'next/navigation';

// app/template.js
export default function Template({ children }) {
    // const pathname = usePathname();
    return (
        <>
            {/* <Navbar1 /> */}
            {children}
            <Footer />

        </>
    );
}