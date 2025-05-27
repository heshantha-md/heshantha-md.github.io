import React from "react";
import '@fortawesome/free-regular-svg-icons'
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Swift",
    "Objective-C",
    "UIKit",
    "SwiftUI",
    "Flutter",
    "Dart",
    "React Native",
    "JavaScript",
    "SQL",
    "CoreData",
    "SwiftData",
    "Xcode",
    "Xcode Cloud",
    "Foundation",
    "Dependency Management (CocoaPods & Swift Package Manager)",
    "Unit Testing - XCTest",
    "Core Animation",
    "Core Haptics",
    "Core Bluetooth (BLE)",
    "MapKit",
    "PDFKit",
    "CloudKit",
    "AVFoundation",
    "Accessibility",
    "App Store",
    "TestFlight",
    "Design patterns",
    "MVVM",
    "Clean Architecture",
    "Generics",
    "SOLID",
    "OOP",
    "Data structures and algorithms",
    "SQL",
    "REST API (URLSession & Alamofire)",
    "JSON",
    "Async Await",
    "GCD",
    "NSOperationQueue",
    "Combine",
    "Observation",
    "Actor",
    "Memory profiling (Instruments)",
    "Troubleshooting and debugging",
    "Code smell",
    "CryptoKit",
    "Keychain",
    "Git",
    "Bitbucket",
    "Gitlab",
    "Postman",
    "Biometric authentication",
    "In-app purchases (StoreKit)",
    "QR payments",
    "Socket.IO",
    "Java",
    "SDLC (Scrum)",
    "Agile",
    "Planning poker",
    "AdMob",
    "Firebase",
    "Google Analytics",
    "Crashlytics",
    "Jira",
    "Figma"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Who I am</h1>
                <div className="skill">
                    <p>Hello, I’m Heshantha, a mobile application developer based in Portsmouth, UK. I have more than five years of experience building apps with Swift, Objective-C, plus some hands-on time with React Native & Flutter. I’ve contributed to a wide range of products across fintech, education, and marine industries, focusing on clean architecture, smooth performance, and strong security practices. My goal is always to create apps that are not only functional, but also intuitive and genuinely helpful to the people who use them.</p>
                    <p>I enjoy working in agile, collaborative environments where clean code, open dialogue, and continuous learning are part of the culture. Over the years, I’ve worked across all stages of the development process, including planning, prototyping, release, iteration, and ongoing support. I regularly contribute to code reviews, mentor junior developers, and help shape thoughtful solutions that meet both user needs and business goals. Whether building features from scratch or improving existing ones, I always aim to write maintainable, scalable code that makes a difference.</p>
                    <p>I’m currently open to joining a new team where I can grow, share my skills, and take on meaningful challenges. In the meantime, I enjoy building my own products, writing articles, and immersing myself in books that broaden my perspective. I’m always eager to keep learning and push the boundaries of what I can do. While developing my skills, I also want to contribute to the team I work with by making a positive impact using my skill set.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
        </div>
    </div>
    );
}

export default Expertise;