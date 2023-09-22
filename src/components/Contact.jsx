/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import {useState, useRef} from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import { styles } from "../styles";
import { EarthCanvas } from './canvas';
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// S. ID service_cpa04f7
// Template ID template_jorb027
// Public Key 2u3uJXiAPimTzAQ_2

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "", 
    email: "",
    message: "",

  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, 
      [name]: value,
     });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault(); stops the browser from refreshing after clicking the submit button.
    e.preventDefault();
    setLoading(true);

   emailjs.send('service_cpa04f7', 
                'template_jorb027',
                {
                  from_name: form.name,
                  to_name: 'Daniel',
                  from_email: form.email,
                  to_email: 'tewogbadedaniel005@gmail.com',
                  message: form.message
                },
                '2u3uJXiAPimTzAQ_2'
                )
                .then(() => {
                  setLoading(false);
                  alert('Thank you, I will get back to you as soon as possible.');
                   
                  setForm({
                    name: '',
                    email: '',
                    message: '',
                  })
                }, (error) => {
                  setLoading(false)

                  console.log(error);

                  alert('Something went wrong.')
                })
  }
     

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden" >
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}
                  className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Connect with us</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

      <form 
       ref={formRef}
       onSubmit={handleSubmit}
       className='mt-12 flex flex-col gap-8'
      >
        <label className='flex flex-col'>
        <span className="text-white font-medium mb-4" >Your Name</span>
        <input 
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name here"
          className='bg-tertiary py-4 px-6
          placeholder:text-secondary
          text-white rounded-lg outlined-none
          border-none font-medium'
        />
        </label>
        <label className='flex flex-col'>
        <span className="text-white font-medium mb-4" >Your Email</span>
        <input 
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email here"
          className='bg-tertiary py-4 px-6
          placeholder:text-secondary
          text-white rounded-lg outlined-none
          border-none font-medium'
        />
        </label>

        <label className='flex flex-col'>
        <span className="text-white font-medium mb-4" >Your Message</span>
        <textarea 
          rows="7"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Please enter your message here..."
          className='bg-tertiary py-4 px-6
          placeholder:text-secondary
          text-white rounded-lg outlined-none
          border-none font-medium'
        />
        </label>
        
        <button
          type='submit'
          className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
        >
          {loading ? 'Sending...' : 'Send'}

        </button>
      </form>


      </motion.div>

      <motion.div
       variants={slideIn("right", "tween", 0.1, 0.5)}
       className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >


      <EarthCanvas />

      </motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact")