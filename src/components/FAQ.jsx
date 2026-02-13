import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`accordion-item glass-effect rounded-xl overflow-hidden interactive-element ${isOpen ? 'active' : ''}`}>
            <button
                className="accordion-header w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-semibold text-white">{question}</span>
                <ChevronDown className={`accordion-icon w-5 h-5 text-sky-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
                className="accordion-content transition-all duration-300 ease-out"
                style={{ maxHeight: isOpen ? '500px' : '0' }}
            >
                <div className="px-6 pb-6 text-slate-300" dangerouslySetInnerHTML={{ __html: answer }} />
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqData = [
        {
            question: "What technologies do you specialize in?",
            answer: "I specialize in a modern tech stack focusing on <strong>Python, FastAPI, and React</strong>. My expertise extends to Data Science using Pandas and NumPy, as well as integrating Large Language Models (LLMs) for advanced AI solutions."
        },
        {
            question: "How can I collaborate on a project?",
            answer: "Collaboration starts with a conversation! You can reach out via the <strong>Contact</strong> form below or connect with me on LinkedIn. I am open to open-source contributions, freelance projects, and long-term partnerships."
        },
        {
            question: "Is Avira available for public use?",
            answer: "Yes! Avira is live and accessible via the web. You can try the demo version directly from the project link above. I am constantly updating it with new features for better prompt engineering and AI assistance."
        },
        {
            question: "Do you offer data analysis services?",
            answer: "Absolutely. Through my <strong>CurioData</strong> platform, I provide automated insights. For more bespoke enterprise needs, I offer custom data analysis solutions tailored to your specific datasets and business goals."
        }
    ];

    return (
        <section id="faq" className="py-16 sm:py-20 md:py-24">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12 reveal">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">Common Queries</h2>
                    <p className="text-slate-300 text-lg">Frequently asked questions about my work and services.</p>
                </div>
                <div className="max-w-3xl mx-auto space-y-4 reveal">
                    {faqData.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
