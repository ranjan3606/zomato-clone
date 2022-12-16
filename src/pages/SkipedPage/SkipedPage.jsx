import css from './SkipedPage.module.css'

import { useNavigate } from "react-router-dom";

const SkipedPage = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  }

  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <img src={'https://cdni.iconscout.com/illustration/premium/thumb/not-found-illustration-download-in-svg-png-gif-file-formats--404-error-page-pack-network-communication-illustrations-6167023.png?f=webp'} />
        <h1>Page Not Found !</h1>
        <div onClick={goBackHandler} className={css.backBtn}>Go Back</div>
      </div>
    </div>
  )
}

export default SkipedPage