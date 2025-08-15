import wheelitphone from '../images/wheelitphone.png'
import humanizeAI from '../images/humanizeAI.png'
import GraphCrawler1 from '../images/GraphCrawler1.png'
import GraphCrawler2 from '../images/GraphCrawler2.png'
import DSASolver1 from '../images/DSA-Solver  (1).png'
import DSASolver from '../images/DSA-Solver  (2).png'
import homepage_PocketPals from '../images/homepage_PocketPals.png'
import settleup_pocketpals from '../images/settleup_pocketpals.png'
import brainTumorDetectionImage from '../images/brain_tumor1.png'
import brainTumorDetectionBg from '../images/brain_tumor2.png'

export const projectdets = [
  {
    id: 4,
    name: 'FriendlyAI',
    startdate: '10/05/2025',
    duration: '15 days',
    TechStack: ['React', 'React Router', 'Google Gemini API'],
    shortdesc: 'Open-source AI-powered creative writing suite',
    im: humanizeAI,       // (Replace with your AI Writing Assistant project image variable)
    backim: humanizeAI, // (Replace with your background image variable if any)
    desc: `An all-in-one AI writing assistant designed for authors, screenwriters, and creators. 
This open-source suite offers powerful tools for every stage of the writing process—from brainstorming and paraphrasing to manuscript analysis and tone optimization. 
Built as a free alternative to paid platforms, it leverages the Google Gemini API to provide nuanced, context-aware writing assistance across multiple creative formats.`,
    usage: `Use this suite to enhance your writing craft with tools like enhanced paraphrasing, advanced grammar and style checking, readability optimization, tone analysis, manuscript management, scene building, plot structuring, and character development assistance. 
Perfect for novelists, screenwriters, and creative writers looking to polish their work with AI-powered precision.`,

    link1: 'https://friendly-ai-h1h5.vercel.app/',
    link2: 'https://github.com/apoorvaa227/Friendly-AI',
  },
  {
    id: 1,
    name: 'Traversal Visualizer',
    startdate: '20/07/2025',
    duration: '10 days',
    TechStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Icons'],
    shortdesc: 'Interactive pathfinding algorithm visualizer',
    im: GraphCrawler1,      // replace with your project image variable
    backim: GraphCrawler2, // replace with background image variable if any
    desc: `algo-traverse is a React-based interactive tool that visualizes various pathfinding and graph traversal algorithms like BFS, DFS, and Dijkstra's algorithm. 
It features an intuitive grid interface allowing users to create walls, set start/end points, and watch algorithms explore the grid in real time. 
Designed with responsive Tailwind CSS styling, this tool provides performance metrics and detailed visualization to help users understand algorithm behaviors.`,
    usage: `Use the interactive grid to set start and end points, build obstacles, and select algorithms to visualize their execution step-by-step. 
Ideal for students, educators, and developers interested in learning or demonstrating pathfinding concepts with real-time feedback.`,
    link1: 'https://traversal-one.vercel.app/',
    link2: 'https://github.com/apoorvaa227/algo-traverse',
  },
  {
    id: 2,
    name: 'BRAIN TUMOR DETECTION',
    startdate: '15/11/2024',
    duration: '45 days',
    TechStack: ['Python', 'Flask', 'FastAPI', 'React', 'Gunicorn', 'VGG16 CNN', 'ACEA', 'Fuzzy C-Means', 'GLCM', 'EDN-SVM'],
    shortdesc: 'CNN-based brain tumor detection using MRI scans with 96.59% accuracy',
    im: brainTumorDetectionBg,    // Replace with your project image variable
    backim: brainTumorDetectionImage,   // Replace with background image variable if any
    desc: `This project implements an advanced brain tumor detection system using MRI scans, combining techniques like Adaptive Contrast Enhancement Algorithm (ACEA), Fuzzy C-Means segmentation, Gray Level Co-occurrence Matrix (GLCM) feature extraction, and an Ensemble Deep Neural Network - Support Vector Machine (EDN-SVM) classifier. 
It achieves high accuracy (96.59%), sensitivity (94%), and specificity (96%), supported by robust preprocessing and segmentation methods to enhance tumor detection.`,
    usage: `To get started:
1. Create and activate a Python environment with Python 3.10.6.
2. Install dependencies via 'pip install -r requirements.txt'.
3. Start the backend server with 'gunicorn app:app'.
4. In a separate terminal, navigate to the React client folder, install dependencies with 'npm install', and launch the front-end using 'npm start'.
5. Open http://localhost:3000 in your browser to upload MRI scans and receive tumor detection predictions.
The application features a React front-end that interacts with a Flask/FastAPI backend serving a pretrained VGG16 model. It is optimized for scalability with caching and production-grade server deployment.`,
    notes: `The project’s research paper was accepted at ICICC-2025 and will be published in Springer LNNS, highlighting its academic credibility. This tool supports healthcare professionals and researchers in early tumor diagnosis to potentially reduce severe physical disabilities.`,

    link1: 'https://driveseed.org/file/bSioFQrnV6AfuCpNCAVs',
    link2: 'https://github.com/apoorvaa227/Brain_Tumor_Detection/',
  },
  {
    id: 3,
    name: 'pocketpals',
    startdate: '01/12/2024',
    duration: '20 days',
    TechStack: ['MongoDB', 'Express.js', 'React', 'Node.js (MERN Stack)'],
    shortdesc: 'Splitwise clone for tracking and managing shared expenses',
    im: settleup_pocketpals,       // Replace with your PocketPals project image variable
    backim: homepage_PocketPals, // Replace with background image variable if any
    desc: `PocketPals is a bill-splitting web application inspired by Splitwise. 
It helps users track and manage shared expenses within groups, allowing multiple users to add expenses, split costs easily, and calculate individual balances. 
The app keeps clear records of who owes whom, making group expense management seamless and transparent.`,
    usage: `To run PocketPals locally:
1. Install dependencies in client and server folders using 'npm install'.
2. Start the server by running 'node app.js' in the server directory.
3. Start the React client with 'npm start' in the client directory.
4. Open http://localhost:3000 in your browser to access the app.
Ideal for groups, friends, and roommates to track shared expenses efficiently.`,

    link1: 'https://pocket-pals-beige.vercel.app/',
    link2: 'https://github.com/apoorvaa227/PocketPals',
  },
  {
    id: 0,
    name: 'AlgoGenius-AI',
    startdate: '24/07/2025',
    duration: '25 days',
    TechStack: ['React', 'Groq API ', 'prisma', 'Tailwind CSS'],
    shortdesc: 'AI DSA Solver and Mentor ',
    im: DSASolver,
    backim: DSASolver1,
    desc: "AlgoGenius is a comprehensive web application designed to help users master Data Structures and Algorithms (DSA) through interactive, AI-driven practice. It provides detailed, step-by-step solutions for a vast database of problems across various topics. Leveraging the power of the Groq API, AlgoGenius offers educational and clear explanations, code solutions, complexity analysis, and dry run examples, making complex concepts easy to understand for students and professionals preparing for technical interviews.",
    usage: "To run AlgoGenius locally:\n1. Clone the repository: `git clone https://github.com/apoorvaa227/AlgoGenius.git`\n2. Navigate to the project directory: `cd AlgoGenius`\n3. Install dependencies: `pip install -r requirements.txt`\n4. Set up your Groq API key in a `.env` file.\n5. Run the Flask application: `flask run` or `python app.py`\n6. Access the app at `http://localhost:5000` in your web browser.",
    link1: 'https://github.com/apoorvaa227/AlgoGenius',
    link2: 'https://algogenius.onrender.com/',
  }
]
