import React, { Component } from 'react';
//import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/course_actions';
import Img from 'react-image';




class Home extends Component {
  
    constructor(props) {
      super(props);
      this.$ = require('jquery/dist/jquery.min');
      this.owlcarousel;
      this.state = { isLoaded : false };
    
    }
    componentDidMount() {
 
        this.owlcarousel = require('react-owl-carousel');
        if (!this.state.isLoaded) {
            this.setState({isLoaded: true});
        }
        this.props.loadAllCourses();

    }

    render() {
        const OwlCarousel = this.owlcarousel;
        const options = {
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 5,
                }
            }
        }
        const { courses } = this.props;
        return (
            <div> 
         
                <main id="home">
                    {/* -- Cover-- */}
                    <section className="cover container-fluid">
                        <div className="container">
                            <h3>Learn the skills you need</h3>
                            <h5>Take in-depth online courses and meet and challenge with skills. From desigining to creating full products.</h5>
                            <div className="search"> 
                                <input type="text" placeholder="what do you want to learn" />
                                <input type="button" value="search" />
                            </div>
                        </div>
                    </section>
                    {/* -- Features-- */}
                    <section className="features container">
                        <div className="row">
                            <div className="row col-md-4 no-gutters">
                                <div>
                                    <figure>
                                        <img  src={require('../../img/features/features_1.png')} alt="Explore" />
                                    </figure>
                                </div>
                                <div className="col-7">
                                    <p className="title">Explore</p>
                                    <p className="description">Over 90,000 courses taught by experts</p>
                                </div>
                            </div>
                            <div className="row col-md-4 no-gutters">
                                <div>
                                    <figure><img src={require('../../img/features/features_2.png')} alt="Enroll" /></figure>
                                </div>
                                <div className="col-7">
                                    <p className="title">Enroll</p>
                                    <p className="description">In courses at any time, with lifetime access</p>
                                </div>
                            </div>
                            <div className="row col-md-4 no-gutters">
                                <div>
                                    <figure><img src={require('../../img/features/features_3.png')} alt="Learn" /></figure>
                                </div>
                                <div className="col-7">
                                    <p className="title">Learn</p>
                                    <p className="description">At your own pace, from any device</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="courses container-fluid">
                        <div className="container">
                            {courses.map((course, i) => {
                            return (
                                <div key={i}>
                                    <div className="wrapper">
                                        <h4>Top courses in <span>{course.Category}</span><a className="see_all_link">See all<i className="fa fa-angle-right"></i></a></h4>
                                    </div>
                                    { OwlCarousel ?
                                        <OwlCarousel className="owl-theme" loop nav margin={10}  responsiveClass="true" {...options}>
                                            { course.Course.map((co, k) => {
                                            return (  
                                                <div key={k} className="item block">
                                                    <figure className="top_mentor"><Img src={co.URL} alt="Introduction to theoretical physicist" /></figure>
                                                    <div className="inner">
                                                        <p>Albert Einstein</p>
                                                        <h6>{co.Name}</h6>
                                                        <div className="star"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></div>
                                                        <div className="info row no-gutters">
                                                            <div className="col-6">
                                                                <p><i className="fa fa-user"></i>{co.Learners}</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p><i className="fa fa-clock-o"></i>{co.Hours}</p>
                                                            </div>
                                                        </div>
                                                        <div className="price text-right">
                                                            <p>{co.Price}</p>
                                                        </div>
                                                    </div>
                                                </div>)

                                            })}
                                    
                                        </OwlCarousel>
                                        :
                                        null
                                    }
                                </div>)
                                

                            })}
                      
                            <div className="load_more"><button>Load More</button></div>
                        </div>
                    </section>
                    {/* -- Discover-- */}
                    <section className="discover">
                        <h3>Discover our popular courses</h3>
                        {OwlCarousel ?
                
                            <OwlCarousel className="owl-theme" loop nav margin={10}  responsiveClass="true" {...options}>
                                <div className="item block">
                                    <figure><img src={require("../../img/discover/discover_1.png")} alt="Finance" />
                                        <figcaption>Finance</figcaption>
                                    </figure>
                                </div>
                                <div className="item block">
                                    <figure><img src={require("../../img/discover/discover_2.png")} alt="Business" />
                                        <figcaption>Business</figcaption>
                                    </figure>
                                </div>
                                <div className="item block">
                                    <figure><img src={require("../../img/discover/discover_3.png")} alt="Entrepreneurship" />
                                        <figcaption>Entrepreneurship</figcaption>
                                    </figure>
                                </div>
                            </OwlCarousel>
                            :
                            null
                        }
                    </section>
                    {/* -- Skills-- */}
                    <section className="skills container-fluid">
                        <div className="container">
                            <h3>Skills by category</h3>
                            <ol className="row">
                                <li className="col-12 col-sm-2 col-md-3">
                                    <figure><img src={require("../../img/skills/skills_1.png")} alt="Development" />
                                        <figcaption>Development</figcaption>
                                    </figure>
                                </li>
                                <li className="col-12 col-sm-2 col-md-3">
                                    <figure><img src={require("../../img/skills/skills_2.png")} alt="Sports" />
                                        <figcaption>Sports</figcaption>
                                    </figure>
                                </li>
                                <li className="col-12 col-sm-2 col-md-3">
                                    <figure><img src={require("../../img/skills/skills_3.png")} alt="Personal Development" />
                                        <figcaption>Personal Development</figcaption>
                                    </figure>
                                </li>
                                <li className="col-12 col-sm-2 col-md-3">
                                    <figure><img src={require("../../img/skills/skills_4.png")} alt="Design" />
                                        <figcaption>Design</figcaption>
                                    </figure>
                                </li>
                                <li className="col-12 col-sm-2 col-md-3">
                                    <figure><img src={require("../../img/skills/skills_5.png")} alt="Marketing" />
                                        <figcaption>Marketing</figcaption>
                                    </figure>
                                </li>
                                <li className="col-12 col-sm-2 col-md-3">
                                    <figure><img src={require("../../img/skills/skills_6.png")} alt="Photography" />
                                        <figcaption>Photography</figcaption>
                                    </figure>
                                </li>
                                <li className="col-12 col-sm-2 col-md-3">
                                    <figure><img src={require("../../img/skills/skills_7.png")} alt="Health" />
                                        <figcaption>Health</figcaption>
                                    </figure>
                                </li>
                                <li className="col-12 col-sm-2 col-md-3">
                                    <figure><img src={require("../../img/skills/skills_8.png")} alt="Music" />
                                        <figcaption>Music</figcaption>
                                    </figure>
                                </li>
                                <li className="col-12 col-sm-2 col-md-3">
                                    <figure><img src={require("../../img/skills/skills_9.png")} alt="Science" />
                                        <figcaption>Science</figcaption>
                                    </figure>
                                </li>
                                <li className="col-12 col-sm-2 col-md-3">
                                    <figure><img src={require("../../img/skills/skills_10.png")} alt="Language" />
                                        <figcaption>Language</figcaption>
                                    </figure>
                                </li>
                                <li className="col-12 col-sm-2 col-md-3">
                                    <figure><img src={require("../../img/skills/skills_11.png")} alt="Productivity" />
                                        <figcaption>Productivity</figcaption>
                                    </figure>
                                </li>
                                <li className="col-12 col-sm-2 col-md-3">
                                    <figure><img src={require("../../img/skills/skills_12.png")} alt="Teacher Training" />
                                        <figcaption>Teacher Training</figcaption>
                                    </figure>
                                </li>
                            </ol>
                        </div>
                    </section>
                    {/* -- Testimonials-- */}
                    <section className="testimonials container-fluid">
                    { OwlCarousel ?
                        <OwlCarousel className="owl-theme" loop nav margin={10}  responsiveClass="true" {...options}>
                            <div className="item block">
                                <figure><img src={require("../../img/testimonials/testimonials_1.png")} alt="Katie Dall" />
                                    <figcaption>
                                        <p>"I've used crampete to learn dozens of new skills in online courses. If you are thinking of grow your mindset, Crampete is the place to br."</p><span>Katie Dall</span></figcaption>
                                </figure>
                            </div>
                            <div className="item block">
                                <figure><img src={require("../../img/testimonials/testimonials_2.png")} alt="Katie Dall" />
                                    <figcaption>
                                        <p>"I've used crampete to learn dozens of new skills in online courses. If you are thinking of grow your mindset, Crampete is the place to br."</p><span>Katie Dall</span></figcaption>
                                </figure>
                            </div>
                            <div className="item block">
                                <figure><img src={require("../../img/testimonials/testimonials_3.png")} alt="Katie Dall" />
                                    <figcaption>
                                        <p>"I've used crampete to learn dozens of new skills in online courses. If you are thinking of grow your mindset, Crampete is the place to br."</p><span>Katie Dall</span></figcaption>
                                </figure>
                            </div>
                        </OwlCarousel>
                        :
                        null
                    }
                    </section>
                    {/* -- Market Leaders-- */}
                    <section className="market_leaders container-fluid">
                        <div className="container">
                            <h6>Market leaders are talking about us</h6>
                            {OwlCarousel ?
                                <OwlCarousel className="owl-theme" loop nav margin={10}  responsiveClass="true" {...options}>
                                    <div className="item block">
                                        <figure><img src={require("../../img/market_leaders/market_leaders_1.png")} alt="Market Leaders" /></figure>
                                    </div>
                                    <div className="item block">
                                        <figure><img src={require("../../img/market_leaders/market_leaders_2.png")} alt="Market Leaders" /></figure>
                                    </div>
                                    <div className="item block">
                                        <figure><img src={require("../../img/market_leaders/market_leaders_3.png")} alt="Market Leaders" /></figure>
                                    </div>
                                    <div className="item block">
                                        <figure><img src={require("../../img/market_leaders/market_leaders_4.png")} alt="Market Leaders" /></figure>
                                    </div>
                                    <div className="item block">
                                        <figure><img src={require("../../img/market_leaders/market_leaders_5.png")} alt="Market Leaders" /></figure>
                                    </div>
                                    <div className="item block">
                                        <figure><img src={require("../../img/market_leaders/market_leaders_6.png")} alt="Market Leaders" /></figure>
                                    </div>
                                </OwlCarousel>
                                :
                                null
                            }
                     
                        </div>
                    </section>
                    {/* -- Instructor-- */}
                    <section className="instructor">
                        <h3>Become An Instructor</h3>
                        <p>Tech what you know. Crampete gives you the tools and the guide to create an online course that wll help you monetize you knowledge.</p><button>Start Teaching Now</button>
                    </section>
                </main>

            </div>
        )
    }

}

function mapStateToProps(state) {
    debugger;
    return {
        courses: state.courses
    };
}

const mapDispatchToProps = (dispatch) => {
  
    return {
    
        loadAllCourses: () => {  dispatch(actions.loadAllCourses()); }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);

