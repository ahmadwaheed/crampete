import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <footer id="footer">
                <nav className="footer_main_menu">
                    <ol>
                        <li><a href="#!" title="About Us">About Us</a></li>
                        <li><a href="#!" title="Become an Instructor">Become an Instructor</a></li>
                        <li><a href="#!" title="Blog">Blog</a></li>
                        <li><a href="#!" title="Careers">Careers</a></li>
                        <li><a href="#!" title="Resources">Resources</a></li>
                    </ol>
                </nav>
                <nav className="footer_sub_menu">
                    <ol>
                        <li>
                            <p>2017 - Crampete. All right reserved</p>
                        </li>
                        <li><a href="#!" title="Terms">Terms</a></li>
                        <li><a href="#!" title="Privacy Policy and Cookie Plicy">Privacy Policy and Cookie Plicy</a></li>
                        <li><a href="#!" title="Terms">Intellectual Property</a></li>
                    </ol>
                </nav>
            </footer>
        )
    }
}