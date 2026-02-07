import { Project, Experience, Education, BlogPost, Publication } from './types';

export const PERSONAL_INFO = {
  name: "Han Lee",
  email: "hanhylee@student.ubc.ca",
  location: "Vancouver, BC",
  linkedin: "https://www.linkedin.com/in/han-hyung-lee/",
  github: "https://github.com/hanhylee",
  summary: "Aspiring software developer with project and work experience in React, Java, and Python, and a strong interest in using algorithms and models to derive valuable information from data. Self-starter with strong communication skills and experience working with stakeholders to understand and solve business problems.",
  skills: {
    web: ["React", "Tailwind CSS", "Django", "Spring Boot", "Next.js"],
    languages: ["Python", "JavaScript", "TypeScript", "SQL", "C++", "Java"],
    tools: ["PostgreSQL", "Git", "Docker", "Redis"]
  }
};

export const EXPERIENCE: Experience[] = [
  {
    company: "NPower Canada",
    role: "Program Manager",
    location: "Vancouver, BC",
    period: "March 2025 - Present",
    achievements: [
      "Designed and implemented automated workflows using custom scripts on Microsoft Power Automate for SharePoint, streamlining administrative processes and saving thousands of hours organisation-wide.",
      "Analyzed program outcomes by evaluating qualitative feedback and quantitative data for 1000+ learners, identifying opportunities to enhance delivery and ensure robustness of program benchmarks."
    ]
  },
  {
    company: "Hyper AI",
    role: "Full Stack Developer (Remote, Part-Time)",
    location: "Los Angeles, CA",
    period: "August 2025 - November 2025",
    achievements: [
      "Developed frontend components and services to analyse end-user API usage and manage agentic workflows.",
      "Implemented and documented robust integrations for external tools including Calendly, Zoom and Google Analytics.",
      "Supported application reliability by resolving 50+ user- and internal-reported bugs in a continuous integration and delivery environment."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "HireMelon",
    website: "https://www.hiremelon.com",
    role: "Full Stack Developer",
    techStack: ["Spring Boot", "Java 21", "Next.js", "PostgreSQL", "Redis", "Docker", "JUnit 5", "Mockito"],
    description: [
      "Architected and developed an end-to-end Spring Boot and Next.js application, aggregating job opportunities and intelligently matching candidates through AI-powered analysis.",
      "Engineered a microservices-oriented, distributed system with PostgreSQL 17 and Redis for efficient data analysis of large datasets, implementing secure RESTful APIs with JWT authentication.",
      "Developed sophisticated AI analysis tools leveraging Large Language Models for automated resume generation and qualification scoring, ensuring reliability with comprehensive testing."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Computer Science",
    institution: "University of British Columbia",
    location: "Vancouver, BC",
    period: "September 2025 - Present"
  },
  {
    degree: "Master of Science in Physiology",
    institution: "University of Alberta",
    location: "Edmonton, AB",
    period: "September 2016 - October 2018"
  },
  {
    degree: "Bachelor of Science in Physiology",
    institution: "University of Alberta",
    location: "Edmonton, AB",
    period: "September 2012 - April 2016"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "39442996",
    title: "Activation of peripheral leukocyte migration before spontaneous labor at term",
    authors: ["Han Lee", "Ai Takamizu", "David M Olson", "et al."],
    journal: "American Journal of Obstetrics and Gynecology",
    date: "2024",
    url: "https://pubmed.ncbi.nlm.nih.gov/39442996/",
    abstract: "Term human fetal membranes release chemoattractants near the end of pregnancy that increase in ability to activate and attract an increasing number of leukocytes as gestation advances."
  },
  {
    id: "35694257",
    title: "A Leukocyte Migration Assay Assists Understanding of Interleukin-1β-Induced Leukocyte Migration Into Preterm Mouse Uterus",
    authors: ["Han Lee", "Vaishvi Patel", "David Olson", "et al."],
    journal: "Frontiers in Pharmacology",
    date: "2022",
    url: "https://pubmed.ncbi.nlm.nih.gov/35694257/",
    abstract: "IL-1β stimulates preterm birth in mice by increasing leukocyte activation leading to increased uterine and fetal brain leukocyte invasion."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Navigating a Career Pivot into Computer Science",
    date: "Feb 7, 2026",
    tags: ["Career", "Education", "UBC"],
    excerpt: "My first term in the BCS program at UBC and navigating the transition to Computer Science.",
    content: `
      <p class="mb-4">In 2024, I made the decision to pivot my career into Computer Science and applied to the Bachelor of Computer Science (BCS) program at the University of British Columbia (UBC).</p>
      
      <p class="mb-4">A degree in Computer Science would give me the credibility I need to pursue a career in software engineering, especially since most of my academic training was in the life sciences. This wasn't an easy decision, as it meant taking on the challenge of balancing full-time studies with my existing commitments. The purpose of this blog post is to share my experience and insights with others who may be considering a similar career transition.</p>
      
      <h3 class="text-xl font-bold mb-2">Planning the Pivot</h3>
      <p class="mb-4">A very attractive option for me was UBC's <a href="https://www.cs.ubc.ca/students/undergrad/degree-programs/bcs-program-second-degree" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Bachelor of Computer Science</a> program. It had a strong reputation in computer science and its co-op program, which provides valuable work experience. Importantly, it was a two-year second degree program for students with a background in another field, which was perfect for me. The only thing that worried me was the demanding nature of the program, as it was known for its rigorous curriculum and fast-paced learning environment.</p>

      <p class="mb-4">The other option that I explored was getting a <a href="https://www.bcit.ca/programs/computer-systems-certificate-part-time-5500cert/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Computer Systems Certificate</a> from BCIT with a flex program over two years, and potentially transferring to the <a href="https://www.bcit.ca/programs/computer-systems-diploma-part-time-5500pdiplt/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">CST Flex Diploma</a> program after completing the certificate. This option would have allowed me to go at a slower pace, and would have likely been a more comfortable reskilling process.</p>

      <h3 class="text-xl font-bold mb-2">The Fork in the Road</h3>
      <p class="mb-4">Which to choose? I couldn't figure it out. The annoying thing was that to start studying in UBC's BCS program in September 2026, applications were due a full year in advance, in January 2025. Being the impatient person that I am, I wasn't willing to wait a year to start my new journey. Besides, there were no guarantees that I would get into UBC. The program is competitive with many more applicants than available spots each year.</p>

      <p class="mb-4">So, I just applied to both *shrug*.</p>

      <p class="mb-4">I got accepted into the Computer Systems Certificate program right away. I ended up taking a few intro courses on computer systems and technical writing, but the material wasn't all that challenging or interesting. Still, it was a good way to get back into the swing of things, especially since I hadn't sat through a lecture in about 9 years. I supplemented my learning by taking some online Udemy courses on Python that I could work through at my own pace.</p>
      
      <p class="mb-4">Fast forward to April 2025, I received an acceptance letter from UBC, and I had to make a decision. I had to decide whether to stick with the comfortable and already-started path at BCIT, or take a leap of faith and pursue full-time studies at UBC. I would like to say that I made this decision with careful consideration and weighing the pros and cons of each option, but in reality, I just went with my gut and took the leap. I ended up enrolling in the BCS program at UBC.</p>

      <h3 class="text-xl font-bold mb-2">Starting a New Chapter in My Life</h3>
      <p class="mb-4">When you're in your 30s, you'd think that you'd have a better sense of direction in life. But here I was, starting a new chapter in my life as a student again. There was a lot to get up to speed on, like figuring out what courses to take, how I'd get to and from campus, and how I'd manage my time between classes, assignments, and my full-time job. I figured that I should probably make some friends too, but I wasn't sure how to go about it. It was certainly an anxiety-inducing experience, but I was also excited for what was to come.</p>

      <p class="mb-4">After all, how many people get another chance to chase their dreams?</p>

      <p class="mb-4">I won't go through the entire story of my first term here, but I'll finish this blog post by sharing some of the highlights and insights I gained from the courses I took.</p>

      <h3 class="text-xl font-bold mb-2">CPSC 110: Computation, Programs, and Programming</h3>
      <p class="mb-4">CPSC 110 is a core course (which means that you must take it to graduate) that covers the fundamentals of computer science. You use a functional programming language called <a href="https://www.racket-lang.org/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Racket</a> to learn about programming concepts such as data structures, algorithms, and recursion. It was pretty challenging, but I really enjoyed it. I also highly recommend challenging the exam before starting the BCS program, no matter what your programming background is. The publicly available videos on EdX are good enough for coverage and there are enough practice problems for you to gain a good understanding of the material. The practice exams are especially useful. Challenging the exam allows you to take CPSC 121 and 210 in your first term (and therefore can take CPSC 221 and 213 in your second term). Additionally, CPSC 110 is also very assignment heavy and time-consuming as a course, which you can avoid by challenging the exam.</p>

      <h3 class="text-xl font-bold mb-2">CPSC 121: Models of Computation</h3>
      <p class="mb-4">CPSC 121 is a core course that covers discrete mathematics and logic. I skipped all the lectures for this course and just taught myself the material using the professor's pre-lecture notes and online assignments. I only went to half of the labs, but I kind of wish I went to all of them. Not only is it worth a decent chunk of your grade, but the material is also pretty darn interesting. A good understanding of this course is pretty important for success in future courses like CPSC 221 and CPSC 213.</p>

      <h3 class="text-xl font-bold mb-2">CPSC 210: Software Construction</h3>
      <p class="mb-4">CPSC 210 is a core course that covers object-oriented programming using Java. It focuses on test-driven development and design patterns. I skipped most of the lectures and learned using the EdX videos and online assignments/labs. Midterms 1 and 3 were conceptual while 2 and 4 were coding. The conceptual questions are "gotcha" questions, so make sure you understand the material well. The coding questions are pretty straightforward if you understand the material well, but they are time consuming. Highly recommend grinding Java before going into the midterms and just getting fast at writing code. There is a term project in this course, and it can get time consuming if you choose an ambitious project. It's unlikely this project will be used beyond this course, so I wouldn't stress too much about it and choose something simple. My project was a leetcode journal that will forever sit on my github, collecting dust. I did have to show up to labs to get my labs and project marked, so make sure you plan your schedule accordingly.</p>

      <h3 class="text-xl font-bold mb-2">COMR 398: Introduction to Business Processes and Operations</h3>
      <p class="mb-4">COMR 398 is an introductory course that covers business processes and operations. I took this course as part of my bridging modules, which are the 300-/400-level electives that BCS students need to take to graduate. The course was delivered in a async format with online readings and assignments published weekly and maybe 10-15 in-person lectures in total. The workload for this course was pretty light, and I was able to get through it without too much trouble without attending any of the lectures. That said, the final exam is brutal and unlike the rest of the course, is mainly quantitative. Thankfully, I did the sneaky set of practice questions published by the prof but was never mentioned anywhere else. I'm not sure if it was intentional or not, but it was a lifesaver. Those questions were pretty much the exact same as the questions on the final exam./p>

      <h3 class="text-xl font-bold mb-2">Honorary Mention (not a course): HireMelon</h3>
      <p class="mb-4">While not a course, I did find time to work on a personal project called HireMelon. It's an LLM-powered job application platform that helps students and professionals find jobs and internships. I built it using React and Spring Boot. Check it out at <a href="https://hiremelon.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">hiremelon.com</a></p>

      <h3 class="text-xl font-bold mb-2">Final Thoughts</h3>
      <p class="mb-4">Overall, I really enjoyed my first term in the BCS program. It was a challenging but rewarding experience, and I'm excited to see what the future holds. Currently taking: CPSC 221, CPSC 213, CPSC 330, and MATH 101. Wish me luck!</p>
      
    `
  }
];