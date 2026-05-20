import React from 'react';
import ResumeDownload from '../ResumeDownload';

// Google Drive embed URLs
const computerEmbed = "https://drive.google.com/file/d/1jg8i48DlsKK9hme-n8dUjPiUiSoWLcG8/preview";
const sagaEmbed    = "https://drive.google.com/file/d/1zOkaLNmgUbLBbhsKNz5Z1dbtlrNo_UZh/preview";
const scrollEmbed  = "https://drive.google.com/file/d/1yDVp64gkMkjfKHwAPcGa2WgW7xD64DGF/preview";
const alsEmbed     = "https://drive.google.com/file/d/1JF46otiBoK2fHbdaNCL5CLE0mdO9TYhQ/preview";

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Games & Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite Games & software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Welding Simulator</h2>
                <br />
                <p>
                    VR Welding Simulator is a military training simulator developed in Unity for Edgeforce Solutions with the One-Eme Team, Hyderabad. The project was designed and architected by me to provide army trainees with a safe, smokeless, and realistic welding training experience in VR using OpenXR.
                </p>
                <h4>Key Features:</h4>
                <ul>
                    <li>Realistic MIG, TIG, and ARC welding simulation</li>
                    <li>Advanced hand interaction and cable simulation</li>
                    <li>Real-time welding effects with immersive sound</li>
                    <li>Replay system for reviewing trainee performance</li>
                    <li>Performance scoring based on welding speed, stability, accuracy, and parameter selection</li>
                    <li>Real-time error monitoring and welding guidance meters</li>
                </ul>
                <h4>Training Levels:</h4>
                <ul>
                    <li>Basic: Introduction to welding tools, machine parts, and safety procedures</li>
                    <li>Intermediate: Practical welding on weldable plates with parameter selection, live error feedback, and guided welding assistance</li>
                    <li>Advanced: Hands-on welding practice on military vehicles like the BMP-2, T-72, and military buses for realistic field training experiences.</li>
                </ul>
                <br />
                <div className="captioned-image">
                    <iframe
                        src={computerEmbed}
                        width="100%"
                        height="480"
                        allow="autoplay"
                        style={styles.iframe}
                        title="Welding Simulator Demo"
                    ></iframe>
                    <p style={styles.caption}>
                        <sub>
                            <b>Video 1:</b> Welding Simulator demo video showcasing the ARC welding process with socket-interaction, and real-time feedback systems.
                        </sub>
                    </p>
                </div>

                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/portfolio-website"
                        >
                            <p>
                                <b>[GitHub]</b> - Welding Simulator Demo
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    I'm skipping over a lot of details in exchange for brevity,
                    but I do plan on doing a more in depth breakdown for those
                    interested sometime in the future. To get updates with that
                    project feel free to contact me via mail or linkedin.
                </p>
            </div>
            <div className="text-block">
                <h2>Painting Simulator</h2>
                <br />
                <p>
                    Painting Simulator is a VR-based industrial painting training simulator developed in Unity for Edgeforce Solutions with support from the BEG Center, Roorkee. I designed and implemented the full system architecture and workflow, then built the experience using the OpenXR framework to deliver an immersive training environment with real hardware controls.
                </p>
                <p>
                    I developed the hardware integration pipeline using ESP32 for real-time communication between physical painting equipment and Unity. Multiple signal filtering techniques, including the Kalman filter, smooth and stabilize raw sensor data so the simulator remains accurate and responsive during training.
                </p>
                <h4>Key Features:</h4>
                <ul>
                    <li>Real-time ESP32 hardware integration with Unity</li>
                    <li>Smooth and stable input processing using advanced signal filtering</li>
                    <li>Support for HVLP and Airless painting gun modes</li>
                    <li>Realistic VR painting workflow with guided training</li>
                    <li>Hardware-based interaction for an immersive hands-on experience</li>
                </ul>
                <h4>Training Levels:</h4>
                <ul>
                    <li>Basic: Introduction to painting tools, equipment parts, and safety procedures</li>
                    <li>Intermediate: Zebra board exercises for hand muscle training, painting posture improvement, and guided painting techniques</li>
                    <li>Advanced: Practical training on furniture, car bodies, and industrial vehicles using different painting gun types for real-world simulation experience</li>
                </ul>
                <br />
                <div className="captioned-image">
                    <iframe
                        src={sagaEmbed}
                        width="100%"
                        height="480"
                        allow="autoplay"
                        style={styles.iframe}
                        title="Painting Simulator Demo"
                    ></iframe>
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> Demo video of Painting Simulator showcasing the painting process with real-time hardware interaction and signal filtering for smooth input.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    Painting Simulator was a really fun & challanging project to work on and I learned a lot about hardware integration and signal processing while working on it. I also got to work with some really cool hardware and got to design and build the system from the ground up, which was a great experience. I plan on doing a more in depth breakdown of the project sometime in the future, so if you're interested in that feel free to contact me for updates.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/scottbass47/gsts"
                        >
                            <p>
                                <b>[GitHub]</b> - Painting Simulator Demo
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    A demo will be available on GitHub for Meta Quest with controller support.
                </p>
            </div>
            <div className="text-block">
                <h2>ULSB MK III Training Module</h2>
                <br />
                <p>
                    ULSB MK III Training Module is a VR-based military communication training simulator developed in Unity for Edgeforce Solutions with support from the Arty Center. I led the design and implementation to train personnel in operating and maintaining military communication systems, covering the full workflow from hardware setup through software operation in an immersive environment.
                </p>
                <p>
                    Built using the Meta XR SDK with custom hand-interaction systems, the simulator delivers realistic equipment handling and step-by-step operational guidance. The system also includes real-time diagnostics and feedback to accelerate trainee learning.
                </p>
                <h4>Key Features:</h4>
                <ul>
                    <li>Realistic military communication equipment simulation</li>
                    <li>Custom VR hand interaction system for precise controls</li>
                    <li>Step-by-step guided training workflow with contextual help</li>
                    <li>Hardware setup and software operation training with real components</li>
                    <li>Real-time diagnostics and immersive learning environment</li>
                </ul>
                <h4>Training Levels:</h4>
                <ul>
                    <li>Basic: Introduction to communication equipment parts, components, and their functions</li>
                    <li>Intermediate: Guided setup and operation training with real-time assistance for hardware connections and software usage</li>
                    <li>Advanced: Self-training mode where trainees independently perform complete equipment setup and operation without guidance</li>
                </ul>
                <br />
                <div className="captioned-image">
                    <iframe
                        src={scrollEmbed}
                        width="100%"
                        height="480"
                        allow="autoplay"
                        style={styles.iframe}
                        title="ULSB MK III Training Module Demo"
                    ></iframe>
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> ULSB MK III Training Module demo video showcasing the communication equipment setup with real-time hand interaction and guided training.
                        </sub>
                    </p>
                </div>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/skip-the-scroll"
                        >
                            <p>
                                <b>[GitHub]</b> - ULSB MK III Demo
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    A small demo version of this training module will be available on GitHub for Meta Quest, with no controller required.
                </p>
            </div>

            <div className="text-block">
                <h2>ALS Maintenance Training Module</h2>
                <br />
                <p>
                    ALS Maintenance Training Module — A VR-based military maintenance training simulator developed in Unity for training military personnel in understanding the complete working and maintenance process of ALS vehicle systems. Built using the Meta XR SDK with custom hand tracking and gesture interaction systems, the simulator provides an immersive and practical learning experience for trainees.
                </p>
                <p>
                    The training module focuses on in-depth understanding of engine systems, gear mechanisms, cooling systems, and overall vehicle maintenance workflows. High-quality technical animations are used to visually explain the internal working of different engine components and systems in detail.
                </p>
                <h4>Key Features:</h4>
                <ul>
                    <li>Advanced VR-based military vehicle maintenance training</li>
                    <li>Custom hand tracking and gesture interaction system</li>
                    <li>Detailed engine and mechanical system visualization</li>
                    <li>High-quality animations for explaining internal working processes</li>
                    <li>Hands-on disassembly and assembly training modules</li>
                    <li>Interactive learning environment for practical maintenance training</li>
                </ul>
                <h4>Training Modules:</h4>
                <ul>
                    <li>Basic: Introduction to ALS truck parts, engine systems, gears, and cooling components</li>
                    <li>Intermediate: Guided learning with detailed animations explaining system workflows and maintenance procedures</li>
                    <li>Advanced: Practical hands-on training involving assembly and disassembly of engine parts and mechanical systems of the ALS truck for real-world maintenance simulation.</li>
                </ul>
                <br />
                <div className="captioned-image">
                    <iframe
                        src={alsEmbed}
                        width="100%"
                        height="480"
                        allow="autoplay"
                        style={styles.iframe}
                        title="ALS Maintenance Training Module Demo"
                    ></iframe>
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 4:</b> ALS Maintenance Training Module demo video showcasing the engine system visualization and maintenance training workflow with hand tracking interaction.
                        </sub>
                    </p>
                </div>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/skip-the-scroll"
                        >
                            <p>
                                <b>[GitHub]</b> - ALS Maintenance Training Module Demo
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    A small demo version of this training module will be available on GitHub for Meta Quest, with no controller required.
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    iframe: {
        width: '100%',
        height: 480,
        border: 'none',
        borderRadius: 4,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;