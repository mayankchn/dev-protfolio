import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="mt-8 text-secondary-dark">
            <div className="container w-4/5 mx-auto border">
                <div className="flex flex-col items-center py-8 gap-5 border sm:max-w-6xl sm:mx-auto">
                    <div>
                        <span className="text-lg font-medium">CONTACT</span>
                    </div>
                    <div className="flex flex-col gap-3 tracking-wide lg:flex-row">
                        <div className="flex gap-3 items-center border px-2 py-3">
                            <img src="/contact/home.png" alt="" className="w-10" />
                            <div className="flex flex-col text-sm">
                                <span className="font-medium">Address</span>
                                <span>Dehradun, Uttarakhand</span>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center border px-2 py-3">
                            <img src="/contact/mail.png" alt="" className="w-10" />
                            <div className="flex flex-col text-sm">
                                <span className="font-medium">Email</span>
                                <span>bobmayank@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center border px-2 py-3">
                            <img src="/contact/phone.png" alt="" className="w-10" />
                            <div className="flex flex-col text-sm">
                                <span className="font-medium">Contact</span>
                                <span>7533859789</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;