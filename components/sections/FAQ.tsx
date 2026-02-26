import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SubtleBadge } from "@/components/ui/subtle-badge"

const faqs = [
    {
        question: "How can AI benefits my business?",
        answer: "AI can automate repetitive tasks, provide deep insights through data analytics, improve customer service with chatbots, and optimize your overall operations, leading to reduced costs and increased revenue."
    },
    {
        question: "Do I need technical knowledge to use your services?",
        answer: "No, we handle the technical side. We build user-friendly solutions and provide training so you and your team can easily use them."
    },
    {
        question: "Can your solutions connect with my existing software?",
        answer: "Yes, we specialize in seamless integration. Our AI solutions can connect with your CRM, ERP, and other tools to enhance your current workflow."
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. We prioritize data security and compliance. We use industry-standard encryption and follow strict protocols to ensure your data remains safe and confidential."
    },
    {
        question: "How do we get started?",
        answer: "It's simple. Schedule a free consultation call with us. We'll discuss your needs, analyze your current processes, and propose a tailored AI strategy for your business."
    }
]

export function FAQ() {
    return (
        <section className="py-24 bg-background w-full">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <SubtleBadge className="mb-4">Common Questions</SubtleBadge>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        Frequently Asked Questions
                    </h2>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left text-lg">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
