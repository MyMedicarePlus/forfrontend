import { FaPhoneVolume } from "react-icons/fa";
import { TbMapPinCode } from "react-icons/tb";

const Header = () => {
  return (
    <>
      <header className="d-flex flex-column align-items-center">
        <div className="px-3 py-2 text-bg-White border-bottom">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
              </a>
              <header className="d-flex justify-content-center py-3">
                <a href="#" className="nav-link">
                  <img src="logo.png" alt="Medicare Logo" width="55" height="55" className="me-2" />
                </a>
                <a href="#" className="nav-link"><h2>Medicare</h2></a>
              </header>

              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                  <a href="#" className="nav-link active d-flex align-items-center">
                    <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"></use></svg><TbMapPinCode />
                    <h5 className="mb-0 ml-2">Enter Your Pincode</h5>
                  </a>


              <form className="col-12 col-lg-auto mb-3 mb-lg-0 d-flex align-items-center" role="search">
                <input type="search" className="form-control" placeholder="Search doctors, clinics, hospital, etc" aria-label="Search" />
              </form>

              <a href="#" className="nav-link active d-flex align-items-center">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"></use></svg><FaPhoneVolume />
               <h5 className="mb-0 ml-2">Emergency Call</h5>
              </a>

              </ul>

              <div className="text-end">
                <button type="button" className="btn btn-light text-dark me-2">Login/Signup</button>
                {/* <button type="button" className="btn btn-primary">Sign-up</button> */}
              </div>

            </div>
          </div>
        </div>
        <div className="px-3 py-2 border-bottom mb-3" style={{backgroundColor: "#f8f8f8"}}  >
          <div className="container d-flex flex-wrap justify-content-center" >
            <header className="d-flex justify-content-center py-0">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a href="#" className="nav-link">Find Doctor</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Find Hospital</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Video Consult</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Medicines</a>
                </li>
              </ul>
            </header>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
