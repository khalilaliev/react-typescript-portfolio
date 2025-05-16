import {TbError404Off} from "react-icons/tb";
import BackButton from "../components/Button/BackButton.tsx";

const NotFoundPage = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-2 pt-10 h-[75vh] max-md:h-[60vh]'>
      <TbError404Off className='text-[180px] mx-auto'/>

      <h1 className='text-3xl '>Page not found!</h1>
      <BackButton source={'/'} text='Back to the Home page'  />

    </div>
  );
};

export default NotFoundPage;