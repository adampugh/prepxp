import React from "react";

const footer = () => (
    <footer>
        <div className="container">
            <div className="footer__grid">
                <div className="footer__grid__panel">
                    <h1 className="logo">PrepXP</h1>
                    <p>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-youtube"></i>    
                    </p>
                    <p>info@prepxp.com</p>
                </div>
                <div className="footer__grid__panel">
                    <h2>Explore</h2>
                    <p className="footer__grid__panel__link">•  Home</p>
                    <p className="footer__grid__panel__link">•  About</p>
                    <p className="footer__grid__panel__link">•  Blog</p>
                </div>
                <div className="footer__grid__panel">
                    <h2>Latest Blog Posts</h2>
                    <div className="footer__grid__blogPost">
                        <p>5 Most common interview questions</p>
                    </div>
                    <div className="footer__grid__blogPost">
                        <p>How to pass the technical interview</p>
                    </div>
                </div>
            </div>
            <p className="footer__tagline">© 2017 Design By <a href="https://adampugh.github.io/kokonoka/" rel="noopener noreferrer" target="_blank">Kokonoka Digital</a></p>
        </div>
    </footer>
);

export default footer;