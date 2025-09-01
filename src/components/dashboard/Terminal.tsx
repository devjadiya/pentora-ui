
'use client';

import { Tool } from "@/lib/mockData";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TerminalProps {
    tool: Tool;
}

const getMockOutput = (tool: Tool): string => {
    switch(tool.id) {
        case 'free-01': // ReconRaptor.sh
            return `
[*] Running ReconRaptor against target domain...
[*] Found 3 subdomains:
    - api.pentora.dev
    - assets.pentora.dev
    - internal.pentora.dev
[*] Port scanning 192.168.1.100...
[+] Open port: 22 (SSH)
[+] Open port: 80 (HTTP)
[+] Open port: 443 (HTTPS)
[!] Found potential directory listing on http://assets.pentora.dev/
[*] Reconnaissance complete. Report saved to recon_pentora.dev.txt
            `;
        case 'free-05': // PassHound.py
            return `
> python PassHound.py --file /wordlists/rockyou.txt
[*] Initializing PassHound against common password list...
[*] Analyzing password strength policies...
[+] Found 5 weak passwords in user database.
[!] User 'j.doe' is using a top-100 common password: 'password123'
[*] Audit complete. See results in weak_passwords.log
            `;
        case 'free-00': // CyberSec Framework
        default:
            return `
$ ./run_scan --target 192.168.1.1
Initializing CyberSec Framework v1.2...
Starting vulnerability scan...
[INFO] Scanning ports on 192.168.1.1...
[WARN] Port 21 (FTP) is open. Consider using SFTP.
[CRITICAL] Found vulnerability CVE-2023-12345 in Apache service on port 80.
[INFO] Scan completed in 45.3 seconds.
            `;
    }
}

const BlinkingCursor = () => (
    <motion.div
        className="inline-block h-4 w-2 bg-slate-300"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
);

export default function Terminal({ tool }: TerminalProps) {
    const output = getMockOutput(tool);

    return (
        <div className="bg-card text-slate-300 font-mono text-sm p-6 h-full w-full overflow-auto">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-green-400">pentora@dev</span>
                <span className="text-slate-100">:</span>
                <span className="text-primary">~</span>
                <span className="text-slate-100">$</span>
            </div>
            <pre className="whitespace-pre-wrap">{output}</pre>
            <div className="flex items-center gap-2 mt-2">
                <span className="text-green-400">pentora@dev</span>
                <span className="text-slate-100">:</span>
                <span className="text-primary">~</span>
                <span className="text-slate-100">$</span>
                <BlinkingCursor />
            </div>
        </div>
    );
}

