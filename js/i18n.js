// ============================================
// Internationalization (i18n) System
// ============================================

const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.subtitle': 'Fullstack .NET Developer | IT System Engineer Lead',
        'hero.description1': '9+ years experience in Banking & Financial Systems,',
        'hero.description2': 'System Integration, Web API, and DevOps with Azure',
        'hero.company': 'Currently working at',
        'hero.btn.contact': 'Contact Me',
        'hero.btn.linkedin': 'LinkedIn',
        'hero.btn.downloadcv': 'Download CV',
        
        // About Section
        'about.title': 'About Me',
        'about.lead.part1': 'I am a',
        'about.lead.strong1': 'Fullstack .NET Developer',
        'about.lead.part2': 'with over',
        'about.lead.strong2': '9 years of experience',
        'about.lead.part3': ', primarily focused on backend development, but also capable of handling frontend tasks when required. Currently working as an',
        'about.lead.strong3': 'IT System Engineer Lead',
        'about.lead.part4': 'at Bank Sahabat Sampoerna.',
        'about.p1.part1': 'I specialize in',
        'about.p1.strong1': 'banking application development',
        'about.p1.part2': ',',
        'about.p1.strong2': 'system integration',
        'about.p1.part3': ', and',
        'about.p1.strong3': 'DevOps',
        'about.p1.part4': '. Throughout my career, I have been involved in various projects including banking and financial systems, dealer management systems, and security tools.',
        'about.p2': 'My core competencies include:',
        'about.competency1': 'Banking System Development & Integration with TEMENOS T24',
        'about.competency2': 'API Design & System Architecture',
        'about.competency3': 'Web Applications, Windows Services, and Desktop Applications',
        'about.competency4': 'CI/CD Pipeline Management with Azure DevOps',
        'about.competency5': 'Team Leadership, Code Review & Technical Mentoring',
        'about.competency6': 'Problem Solving & Research for System Improvements',
        'about.stat.years': 'Years Experience',
        'about.stat.projects': 'Projects Delivered',
        'about.stat.companies': 'Companies',
        'about.stat.domain': 'Domain Expert',
        
        // Skills Section
        'skills.title': 'Skills & Expertise',
        'skills.core': 'Core Technical Skills',
        'skills.database': 'Database',
        'skills.integration': 'System Integration',
        'skills.devops': 'DevOps & Tools',
        'skills.engineering': 'Engineering Strength',
        'skills.other': 'Other Technologies',
        
        // Experience Section
        'experience.title': 'Professional Experience',
        'experience.present': 'Present',
        
        // Bank Sahabat Sampoerna - Lead Position
        'exp.bss.lead.title': 'IT System Engineer Lead (.NET Developer & DevOps)',
        'exp.bss.lead.period': 'Mar 2023 - Present',
        'exp.bss.lead.company': 'PT. Bank Sahabat Sampoerna',
        'exp.bss.lead.resp1': 'Lead development team and coordinate technical initiatives across banking projects',
        'exp.bss.lead.resp2': 'Design application architecture and review functional specification documents (FSD)',
        'exp.bss.lead.resp3': 'Develop and maintain mission-critical banking applications: Web Apps, Windows Services, Web APIs',
        'exp.bss.lead.resp4': 'Configure servers and manage CI/CD pipelines using Azure DevOps',
        'exp.bss.lead.resp5': 'Conduct code reviews, mentor team members, and establish best practices',
        'exp.bss.lead.resp6': 'Provide technical leadership during SIT, UAT, and Go-Live phases',
        'exp.bss.lead.resp7': 'Research and implement new methodologies and technologies to improve systems',
        'exp.bss.lead.resp8': 'Collaborate with stakeholders to align technical solutions with business objectives',
        
        // Bank Sahabat Sampoerna - Analyst Position
        'exp.bss.analyst.title': 'IT System Analyst (.NET Developer)',
        'exp.bss.analyst.period': 'Feb 2020 - Mar 2023',
        'exp.bss.analyst.company': 'PT. Bank Sahabat Sampoerna',
        'exp.bss.analyst.resp1': 'Analyzed business requirements and translated them into technical specifications',
        'exp.bss.analyst.resp2': 'Developed and maintained internal banking applications: LOS, MFOS, FOS, and web services',
        'exp.bss.analyst.resp3': 'Integrated various applications with TEMENOS T24 banking core system',
        'exp.bss.analyst.resp4': 'Designed and implemented RESTful APIs for system integration',
        'exp.bss.analyst.resp5': 'Optimized database queries and stored procedures for better performance',
        'exp.bss.analyst.resp6': 'Provided technical support during SIT, UAT, and Go-Live phases',
        'exp.bss.analyst.resp7': 'Created comprehensive system documentation and technical specifications',
        'exp.bss.analyst.resp8': 'Researched and applied new technologies for system improvements',
        
        // PT. Asian Sigma Teknologi
        'exp.ast.title': 'IT Consultant (.NET Developer)',
        'exp.ast.period': 'Jul 2019 - Jan 2020',
        'exp.ast.company': 'PT. Asian Sigma Teknologi',
        'exp.ast.resp1': 'Developed and maintained banking applications and SOAP/REST web services',
        'exp.ast.resp2': 'Integrated multiple banking applications with core banking system',
        'exp.ast.resp3': 'Collaborated with cross-functional teams to ensure optimal system functionality',
        'exp.ast.resp4': 'Performed code reviews and ensured coding standards compliance',
        'exp.ast.resp5': 'Implemented security measures for sensitive banking transactions',
        'exp.ast.resp6': 'Provided technical support during SIT, UAT, and Go-Live phases',
        'exp.ast.resp7': 'Created and maintained comprehensive system documentation',
        'exp.ast.resp8': 'Troubleshot and resolved production issues efficiently',
        
        // PT. Asian Technology Solutions
        'exp.ats.title': 'IT Consultant (.NET Developer)',
        'exp.ats.period': 'Aug 2018 - Jul 2019',
        'exp.ats.company': 'PT. Asian Technology Solutions',
        'exp.ats.resp1': 'Developed banking applications and web services based on business requirements',
        'exp.ats.resp2': 'Conducted system integration with various banking platforms and third-party systems',
        'exp.ats.resp3': 'Designed database schema and optimized SQL queries for performance',
        'exp.ats.resp4': 'Implemented RESTful Web APIs for seamless data exchange',
        'exp.ats.resp5': 'Participated in requirements gathering sessions with business stakeholders',
        'exp.ats.resp6': 'Provided comprehensive technical support during all project phases (Development, SIT, UAT, Go-Live)',
        'exp.ats.resp7': 'Researched and implemented new methodologies and best practices for system enhancement',
        'exp.ats.resp8': 'Created technical documentation including system design and API specifications',
        
        // PT. Clientsolve Mitra Solusi
        'exp.cms.title': 'IT Consultant (.NET Developer)',
        'exp.cms.period': 'May 2016 - Jun 2018',
        'exp.cms.company': 'PT. Clientsolve Mitra Solusi',
        'exp.cms.placement': 'Placement at PT. TTNI, PT. Toyota Astra Motor',
        'exp.cms.resp1': 'Developed comprehensive Dealer Management System (DMS) for Toyota Astra Motor nationwide dealers',
        'exp.cms.resp2': 'Built RESTful Web APIs and web applications based on business requirements',
        'exp.cms.resp3': 'Created Sales Module for vehicle sales management and tracking',
        'exp.cms.resp4': 'Developed Demand Supply Module for inventory forecasting and management',
        'exp.cms.resp5': 'Designed and implemented reusable framework components for system-wide use',
        'exp.cms.resp6': 'Implemented responsive frontend using AngularJS with Bootstrap',
        'exp.cms.resp7': 'Integrated system with mobile applications for field sales operations',
        'exp.cms.resp8': 'Collaborated with business analysts to refine requirements and user stories',
        'exp.cms.resp9': 'Provided technical support, bug fixes, and system enhancements',
        'exp.cms.resp10': 'Created comprehensive system documentation and user manuals',
        
        // Bionus
        'exp.bionus.title': 'Java Developer (Internship)',
        'exp.bionus.period': 'Apr 2013 - Aug 2013',
        'exp.bionus.company': 'Bionus',
        'exp.bionus.resp1': 'Developed new features and enhancements for Bionmedis website',
        'exp.bionus.resp2': 'Maintained existing web application modules and fixed bugs',
        'exp.bionus.resp3': 'Participated in code reviews and team development meetings',
        'exp.bionus.resp4': 'Compiled and maintained technical documentation for system enhancements',
        'exp.bionus.resp5': 'Collaborated with senior developers to learn best practices',
        
        // Projects Section
        'projects.title': 'Featured Projects',
        'projects.subtitle': 'Handpicked highlights from <span class="highlight-number">100+</span> mission-critical applications delivered for enterprise & banking environments',
        
        // SIBER Project
        'proj.siber.title': 'SIBER - Balance Monitoring System',
        'proj.siber.category': 'Banking Application',
        'proj.siber.desc': 'Enterprise-grade real-time balance monitoring system utilizing Playwright browser automation to continuously detect and alert discrepancies between TEMENOS T24 core banking system and Portal BI. Features comprehensive multi-level alert system with configurable thresholds, audio notifications, Google Chat webhooks integration, and role-based access control for different user levels (operator, supervisor, admin).',
        'proj.siber.hl1': 'Automated monitoring',
        'proj.siber.hl2': 'Real-time alerts',
        'proj.siber.hl3': 'Role-based access',
        
        // Banking Systems
        'proj.banking.title': 'Banking Systems & Financial Applications',
        'proj.banking.category': 'Banking Application',
        'proj.banking.desc': 'Comprehensive suite of mission-critical banking applications integrated with TEMENOS T24 core system. Includes Digital Signature System with secure authentication, E-KTP verification system, Loan Origination System (LOS), Motorcycle Financing Origination System (MFOS), Financing Origination System (FOS), Dealer Management LOS (DMS LOS), Consumer Financing Origination System (CFOS), and RESTful Web API integration for PDAja.com marketplace and external partner systems. All applications follow banking security standards and regulatory compliance requirements.',
        'proj.banking.hl1': 'Digital signature system',
        'proj.banking.hl2': 'Core banking integration',
        'proj.banking.hl3': 'Production ready',
        
        // DMS
        'proj.dms.title': 'Dealer Management System (DMS)',
        'proj.dms.category': 'Enterprise System',
        'proj.dms.desc': 'Enterprise-level Dealer Management System deployed across Toyota Astra Motor\'s nationwide dealer network. The comprehensive solution includes Sales Module for end-to-end vehicle sales lifecycle management, Demand Supply Module with predictive analytics for inventory optimization and forecasting, Parameter Management for configurable business rules, and robust Framework architecture for scalability. Features responsive web interface built with AngularJS and Bootstrap, seamless integration with mobile field sales applications, and real-time synchronization with headquarters system.',
        'proj.dms.hl1': 'Multiple modules',
        'proj.dms.hl2': 'Mobile integration',
        'proj.dms.hl3': 'Used by dealers nationwide',
        
        // Encryption Tool
        'proj.encryption.title': 'Application Encryption Tool',
        'proj.encryption.category': 'Security Tool',
        'proj.encryption.desc': 'Enterprise security utility designed for encrypting and decrypting sensitive configuration sections in ASP.NET web.config and app.config files. Utilizes .NET\'s built-in DPAPI (Data Protection API) and RSA cryptography providers to secure connection strings, API keys, and other sensitive configuration data. Features include batch processing, backup management, and compliance with security best practices for application deployment. Ensures protection of sensitive data at rest while maintaining ease of configuration management across development, staging, and production environments.',
        'proj.encryption.hl1': 'Config encryption',
        'proj.encryption.hl2': 'Security compliance',
        'proj.encryption.hl3': 'Easy to use',
        
        // CI/CD
        'proj.cicd.title': 'CI/CD Pipeline Implementation',
        'proj.cicd.category': 'DevOps',
        'proj.cicd.desc': 'Comprehensive DevOps solution implementing automated CI/CD pipeline infrastructure using Azure DevOps for mission-critical banking applications. Features include automated build processes with multi-stage YAML pipelines, automated unit and integration testing, artifact management, and zero-downtime deployment strategies with blue-green deployment approach. Includes automated server configuration, IIS management, environment-specific configuration transformation, automated rollback procedures, and comprehensive monitoring. Provides post-production support with detailed deployment logs and notification systems integrated with Microsoft Teams.',
        'proj.cicd.hl1': 'Automated deployment',
        'proj.cicd.hl2': 'Faster delivery',
        'proj.cicd.hl3': 'Zero-downtime',
        
        // Library
        'proj.library.title': 'Library Management System',
        'proj.library.category': 'Desktop Application',
        'proj.library.desc': 'Comprehensive library management desktop application developed as diploma final project for SMAN 1 Situraja school library. Features complete book lending lifecycle management including cataloging, borrowing, returns, member management, and overdue tracking. Implemented automated SMS notification system using Gammu for sending reminders to members about due dates, overdue books, and reservation availability. Built with Java Swing for intuitive user interface and MySQL database for data persistence. Successfully deployed and used by school librarians for daily operations.',
        'proj.library.hl1': 'Book management',
        'proj.library.hl2': 'SMS notification',
        'proj.library.hl3': 'Final project',
        
        // Education Section
        'education.title': 'Education & Achievements',
        'education.column.education': 'Education',
        'education.column.achievements': 'Achievements & Activities',
        
        // Education
        'edu.binus.degree': 'Bachelor of Information Systems',
        'edu.binus.institution': 'BINUS University, Jakarta',
        'edu.binus.year': '2017 - 2021 | GPA: 3.53',
        
        'edu.telkom.degree': 'Diploma in Information Management',
        'edu.telkom.institution': 'Telkom University, Bandung',
        'edu.telkom.year': '2011 - 2015 | GPA: 3.49',
        
        // Achievements
        'achieve.kode.title': 'Top 300 KodeIndonesia',
        'achieve.kode.desc': 'Ranked 174 out of thousands of developers',
        
        'achieve.shift.title': 'Co-Founder Shift Corporation',
        'achieve.shift.desc': 'Technology startup focused on digital solutions',
        
        // Contact Section
        'contact.title': 'Get In Touch',
        'contact.subtitle': 'Feel free to reach out for opportunities or collaboration',
        'contact.email': 'Email',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub',
        'contact.location': 'Location',
        'contact.location.value': 'Indonesia',
        'contact.availability': 'Availability',
        'contact.available': 'Available with 1 month notice',
        
        // Footer
        'footer.copyright': '2025 Muhammad Fikri Akbar. All rights reserved.',
        'footer.tagline': 'Senior .NET Developer | Banking & Enterprise Systems Specialist',
    },
    id: {
        // Navigation
        'nav.home': 'Beranda',
        'nav.about': 'Tentang',
        'nav.skills': 'Keahlian',
        'nav.experience': 'Pengalaman',
        'nav.projects': 'Proyek',
        'nav.contact': 'Kontak',
        
        // Hero Section
        'hero.subtitle': 'Fullstack .NET Developer | IT System Engineer Lead',
        'hero.description1': '9+ tahun pengalaman di Banking & Financial Systems,',
        'hero.description2': 'System Integration, Web API, dan DevOps dengan Azure',
        'hero.company': 'Saat ini bekerja di',
        'hero.btn.contact': 'Hubungi Saya',
        'hero.btn.linkedin': 'LinkedIn',
        'hero.btn.downloadcv': 'Unduh CV',
        
        // About Section
        'about.title': 'Tentang Saya',
        'about.lead.part1': 'Saya adalah seorang',
        'about.lead.strong1': 'Fullstack .NET Developer',
        'about.lead.part2': 'dengan lebih dari',
        'about.lead.strong2': '9 tahun pengalaman',
        'about.lead.part3': ', terutama fokus pada pengembangan backend, tetapi juga mampu menangani tugas frontend bila diperlukan. Saat ini bekerja sebagai',
        'about.lead.strong3': 'IT System Engineer Lead',
        'about.lead.part4': 'di Bank Sahabat Sampoerna.',
        'about.p1.part1': 'Saya berspesialisasi dalam',
        'about.p1.strong1': 'pengembangan aplikasi perbankan',
        'about.p1.part2': ',',
        'about.p1.strong2': 'integrasi sistem',
        'about.p1.part3': ', dan',
        'about.p1.strong3': 'DevOps',
        'about.p1.part4': '. Sepanjang karir saya, saya telah terlibat dalam berbagai proyek termasuk sistem perbankan dan keuangan, sistem manajemen dealer, dan tools keamanan.',
        'about.p2': 'Kompetensi inti saya meliputi:',
        'about.competency1': 'Pengembangan & Integrasi Sistem Perbankan dengan TEMENOS T24',
        'about.competency2': 'Desain API & Arsitektur Sistem',
        'about.competency3': 'Aplikasi Web, Windows Services, dan Aplikasi Desktop',
        'about.competency4': 'Manajemen CI/CD Pipeline dengan Azure DevOps',
        'about.competency5': 'Kepemimpinan Tim, Code Review & Mentoring Teknis',
        'about.competency6': 'Problem Solving & Riset untuk Peningkatan Sistem',
        'about.stat.years': 'Tahun Pengalaman',
        'about.stat.projects': 'Proyek Terkirim',
        'about.stat.companies': 'Perusahaan',
        'about.stat.domain': 'Domain Expert',
        
        // Skills Section
        'skills.title': 'Keahlian & Expertise',
        'skills.core': 'Keahlian Teknis Inti',
        'skills.database': 'Database',
        'skills.integration': 'Integrasi Sistem',
        'skills.devops': 'DevOps & Tools',
        'skills.engineering': 'Kekuatan Engineering',
        'skills.other': 'Teknologi Lainnya',
        
        // Experience Section
        'experience.title': 'Pengalaman Profesional',
        'experience.present': 'Sekarang',
        
        // Bank Sahabat Sampoerna - Lead Position
        'exp.bss.lead.title': 'IT System Engineer Lead (.NET Developer & DevOps)',
        'exp.bss.lead.period': 'Mar 2023 - Sekarang',
        'exp.bss.lead.company': 'PT. Bank Sahabat Sampoerna',
        'exp.bss.lead.resp1': 'Memimpin tim pengembangan dan mengoordinasikan inisiatif teknis di berbagai proyek perbankan',
        'exp.bss.lead.resp2': 'Merancang arsitektur aplikasi dan meninjau dokumen spesifikasi fungsional (FSD)',
        'exp.bss.lead.resp3': 'Mengembangkan dan memelihara aplikasi perbankan mission-critical: Web Apps, Windows Services, Web APIs',
        'exp.bss.lead.resp4': 'Mengkonfigurasi server dan mengelola CI/CD pipelines menggunakan Azure DevOps',
        'exp.bss.lead.resp5': 'Melakukan code review, mentoring anggota tim, dan menetapkan best practices',
        'exp.bss.lead.resp6': 'Memberikan kepemimpinan teknis selama fase SIT, UAT, dan Go-Live',
        'exp.bss.lead.resp7': 'Meneliti dan mengimplementasikan metodologi dan teknologi baru untuk meningkatkan sistem',
        'exp.bss.lead.resp8': 'Berkolaborasi dengan stakeholder untuk menyelaraskan solusi teknis dengan tujuan bisnis',
        
        // Bank Sahabat Sampoerna - Analyst Position
        'exp.bss.analyst.title': 'IT System Analyst (.NET Developer)',
        'exp.bss.analyst.period': 'Feb 2020 - Mar 2023',
        'exp.bss.analyst.company': 'PT. Bank Sahabat Sampoerna',
        'exp.bss.analyst.resp1': 'Menganalisis kebutuhan bisnis dan menerjemahkannya ke dalam spesifikasi teknis',
        'exp.bss.analyst.resp2': 'Mengembangkan dan memelihara aplikasi perbankan internal: LOS, MFOS, FOS, dan web services',
        'exp.bss.analyst.resp3': 'Mengintegrasikan berbagai aplikasi dengan sistem core banking TEMENOS T24',
        'exp.bss.analyst.resp4': 'Merancang dan mengimplementasikan RESTful APIs untuk integrasi sistem',
        'exp.bss.analyst.resp5': 'Mengoptimalkan database queries dan stored procedures untuk performa yang lebih baik',
        'exp.bss.analyst.resp6': 'Memberikan dukungan teknis selama fase SIT, UAT, dan Go-Live',
        'exp.bss.analyst.resp7': 'Membuat dokumentasi sistem komprehensif dan spesifikasi teknis',
        'exp.bss.analyst.resp8': 'Meneliti dan menerapkan teknologi baru untuk peningkatan sistem',
        
        // PT. Asian Sigma Teknologi
        'exp.ast.title': 'IT Consultant (.NET Developer)',
        'exp.ast.period': 'Jul 2019 - Jan 2020',
        'exp.ast.company': 'PT. Asian Sigma Teknologi',
        'exp.ast.resp1': 'Mengembangkan dan memelihara aplikasi perbankan dan SOAP/REST web services',
        'exp.ast.resp2': 'Mengintegrasikan berbagai aplikasi perbankan dengan core banking system',
        'exp.ast.resp3': 'Berkolaborasi dengan tim lintas fungsi untuk memastikan fungsionalitas sistem yang optimal',
        'exp.ast.resp4': 'Melakukan code review dan memastikan kepatuhan terhadap standar coding',
        'exp.ast.resp5': 'Mengimplementasikan langkah-langkah keamanan untuk transaksi perbankan yang sensitif',
        'exp.ast.resp6': 'Memberikan dukungan teknis selama fase SIT, UAT, dan Go-Live',
        'exp.ast.resp7': 'Membuat dan memelihara dokumentasi sistem yang komprehensif',
        'exp.ast.resp8': 'Mengatasi dan menyelesaikan masalah produksi dengan efisien',
        
        // PT. Asian Technology Solutions
        'exp.ats.title': 'IT Consultant (.NET Developer)',
        'exp.ats.period': 'Agu 2018 - Jul 2019',
        'exp.ats.company': 'PT. Asian Technology Solutions',
        'exp.ats.resp1': 'Mengembangkan aplikasi perbankan dan web services berdasarkan kebutuhan bisnis',
        'exp.ats.resp2': 'Melakukan integrasi sistem dengan berbagai platform perbankan dan sistem third-party',
        'exp.ats.resp3': 'Merancang database schema dan mengoptimalkan SQL queries untuk performa',
        'exp.ats.resp4': 'Mengimplementasikan RESTful Web APIs untuk pertukaran data yang seamless',
        'exp.ats.resp5': 'Berpartisipasi dalam sesi pengumpulan kebutuhan dengan stakeholder bisnis',
        'exp.ats.resp6': 'Memberikan dukungan teknis komprehensif selama semua fase proyek (Development, SIT, UAT, Go-Live)',
        'exp.ats.resp7': 'Meneliti dan mengimplementasikan metodologi baru dan best practices untuk peningkatan sistem',
        'exp.ats.resp8': 'Membuat dokumentasi teknis termasuk desain sistem dan spesifikasi API',
        
        // PT. Clientsolve Mitra Solusi
        'exp.cms.title': 'IT Consultant (.NET Developer)',
        'exp.cms.period': 'Mei 2016 - Jun 2018',
        'exp.cms.company': 'PT. Clientsolve Mitra Solusi',
        'exp.cms.placement': 'Penempatan di PT. TTNI, PT. Toyota Astra Motor',
        'exp.cms.resp1': 'Mengembangkan Dealer Management System (DMS) komprehensif untuk dealer Toyota Astra Motor di seluruh Indonesia',
        'exp.cms.resp2': 'Membangun RESTful Web APIs dan aplikasi web berdasarkan kebutuhan bisnis',
        'exp.cms.resp3': 'Membuat Sales Module untuk manajemen dan tracking penjualan kendaraan',
        'exp.cms.resp4': 'Mengembangkan Demand Supply Module untuk forecasting dan manajemen inventory',
        'exp.cms.resp5': 'Merancang dan mengimplementasikan komponen framework yang reusable untuk penggunaan sistem',
        'exp.cms.resp6': 'Mengimplementasikan frontend responsif menggunakan AngularJS dengan Bootstrap',
        'exp.cms.resp7': 'Mengintegrasikan sistem dengan aplikasi mobile untuk operasi field sales',
        'exp.cms.resp8': 'Berkolaborasi dengan business analyst untuk menyempurnakan requirements dan user stories',
        'exp.cms.resp9': 'Memberikan dukungan teknis, perbaikan bug, dan peningkatan sistem',
        'exp.cms.resp10': 'Membuat dokumentasi sistem komprehensif dan user manual',
        
        // Bionus
        'exp.bionus.title': 'Java Developer (Magang)',
        'exp.bionus.period': 'Apr 2013 - Agu 2013',
        'exp.bionus.company': 'Bionus',
        'exp.bionus.resp1': 'Mengembangkan fitur baru dan enhancement untuk website Bionmedis',
        'exp.bionus.resp2': 'Memelihara modul aplikasi web yang ada dan memperbaiki bug',
        'exp.bionus.resp3': 'Berpartisipasi dalam code review dan pertemuan tim pengembangan',
        'exp.bionus.resp4': 'Menyusun dan memelihara dokumentasi teknis untuk enhancement sistem',
        'exp.bionus.resp5': 'Berkolaborasi dengan developer senior untuk mempelajari best practices',
        
        // Projects Section
        'projects.title': 'Proyek Unggulan',
        'projects.subtitle': 'Pilihan terbaik dari <span class="highlight-number">100+</span> aplikasi mission-critical yang telah diserahkan untuk lingkungan enterprise & perbankan',
        
        // SIBER Project
        'proj.siber.title': 'SIBER - Sistem Monitoring Balance',
        'proj.siber.category': 'Aplikasi Perbankan',
        'proj.siber.desc': 'Sistem monitoring balance real-time tingkat enterprise yang memanfaatkan Playwright browser automation untuk terus mendeteksi dan memberi peringatan ketidaksesuaian antara sistem core banking TEMENOS T24 dan Portal BI. Fitur sistem peringatan multi-level komprehensif dengan threshold yang dapat dikonfigurasi, notifikasi audio, integrasi Google Chat webhooks, dan role-based access control untuk berbagai tingkat pengguna (operator, supervisor, admin).',
        'proj.siber.hl1': 'Monitoring otomatis',
        'proj.siber.hl2': 'Alert real-time',
        'proj.siber.hl3': 'Akses berbasis role',
        
        // Banking Systems
        'proj.banking.title': 'Sistem Perbankan & Aplikasi Keuangan',
        'proj.banking.category': 'Aplikasi Perbankan',
        'proj.banking.desc': 'Suite komprehensif aplikasi perbankan mission-critical yang terintegrasi dengan sistem core TEMENOS T24. Termasuk Sistem Digital Signature dengan autentikasi aman, sistem verifikasi E-KTP, Loan Origination System (LOS), Motorcycle Financing Origination System (MFOS), Financing Origination System (FOS), Dealer Management LOS (DMS LOS), Consumer Financing Origination System (CFOS), dan integrasi RESTful Web API untuk marketplace PDAja.com dan sistem partner eksternal. Semua aplikasi mengikuti standar keamanan perbankan dan persyaratan kepatuhan regulasi.',
        'proj.banking.hl1': 'Sistem digital signature',
        'proj.banking.hl2': 'Integrasi core banking',
        'proj.banking.hl3': 'Siap produksi',
        
        // DMS
        'proj.dms.title': 'Dealer Management System (DMS)',
        'proj.dms.category': 'Sistem Enterprise',
        'proj.dms.desc': 'Dealer Management System tingkat enterprise yang diterapkan di seluruh jaringan dealer Toyota Astra Motor. Solusi komprehensif mencakup Sales Module untuk manajemen siklus penjualan kendaraan end-to-end, Demand Supply Module dengan predictive analytics untuk optimasi dan forecasting inventory, Parameter Management untuk aturan bisnis yang dapat dikonfigurasi, dan arsitektur Framework yang robust untuk skalabilitas. Fitur antarmuka web responsif yang dibangun dengan AngularJS dan Bootstrap, integrasi seamless dengan aplikasi field sales mobile, dan sinkronisasi real-time dengan sistem kantor pusat.',
        'proj.dms.hl1': 'Multiple modul',
        'proj.dms.hl2': 'Integrasi mobile',
        'proj.dms.hl3': 'Digunakan dealer nasional',
        
        // Encryption Tool
        'proj.encryption.title': 'Application Encryption Tool',
        'proj.encryption.category': 'Security Tool',
        'proj.encryption.desc': 'Utilitas keamanan enterprise yang dirancang untuk mengenkripsi dan mendekripsi bagian konfigurasi sensitif dalam file web.config dan app.config ASP.NET. Memanfaatkan DPAPI (Data Protection API) bawaan .NET dan provider kriptografi RSA untuk mengamankan connection string, API key, dan data konfigurasi sensitif lainnya. Fitur mencakup batch processing, manajemen backup, dan kepatuhan dengan best practices keamanan untuk deployment aplikasi. Memastikan perlindungan data sensitif saat disimpan sambil mempertahankan kemudahan manajemen konfigurasi di lingkungan development, staging, dan produksi.',
        'proj.encryption.hl1': 'Enkripsi config',
        'proj.encryption.hl2': 'Kepatuhan keamanan',
        'proj.encryption.hl3': 'Mudah digunakan',
        
        // CI/CD
        'proj.cicd.title': 'Implementasi CI/CD Pipeline',
        'proj.cicd.category': 'DevOps',
        'proj.cicd.desc': 'Solusi DevOps komprehensif yang mengimplementasikan infrastruktur CI/CD pipeline otomatis menggunakan Azure DevOps untuk aplikasi perbankan mission-critical. Fitur mencakup proses build otomatis dengan multi-stage YAML pipelines, automated unit dan integration testing, artifact management, dan strategi deployment zero-downtime dengan pendekatan blue-green deployment. Termasuk konfigurasi server otomatis, manajemen IIS, transformasi konfigurasi spesifik environment, prosedur rollback otomatis, dan monitoring komprehensif. Memberikan dukungan post-production dengan log deployment detail dan sistem notifikasi yang terintegrasi dengan Microsoft Teams.',
        'proj.cicd.hl1': 'Deployment otomatis',
        'proj.cicd.hl2': 'Delivery lebih cepat',
        'proj.cicd.hl3': 'Zero-downtime',
        
        // Library
        'proj.library.title': 'Sistem Manajemen Perpustakaan',
        'proj.library.category': 'Aplikasi Desktop',
        'proj.library.desc': 'Aplikasi desktop manajemen perpustakaan komprehensif yang dikembangkan sebagai proyek akhir diploma untuk perpustakaan SMAN 1 Situraja. Fitur manajemen siklus peminjaman buku lengkap termasuk katalogisasi, peminjaman, pengembalian, manajemen anggota, dan pelacakan keterlambatan. Mengimplementasikan sistem notifikasi SMS otomatis menggunakan Gammu untuk mengirim pengingat kepada anggota tentang tanggal jatuh tempo, buku yang terlambat, dan ketersediaan reservasi. Dibangun dengan Java Swing untuk antarmuka pengguna yang intuitif dan database MySQL untuk persistensi data. Berhasil diterapkan dan digunakan oleh pustakawan sekolah untuk operasi harian.',
        'proj.library.hl1': 'Manajemen buku',
        'proj.library.hl2': 'Notifikasi SMS',
        'proj.library.hl3': 'Proyek akhir',
        
        // Education Section
        'education.title': 'Pendidikan & Pencapaian',
        'education.column.education': 'Pendidikan',
        'education.column.achievements': 'Pencapaian & Aktivitas',
        
        // Education
        'edu.binus.degree': 'Sarjana Sistem Informasi',
        'edu.binus.institution': 'BINUS University, Jakarta',
        'edu.binus.year': '2017 - 2021 | IPK: 3.53',
        
        'edu.telkom.degree': 'Diploma Manajemen Informasi',
        'edu.telkom.institution': 'Telkom University, Bandung',
        'edu.telkom.year': '2011 - 2015 | IPK: 3.49',
        
        // Achievements
        'achieve.kode.title': 'Top 300 KodeIndonesia',
        'achieve.kode.desc': 'Peringkat 174 dari ribuan developer',
        
        'achieve.shift.title': 'Co-Founder Shift Corporation',
        'achieve.shift.desc': 'Startup teknologi yang fokus pada solusi digital',
        
        // Contact Section
        'contact.title': 'Hubungi Saya',
        'contact.subtitle': 'Jangan ragu untuk menghubungi untuk peluang atau kolaborasi',
        'contact.email': 'Email',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub',
        'contact.location': 'Lokasi',
        'contact.location.value': 'Indonesia',
        'contact.availability': 'Ketersediaan',
        'contact.available': 'Tersedia dengan pemberitahuan 1 bulan',
        
        // Footer
        'footer.copyright': '2025 Muhammad Fikri Akbar. Semua hak dilindungi.',
        'footer.tagline': 'Senior .NET Developer | Banking & Enterprise Systems Specialist',
    }
};

