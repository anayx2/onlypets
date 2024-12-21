import { Footer } from "@/components/Footer";
import Navbar1 from "@/components/Navbar";

// app/template.js
export default function Template({ children }) {
    return (
        <>
            <Navbar1 />
            {children}
            <Footer />
        </>
    );
}