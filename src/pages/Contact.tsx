import { motion } from "framer-motion";
import { useFadeIn } from "../hooks/useFadeIn";
import Heading from "../components/Heading/Heading";
import DynamicTitle from "../components/DynamicTitle/DynamicTitle";
import ContactForm from "../components/Contact/Contact.tsx";
const Contact = () => {

  const { animationProps } = useFadeIn({ delay: 0 });

  return (
    <motion.div {...animationProps}>
      <DynamicTitle title="Portfolio | Contact" />
      <Heading text="Contact" />
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
