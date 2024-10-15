import React from 'react';
import LogoSvg from '../images/logo.svg'

import '../css/_bootstrap.css';
import '../css/animate.css';
import '../css/bootstrap-grid.css';
import '../css/bootstrap-reboot.css';
import '../css/bootstrap.css';
import '../css/bootstrap.css.map';
import '../css/jquery.fancybox.min.css';
// import './css/owl.carousel.min.css';
import '../css/style.css';
import '../fonts/ionicons/css/ionicons.min.css';
import '../fonts/fontawesome/css/font-awesome.min.css';


export default function Header() {
    return (
        <header role="banner">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a href='index.html'><img className="logo" src={LogoSvg} alt='' loading="lazy" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample05">
                        <ul className="navbar-nav pl-md-5 ml-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="index.html">Главная</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">О компании</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="projects.html">Проекты</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="services.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Сервис</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown04">
                                <a className="dropdown-item" href="services.html">Architectural Design</a>
                                <a className="dropdown-item" href="services.html">Interior</a>
                                <a className="dropdown-item" href="services.html">Building</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="blog.html">Блог</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Контакты</a>
                        </li>
                        </ul>

                        <div className="navbar-nav ml-auto">
                            <form method="post" className="search-form">
                                <span className="icon ion ion-search"></span>
                                <input type="text" className="form-control" placeholder="Search..."></input>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </nav>
        </header>
    )
};