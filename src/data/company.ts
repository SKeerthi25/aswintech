import type { ServiceItem, ProjectItem, IndustryItem, FaqItem, BlogPostItem, CustomerReview, ProcessStep } from '../types';

export const COMPANY_DETAILS = {
  name: 'ASWIN TECH LTD',
  tagline: 'Smart Security. Reliable Electrical Solutions.',
  subtitle: 'Professional CCTV installation and complete electrical services for homes and businesses across Croydon and surrounding areas.',
  address: '17 Tavistock Court, Tavistock Road, Croydon CR0 2AL, UK',
  addressLine1: '17 Tavistock Court, Tavistock Road',
  city: 'Croydon',
  postcode: 'CR0 2AL',
  country: 'United Kingdom',
  phone: '07468 602458',
  phoneRaw: '07468602458',
  email: 'tech@aswincctv.com',
  website: 'aswintechltd.co.uk',
  websiteFull: 'https://aswintechltd.co.uk',
  serviceAreas: [
    'Croydon',
    'South London',
    'Purley',
    'Sutton',
    'Bromley',
    'Mitcham',
    'Thornton Heath',
    'Addiscombe',
    'Coulsdon',
    'Surrounding Areas'
  ],
  mission: 'To provide dependable security and electrical solutions with professional service and attention to detail.',
  values: [
    { title: 'Reliability', desc: 'Punctual, transparent, and consistent execution on every project, large or small.' },
    { title: 'Professionalism', desc: 'Certified expertise with immaculate standards of workmanship and customer service.' },
    { title: 'Quality', desc: 'Top-tier equipment, commercial-grade wiring, and precision engineering for long-lasting performance.' },
    { title: 'Safety', desc: 'Strict compliance with UK electrical standards (BS 7671) and security best practices.' },
    { title: 'Customer Satisfaction', desc: 'Clear communication, tidy installations, and dedicated ongoing support.' }
  ]
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'cctv-installation',
    title: 'CCTV Installation',
    category: 'cctv',
    shortDesc: 'Professional CCTV systems for homes, offices, shops and commercial properties.',
    fullDesc: 'Custom-designed HD & 4K CCTV surveillance installations tailored to protect your home, retail store, office, or commercial complex. We handle cabling, camera placement, network configuration, and mobile remote access setup.',
    iconName: 'Camera',
    badge: 'Popular',
    features: ['4K Ultra HD & Night Vision', 'Smart Motion & AI Detection', 'Mobile Phone Live View', 'Weatherproof Outdoor Enclosures', 'Discreet Internal Cabling'],
    benefits: ['Deter intruders and vandalism', '24/7 continuous recording & remote access', 'Lower property insurance premiums', 'Provide admissible evidence when needed'],
    whatsIncluded: [
      'Comprehensive property risk & blindspot assessment',
      'Installation of high-definition turret/bullet/dome cameras',
      'NVR/DVR recording box setup with high-capacity storage',
      'Clean concealed wiring & trunking',
      'Mobile app configuration on Apple & Android devices',
      'Full user training and system hand-over'
    ],
    processSteps: [
      { title: 'Site Inspection', desc: 'We assess property entry points and camera viewing angles.' },
      { title: 'System Specification', desc: 'We select ideal cameras (4K, PTZ, ColorVu night vision).' },
      { title: 'Installation & Wiring', desc: 'Neat cabling, mounting, and weatherproof sealings.' },
      { title: 'App & Network Setup', desc: 'Connecting NVR to your network for phone & remote access.' }
    ],
    faqs: [
      { question: 'Can I view camera footage on my mobile phone?', answer: 'Yes! All our modern CCTV systems allow instant remote live viewing and playback from smartphones, tablets, and PCs.' },
      { question: 'How long is video footage stored?', answer: 'Depending on the hard drive size and motion recording settings, typical storage ranges from 14 to 30+ days of continuous recording.' }
    ],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'cctv-maintenance',
    title: 'CCTV Maintenance',
    category: 'cctv',
    shortDesc: 'Camera inspection, troubleshooting, maintenance and system upgrades.',
    fullDesc: 'Ensure your security cameras remain operational 24/7. Our maintenance service includes lens cleaning, firmware updates, power check, hard drive health inspection, and camera re-alignment.',
    iconName: 'ShieldCheck',
    features: ['Lens & Glass Cleaning', 'Hard Drive Health Diagnostics', 'Power Supply & BNC Check', 'Firmware & Cyber Security Updates', 'Angle Re-Alignment'],
    benefits: ['Prevent surprise system outages', 'Maintain crystal-clear image quality', 'Extend system lifespan', 'Ensure legal compliance for commercial recording'],
    whatsIncluded: [
      'Complete optical & physical camera checkup',
      'Hard drive bad sector scan & recording test',
      'Infrared & night vision verification',
      'Network connection stability audit',
      'Detailed maintenance report & compliance stamp'
    ],
    processSteps: [
      { title: 'System Audit', desc: 'Testing all channel inputs, power supplies, and recording feeds.' },
      { title: 'Hardware Servicing', desc: 'Cleaning optics, tightening mounts, inspecting cables.' },
      { title: 'Software Check', desc: 'Updating firmware and checking motion alert triggers.' }
    ],
    faqs: [
      { question: 'How often should CCTV be serviced?', answer: 'We recommend servicing home systems annually and commercial systems every 6 months to maintain optimal performance.' }
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'cctv-repair',
    title: 'CCTV Troubleshooting & Repair',
    category: 'cctv',
    shortDesc: 'Rapid troubleshooting and repair of offline, damaged, or malfunctioning cameras.',
    fullDesc: 'Experiencing black screens, lost video signals, corrupt hard drives, or flickering feeds? Our technicians diagnose and repair all brands of CCTV equipment fast.',
    iconName: 'Wrench',
    features: ['Signal Loss Diagnosis', 'Power Supply Replacement', 'Hard Drive Replacement', 'Re-cabling & Connector Fixes', 'NVR/DVR Recovery'],
    benefits: ['Restore security coverage quickly', 'Save money by repairing existing hardware', 'Fix connectivity & app notifications'],
    whatsIncluded: [
      'On-site fault diagnosis',
      'Cable continuity and power voltage test',
      'Component repair or swap',
      'System re-commissioning'
    ],
    processSteps: [
      { title: 'Fault Diagnostic', desc: 'Isolating whether issue is cable, camera, power supply, or NVR.' },
      { title: 'Repair Execution', desc: 'Replacing faulty parts with high-grade components.' }
    ],
    faqs: [
      { question: 'Can you repair a system installed by another company?', answer: 'Yes! We repair and service CCTV systems regardless of who originally installed them.' }
    ],
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'cctv-upgrades',
    title: 'CCTV System Upgrades',
    category: 'cctv',
    shortDesc: 'Upgrade old blurry analogue cameras to crisp 4K IP smart surveillance.',
    fullDesc: 'Transform legacy low-resolution security cameras into modern smart surveillance systems with human/vehicle detection, full-color night vision, and instant mobile alerts.',
    iconName: 'Cpu',
    features: ['Analogue to IP Conversion', 'Full-Color Night Vision (ColorVu)', 'AI Smart Intrusion Detection', 'Higher Resolution (4K UHD)', 'Cloud & Hybrid Backup'],
    benefits: ['Clear facial and vehicle license plate recognition', 'Fewer false alarms from rain or animals', 'Modernize infrastructure without full rewiring where applicable'],
    whatsIncluded: [
      'Evaluation of existing cabling infrastructure',
      'High-spec IP or HD-TVI camera upgrade',
      'Next-generation AI-powered NVR recorder',
      'Mobile app migration & setup'
    ],
    processSteps: [
      { title: 'Infrastructure Check', desc: 'Determining if existing coax/Cat5 cables can be reused.' },
      { title: 'Hardware Upgrade', desc: 'Swapping old cameras for 4K smart sensors.' }
    ],
    faqs: [
      { question: 'Do I need to replace my existing cables to upgrade?', answer: 'Not always. We can upgrade coaxial systems using HD-TVI technology up to 8MP without replacing wiring.' }
    ],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'residential-cctv',
    title: 'Residential CCTV',
    category: 'cctv',
    shortDesc: 'Tailored home security camera packages for houses, flats, and driveways.',
    fullDesc: 'Protect your family and property with discreet, high-definition residential CCTV. Cover driveways, front doors, gardens, and alleyways with smart phone monitoring.',
    iconName: 'Home',
    features: ['Driveway & Perimeter Guard', 'Discreet White/Black Turrets', 'Two-Way Audio Talkback', 'Smart Human Motion Push Alerts', 'No Monthly Subscription Fees'],
    benefits: ['Total peace of mind while away on holiday', 'Record delivery drivers and visitors', 'Protect vehicles parked outside'],
    whatsIncluded: [
      'Front & rear garden coverage planning',
      'Clean internal or hidden external wiring',
      'Smartphone app setup for all family members',
      'Monitor output option for TV display'
    ],
    processSteps: [
      { title: 'Home Assessment', desc: 'Identifying vulnerable entry points.' },
      { title: 'Neat Installation', desc: 'Concealed wiring that matches your home exterior.' }
    ],
    faqs: [
      { question: 'Will the cameras work in total darkness?', answer: 'Yes, our cameras feature built-in IR night vision or ColorVu full-color night technology.' }
    ],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'commercial-cctv',
    title: 'Commercial CCTV',
    category: 'cctv',
    shortDesc: 'Enterprise-grade multi-camera surveillance for shops, offices, warehouses and sites.',
    fullDesc: 'High-density commercial CCTV systems engineered for business security, staff safety, stock protection, and GDPR-compliant video management.',
    iconName: 'Building2',
    features: ['Multi-Site Remote Management', 'POS Retail Integration', 'Perimeter Intrusion Analytics', 'Vandal-Proof Heavy Duty Domes', 'GDPR Data Compliance Setup'],
    benefits: ['Prevent stock theft and shoplifting', 'Monitor staff & health and safety', 'Remote security management across sites'],
    whatsIncluded: [
      'Comprehensive commercial risk mapping',
      'Industrial NVR rack cabinet setup',
      'Multi-screen monitoring station setup',
      'Staff permission hierarchy & audit logs'
    ],
    processSteps: [
      { title: 'Commercial Audit', desc: 'Analyzing foot traffic, high-value assets, and access doors.' },
      { title: 'Deployment', desc: 'Out-of-hours installation available to avoid business disruption.' }
    ],
    faqs: [
      { question: 'Can we install CCTV outside business hours?', answer: 'Yes! We offer flexible weekend and evening scheduling to ensure zero disruption to your daily operations.' }
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'lighting-installation',
    title: 'Lighting Installation',
    category: 'electrical',
    shortDesc: 'Indoor, outdoor and commercial lighting installation and LED upgrades.',
    fullDesc: 'Professional lighting installation for ambient, accent, task, and security illumination. From energy-efficient LED downlights to outdoor garden floodlights and commercial panel lighting.',
    iconName: 'Zap',
    badge: 'Popular',
    features: ['Energy Efficient LED Downlights', 'PIR Motion Security Lighting', 'Outdoor Garden & Pathway Lights', 'Commercial LED Panel Fitting', 'Smart Dimmer Switch Integration'],
    benefits: ['Lower monthly energy bills by up to 80%', 'Enhance indoor aesthetics & mood', 'Deter intruders with automatic security floodlights'],
    whatsIncluded: [
      'Load calculation & circuit safety verification',
      'Precision ceiling cutting and clean installation',
      'Wiring connection to existing or new switch circuits',
      'Testing and BS 7671 electrical safety check'
    ],
    processSteps: [
      { title: 'Design Consultation', desc: 'Choosing lighting positions, color temperatures (Warm/Cool/Daylight).' },
      { title: 'Fitting & Circuit Connection', desc: 'Installing transformers, switches, and fittings neatly.' }
    ],
    faqs: [
      { question: 'Why should I upgrade to LED lighting?', answer: 'LED lights consume up to 85% less electricity, last up to 25,000 hours, and do not emit excess heat.' }
    ],
    image: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'power-socket-installation',
    title: 'Power Socket Installation',
    category: 'electrical',
    shortDesc: 'Installation, addition, and replacement of internal and external power sockets.',
    fullDesc: 'Need extra power outlets for home appliances, office desks, USB charging, or outdoor garden equipment? We install high-quality double sockets, USB integrated sockets, and IP66 weatherproof outdoor power points.',
    iconName: 'Plug',
    features: ['Smart USB-A & USB-C Integrated Outlets', 'IP66 Weatherproof Outdoor Sockets', 'Extra Double Sockets & Spur Additions', 'Damaged Socket Faceplate Replacement', 'Heavy-Duty Appliance Sockets'],
    benefits: ['Eliminate hazardous extension cords', 'Fast charging for smartphones & tablets', 'Safe power supply for garden tools and vehicles'],
    whatsIncluded: [
      'Circuit spur analysis and RCD protection check',
      'Wall chasing or surface mounting trunking',
      'High-grade stainless, chrome, or white faceplate fitting',
      'Polarity, earthing, and insulation resistance testing'
    ],
    processSteps: [
      { title: 'Circuit Test', desc: 'Ensuring your consumer unit circuit can safely take additional socket load.' },
      { title: 'Installation', desc: 'Clean installation with flush finish.' }
    ],
    faqs: [
      { question: 'Can I add an outdoor socket for lawn mowers or EV chargers?', answer: 'Yes, we fit dedicated IP66 weatherproof outdoor sockets with built-in RCD safety protection.' }
    ],
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'electrical-installation',
    title: 'Electrical Installation',
    category: 'electrical',
    shortDesc: 'Professional electrical installation for residential and commercial requirements.',
    fullDesc: 'Full electrical installation services including consumer unit (fuse box) upgrades, new circuit wiring, kitchen & bathroom electrical setups, and commercial power distribution.',
    iconName: 'CheckCircle2',
    features: ['Modern Consumer Unit / Fuse Box Upgrades', 'Full & Partial Property Rewiring', 'Dedicated Cooker & Shower Circuits', 'Sub-main & Outbuilding Power', 'Surge Protection Device (SPD) Fitting'],
    benefits: ['Comply with current IET wiring regulations', 'Prevent electrical fires & tripping faults', 'Increase electrical supply capacity'],
    whatsIncluded: [
      'Comprehensive load assessment & circuit layout design',
      'High-quality cable runs, MCB/RCD/RCBO breakers',
      'Grounding & bonding verification',
      'Minor Works or Electrical Installation Certificate (EIC)'
    ],
    processSteps: [
      { title: 'Planning & Sizing', desc: 'Calculating electrical demand and safety ratings.' },
      { title: 'Wiring & Termination', desc: 'Systematic wiring following BS 7671 standards.' },
      { title: 'Certification', desc: 'Full testing and official certificate issuance.' }
    ],
    faqs: [
      { question: 'How do I know if my fuse box needs upgrading?', answer: 'If your fuse box has wooden backs, cast fuses, or lacks modern RCD trip switches, an upgrade is strongly recommended.' }
    ],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'electrical-repairs',
    title: 'Electrical Repairs',
    category: 'electrical',
    shortDesc: 'Troubleshooting, fault finding, and repair of electrical problems.',
    fullDesc: 'Quick response fault finding and electrical repairs for tripping breakers, blown fuses, flickering lights, dead sockets, or burning smells.',
    iconName: 'AlertTriangle',
    features: ['Circuit Tripping Fault Finding', 'Burning Smell & Arcing Fixes', 'Rewiring Damaged Cables', 'Broken Switch & Fuse Box Repairs', 'Emergency Callout Diagnostics'],
    benefits: ['Safe, immediate resolution of dangerous electrical hazards', 'Prevent appliance damage', 'Restore power swiftly'],
    whatsIncluded: [
      'Calibrated multi-meter and insulation resistance testing',
      'Fault trace across all ring main & lighting circuits',
      'Immediate repair or safe isolation of faulty components'
    ],
    processSteps: [
      { title: 'Diagnostic Isolation', desc: 'Tracing which circuit or device is causing the trip.' },
      { title: 'Component Fix', desc: 'Repairing or replacing worn electrical accessories.' }
    ],
    faqs: [
      { question: 'What should I do if my main switch keeps tripping?', answer: 'Unplug high-draw appliances first. If it continues tripping, call ASWIN TECH LTD for diagnostic testing.' }
    ],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'electrical-maintenance',
    title: 'Electrical Maintenance',
    category: 'electrical',
    shortDesc: 'Ongoing electrical maintenance, safety checks, and inspection testing.',
    fullDesc: 'Scheduled preventative electrical maintenance for landlords, commercial offices, retail shops, and residential landlords. Keep your property compliant and safe.',
    iconName: 'Shield',
    features: ['EICR Safety Inspection Testing', 'Landlord Electrical Certificates', 'PAT Testing for Commercial Appliances', 'Emergency Light Testing', 'Preventative Tightening & Thermal Checks'],
    benefits: ['Ensure legal compliance for UK landlords & businesses', 'Identify potential hazards before failure occurs', 'Maintain safe working conditions'],
    whatsIncluded: [
      'Full physical & electrical inspection of installation',
      'Thermal imaging of consumer unit terminals where needed',
      'Issuance of formal EICR inspection report',
      'Remedial works recommendations list'
    ],
    processSteps: [
      { title: 'Scheduled Inspection', desc: 'Systematic testing of every circuit on the premises.' },
      { title: 'Report Generation', desc: 'Clear pass/fail rating with C1, C2, C3 recommendations.' }
    ],
    faqs: [
      { question: 'How often do landlords need an EICR certificate in the UK?', answer: 'UK law requires rental properties to have an EICR check at least once every 5 years or at change of tenancy.' }
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Consultation',
    desc: 'Understand your security or electrical requirements.',
    details: 'We discuss your specific needs, budget, property layout, and technical preferences over phone, email, or meeting.',
    iconName: 'MessageSquare'
  },
  {
    stepNumber: '02',
    title: 'Site Assessment',
    desc: 'Review the property and identify the best solution.',
    details: 'Our technician inspects entry points, lighting angles, cable routes, and electrical consumer unit capacity on site.',
    iconName: 'Search'
  },
  {
    stepNumber: '03',
    title: 'Solution Planning',
    desc: 'Recommend suitable equipment and installation approach.',
    details: 'We provide a transparent, itemized proposal outlining equipment specifications, placement diagrams, and clear pricing.',
    iconName: 'FileText'
  },
  {
    stepNumber: '04',
    title: 'Professional Installation',
    desc: 'Complete the installation neatly and professionally.',
    details: 'Our engineers carry out the physical installation with meticulous care, using trunking, sealed conduits, and discreet cable runs.',
    iconName: 'Hammer'
  },
  {
    stepNumber: '05',
    title: 'Testing & Configuration',
    desc: 'Check the complete system and ensure everything works correctly.',
    details: 'We test camera focus, motion triggers, remote viewing apps, and electrical safety readings to ensure 100% operational standards.',
    iconName: 'CheckCircle'
  },
  {
    stepNumber: '06',
    title: 'Ongoing Support',
    desc: 'Provide assistance and maintenance when required.',
    details: 'We hand over all user credentials, demonstrate system operation, and remain on standby for routine maintenance or support.',
    iconName: 'Headphones'
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'residential',
    title: 'Residential Homes',
    shortDesc: 'Houses, flats, driveways, and private estates across Croydon and South London.',
    fullDesc: 'Tailored home CCTV surveillance and domestic electrical installations designed for peace of mind and home safety.',
    iconName: 'Home',
    challenges: ['Vulnerable driveways & back doors', 'Outdated fuse boards and insufficient power sockets', 'High subscription costs of cloud doorbells'],
    solutions: ['Subscription-free 4K CCTV with local NVR storage', 'Modern RCD consumer units and USB sockets', 'PIR outdoor security lights'],
    recommendedServices: ['Residential CCTV', 'Lighting Installation', 'Power Socket Installation'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'retail-shops',
    title: 'Retail Shops & Stores',
    shortDesc: 'High-definition store coverage, POS monitoring, and commercial electrical setups.',
    fullDesc: 'Protect inventory, monitor point-of-sale cash registers, and deter shoplifting while ensuring bright, customer-friendly LED retail lighting.',
    iconName: 'ShoppingBag',
    challenges: ['Shoplifting & till shortages', 'High lighting energy bills', 'Overhead wiring clutter'],
    solutions: ['POS zoomed CCTV cameras', 'Energy-saving commercial LED panels', 'Discreet floor & desk power sockets'],
    recommendedServices: ['Commercial CCTV', 'Lighting Installation', 'Electrical Repairs'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'offices',
    title: 'Corporate Offices',
    shortDesc: 'Access control security cameras, desk floor box wiring, and LED panel upgrades.',
    fullDesc: 'Secure corporate spaces with comprehensive CCTV coverage of entrances, server rooms, and reception areas alongside ergonomic office power distribution.',
    iconName: 'Building',
    challenges: ['Unauthorized entry to server rooms', 'Tripping hazards from extension leads', 'Inconsistent lighting in work bays'],
    solutions: ['IP CCTV with remote phone/PC monitoring', 'Underfloor cable management & floor sockets', 'Dimmable LED downlights'],
    recommendedServices: ['Commercial CCTV', 'Power Socket Installation', 'Electrical Maintenance'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'warehouses',
    title: 'Warehouses & Logistics',
    shortDesc: 'Long-range perimeter CCTV cameras, loading bay lighting, and high-voltage supply.',
    fullDesc: 'Surveil large open areas, loading docks, and high-value inventory racks with long-distance IR night vision cameras and high-bay industrial lighting.',
    iconName: 'Truck',
    challenges: ['Blind spots in tall racking aisles', 'Vandalism and night trespassing', 'Harsh outdoor weather conditions'],
    solutions: ['80m+ night vision PTZ cameras', 'Weatherproof IP66 security floodlights', 'Heavy-duty 3-phase electrical installations'],
    recommendedServices: ['CCTV System Upgrades', 'Lighting Installation', 'Electrical Maintenance'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'restaurants',
    title: 'Restaurants & Cafes',
    shortDesc: 'Kitchen electrical heavy appliance wiring, dining ambient lighting, and store CCTV.',
    fullDesc: 'Ensure commercial kitchen electrical safety, warm interior dining atmosphere, and 24/7 security over dining floors and kitchen doors.',
    iconName: 'Utensils',
    challenges: ['High electrical loads from kitchen equipment', 'Strict health & safety compliance', 'Stock room security'],
    solutions: ['Dedicated high-capacity appliance circuits', 'Warm dimmable mood lighting', 'Wide-angle wide dynamic range CCTV'],
    recommendedServices: ['Electrical Installation', 'Lighting Installation', 'Commercial CCTV'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hotels',
    title: 'Hotels & Guest Houses',
    shortDesc: 'Corridor surveillance, lobby lighting, emergency lighting, and car park security.',
    fullDesc: 'Discreet, high-end guest protection with multi-channel central monitoring and emergency lighting compliance.',
    iconName: 'Hotel',
    challenges: ['Multi-floor security coverage', 'Guest safety and emergency illumination', '24/7 continuous operation requirements'],
    solutions: ['Dome cameras with privacy masking', 'Self-testing emergency exit lighting', 'Centralized NVR video wall'],
    recommendedServices: ['Commercial CCTV', 'Electrical Maintenance', 'Lighting Installation'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'construction-sites',
    title: 'Construction Sites',
    shortDesc: 'Temporary site security cameras, perimeter monitoring, and site power distribution.',
    fullDesc: 'Protect costly plant machinery, copper wiring, and building materials from theft during construction phases.',
    iconName: 'HardHat',
    challenges: ['No permanent broadband internet on site', 'Theft of expensive tools & materials', 'Temporary power distribution needs'],
    solutions: ['4G SIM-enabled solar/battery CCTV towers', 'Site distribution transformers and heavy duty sockets', 'Motion warning sirens'],
    recommendedServices: ['CCTV Installation', 'Electrical Installation', 'CCTV Troubleshooting'],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'commercial-buildings',
    title: 'Commercial Buildings',
    shortDesc: 'Multi-tenant entry surveillance, sub-metering, and emergency electrical maintenance.',
    fullDesc: 'Comprehensive electrical infrastructure and unified CCTV perimeter control for commercial office parks and complexes.',
    iconName: 'Building2',
    challenges: ['Multi-tenant access accountability', 'Compliance reporting', 'Complex wiring grids'],
    solutions: ['Central NVR with tenant partition access', 'Regular EICR testing & thermal imaging', 'LED stairwell sensors'],
    recommendedServices: ['Electrical Maintenance', 'Commercial CCTV', 'Lighting Installation'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'small-businesses',
    title: 'Small Businesses & Workshops',
    shortDesc: 'Affordable 4-camera CCTV kits and flexible socket additions for growing teams.',
    fullDesc: 'Cost-effective security and electrical solutions designed specifically to help local SMEs protect their premises without breaking the bank.',
    iconName: 'Briefcase',
    challenges: ['Tight budgets for security tech', 'Fast-changing floor layouts', 'Need for quick turnkey setup'],
    solutions: ['Scalable 4 to 8 camera HD packages', 'Modular socket extensions & surface trunking', 'Flat-rate pricing'],
    recommendedServices: ['CCTV Installation', 'Power Socket Installation', 'Electrical Repairs'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'property-management',
    title: 'Property Management & Landlords',
    shortDesc: 'EICR safety certificates, communal stairwell CCTV, and rapid tenant electrical fixes.',
    fullDesc: 'Partnering with lettings agents and property managers to provide fast response repairs, legal EICR compliance, and block security.',
    iconName: 'Key',
    challenges: ['Mandatory 5-year landlord EICR deadlines', 'Communal area vandalism', 'Tenant callout emergencies'],
    solutions: ['Priority landlord EICR testing slots', 'Vandal-proof communal CCTV', 'Direct invoice & job completion reporting'],
    recommendedServices: ['Electrical Maintenance', 'Residential CCTV', 'Electrical Repairs'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Croydon Residential 4K Smart CCTV & Outdoor Lighting',
    category: 'cctv',
    categoryLabel: 'CCTV Projects',
    location: 'Addiscombe, Croydon',
    servicesProvided: ['CCTV Installation', 'Lighting Installation', 'Power Socket Installation'],
    shortDesc: 'Complete security coverage with 4K turret cameras and automated perimeter security floodlights for a private residence.',
    fullDesc: 'Full installation of 4 ColorVu 4K cameras linked to a 2TB NVR recorder with mobile push notification setup. Added IP66 outdoor double sockets and motion-activated dusk-to-dawn LED garden floodlights.',
    completionDate: 'June 2026',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Zero visible exterior wiring', '24/7 Full Color Night Vision', 'Smartphone alert integration']
  },
  {
    id: 'proj-2',
    title: 'Commercial Office Block Electrical Rewire & IP CCTV',
    category: 'commercial',
    categoryLabel: 'Commercial Projects',
    location: 'Central Croydon',
    servicesProvided: ['Commercial CCTV', 'Electrical Installation', 'Lighting Installation'],
    shortDesc: '16-channel IP CCTV installation with ceiling LED panel conversion and consumer unit distribution board overhaul.',
    fullDesc: 'Upgraded an aging 3-story office building with 16 high-definition PoE cameras, smart access monitoring in the main lobby, and 60x60 LED panel lighting throughout work areas.',
    completionDate: 'May 2026',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    highlights: ['65% reduction in lighting energy use', 'GDPR compliant video recording', 'Weekend non-disruptive installation']
  },
  {
    id: 'proj-3',
    title: 'Retail Store POS Security & Architectural Track Lighting',
    category: 'lighting',
    categoryLabel: 'Lighting Projects',
    location: 'Sutton High Street',
    servicesProvided: ['CCTV Upgrades', 'Lighting Installation', 'Electrical Maintenance'],
    shortDesc: 'Modern track lighting installation combined with high-zoom cameras focusing on retail counter transactions.',
    fullDesc: 'Replaced harsh fluorescent tube lighting with dimmable warm LED track spots. Installed 8-camera HD-TVI system covering stockroom, entrance, and sales registers.',
    completionDate: 'April 2026',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Enhanced product store aesthetics', 'Clear till footage for dispute resolution', 'Completed overnight']
  },
  {
    id: 'proj-4',
    title: 'Purley Luxury Villa Full Domestic Electrical & Security System',
    category: 'residential',
    categoryLabel: 'Residential Projects',
    location: 'Purley, South London',
    servicesProvided: ['Residential CCTV', 'Electrical Installation', 'Power Socket Installation'],
    shortDesc: 'Comprehensive smart home wiring, stainless steel USB sockets, ambient downlighting, and perimeter CCTV.',
    fullDesc: 'Full domestic electrical install including 34 dimmable downlights, brushed steel socket faceplates with USB-C chargers, and a 6-camera ColorVu CCTV layout.',
    completionDate: 'March 2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Dual-function USB-C sockets', 'Sleek architectural finish', 'Remote mobile live control']
  },
  {
    id: 'proj-5',
    title: 'Industrial Warehouse 80m Perimeter CCTV & High-Bay Lighting',
    category: 'electrical',
    categoryLabel: 'Electrical Projects',
    location: 'Thornton Heath Industrial Estate',
    servicesProvided: ['Commercial CCTV', 'Electrical Installation', 'Electrical Maintenance'],
    shortDesc: 'High-bay LED warehouse lighting retrofit paired with motorized PTZ long-range surveillance cameras.',
    fullDesc: 'Replaced metal halide lamps with 150W LED high-bay fixtures. Fitted 6 exterior 4K Pan-Tilt-Zoom security cameras with automated perimeter tracking.',
    completionDate: 'February 2026',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Long-range IR night vision', 'Heavy duty industrial wiring trunking', 'Reduced maintenance overheads']
  },
  {
    id: 'proj-6',
    title: 'Multi-Tenant Apartment Complex EICR & Communal CCTV',
    category: 'commercial',
    categoryLabel: 'Commercial Projects',
    location: 'South Croydon',
    servicesProvided: ['Electrical Maintenance', 'CCTV Installation', 'Electrical Repairs'],
    shortDesc: 'Communal block security camera upgrade and comprehensive EICR electrical testing certification.',
    fullDesc: 'Serviced 24 residential block units with anti-vandal dome cameras in lobbies and car parks. Completed 5-year landlord EICR safety testing across all circuits.',
    completionDate: 'January 2026',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Full landlord EICR certification pass', 'Vandal-proof IK10 camera housings', 'Clear keyholder portal']
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'What areas do you cover?',
    answer: 'ASWIN TECH LTD is based in Croydon (CR0 2AL) and primarily covers Croydon, South London, Purley, Sutton, Bromley, Mitcham, Thornton Heath, Addiscombe, Coulsdon, and surrounding South London & Surrey areas.'
  },
  {
    id: 'faq-2',
    category: 'cctv',
    question: 'Do you install CCTV for homes?',
    answer: 'Yes! We design and install custom residential CCTV packages for houses, flats, and private driveways, featuring 4K recording, mobile phone access, and clear night vision with no monthly subscription fees.'
  },
  {
    id: 'faq-3',
    category: 'cctv',
    question: 'Do you provide commercial CCTV installation?',
    answer: 'Absolutely. We fit heavy-duty commercial surveillance systems for offices, retail stores, warehouses, restaurants, construction sites, and property management portfolios.'
  },
  {
    id: 'faq-4',
    category: 'cctv',
    question: 'Can you upgrade an existing CCTV system?',
    answer: 'Yes. We can replace old low-resolution cameras and recorders with modern 4K smart cameras while utilizing existing cabling where appropriate to keep cost low.'
  },
  {
    id: 'faq-5',
    category: 'cctv',
    question: 'Do you install additional cameras to an existing setup?',
    answer: 'Yes, if your current recorder (NVR/DVR) has unused channels, we can seamlessly add additional cameras to extend coverage.'
  },
  {
    id: 'faq-6',
    category: 'cctv',
    question: 'Do you provide CCTV maintenance?',
    answer: 'Yes. We offer one-off maintenance visits and recurring servicing plans to clean optical lenses, update system firmware, test hard drives, and verify power connections.'
  },
  {
    id: 'faq-7',
    category: 'electrical',
    question: 'Do you install power sockets?',
    answer: 'Yes. We install single, double, USB-integrated, and IP66 outdoor weatherproof power sockets, as well as replacing damaged faceplates.'
  },
  {
    id: 'faq-8',
    category: 'electrical',
    question: 'Do you provide lighting installation?',
    answer: 'Yes! We install indoor ambient downlights, LED panel lighting, pendant lights, dimmers, outdoor garden spike lights, and security floodlights.'
  },
  {
    id: 'faq-9',
    category: 'electrical',
    question: 'Do you handle general electrical work?',
    answer: 'Yes. We cover complete electrical installations, consumer unit (fuse box) upgrades, electrical troubleshooting, fault repairs, rewires, and safety checks.'
  },
  {
    id: 'faq-10',
    category: 'quote',
    question: 'How can I request a quotation?',
    answer: 'You can request a free, no-obligation quote by filling out our online quote form, calling us directly on 07468 602458, or emailing tech@aswincctv.com.'
  },
  {
    id: 'faq-11',
    category: 'quote',
    question: 'How quickly can I receive a response?',
    answer: 'We typically review and respond to quote requests and inquiries within 2 to 4 business hours, or instantly over the phone.'
  }
];

export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: 'blog-1',
    title: 'How CCTV Improves Home Security in Croydon & South London',
    slug: 'how-cctv-improves-home-security',
    category: 'CCTV Guides',
    categoryColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    excerpt: 'Discover how modern 4K smart CCTV cameras with night vision and mobile notifications act as a powerful visual deterrent against home intrusion.',
    content: `Securing your property has evolved beyond basic alarms. Modern CCTV surveillance systems provide round-the-clock peace of mind, allowing home owners across Croydon to monitor driveways, garden entries, and front doors directly from their smartphones.

### 1. Visual Deterrence
Visible high-definition camera turrets signal to potential trespassers that your property is actively monitored. Statistics consistently show that burglars deliberately avoid properties equipped with professional security cameras.

### 2. High-Definition Record & Smartphone Live View
Gone are the days of grainy black-and-white video footage. Today's 4K IP cameras feature ColorVu technology, recording vivid full-color video even in pitch-black night conditions. Whenever motion is detected, your phone receives an instant alert with snapshot previews.

### 3. Subscription-Free Local Storage
Unlike off-the-shelf wireless doorbells that charge monthly cloud fees, our professionally installed NVR systems record locally onto high-reliability surveillance hard drives with zero recurring monthly subscription charges.`,
    readTime: '4 min read',
    date: 'August 12, 2026',
    author: 'ASWIN TECH LTD Technical Team',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80',
    tags: ['Home Security', 'CCTV Installation', 'Croydon', 'Smart Home']
  },
  {
    id: 'blog-2',
    title: 'When to Replace Power Sockets & Upgrade Electrical Wiring',
    slug: 'when-to-replace-power-sockets',
    category: 'Electrical Guides',
    categoryColor: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    excerpt: 'Recognize the critical warning signs of aging, cracked, or overloaded electrical sockets to protect your property from electrical fires.',
    content: `Electrical sockets are amongst the most frequently used components in any building. Over time, physical wear, loose internal contacts, and modern high-draw appliances can create safety hazards.

### Warning Signs Your Sockets Need Replacement:
- **Discoloration or Scorching:** Brown or black scorch marks around socket pin holes indicate dangerous internal arcing and heat build-up.
- **Crackling Sound or Burning Plastic Smell:** If you hear buzzing or smell fishy burning plastic near a plug point, isolate the circuit breaker immediately.
- **Plugs Feeling Loose:** If plugs fall out easily or feel loose, the internal copper contact clips have degraded and present a fire risk.
- **Lack of USB Chargers:** Upgrading to dual USB-A and USB-C sockets cleans up nightstands and kitchen counters while offering fast charging.

Always hire a certified electrician to test circuit load and fit compliant, double-pole switched socket outlets.`,
    readTime: '5 min read',
    date: 'August 05, 2026',
    author: 'ASWIN TECH LTD Electrical Engineering Dept',
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=1000&q=80',
    tags: ['Electrical Safety', 'Power Sockets', 'Home Maintenance']
  },
  {
    id: 'blog-3',
    title: 'Commercial CCTV Compliance & GDPR Best Practices for Businesses',
    slug: 'commercial-cctv-compliance-gdpr',
    category: 'Business Security',
    categoryColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    excerpt: 'Key guidance for UK store owners, offices, and landlords on installing legal, GDPR-compliant business surveillance systems.',
    content: `Installing commercial CCTV in retail shops, warehouses, and offices provides vital asset protection and staff safety. However, UK businesses must follow ICO (Information Commissioner's Office) guidelines and data protection regulations.

### Key Compliance Checklist:
1. **Clear Warning Signage:** Post visible CCTV warning signs informing staff and visitors that recording is active, specifying the purpose and contact details.
2. **Privacy Masking:** Ensure cameras do not record adjacent private residential windows or public highways unnecessarily. Modern cameras support electronic digital privacy masking.
3. **Restricted Access:** Password-protect recorder access and restrict video playback strictly to authorized personnel.
4. **Data Retention Limits:** Keep footage only for as long as necessary for business security purposes (typically 14 to 30 days).`,
    readTime: '6 min read',
    date: 'July 28, 2026',
    author: 'ASWIN TECH LTD Compliance Team',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    tags: ['Business Security', 'GDPR', 'Commercial CCTV']
  }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'David M.',
    location: 'Addiscombe, Croydon',
    serviceType: 'Residential CCTV Installation',
    rating: 5,
    date: 'August 2026',
    comment: 'ASWIN TECH LTD installed a 4-camera 4K CCTV system around my house in Croydon. The wiring was completely hidden and super tidy. The phone app works brilliantly even when away on holiday. Highly recommended!',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Sarah K.',
    location: 'Purley, South London',
    serviceType: 'Lighting & Socket Fitting',
    rating: 5,
    date: 'July 2026',
    comment: 'Professional, punctual and very clean worker. Replaced all our downstairs downlights with modern LEDs and fitted outdoor garden power sockets. Excellent electrical work at a fair price.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Marcus B.',
    location: 'Central Croydon',
    serviceType: 'Commercial CCTV & Maintenance',
    rating: 5,
    date: 'July 2026',
    comment: 'Great service for our commercial office unit. Upgraded our old cameras and sorted out a tripping fuse box issue on the same day. Very reliable team.',
    verified: true
  }
];
