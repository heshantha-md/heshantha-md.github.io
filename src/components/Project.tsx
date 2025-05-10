import '../assets/styles/Project.scss';
import Chip from '@mui/material/Chip';
import BuckitLogo from '../assets/images/app_logos/buckitx512.jpg';
import MathbetLogo from '../assets/images/app_logos/mathbetx512.jpg';

function Project() {
    return(
        <div className="projects-container" id="projects">
            <h1>App Store Publications</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://apps.apple.com/gb/app/buckit/id6744845865" target="_blank" rel="noreferrer"><img src={BuckitLogo} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://apps.apple.com/gb/app/buckit/id6744845865" target="_blank" rel="noreferrer"><h2>Buckit{" "}<Chip className='chip' label="SwiftUI" /></h2></a>
                    <p>This app helps you take charge of your financial goals — one bucket at a time. Track your expenses as you go, and make confident spending choices.</p>
                </div>
                <div className="project">
                    <a href="https://apps.apple.com/gb/app/mathbet/id6471019545" target="_blank" rel="noreferrer"><img src={MathbetLogo} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://apps.apple.com/gb/app/mathbet/id6471019545" target="_blank" rel="noreferrer"><h2>MathBet{" "}<Chip className='chip' label="SwiftUI" /></h2></a>
                    <p>Welcome to MathBet, the place where math enthusiasts and learners alike come to test their skills and speed against challenging arithmetic questions.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;