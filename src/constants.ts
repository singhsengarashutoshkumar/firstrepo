import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Ashutosh",
  role: "Cloud Engineering Student",
  tagline: "Continuously learning and improving my skills in cloud engineering.",
  about: "I am Ashutosh, a student dedicated to mastering the fundamentals of cloud infrastructure. Currently, I am focusing my efforts on learning AWS, Linux, and Networking. My goal is to grow into a capable Cloud Engineer through consistent practice and problem-solving. I believe in the philosophy of continuous improvement and strive to build reliable, efficient systems.",
  email: "singhsengarashutoshkumar@gmail.com",
  linkedin: "https://linkedin.com/in/ashutosh",
  github: "https://github.com/ashutosh",
  skills: [
    {
      category: "Cloud Infrastructure",
      skills: [
        { name: "AWS (EC2, S3, IAM)", level: 60 },
        { name: "CloudFront & Route 53", level: 50 }
      ]
    },
    {
      category: "Core Networking",
      skills: [
        { name: "TCP/IP & DNS", level: 70 },
        { name: "HTTP/HTTPS Protocols", level: 75 }
      ]
    },
    {
      category: "Operating Systems",
      skills: [
        { name: "Linux (Ubuntu)", level: 80 },
        { name: "Basic Shell Scripting", level: 55 }
      ]
    },
    {
      category: "Development Tools",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code Environment", level: 90 }
      ]
    },
    {
      category: "Programming Fundamentals",
      skills: [
        { name: "Python", level: 65 }
      ]
    }
  ],
  projects: [
    {
      title: "Static Site Implementation",
      description: "A project focused on hosting a static website using AWS S3 and CloudFront. This allowed me to practice configuring global content delivery and domain management via Route 53.",
      tags: ["AWS", "S3", "CloudFront"],
      github: "https://github.com/ashutosh/aws-static-site"
    },
    {
      title: "Server Configuration Practice",
      description: "An exercise in setting up and securing an Ubuntu server. I focused on implementing basic security measures and understanding system administration fundamentals.",
      tags: ["Linux", "Security", "Ubuntu"],
      github: "https://github.com/ashutosh/linux-hardening"
    }
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "In Progress",
      status: "In Progress"
    }
  ],
  blogPosts: [
    {
      title: "My Journey with AWS S3",
      excerpt: "Reflecting on the process of setting up my first storage bucket and understanding the basics of cloud storage.",
      date: "2024.03.15",
      readTime: "5 min",
      link: "#"
    },
    {
      title: "Learning the Linux Terminal",
      excerpt: "A collection of notes on the essential commands I use daily while learning system administration.",
      date: "2024.03.10",
      readTime: "8 min",
      link: "#"
    }
  ]
};
