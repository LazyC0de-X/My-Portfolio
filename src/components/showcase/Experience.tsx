import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>Edgeforce Solutions Pvt Ltd</h2>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://edgeforce.in/'}
                        >
                            <h4>www.edgeforce.in</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>XR Game Developer</h3>
                        <b>
                            <p>April 2023 - May 2026</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Built & contributed to the development of large-scale VR
                    training solutions, helping scale the team and product from
                    early-stage prototypes to production-ready systems.
                    Specialized in Unity, real-time optimization, and
                    hardware-integrated simulations
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Architected and developed immersive VR training
                            systems in Unity, delivering real-time interactive
                            simulations used for vehicle and defense training
                            with high user engagement and repeat usage.
                        </p>
                    </li>
                    <li>
                        <p>
                            Integrated hardware systems including motion
                            platforms and ESP32/Arduino controllers, enabling
                            real-time synchronization between physical inputs
                            and virtual environments.
                        </p>
                    </li>
                    <li>
                        <p>
                            Optimized rendering pipelines using URP, LODs,
                            occlusion culling, and GPU instancing, significantly
                            reducing frame drops and maintaining stable FPS in
                            high-poly VR environments.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborated on AI-assisted VR applications,
                            integrating local AI models via APIs to enable
                            interactive and intelligent user experiences.
                        </p>
                    </li>
                    <li>
                        <p>
                            Executed end-to-end deployment of immersive VR
                            training lab environments across multiple military
                            stations, coordinating large-scale installations,
                            hardware integration, and system configuration while
                            optimizing setup processes to ensure consistent,
                            scalable, and high-performance training experiences
                            in diverse operational conditions.
                        </p>
                    </li>
                    <li>
                        <p>
                            Handled IT infrastructure management and procurement
                            as an added responsibility, streamlining vendor
                            processes and ensuring scalable, reliable system
                            operations in parallel with primary role.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>Veniso Solutions</h2>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://veniso.com/gaming.php'}
                        >
                            <h4>www.veniso.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Game Developer Intern</h3>
                        <b>
                            <p>July 2022 - Sept 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Applied my unity game development knowledge and technical skills
                    to operate on enhancing ui/ux, developed score management, &
                    increased game optimization.
                </p>
                <br />
                <h3 style={styles.indent}>Projects Done:</h3>
                <ul>
                    <li style={styles.row}>
                        <p>• Super Hero Cube</p>
                    </li>
                    <li style={styles.row}>
                        <p>• Bollywood Award Rush</p>
                    </li>
                    <li style={styles.row}>
                        <p>• Infinite flight</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
