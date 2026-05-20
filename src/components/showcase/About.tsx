import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Shubham Raj a.k.a LazyCodeX</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a XR game developer and software engineer currently
                    working at Edgefoce Solutions pvt ltd. ! In Sept of 2022 I
                    graduated from Jawaharlal Nehru Architecture and Fine Arts
                    University with B.Tech in Computer Science & Game
                    Development.
                </p>
                <br />
                <p>
                    Thank you for visiting my portfolio. I’ve put a lot of
                    passion into these projects and hope they give you a clear
                    sense of my work. If you’d like to discuss a collaboration
                    or have any questions, I’d love to hear from you via..{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:29octgupta@gmail.com">
                        29octgupta@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From hardware enthusiast to software engineer, I’ve always
                    been driven by a simple question: 'How does this work?' or
                    'Will it work like this if i tweak this' With a background
                    in hands-on troubleshooting and experimenting with stuff and
                    a deep-seated love for building systems from the ground up,
                    I specialize in turning technical curiosity into functional,
                    high-quality things.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me demostrating project to clients:)
                        </sub>
                    </p>
                </div>

                <p>
                    I started programming more seriously in high school,
                    initially learning how to scrape and interact with websites.
                    I went on to do a ton of passion projects, many of them with
                    one of my friends,{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://linkedin.com/in/siddharth-kaza-604a6720a"
                    >
                        Siddharth Kaza
                    </a>
                    . We worked on many projects together, including multiple
                    game projects, apps, and more. One of these projects is
                    viewable on my <Link to="/projects/software">Projects</Link>{' '}
                    page.
                </p>
                <br />
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            When I’m not at my desk, I’m usually busy with my
                            more tangible hobbies. From [tinkering with
                            hardware] to [PC Modding], I love the challenge of
                            building things that exist outside of a code editor.{' '}
                            Some other hobbies I enjoy are working out, cooking,
                            Cycling & playing video games.
                        </p>
                        <br />
                        <p>
                            When I was in college, I made it a priority to stay
                            active beyond the classroom through community
                            volunteering and extracurricular engagement. One of
                            my most rewarding experiences was volunteering at
                            Comic-Con, where I worked alongside diverse teams to
                            manage large-scale logistics. This hands-on
                            involvement helped me develop strong communication
                            and leadership skills that I now bring to my
                            technical projects.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, March 2026
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:29octgupta@gmail.com">
                        29octgupta@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
