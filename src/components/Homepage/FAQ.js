import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
const features = [
    {
        icon: "/icons/free.svg",
        title: "Free Shipping & Returns",
    },
    {
        icon: "/icons/price.svg",

        title: "Affordable Price Guarantee",
    },
    {
        icon: "/icons/premium.svg",

        title: "Premium Food and Supplies",
    },
    {
        icon: "/icons/247.svg",

        title: "24x7 Available Support Services",
    },
];

const faqs = [
    {
        id: "item-1",
        question: "How can I track my order?",
        answer:
            "You can track your order by clicking on the 'Track Order' link in your order confirmation email or by logging into your account and viewing your order history.",
    },
    {
        id: "item-2",
        question: "How much time does an online order take to deliver?",
        answer:
            "Standard delivery typically takes 3-5 business days. Delivery times may vary based on your location and the items in your order.",
    },
    {
        id: "item-3",
        question: "Is express shipping available?",
        answer:
            "Yes, express shipping is available for most locations. You can select express shipping during checkout for delivery within 1-2 business days.",
    },
    {
        id: "item-4",
        question: "Is delivery possible at the address?",
        answer:
            "We deliver to most locations across the country. You can check if we deliver to your area by entering your pincode on the checkout page.",
    },
];


const FAQSection = () => {
    return (
        <>
            <section>
                <div className="bg-purple-700 py-8">
                    <div className="grid grid-cols-4 md:grid-cols-4 gap-6 max-w-[90%] mx-auto">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center text-white"
                            >
                                <Image
                                    src={feature.icon}
                                    alt="icon"
                                    width={100}
                                    height={100}
                                    className="w-20 h-auto sm:w-20"
                                />
                                {/* <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-900 mb-4 text-2xl">
                                    {feature.icon}
                                </div> */}
                                <h4 className="text-xs lg:text-lg md:text-lg text-white font-medium">{feature.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="mx-auto px-4 py-8 rounded-3xl text-gray-600 w-[90%]">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">FAQs</h2>
                    <p className="text-white">You cannot go wrong with these!</p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id}>
                                <AccordionTrigger className="text-left font-bold underline-none">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </>
    );
};

export default FAQSection;
