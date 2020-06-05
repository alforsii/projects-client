import React from 'react';
import revera from './Revera.module.css';
export default function index() {
  return (
    <div>
      <nav className={`navbar navbar-expand navbar-light ${revera.navbar}`}>
        <a className={`navbar-brand ${revera.navbarBrand}`} href="!#">
          Revera
        </a>

        <ul className={`navbar-nav ${revera.navbarNav}`}>
          <li className="nav-item active">
            <a className="nav-link" id={revera.myNavLink} href="!#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id={revera.myNavLink} href="!#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id={revera.myNavLink} href="!#">
              Sample page
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id={revera.myNavLink} href="!#">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id={revera.myNavLink} href="!#">
              Blog
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="!#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Parent page
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="!#">
                Action
              </a>
              <a className="dropdown-item" href="!#">
                Another action
              </a>
              <a className="dropdown-item" href="!#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a id={revera.myNavLink} className="nav-link" href="!#">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="../images/revera/slider-1.jpg"
              alt="First slide"
            />
            <div
              className={`carousel-caption d-none d-md-block ${revera.carouselCaption}`}
            >
              <h5>FUSCE SCELERISQUE NIBH AC NISL LUCTUS INTERDUM.</h5>
              <p>
                Nam luctus velit ultricies vestibulum eleifend. Proin imperdiet
                varius rutrum. Curabitur placerat lacus eu ligula pellentesque
                euismod? Aliquam volutpat augue id nibh auctor, at varius dui
                semper? Suspendisse non pellentesque sapien, et sagittis erat.
                Quisque et dignissim elit. Sed sit amet sapien ac quam
                vestibulum suscipit ac id diam. Morbi accumsan est vitae tellus
                vulputate […]
              </p>
              <button type="button" className="btn btn-outline-secondary">
                Read more
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="../images/revera/slider-2.jpg"
              alt="Second slide"
            />
            <div
              className={`carousel-caption d-none d-md-block ${revera.carouselCaption}`}
            >
              <h5>
                ETIAM MAURIS TORTOR, PHARETRA QUIS LOBORTIS IN, PHARETRA IN DIAM
              </h5>
              <p>
                Duis tempus leo vitae ipsum viverra, blandit condimentum sapien
                porttitor. Duis porttitor sed metus eget mollis. Curabitur
                bibendum imperdiet tortor, ut pulvinar purus elementum nec.
                Suspendisse at erat luctus; hendrerit sapien sed, consectetur
                erat. Maecenas dignissim suscipit orci at molestie. Aenean
                fringilla dolor vitae lacus lacinia eleifend. Suspendisse et
                libero nunc. Etiam mauris tortor, pharetra […]
              </p>
              <button type="button" className="btn btn-outline-secondary">
                Read more
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="../images/revera/slider-3.jpg"
              alt="Third slide"
            />
            <div
              className={`carousel-caption d-none d-md-block ${revera.carouselCaption}`}
            >
              <h5>FALAURIS SOLLICITUDIN QUIS DOLOR VENENATIS FACILISIS</h5>
              <p>
                Donec sed dolor eu augue dignissim pellentesque. Fusce semper
                tortor ornare, luctus sem in, dictum leo. Ut at congue quam!
                Maecenas luctus interdum odio, eget volutpat velit hendrerit eu?
                Suspendisse at magna ut sem blandit hendrerit non ut magna. Cras
                quis porta dolor. Aliquam erat volutpat. Phasellus fringilla
                feugiat libero nec volutpat. Maecenas fermentum bibendum […]
              </p>
              <button type="button" className="btn btn-outline-secondary">
                Read more
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="../images/revera/slider-4.jpg"
              alt="Fourth slide"
            />
            <div
              className={`carousel-caption d-none d-md-block ${revera.carouselCaption}`}
            >
              <h5>SUSPENDISSE ORNARE, FELIS FEUGIAT SUSCIPIT PHARETRA</h5>
              <p>
                Quisque sit amet sagittis justo. Suspendisse ornare, felis
                feugiat suscipit pharetra, lorem est viverra odio; tristique
                tristique diam tellus id tellus. In consectetur aliquet
                tristique. Curabitur imperdiet leo in nisl consectetur mattis.
                Quisque bibendum, mauris vitae suscipit ornare; est nibh
                elementum mauris, eu malesuada nunc magna at justo. Proin
                blandit id tellus non pellentesque. Mauris […]
              </p>
              <button type="button" className="btn btn-outline-secondary">
                Read more
              </button>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className={revera.showcaseFooter}>
        <br />
        <br />
        <div className="row">
          <div className="col-md-4">
            <h1>
              <i className="fas fa-star"></i>
            </h1>
            <h3>Web design</h3>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Vestibulum vehicula erat non congue
              cursus. Aenean auctor nulla quis augue dictum, sed sagittis odio
              varius
            </p>
          </div>
          <div className="col-md-4">
            <h1>
              <i className="fas fa-glass-martini"></i>
            </h1>
            <h3>Web development</h3>
            <p>
              Duis tempus leo vitae ipsum viverra, blandit condimentum sapien
              porttitor. Duis porttitor sed metus eget mollis. Curabitur
              bibendum imperdiet tortor, ut pulvinar purus elementum nspendisse
              at erat luctus.
            </p>
          </div>
          <div className="col-md-4">
            <h1>
              <i className="fas fa-heart"></i>
            </h1>
            <h3>User interface</h3>
            <p>
              Cras aliquet venenatis porttitor. Donec rutrum sapien et sapien
              dignissim, eu dapibus mi molestie. Suspendisse dictum convallis
              quam et sodales. Praesent non enim et magna congue gravida.
            </p>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="container">
        <h3>
          LATEST PROJECTS
          <br />
          <small>FEW OF THE LATEST PORTFOLIO ITEMS</small>
        </h3>
        <hr />
        <div className={`${revera.showcaseFooterRow} row`}>
          <div className="col-sm">
            <div>
              <img
                className={`${revera.cardImgTop} card-img-top`}
                src="../images/revera/project-1.jpg"
                alt="Card cap"
              />
              <div>
                <p className={`${revera.cardText} card-text`}>
                  Nunc libero elit, iaculis nec augue non
                </p>
              </div>
            </div>
          </div>
          <div className="col order-1">
            <div>
              <img
                className={`${revera.cardImgTop} card-img-top`}
                src="../images/revera/project-2.jpg"
                alt="Card cap"
              />
              <div>
                <p className={`${revera.cardText} card-text`}>
                  Phasellus aliquet iaculis neque accumsan aliquam
                </p>
              </div>
            </div>
          </div>
          <div className="col order-1">
            <div>
              <img
                className={`${revera.cardImgTop} card-img-top`}
                src="../images/revera/project-3.jpg"
                alt="Card cap"
              />
              <div>
                <p className={`${revera.cardText} card-text`}>
                  Vivamus blandit ipsum sed arcu euismod
                </p>
              </div>
            </div>
          </div>
          <div className="col order-1">
            <div>
              <img
                className={`${revera.cardImgTop} card-img-top`}
                src="../images/revera/project-4.jpg"
                alt="Card cap"
              />
              <div>
                <p className={`${revera.cardText} card-text`}>
                  Curabitur auctor dolor risus, vitae pellentesque arcu
                  consequat
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="container">
        <h3>
          LATEST ARTICLES
          <br />
          <small>LATEST POSTS FROM THE BLOG</small>
        </h3>
        <hr />
        <div className="row">
          <div className="col-sm">
            <div>
              {/* <!-- <img src="./img/slider-1.jpg" className="img-fluid" alt="Responsive image"> -- /> */}
              <img
                className={`${revera.cardImgTop} card-img-top`}
                src="../images/revera/slider-1.jpg"
                alt="Card cap"
              />
              <div>
                <p>
                  <b>
                    Etiam mauris tortor, pharetra quis lobortis in, pharetra in
                    diam
                  </b>
                </p>
                <h6 className={`${revera.h6} text-muted`}>
                  POSTED ON{' '}
                  <span className={revera.spanRed}>
                    <a href="!#">AUGUST 19, 2013</a>
                  </span>{' '}
                  BY{' '}
                  <span className={revera.spanRed}>
                    <a href="!#">ADMIN</a>
                  </span>
                </h6>
                <p className={`${revera.cardText} card-text text-muted`}>
                  Duis tempus leo vitae ipsum viverra, blandit condimentum
                  sapien porttitor. Duis porttitor sed metus eget mollis.
                  Curabitur bibendum imperdiet tortor, ut pulvinar purus
                  elementum nec. Suspendisse at erat luctus; hendrerit sapien
                  sed, consectetur erat. Maecenas dignissim suscipit orci at
                  molestie. Aenean fringilla dolor vitae lacus lacinia eleifend.
                  Suspendisse et libero nunc. Etiam mauris tortor, pharetra […]
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div>
              <img
                className={`${revera.cardImgTop} card-img-top`}
                src="../images/revera/slider-2.jpg"
                alt="Card cap"
              />
              <div>
                <p>
                  <b>Falauris sollicitudin quis dolor venenatis facilisis</b>
                </p>
                <h6 className={`${revera.h6} text-muted`}>
                  POSTED ON{' '}
                  <span className={revera.spanRed}>
                    <a href="!#">AUGUST 19, 2013</a>
                  </span>{' '}
                  BY{' '}
                  <span className={revera.spanRed}>
                    <a href="!#">ADMIN</a>
                  </span>
                </h6>
                <p className={`${revera.cardText} card-text text-muted`}>
                  Donec sed dolor eu augue dignissim pellentesque. Fusce semper
                  tortor ornare, luctus sem in, dictum leo. Ut at congue quam!
                  Maecenas luctus interdum odio, eget volutpat velit hendrerit
                  eu? Suspendisse at magna ut sem blandit hendrerit non ut
                  magna. Cras quis porta dolor. Aliquam erat volutpat. Phasellus
                  fringilla feugiat libero nec volutpat. Maecenas fermentum
                  bibendum […]
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div>
              <img
                className={`${revera.cardImgTop} card-img-top`}
                src="../images/revera/slider-3.jpg"
                alt="Card cap"
              />
              <div>
                <p>
                  <b>Suspendisse ornare, felis feugiat suscipit pharetra</b>
                </p>
                <h6 className={`${revera.h6} text-muted`}>
                  POSTED ON{' '}
                  <span className={revera.spanRed}>
                    <a href="!#">AUGUST 19, 2013</a>
                  </span>{' '}
                  BY{' '}
                  <span className={revera.spanRed}>
                    <a href="!#">ADMIN</a>
                  </span>
                </h6>
                <p className={`${revera.cardText} card-text text-muted`}>
                  Curabitur auctor dolor risus, vitae pellentesque arcu
                  consequat
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div>
              <img
                className={`${revera.cardImgTop} card-img-top`}
                src="../images/revera/slider-4.jpg"
                alt="Card cap"
              />
              <div>
                <p>
                  <b>Festibulum purus odio, ornare non posuere</b>
                </p>
                <h6 className={`${revera.h6} text-muted`}>
                  POSTED ON{' '}
                  <span className={revera.spanRed}>
                    <a href="!#">AUGUST 19, 2013</a>
                  </span>{' '}
                  BY{' '}
                  <span className={revera.spanRed}>
                    <a href="!#">ADMIN</a>
                  </span>
                </h6>
                <p className={`${revera.cardText} card-text text-muted`}>
                  Aenean quis rhoncus nisl, eget sollicitudin ipsum. Curabitur a
                  elementum purus. Quisque vitae dui at arcu porttitor laoreet
                  ac vitae nibh. Class aptent taciti sociosqu ad litora torquent
                  per conubia nostra, per inceptos himenaeos. Nulla facilisi.
                  Nulla egestas at nunc at volutpat. Nullam sodales at diam vel
                  tempor. Sed pretium, leo vel pellentesque dictum, ligula […]
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <footer className={revera.footer}>
        <hr className={revera.hrRed} />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h6 className={`${revera.h6} text-muted`}>REVERA</h6>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Vestibulum vehicula erat non congue
                cursus. Aenean auctor nulla quis augue dictum, sed sagittis odio
                varius? Aliquam nec venenatis turpis. Aenean euismod arcu vel
                volutpat tristique. In mattis ipsum quis magna feugiat, id
                tempus metus accumsan.
              </p>
            </div>
            <div className="col-sm">
              <h6 className={`${revera.h6} text-muted`}>META</h6>
              <p>
                <a href="!#">Log in</a>
              </p>
              <p>
                <a href="!#">Entries RSS</a>
              </p>
              <p>
                <a href="!#">Comments RSS</a>
              </p>
              <p>
                <a href="!#">WordPress.org</a>
              </p>
            </div>
            <div className="col-sm">
              <h6 className={`${revera.h6} text-muted`}>ARCHIVES</h6>
              <p>
                <a href="!#">August 2013</a>
              </p>
            </div>
            <div className="col-sm">
              <h6 className={`${revera.h6} text-muted`}>RECENT POSTS</h6>
              <p>
                <a href="!#">
                  Etiam mauris tortor, pharetra quis lobortis in, pharetra in
                  diam
                </a>
              </p>
              <p>
                <a href="!#">Nunc libero elit, iaculis nec augue non</a>
              </p>
              <p>
                <a href="!#">
                  Falauris sollicitudin quis dolor venenatis facilisis
                </a>
              </p>
              <p>
                <a href="!#">
                  Phasellus aliquet iaculis neque accumsan aliquam
                </a>
              </p>
              <p>
                <a href="!#">Vivamus blandit ipsum sed arcu euismod</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className={revera.footerCopyright}>
        <div className="container row">
          <div className="col-12">
            Copyright © 2018 revera - Just another demo Sites site. | Revera
            Theme
          </div>
        </div>
      </div>
    </div>
  );
}
