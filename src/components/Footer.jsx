const Footer = () => {
    return (
      <div class="container">
  <footer class="py-5">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <h4>Main Links</h4>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About us</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Services</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Doctors</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQ's</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Careers</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Contact Us</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h4>OUR SERVICES</h4>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Patient Care</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Medical Services</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Surgical Services</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Cancer Care</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pediatric Care</a></li>
        </ul>
      </div>

      
      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h4>GET IN TOUCH</h4>
          <p>
            
          </p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2024 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </div>
  </footer>
</div>
        
    );
};

export default Footer;