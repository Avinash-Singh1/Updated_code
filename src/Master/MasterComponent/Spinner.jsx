import React from 'react'

const Spinner = () => {
  return (
    <>
     {/* <!-- Spinner Start --> */}
        <div id="spinner" className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={{width: 3+"rem", height: 3+"rem"}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        {/* <!-- Spinner End --> */}


    </>
  )
}

export default Spinner