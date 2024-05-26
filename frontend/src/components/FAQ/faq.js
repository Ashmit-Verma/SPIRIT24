import React, { useState } from "react";
import './faq.css';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqItems = [
        "What is your return policy?",
        "How long does shipping take?",
        "Do you ship internationally?",
        "How can I track my order?"
    ];

    return (
        <div className="faq-container">
            <div className="faq-title">FAQ's</div>
            {faqItems.map((item, index) => (
                <div className="accordion-item" key={index}>
                    <div
                        className="accordion-title"
                        onClick={() => handleAccordionClick(index)}
                    >
                        <div>{item}</div>
                    </div>
                    {activeIndex === index && (
                        <div className="accordion-content">
                            {/* Replace the content below with the appropriate answer for each question */}
                            {index === 0 && "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange."}
                            {index === 1 && "Shipping times vary depending on your location. Typically, domestic shipping takes 5-7 business days and international shipping can take 10-20 business days."}
                            {index === 2 && "Yes, we ship to over 100 countries worldwide. Shipping costs will apply, and will be added at checkout."}
                            {index === 3 && "You can track your order using the tracking number provided in your confirmation email. Visit our order tracking page and enter your tracking number."}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Faq;
