import wheelitphone from '../images/wheelitphone.png'
import humanizeAI from '../images/humanizeAI.png'
import GraphCrawler1 from '../images/GraphCrawler1.png'
import GraphCrawler2 from '../images/GraphCrawler2.png'
import Resme from '../images/ResMe.png'
import resmephone from '../images/ResMephone.png'
import ourspace from '../images/ourspace.png'
import ourspacephone from '../images/ourspacephone.png'
import homepage_PocketPals from '../images/homepage_PocketPals.png'
import settleup_pocketpals from '../images/settleup_pocketpals.png'
import show from '../images/ss2.png'
import showphone from '../images/ss4.jpg'
import brainTumorDetectionImage from '../images/brain_tumor1.png'
import brainTumorDetectionBg from '../images/brain_tumor2.png'

export const projectdets = [
  {
    id: 0,
    name: 'FriendlyAI',
    startdate: '10/05/2025',
    duration: '15 days',
    TechStack: ['React', 'React Router', 'Google Gemini API'],
    shortdesc: 'Open-source AI-powered creative writing suite',
    im: humanizeAI,       // (Replace with your AI Writing Assistant project image variable)
    backim: wheelitphone, // (Replace with your background image variable if any)
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
    duration: '5 days',
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
    id: 4,
    name: 'OurSpace',
    startdate: '24/07/2023',
    duration: '10 days',
    TechStack: ['React', 'Redux', 'FireBase'],
    shortdesc: 'A blogging website',
    im: ourspace,
    backim: ourspacephone,
    desc: 'Blogs are a fun way of connecting with the world and sharing your ideas and thoughts while also reading blogs from a bunch of more prople. This website intends to provide this experience. Whether you just want to share updates with your family and friends or you want to start a blog and build a broader audience, you can do it all.',
    usage:
      'You can create your own blog with tags and photo, post it on the website, read all othe blogs, filter them out based on the topic you want to read about, like and comment on blogs, and also edit or delete your own blogs.',
  },
  // {
  //   id: 5,
  //   name: 'ResMe',
  //   startdate: '16/07/2023',
  //   duration: '5 days',
  //   TechStack: ['React', 'Redux'],
  //   shortdesc: 'Resume Generater Website',
  //   im: Resme,
  //   backim: resmephone,
  //   desc: 'Your resume communicates your qualifications and your brand—who you are and what makes you different—to employers and recruiters. In a tough job market, you need a resume that helps you stand out in a sea of applicants. This is the CV that gets the job done.',
  //   usage:
  //     'Very easy to use, just enter your details step by step and voila! You have it, your resume ready in minutes. No limit on the number of CVs you can create. Unlimited downloading in PDF. Limitless creativity.',
  // },
]
