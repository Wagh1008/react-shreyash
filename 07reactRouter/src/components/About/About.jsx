import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}