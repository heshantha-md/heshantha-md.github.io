import React from "react";
import '@fortawesome/free-regular-svg-icons'
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Swift",
    "Objective-C",
    "UIKit",
    "SwiftUI",
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
    "Postman",
    "Biometric authentication",
    "In-app purchases (StoreKit)",
    "QR payments",
    "Socket.IO",
    "JavaScript",
    "Java",
    "SDLC (Scrum)",
    "Agile",
    "Planning poker",
    "AdMob",
    "Firebase",
    "Google Analytics",
    "Crashlytics",
    "Jira",
    "Confluence",
    "Figma",
    "Zeplin"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Who I am</h1>
                <div className="skill">
                    <p>Hello, I’m Heshantha, an iOS Mobile Application Developer based in Portsmouth, UK. With over six years of experience, I’ve built mobile applications using Swift, SwiftUI, UIKit, and Objective-C. I’ve contributed to a wide range of products across fintech, education, and marine industries, focusing on clean architecture, smooth performance, and strong security practices. My goal is always to create apps that are not only functional, but also intuitive and genuinely helpful to the people who use them.</p>
                    <p>I enjoy working in agile, collaborative environments where clean code, open dialogue, and continuous learning are part of the culture. Over the years, I’ve taken part in every stage of the development process — from early planning and prototyping to release, iteration, and long-term support. I regularly contribute to code reviews, mentor junior developers, and help shape thoughtful solutions that meet both user needs and business goals. Whether building features from scratch or improving existing ones, I always aim to write maintainable, scalable code that makes a difference.</p>
                    <p>I’m currently open to joining a new team where I can grow, share my skills, and take on meaningful challenges. In the meantime, I enjoy building my own products, writing articles, and immersing myself in books that broaden my perspective. I’m always eager to keep learning and pushing the boundaries of what I can do.</p>
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