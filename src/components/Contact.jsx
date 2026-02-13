import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 reveal">
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-slate-300 text-lg">Have a project in mind? Drop me a message.</p>
                </div>
                <div className="max-w-2xl mx-auto glass-effect p-6 sm:p-8 md:p-12 rounded-2xl">
                    <form action="https://formspree.io/f/mwprgyqv" method="POST" className="space-y-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            required
                            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                        ></textarea>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg transition-all hover:scale-105 interactive-element"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
