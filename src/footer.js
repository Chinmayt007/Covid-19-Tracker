import React from 'react'
import './footer.css'

const footer = () => {
    return(
        <div className='main-footer'>
            <hr />
            <div className="row">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} DEVELOPED BY CHINMAY TIWARI | All Rights Reserved | Terms Of Service | Privacy
                </p>
            </div>
        </div>
    )
}

export default footer;