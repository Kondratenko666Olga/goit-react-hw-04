
import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.css';

const LoaderMessage = () => {
   return (
    <div className={styles.loader}>
      <Oval
        height={80}
        width={80}
        color="#0000ff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#0000ff"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default LoaderMessage;
