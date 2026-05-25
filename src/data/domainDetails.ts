export interface DomainDetailInfo {
  uses: string[];
  gallery: { src: string; alt: string }[];
}

export const DOMAIN_ADDITIONAL_DETAILS: Record<string, DomainDetailInfo> = {
  "machine-learning": {
    uses: [
      "E-commerce recommendation engines (like Amazon, Netflix, and Spotify)",
      "Autonomous driving and lane detection systems in modern vehicles",
      "Healthcare diagnostics, disease forecasting, and predictive analysis",
      "Financial credit scoring, fraud detection, and algorithmic trading"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=800",
        alt: "Machine learning neural network visualization"
      },
      {
        src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800",
        alt: "Robotic arm learning complex tasks via AI model"
      },
      {
        src: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=800",
        alt: "Human brain graphic and digital node connections"
      }
    ]
  },
  "programming-in-python": {
    uses: [
      "Automating repetitive file management, spreadsheet calculations, and tasks",
      "Developing backend web applications using Django, Flask, or FastAPI",
      "Writing robust automation test scripts and scrapers for web scraping",
      "Serving as the base for data analysis, AI algorithms, and scientific computation"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
        alt: "Python programming code on a monitor screen"
      },
      {
        src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800",
        alt: "Code editor window showing structured logic blocks"
      },
      {
        src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
        alt: "Clean code structure display on software developer console"
      }
    ]
  },
  "data-science": {
    uses: [
      "Analyzing consumer purchasing patterns for business growth and marketing",
      "Detecting fraudulent banking transactions and mitigating risk",
      "Designing interactive Business Intelligence (BI) dashboards for leadership",
      "Optimizing supply chain routes and logistics scheduling using statistics"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
        alt: "Analyzing digital business charts and metrics"
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
        alt: "Data dashboard showing trends, bar charts and metrics"
      },
      {
        src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800",
        alt: "Business graph analysis on laptop screen with pen"
      }
    ]
  },
  "artificial-intelligence": {
    uses: [
      "Building generative AI engines, text synthesizers, and intelligent chatbots",
      "Developing smart home automation and voice assistant command programs",
      "Automating document summary generation, language translation, and transcription",
      "Creating game intelligence agents and simulation models for virtual environments"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
        alt: "Futuristic digital art representing artificial neural network"
      },
      {
        src: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800",
        alt: "Cyborg face schematic and software intelligence simulation"
      },
      {
        src: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=800",
        alt: "Network server racks with data flows illuminated"
      }
    ]
  },
  "web-development": {
    uses: [
      "Creating highly responsive corporate portfolios and company websites",
      "Designing customizable landing pages for marketing and product launches",
      "Building user interfaces for online tools and dynamic web applications",
      "Deploying basic web portals and online presence modules for small firms"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800",
        alt: "Designer workspace showing responsive web layouts"
      },
      {
        src: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800",
        alt: "Writing stylesheet code for custom website branding"
      },
      {
        src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800",
        alt: "Interface elements wireframing on design board"
      }
    ]
  },
  "full-stack-web-development": {
    uses: [
      "Building modern, scalable Software-as-a-Service (SaaS) web platforms",
      "Creating dynamic e-commerce stores with cart systems and payment gateway hooks",
      "Connecting secure customer login portals to custom backend database tables",
      "Structuring content management networks (CMS) for large-scale publishing"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800",
        alt: "Software engineer typing complex full-stack code"
      },
      {
        src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800",
        alt: "Dual monitors showing frontend layout and backend queries"
      },
      {
        src: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=800",
        alt: "Workspace setup of an active full-stack web developer"
      }
    ]
  },
  "cyber-security": {
    uses: [
      "Running security audits and identifying vulnerability points via penetration testing",
      "Setting up firewalls, threat monitoring, and intrusion detection frameworks",
      "Implementing strong Multi-Factor Authentication (MFA) and data encryption key protocols",
      "Responding to active security incidents, trace monitoring, and forensic analysis"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800",
        alt: "Digital padlock graphic representing cybersecurity protection"
      },
      {
        src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
        alt: "Security operation center dashboard tracking threat maps"
      },
      {
        src: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=800",
        alt: "Abstract code representation of cryptography"
      }
    ]
  },
  "cloud-computing": {
    uses: [
      "Configuring application servers on AWS, Microsoft Azure, or Google Cloud",
      "Establishing automated server database backups and storage lifecycle tasks",
      "Designing scalable cloud network boundaries, security keys, and access systems",
      "Monitoring virtual server loads, auto-scaling thresholds, and service costs"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
        alt: "Global cloud server network visualization"
      },
      {
        src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800",
        alt: "Network technician patching cabling inside a data center"
      },
      {
        src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800",
        alt: "Abstract computing server hardware cluster"
      }
    ]
  },
  "digital-marketing": {
    uses: [
      "Executing Search Engine Optimization (SEO) plans to scale website visitor count",
      "Structuring target social media ads on channels like Instagram, Facebook, and LinkedIn",
      "Creating automated email sequence programs for product onboarding and conversion",
      "Tracking web conversion funnels, visitor drop-off rates, and ad spend ROI"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
        alt: "Digital marketing campaign charts and tools"
      },
      {
        src: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800",
        alt: "Team discussing digital outreach plan with notebooks"
      },
      {
        src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800",
        alt: "Marketing analyst studying target demographic reports"
      }
    ]
  },
  "psychology": {
    uses: [
      "Analyzing employee engagement trends and office satisfaction for HR teams",
      "Leading focus group behavior testing for new products and website styles",
      "Providing foundational coaching, active listening support, and wellness advice",
      "Assisting in conflict resolution and communicative training programs in corporations"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800",
        alt: "Peaceful environment supporting mindfulness and psychology"
      },
      {
        src: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=800",
        alt: "Professional therapist talking with a client in a counseling session"
      },
      {
        src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
        alt: "Workplace communication training workshop"
      }
    ]
  },
  "stock-marketing": {
    uses: [
      "Reviewing technical indicators and price charts for short-term trading plays",
      "Analyzing corporate earnings sheets and balance parameters for long investments",
      "Structuring portfolio allocation plans to balance risk across industry sectors",
      "Simulating derivative hedging strategies to limit equity exposure during volatility"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800",
        alt: "Stock market ticker displaying indices and price changes"
      },
      {
        src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800",
        alt: "Trading analysis application open on computer screen"
      },
      {
        src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800",
        alt: "Financial analyst comparing stock market growth lines"
      }
    ]
  },
  "finance": {
    uses: [
      "Structuring corporate financial statements, journal entries, and ledgers",
      "Auditing accounting logs for compliance and tax filing alignment",
      "Leading capital forecasting, product cost feasibility, and project valuations",
      "Executing treasury operations, funding reviews, and interest rate strategies"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800",
        alt: "Calculators and accounting logs prepared for audit"
      },
      {
        src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800",
        alt: "Accountant highlighting corporate ledger figures"
      },
      {
        src: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=800",
        alt: "Coins stack representing investment growth and finance"
      }
    ]
  },
  "internet-of-things": {
    uses: [
      "Configuring smart home automation products (smart plugs, locks, and sensors)",
      "Deploying environmental sensors to collect air, light, and temperature metrics",
      "Setting up machine telemetry log updates in industrial manufacturing setups",
      "Developing hardware tracking mechanisms for real-time logistics monitoring"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
        alt: "Microprocessor circuitry board displaying LED nodes"
      },
      {
        src: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800",
        alt: "Sensors and prototyping wires on a testing table"
      },
      {
        src: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=800",
        alt: "IoT smart home application on smart device"
      }
    ]
  },
  "embedded-system": {
    uses: [
      "Writing low-level firmware in Embedded C for microcontroller operations",
      "Interfacing sensory inputs (temperature, speed) with digital controller modules",
      "Configuring hardware drivers for consumer electronics and displays",
      "Testing system logic and clock constraints using logic analyzers"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
        alt: "Embedded circuit board with components and wiring"
      },
      {
        src: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=800",
        alt: "Engineer checking electronics waveforms on oscilloscope"
      },
      {
        src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800",
        alt: "Microchip programmer connecting chips on testing panel"
      }
    ]
  },
  "human-resource-management": {
    uses: [
      "Creating applicant screening funnels and leading fresher hiring rounds",
      "Drafting employee offer documentation, contracts, and company manuals",
      "Leading employee performance reviews, satisfaction surveys, and counseling",
      "Structuring workplace training schedules, safety rules, and policy guidelines"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800",
        alt: "Handshake after a successful hiring interview"
      },
      {
        src: "https://images.unsplash.com/photo-1573497193940-653e4108d6d3?q=80&w=800",
        alt: "HR executive presenting team management metrics"
      },
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
        alt: "HR training workshop session in a meeting room"
      }
    ]
  },
  "autocad": {
    uses: [
      "Drafting structured 2D architectural blueprints and room floor plans",
      "Creating precise mechanical component models for factory production lines",
      "Structuring electrical piping layouts and water pathways in construction blueprints",
      "Generating civil elevation projections and side views for public layout designs"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=800",
        alt: "CAD design model showing mechanical schematic details"
      },
      {
        src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800",
        alt: "Architect reviewing architectural blueprint drawing on table"
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
        alt: "Design workstation showing rendering of modern layout"
      }
    ]
  },
  "hybrid-electric-vehicles": {
    uses: [
      "Analyzing EV Battery Management Systems (BMS) for state-of-charge parameters",
      "Configuring traction motor control parameters and regenerative braking loops",
      "Simulating power splits and efficiency charts in hybrid drivetrain models",
      "Reviewing battery pack thermal cooling loops and charging station interfaces"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800",
        alt: "Modern hybrid electric vehicle engine bay layout"
      },
      {
        src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800",
        alt: "Electric car battery charging plug connected"
      },
      {
        src: "https://images.unsplash.com/photo-1558441719-ff34b0524ca7?q=80&w=800",
        alt: "EV power electronics system display console"
      }
    ]
  },
  "programming-in-java": {
    uses: [
      "Developing backend architectures for large enterprise bank databases",
      "Coding native Android applications using Java platform toolkits",
      "Structuring high-volume transactional APIs and web services with Spring Boot",
      "Creating distributed software modules and network socket handlers"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
        alt: "Developer coding Java application on monitor"
      },
      {
        src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800",
        alt: "Clean code structure syntax highlight on coding screen"
      },
      {
        src: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800",
        alt: "Computer showing software builds and automation scripts"
      }
    ]
  },
  "vlsi": {
    uses: [
      "Coding hardware logic modules in Verilog or VHDL descriptors",
      "Simulating transistor-level timing behaviors and chip clock boundaries",
      "Routing micro-level semiconductor components on digital silicon matrices",
      "Validating functional gate test benches for consumer mobile processors"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
        alt: "Circuit chip designing visual on technical computer screen"
      },
      {
        src: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=800",
        alt: "Semiconductor microscopic chip layout details"
      },
      {
        src: "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=800",
        alt: "Silicon wafer details under golden light reflections"
      }
    ]
  },
  "nano-technology": {
    uses: [
      "Developing micro-capsule drug delivery carriers for oncology treatment",
      "Creating robust anti-corrosion surfaces for aviation wing assemblies",
      "Designing high-capacity carbon nanotube nodes for battery upgrades",
      "Engineering advanced nanoscale transistors to increase processing power"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800",
        alt: "Nanotech researcher working on microchip circuits in lab"
      },
      {
        src: "https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?q=80&w=800",
        alt: "Chemical testing vials and microfluidic sensors"
      },
      {
        src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800",
        alt: "Lab micro-structure research analysis on digital screen"
      }
    ]
  },
  "ui-ux-graphic-designing": {
    uses: [
      "Structuring mobile app user journeys and wireframe plans in Figma",
      "Developing corporate logos, visual themes, and style layout guides",
      "Conducting interactive tests to improve web conversion flow indicators",
      "Drafting high-quality vector graphics for banner ads and brochures"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
        alt: "Designing app interface wires in graphical editor"
      },
      {
        src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800",
        alt: "UX designer comparing product layouts on color panels"
      },
      {
        src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800",
        alt: "Graphic designer sketch pad and stylus in creative workspace"
      }
    ]
  },
  "drone-mechanics": {
    uses: [
      "Assembling and calibrating carbon-fiber quadcopter framework panels",
      "Configuring flight controller compass systems and telemetry links",
      "Troubleshooting mechanical camera gimbal stabilizers and rotors",
      "Performing safety flight tests and motor load balance updates"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
        alt: "Industrial drone mechanism assembly and test bench"
      },
      {
        src: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=800",
        alt: "Quadcopter flight checks performed by technician"
      },
      {
        src: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800",
        alt: "Checking drone motors and connectivity boards"
      }
    ]
  },
  "medical-coding": {
    uses: [
      "Converting physician diagnoses notes into standard ICD-10 medical codes",
      "Auditing medical charts to ensure insurance claim filing compliance",
      "Managing database entry tasks inside hospital billing networks",
      "Verifying code correctness to prevent claim rejection delays"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800",
        alt: "Doctor checking health reports on computerized tablet"
      },
      {
        src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800",
        alt: "Healthcare worker updating digital client data sheets"
      },
      {
        src: "https://images.unsplash.com/photo-1584515901367-f1c2a09e03c4?q=80&w=800",
        alt: "Medical folders and hospital billing terminal dashboard"
      }
    ]
  },
  "english-communication": {
    uses: [
      "Delivering structured sales proposals and team project presentations",
      "Writing clear business messages, emails, and client request documentation",
      "Answering recruiter interview questions with confidence and logic",
      "Negotiating terms and leading collaborative business discussions"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
        alt: "Professional presentation speaker leading corporate training"
      },
      {
        src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800",
        alt: "Public speaking training session at a podium"
      },
      {
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800",
        alt: "Business team conversing and collaborating in meeting room"
      }
    ]
  },
  "sap": {
    uses: [
      "Enterprise Resource Planning (ERP) to unify accounting, sales, and manufacturing operations",
      "Financial Accounting and Controlling (SAP FICO) for balance audits and corporate ledger records",
      "Material management and inventory tracking inside global logistics and supply chain setups",
      "Human Capital Management (HCM) for tracking performance, payroll, and staff profiles"
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
        alt: "SAP corporate finance dashboard and charts"
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
        alt: "Enterprise data analytics console showing business stats"
      },
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
        alt: "Enterprise operations team collaborating in a meeting room"
      }
    ]
  }
};
