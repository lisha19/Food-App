import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 w-100 d-flex justify-content-center align-items-center">
            <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            </Link>
            <p className="mb-3 mb-md-0 text-muted text-center">© 2022 GoFood, Inc</p>
          </div>

        </footer>
    </div>
  )
}

export default Footer