class LanguageManager {
    constructor() {
        this.currentLang = this.getStoredLanguage() || this.getBrowserLanguage();
        this.init();
    }

    init() {
        this.applyLanguage(this.currentLang);
        this.setupEventListeners();
    }

    getBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        // Check if Indonesian
        if (browserLang.toLowerCase().startsWith('id')) {
            return 'id';
        }
        return 'en';
    }

    getStoredLanguage() {
        return localStorage.getItem('language');
    }

    setStoredLanguage(lang) {
        localStorage.setItem('language', lang);
    }

    applyLanguage(lang) {
        this.currentLang = lang;
        this.setStoredLanguage(lang);
        document.documentElement.setAttribute('lang', lang);
        
        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = translations[lang][key];
            if (translation) {
                element.innerHTML = translation;
            }
        });

        // Update language selector
        this.updateLanguageSelector(lang);
    }

    toggleLanguage() {
        const newLang = this.currentLang === 'en' ? 'id' : 'en';
        this.applyLanguage(newLang);
    }

    updateLanguageSelector(lang) {
        const langText = document.getElementById('lang-text');
        const langFlag = document.getElementById('lang-flag');
        
        if (langText) {
            langText.textContent = lang.toUpperCase();
        }
        
        if (langFlag) {
            langFlag.className = lang === 'en' ? 'fas fa-globe' : 'fas fa-globe';
        }
    }

    setupEventListeners() {
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => this.toggleLanguage());
        }
    }
}

// Initialize language manager when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.languageManager = new LanguageManager();
    });
} else {
    window.languageManager = new LanguageManager();
}
