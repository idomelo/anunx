import style from './PageLoading.module.css'

export default function PageLoading() {

  return (
    <>
      <div className={style.spinnerWrapper}>
        <div className={style.spinner}>
          <div></div>
        </div>
      </div>
    </>
  )
}
