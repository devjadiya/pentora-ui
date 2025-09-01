
export const headerStats = [
  { title: 'Vulnerabilities', value: '47', trend: '+5 since last scan' },
  { title: 'Secured Endpoints', value: '1,247', trend: '+12' },
  { title: 'Uptime', value: '99.9%', trend: '' },
];


export const kpiData = [
  { title: 'Global Threats Neutralized (24h)', value: '1.2M', trend: '+7%', icon: 'ShieldCheck' },
  { title: 'Corporate Assets Protected', value: '4.7M', trend: '+15%', icon: 'Server' },
  { title: 'CVEs Exploited & Patched', value: '8,921', trend: '+3%', icon: 'Bug' },
  { title: 'Data Breach Incidents Prevented', value: '1,533', trend: '-2%', icon: 'DatabaseZap' },
];

export interface Tool {
  id: string;
  name: string;
  description: string;
  type: 'Free' | 'Premium';
  category: 'Red Team' | 'Blue Team' | 'Vulnerability Assessment';
  code?: string;
  children?: Tool[];
}

const cyberSecFrameworkCode = `
# CyberSec Framework

A comprehensive Python framework for modern security operations.

## Core Features
- **Vulnerability Assessment**: Scan networks and applications for known vulnerabilities.
- **Penetration Testing**: Tools for simulating attacks and testing defenses.
- **Encryption & Decryption**: Secure data using industry-standard cryptographic libraries.
- **Threat Detection**: Analyze logs and network traffic for signs of compromise.

## Technical Stack & Prerequisites
- Python 3.9+
- Core Libraries:
  - \`cryptography\`: For handling encryption and decryption tasks.
  - \`requests\`: For making HTTP requests to interact with APIs or scan web services.
  - \`socket\`: For low-level network interactions, essential for network scanning.

## Installation
\`\`\`bash
# Clone the repository
git clone https://github.com/pentora/cybersec-framework.git
cd cybersec-framework

# Install dependencies
pip install -r requirements.txt
\`\`\`

## Security Metrics
| Module             | Status   | Vulnerabilities | Last Scan  |
|--------------------|----------|-----------------|------------|
| Network Scanner    | CRITICAL | 3               | 2024-01-15 |
| Encryption         | WARNING  | 2               | 2024-01-14 |
| Authentication     | SECURE   | 0               | 2024-01-15 |
| Database           | SECURE   | 0               | 2024-01-14 |


## Basic Usage Example
\`\`\`python
from src.security.penetration_test import SecurityFramework

# Initialize framework
# Ensure environment variables are set
framework = SecurityFramework()

# Run vulnerability scan
results = framework.vulnerability_scan("192.168.1.1", [22, 80, 443])
print(f"Found {len(results)} open ports")
\`\`\`

## Configuration
The framework uses environment variables for configuration. This is a secure way to manage sensitive data like API keys without hardcoding them.

\`\`\`bash
export CYBERSEC_LOG_LEVEL=INFO
export CYBERSEC_ENCRYPTION_KEY=your-secure-key
\`\`\`
`;

