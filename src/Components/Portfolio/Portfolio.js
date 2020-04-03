import React from 'react'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

function Portfolio() {
    return (
        <React.Fragment>
            <Nav></Nav>
            <div className="container">
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <img
                                src="https://user-images.githubusercontent.com/46901242/76101089-7706ff80-5f93-11ea-8677-d84d41d231f4.gif"></img>
                            <p className="title">myNotes App</p>
                            <p className="subtitle">Using passport, create, save and delete notes in your own account.</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <img src="https://user-images.githubusercontent.com/46901242/77169411-6ff9ea00-6a87-11ea-9fa3-97e9859a05c6.gif"></img>
                            <p className="title">Fitness Tracker</p>
                            <p className="subtitle"><i>Coming March 13th</i></p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <img src="https://user-images.githubusercontent.com/46901242/77169795-147c2c00-6a88-11ea-907e-1bf906f592d1.gif"></img>
                            <p className="title">Progressive Budget</p>
                            <p className="subtitle"><i>Coming March 18th</i></p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <img src="https://user-images.githubusercontent.com/46901242/77706601-dbb0eb00-6f90-11ea-9bde-b101d0b659d2.gif"></img>
                            <p className="title">User Directory</p>
                            <p className="subtitle"><i>Coming March 20th</i></p>
                        </article>
                    </div>
                </div>
                <br />
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <img src="assets/password-gen.png"></img>
                            <p className="title">Password Generator</p>
                            <p className="subtitle">Need help generating passwords that meet secrity criteria? Look no further.</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <img src="assets/new-favorite-song.png"></img>
                            <p className="title">Lyrics Generator</p>
                            <p className="subtitle">Have a favorite artist? Enter their name and get a random snippet of a song, with the
                  lyrics and link to hear the full-length track.</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <img
                                src="https://user-images.githubusercontent.com/46901242/75725734-b937f480-5ca6-11ea-98a7-612168a5705d.gif"></img>
                            <p className="title">Employee Management System</p>
                            <p className="subtitle">Add, Delete, Update employees all from the command line.</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <img
                                src="https://user-images.githubusercontent.com/46901242/76232239-702af780-61f4-11ea-83a0-970ccd831ee1.gif"></img>
                            <p className="title">Eat da Burger App</p>
                            <p className="subtitle">Create new burgers, eat existing burgers, delete burgers. Hosted on Heroku.</p>
                        </article>
                    </div>
                </div>

                <br />
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <img src="assets/weather-dashboard.png"></img>
                            <p className="title">Weather Dashboard</p>
                            <p className="subtitle">Search by City name on this weather dashboard utilizing APIs</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <img src="assets/note-taker.png"></img>
                            <p className="title">Note Taker</p>
                            <p className="subtitle">Save, delete, update notes that persist in your own account.</p>
                        </article>
                    </div>

                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <img src="assets/developer-profile-gen.png"></img>
                            <p className="title">Developer Profile Generator</p>
                            <p className="subtitle">As a developer I WANT a README generator SO THAT I can easily put together a good README for a new project.</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <img src="assets/team-profile-gen.png"></img>
                            <p className="title">Team Profile Generator</p>
                            <p className="subtitle">A way to organize team-members using javascript, node.js, nodemon, inquirer, and object oriented programming.
                                </p>
                        </article>
                    </div>
                </div>
                <br/>
                    <div className="tile is-ancestor">
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <img src="assets/day-planner.png"></img>
                                <p className="title">Planner</p>
                                <p className="subtitle">Using local storage, save appointments and reminders in this convienent planner.</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <img src="assets/quiz.png"></img>
                                <p className="title">Quiz</p>
                                <p className="subtitle">Play this super simple quiz, finish in time and see how high of a score you can get.</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <img src="assets/refactor.png"></img>
                                <p className="title">Refactor</p>
                                <p className="subtitle">Improved "div soup" with more intuitve HTML tags.</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <img src="assets/portfolio.png"></img>
                                <p className="title">Portfolio</p>
                                <p className="subtitle">Working on responsiveness w/Bootstrap to create my first portfolio of projects.</p>
                            </article>
                        </div>
                    </div>
                    <br/>
                        <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <img
                                        src="https://bulma.io/images/placeholders/256x256.png"></img>
                                    <p className="title">The Store Store</p>
                                    <p className="subtitle"><i>Coming March 26th</i></p>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <img src="https://bulma.io/images/placeholders/256x256.png"></img>
                                    <p className="title">Google Books React Search</p>
                                    <p className="subtitle"><i>Coming March 30th</i></p>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <img
                                        src="https://bulma.io/images/placeholders/256x256.png"></img>
                                    <p className="title">myApp</p>
                                    <p className="subtitle"><i>Coming April 6th</i></p>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <img
                                        src="https://bulma.io/images/placeholders/256x256.png"></img>
                                    <p className="title">Pet Project</p>
                                    <p className="subtitle"><i>Coming April 12th</i></p>
                                </article>
                            </div>
                        </div>
        </div>
                    <Footer></Footer>
                </React.Fragment>

    );
}


export default Portfolio;