import React from 'react';

const Portfolio = () => {
    return (
        <section className='container mx-auto'>
            <div className='mt-5'>
                <h2 className='text-xl uppercase'>Md. Kamrul Hasan</h2>
                <h2><strong>Email:</strong> kamrul.hasan.swe@gmail.com</h2>
            </div>
            <div className='mt-5'>
                <h2 className='text-xl uppercase'><strong>Education:</strong></h2>
                <li>IUBAT- International University of Business Agriculture and Technology  </li>
                <li>January 2018 – May 2022 </li>
                <li>Department of Computer Science and Engineering </li>
            </div>
            <div className='mt-5'>
                <h2 className='text-xl uppercase'><strong>Skills:</strong></h2>
                <h2><strong>Expertise:</strong></h2>
                <li>JavaScript, React JS, ES6, HTML, CSS, Bootstrap CSS, Tailwind CSS, React Bootstrap, daisy UI.</li>
                <h2><strong>Comfortable:</strong></h2>
                <li>Firebase, React Router, Node JS, ES6, MongoDB.</li>
                <h2><strong>Familiar:</strong></h2>
                <li>MySQL, AWS, Software Architect, Project Management, OOP, C, C++, JAVA, Networking.</li>
                <h2><strong>Deploy:</strong></h2>
                <li>Firebase, Heroku, Netlify.</li>
                <h2><strong>Tools:</strong></h2>
                <li>Git, VSCode, GitHub, Chrome Dev-Tool, Photoshop.</li>
            </div>
            <div className='mt-5 mb-36'>
                <h2 className='text-xl uppercase'><strong>Projects:</strong></h2>
                <a className='text-blue-500 hover:underline' href="https://backpack-warehouse.web.app/">Inventory-Website</a> ||
                <a className='text-blue-500 hover:underline' href="https://digital-marketer-b7be2.web.app/">Service-Website</a> ||
                <a className='text-blue-500 hover:underline' href="https://multi-cooker-review.netlify.app/">Review-Website</a>
            </div>
        </section>
    );
};

export default Portfolio;


/* 

IUBAT- International University of Business Agriculture and Technology January 2018 – May 2022 Department of Computer Science and Engineering
*/