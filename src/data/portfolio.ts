import { Skill, Project, Experience, SocialLink, NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const skills: Skill[] = [
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Solidity', level: 90, category: 'blockchain' },
  { name: 'Ethereum', level: 85, category: 'blockchain' },
  { name: 'Smart Contracts', level: 90, category: 'blockchain' },
  { name: 'Web3.js', level: 90, category: 'blockchain' },
  { name: 'Ethers.js', level: 85, category: 'blockchain' },
  { name: 'Hardhat', level: 80, category: 'blockchain' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'Redux', level: 80, category: 'frontend' },
  { name: 'TailwindCSS', level: 90, category: 'frontend' },
  { name: 'GraphQL', level: 75, category: 'backend' },
  { name: 'Express', level: 85, category: 'backend' },
  { name: 'MongoDB', level: 80, category: 'backend' },
  { name: 'PostgreSQL', level: 75, category: 'backend' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'DeFi Yield Aggregator',
    description: 'A decentralized finance platform that automatically optimizes yield farming strategies across multiple protocols.',
    technologies: ['React', 'Solidity', 'Ethers.js', 'Hardhat', 'TailwindCSS'],
    imageUrl: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/username/defi-yield',
    category: 'blockchain',
  },
  {
    id: 2,
    title: 'NFT Marketplace',
    description: 'A full-featured NFT marketplace allowing users to mint, buy, sell and auction digital collectibles.',
    technologies: ['React', 'Next.js', 'Solidity', 'IPFS', 'Ethers.js', 'TypeScript'],
    imageUrl: 'https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    projectUrl: 'https://nft-marketplace.example.com',
    githubUrl: 'https://github.com/username/nft-marketplace',
    category: 'blockchain',
  },
  {
    id: 3,
    title: 'DAO Governance Platform',
    description: 'A decentralized autonomous organization platform with proposal creation, voting, and treasury management.',
    technologies: ['React', 'TypeScript', 'Solidity', 'The Graph', 'Web3.js'],
    imageUrl: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    projectUrl: 'https://dao-platform.example.com',
    githubUrl: 'https://github.com/username/dao-platform',
    category: 'blockchain',
  },
  {
    id: 4,
    title: 'Crypto Dashboard',
    description: 'An analytics dashboard tracking cryptocurrency prices, portfolio performance, and market trends.',
    technologies: ['React', 'Redux', 'D3.js', 'CoinGecko API', 'TailwindCSS'],
    imageUrl: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    projectUrl: 'https://crypto-dashboard.example.com',
    githubUrl: 'https://github.com/username/crypto-dashboard',
    category: 'frontend',
  },
  {
    id: 5,
    title: 'Blockchain Explorer',
    description: 'A block explorer for viewing transactions, addresses, blocks, and smart contracts on multiple blockchain networks.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Web3.js', 'Ethers.js'],
    imageUrl: 'https://images.pexels.com/photos/8370380/pexels-photo-8370380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    projectUrl: 'https://blockchain-explorer.example.com',
    githubUrl: 'https://github.com/username/blockchain-explorer',
    category: 'fullstack',
  },
  {
    id: 6,
    title: 'DApp Starter Kit',
    description: 'A comprehensive starter kit for building decentralized applications with best practices and scaffolding.',
    technologies: ['React', 'Hardhat', 'Solidity', 'Ethers.js', 'TypeScript', 'TailwindCSS'],
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/username/dapp-starter',
    category: 'fullstack',
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Senior Blockchain Developer',
    company: 'DeFi Protocol Inc.',
    duration: 'Jan 2023 - Present',
    description: 'Leading the development of smart contracts and frontend interfaces for a decentralized lending protocol. Implemented automated testing, security audits, and gas optimization strategies.',
    technologies: ['Solidity', 'React', 'TypeScript', 'Hardhat', 'Ethers.js'],
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Web3 Innovations',
    duration: 'Mar 2021 - Dec 2022',
    description: 'Developed and maintained multiple blockchain-based applications. Created responsive frontends and integrated with various blockchain networks. Worked with cross-functional teams to deliver complex features.',
    technologies: ['React', 'Node.js', 'Solidity', 'MongoDB', 'Web3.js'],
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'TechStart Solutions',
    duration: 'Jun 2019 - Feb 2021',
    description: 'Built responsive web applications using React and related technologies. Implemented state management, optimized performance, and created reusable component libraries.',
    technologies: ['React', 'Redux', 'JavaScript', 'CSS3', 'HTML5'],
  },
  {
    id: 4,
    role: 'Smart Contract Developer',
    company: 'Blockchain Foundation',
    duration: 'Jan 2018 - May 2019',
    description: 'Contributed to open-source blockchain projects. Developed and audited smart contracts for various use cases including token standards, voting systems, and multi-signature wallets.',
    technologies: ['Solidity', 'Web3.js', 'Truffle', 'JavaScript'],
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/username',
    icon: 'Github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/username',
    icon: 'Linkedin',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/username',
    icon: 'Twitter',
  },
  {
    platform: 'Medium',
    url: 'https://medium.com/@username',
    icon: 'FileText',
  },
];

export const personalInfo = {
  name: 'Alex Morgan',
  title: 'Blockchain Developer & Full Stack Engineer',
  email: 'contact@alexmorgan.dev',
  location: 'San Francisco, CA',
  bio: 'Passionate blockchain developer and full stack engineer with 5+ years of experience building decentralized applications and web platforms. Specialized in Ethereum ecosystem, smart contract development, and creating seamless user experiences with React.',
};