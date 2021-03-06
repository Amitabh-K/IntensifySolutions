import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">about us</a></li>
             <li><a className="smoothscroll" href="#resume">who we are</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h2 style={{fontWeight: '300',boxShadow: "2px 2px #F5F5DC",marginBottom: "0px", borderRadius: "25px 25px 25px 25px",padding:"5px 5px 5px 5px", backgroundColor:'#F06000',color:'#fff', fontFamily:'sans-serif '}} className="responsive-headline"> Welcome to {resumeData.name}.</h2>
               <h3 style={{boxShadow: "2px 2px #F5F5DC",marginBottom: "240px", borderRadius: "0px 0px 25px 25px",padding:"10px", backgroundColor:'#F06000',color:'#fff', fontFamily:'sans-serif '}}> {resumeData.role}.{resumeData.roleDescription}</h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}