export const allTools: Tool[] = [
    {
        id: 'free-00',
        name: 'CyberSec Framework',
        description: 'A comprehensive framework for security tasks.',
        type: 'Free',
        category: 'Vulnerability Assessment',
        code: cyberSecFrameworkCode,
    },
    {
        id: 'free-01',
        name: 'ReconRaptor.sh',
        description: 'Automated OSINT gathering and reconnaissance.',
        type: 'Free',
        category: 'Red Team',
        code: `const os = require('os');\nconsole.log('Scanning network:', os.networkInterfaces());`,
    },
    {
        id: 'free-02',
        name: 'PhishGuard.py',
        description: 'Analyze email headers for phishing indicators.',
        type: 'Free',
        category: 'Blue Team',
        code: `function analyzeHeader(header) {\n  return header.includes('spf=fail');\n}`,
    },
    {
        id: 'free-03',
        name: 'NetStalker.go',
        description: 'Fast network discovery and port scanning tool.',
        type: 'Free',
        category: 'Vulnerability Assessment',
        code: `import nmap\nnm = nmap.PortScanner()\nnm.scan('127.0.0.1', '22-443')`,
    },
    {
        id: 'free-04',
        name: 'CryptoCheck.js',
        description: 'Check for weak TLS/SSL configurations.',
        type: 'Free',
        category: 'Vulnerability Assessment',
        code: `import ssl\nimport socket\nhostname = 'example.com'\ncontext = ssl.create_default_context()\nsocket.create_connection((hostname, 443))`,
    },
    {
        id: 'free-05',
        name: 'PassHound.py',
        description: 'Identify weak and commonly used passwords.',
        type: 'Free',
        category: 'Red Team',
        code: `const commonPasswords = ['123456', 'password'];\nfunction checkStrength(pwd) {\n  return !commonPasswords.includes(pwd);\n}`,
    },
    {
        id: 'free-06',
        name: 'LogLense.rs',
        description: 'A lightweight log file anomaly detector.',
        type: 'Free',
        category: 'Blue Team',
        code: `def find_anomalies(log_file):\n    for line in log_file:\n        if "ERROR" in line:\n            print(line)`,
    },
    {
        id: 'free-07',
        name: 'PayloadGen.json',
        description: 'Generate common XSS and SQLi payloads.',
        type: 'Free',
        category: 'Red Team',
        code: `const xssPayloads = ['<script>alert(1)</script>'];`,
    },
    {
        id: 'prem-01',
        name: 'Aegis Automata',
        description: 'Automated Enterprise SIEM with AI-driven correlation.',
        type: 'Premium',
        category: 'Blue Team',
    },
    {
        id: 'prem-02',
        name: 'VulcanForge',
        description: 'Advanced Penetration Testing Suite with automated exploitation.',
        type: 'Premium',
        category: 'Red Team',
    },
    {
        id: 'prem-03',
        name: 'ThreatMatrix AI',
        description: 'Predictive threat modeling and attack surface management.',
        type: 'Premium',
        category: 'Vulnerability Assessment',
    },
];

export const securityAlerts = [
    { id: 1, time: "3m ago", severity: "Critical", description: "Anomalous login detected from new location.", source: "IAM-01" },
    { id: 2, time: "15m ago", severity: "High", description: "Multiple failed login attempts for user 'admin'.", source: "Auth-FW" },
    { id: 3, time: "32m ago", severity: "Medium", description: "Outdated software version detected on server 'web-prod-03'.", source: "VULN-SCAN" },
    { id: 4, time: "1h ago", severity: "Low", description: "Unusual port scan activity from IP 203.0.113.45.", source: "IDS-02" },
];

export const systemStatus = [
    { name: "Global Firewall", status: "active", value: 99.9 },
    { name: "Intrusion Detection (IDS/IPS)", status: "active", value: 98.2 },
    { name: "SIEM Correlation Engine", status: "active", value: 99.5 },
    { name: "Cloud Endpoint Protection", status: "warning", value: 85.7 },
    { name: "Data Loss Prevention (DLP)", status: "active", value: 100 },
    { name: "Threat Intelligence Feed", status: "maintenance", value: 0 },
];

export const accessByRoleData = [
  { name: 'User', value: 650, fill: '#8A2BE2' },
  { name: 'Developer', value: 250, fill: '#6A23B5' },
  { name: 'Admin', value: 100, fill: '#48197E' },
];

export const recentPrivilegedAccessData = [
    { id: 1, user: 'alex.v', role: 'Admin', action: 'Accessed production database console.', time: '2m ago' },
    { id: 2, user: 's.chen', role: 'Developer', action: 'Pushed new build to staging environment.', time: '5m ago' },
    { id: 3, user: 'secops.bot', role: 'System', action: 'Rotated API keys for payment gateway.', time: '1h ago' },
    { id: 4, user: 'hr.admin', role: 'Admin', action: 'Viewed compensation records.', time: '2h ago' },
    { id: 5, user: 'alex.v', role: 'Admin', action: 'Modified global firewall rules.', time: 'yesterday' },
];

export const mfaAdoptionRate = 92;


export const nistFrameworkData = [
    { 
        name: 'Identify', 
        description: 'Develop an organizational understanding to manage cybersecurity risk to systems, assets, data, and capabilities.',
        score: 95 
    },
    { 
        name: 'Protect', 
        description: 'Implement appropriate safeguards to ensure delivery of critical infrastructure services.',
        score: 88
    },
    { 
        name: 'Detect', 
        description: 'Implement appropriate activities to identify the occurrence of a cybersecurity event.',
        score: 92
    },
    { 
        name: 'Respond', 
        description: 'Implement appropriate activities to take action regarding a detected cybersecurity incident.',
        score: 75
    },
    { 
        name: 'Recover', 
        description: 'Implement appropriate activities to maintain plans for resilience and to restore any capabilities or services that were impaired due to a cybersecurity incident.',
        score: 85
    },
];
