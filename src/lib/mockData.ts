
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


export const freeTools: Tool[] = [
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
        name: 'ReconRaptor',
        description: 'Automated OSINT gathering and reconnaissance.',
        type: 'Free',
        category: 'Red Team',
        code: `const os = require('os');\nconsole.log('Scanning network:', os.networkInterfaces());`,
    },
    {
        id: 'free-02',
        name: 'PhishGuard',
        description: 'Analyze email headers for phishing indicators.',
        type: 'Free',
        category: 'Blue Team',
        code: `function analyzeHeader(header) {\n  return header.includes('spf=fail');\n}`,
    },
    {
        id: 'free-03',
        name: 'NetStalker',
        description: 'Fast network discovery and port scanning tool.',
        type: 'Free',
        category: 'Vulnerability Assessment',
        code: `import nmap\nnm = nmap.PortScanner()\nnm.scan('127.0.0.1', '22-443')`,
    },
    {
        id: 'free-04',
        name: 'CryptoCheck',
        description: 'Check for weak TLS/SSL configurations.',
        type: 'Free',
        category: 'Vulnerability Assessment',
        code: `import ssl\nimport socket\nhostname = 'example.com'\ncontext = ssl.create_default_context()\nsocket.create_connection((hostname, 443))`,
    },
    {
        id: 'free-05',
        name: 'PassHound',
        description: 'Identify weak and commonly used passwords.',
        type: 'Free',
        category: 'Red Team',
        code: `const commonPasswords = ['123456', 'password'];\nfunction checkStrength(pwd) {\n  return !commonPasswords.includes(pwd);\n}`,
    },
    {
        id: 'free-06',
        name: 'LogLense',
        description: 'A lightweight log file anomaly detector.',
        type: 'Free',
        category: 'Blue Team',
        code: `def find_anomalies(log_file):\n    for line in log_file:\n        if "ERROR" in line:\n            print(line)`,
    },
    {
        id: 'free-07',
        name: 'PayloadGen',
        description: 'Generate common XSS and SQLi payloads.',
        type: 'Free',
        category: 'Red Team',
        code: `const xssPayloads = ['<script>alert(1)</script>'];`,
    },
    {
        id: 'free-08',
        name: 'ConfigGaurd',
        description: 'Audit server configuration files for security.',
        type: 'Free',
        category: 'Blue Team',
        code: `cat /etc/ssh/sshd_config | grep "PermitRootLogin"`,
    },
    {
        id: 'free-09',
        name: 'DepShield',
        description: 'Scan project dependencies for known CVEs.',
        type: 'Free',
        category: 'Vulnerability Assessment',
        code: `npm audit`,
    },
    {
        id: 'free-10',
        name: 'HoneyPotter',
        description: 'Deploy a simple honeypot to trap attackers.',
        type: 'Free',
        category: 'Blue Team',
        code: `import socket\ns = socket.socket()\ns.bind(('0.0.0.0', 22))\ns.listen(5)`,
    },
    {
        id: 'free-11',
        name: 'DirBrute',
        description: 'Brute-force web server directories and files.',
        type: 'Free',
        category: 'Red Team',
        code: `import requests\nrequests.get('https://example.com/admin')`,
    },
    {
        id: 'free-12',
        name: 'HashCracker',
        description: 'Simple hash identification and cracking utility.',
        type: 'Free',
        category: 'Red Team',
        code: `import hashlib\nhashlib.md5(b'password').hexdigest()`,
    },
    {
        id: 'free-13',
        name: 'MalwareScan',
        description: 'Basic Yara rule scanner for local files.',
        type: 'Free',
        category: 'Blue Team',
        code: `import yara\nrules = yara.compile(filepath='my_rules')\nrules.match(filepath='some_file')`,
    },
    {
        id: 'free-14',
        name: 'ApiSentry',
        description: 'Monitor API endpoints for unusual traffic patterns.',
        type: 'Free',
        category: 'Blue Team',
        code: `function monitor(request) {\n  if(request.rate > 100) return 'blocked';\n}`,
    },
    {
        id: 'free-15',
        name: 'SubDomainiac',
        description: 'Enumerate subdomains of a target domain.',
        type: 'Free',
        category: 'Red Team',
        code: `import dns.resolver\ndns.resolver.resolve('google.com', 'A')`,
    },
    {
        id: 'free-16',
        name: 'JwtInspector',
        description: 'Decode and inspect JSON Web Tokens.',
        type: 'Free',
        category: 'Vulnerability Assessment',
        code: `import jwt\njwt.decode('ey...', options={"verify_signature": False})`,
    },
    {
        id: 'free-17',
        name: 'FirewallTest',
        description: 'Test firewall rules for common misconfigurations.',
        type: 'Free',
        category: 'Blue Team',
        code: `iptables -L`,
    },
    {
        id: 'free-18',
        name: 'CloudWatchr',
        description: 'Scan S3 buckets for public accessibility.',
        type: 'Free',
        category: 'Vulnerability Assessment',
        code: `import boto3\ns3 = boto3.client('s3')\nresponse = s3.list_buckets()`,
    },
    {
        id: 'free-19',
        name: 'ThreatWire',
        description: 'A simple RSS feed aggregator for threat intel.',
        type: 'Free',
        category: 'Blue Team',
        code: `import feedparser\nfeedparser.parse('https://threatpost.com/feed/')`,
    },
    {
        id: 'free-20',
        name: 'GitSleuth',
        description: 'Scan git repositories for leaked secrets.',
        type: 'Free',
        category: 'Vulnerability Assessment',
        code: `git log -p | grep "secret"`,
    },
];

export const premiumTools: Tool[] = [
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
    {
        id: 'prem-04',
        name: 'Helios IR',
        description: 'Incident response orchestration and digital forensics platform.',
        type: 'Premium',
        category: 'Blue Team',
    },
    {
        id: 'prem-05',
        name: 'Sentinel CSPM',
        description: 'Continuous cloud security posture and compliance management.',
        type: 'Premium',
        category: 'Blue Team',
    },
    {
        id: 'prem-06',
        name: 'RedTeamOS',
        description: 'A complete, containerized OS for red team operations.',
        type: 'Premium',
        category: 'Red Team',
    },
    {
        id: 'prem-07',
        name: 'AppDefend RASP',
        description: 'Runtime Application Self-Protection to block attacks in real-time.',
        type: 'Premium',
        category: 'Vulnerability Assessment',
    },
    {
        id: 'prem-08',
        name: 'Phalanx Deception',
        description: 'Enterprise-grade deception technology and honeynet management.',
        type: 'Premium',
        category: 'Blue Team',
    },
    {
        id: 'prem-09',
        name: 'AdversarySim',
        description: 'Breach and Attack Simulation (BAS) platform.',
        type: 'Premium',
        category: 'Red Team',
    },
    {
        id: 'prem-10',
        name: 'ComplianceFlow',
        description: 'Automated compliance mapping and evidence gathering.',
        type: 'Premium',
        category: 'Vulnerability Assessment',
    },
];

export const allTools = [...freeTools, ...premiumTools];

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
