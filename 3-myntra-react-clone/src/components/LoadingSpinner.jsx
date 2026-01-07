
const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center p-5 m-5">
       <div className="spinner-border text-primary " role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}

export default LoadingSpinner;
