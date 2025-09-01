'use client';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import { motion } from 'framer-motion';
import { mfaAdoptionRate } from '@/lib/mockData';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const data = [{ name: 'MFA Adoption', value: mfaAdoptionRate }];

export default function MfaAdoptionRate() {
    return (
        <motion.div
            variants={cardVariants}
            className="rounded-lg p-6 h-full flex flex-col items-center justify-center bg-card border"
        >
            <h2 className="text-lg font-bold font-headline text-foreground mb-2 text-center">MFA Adoption Rate</h2>
            <div className="w-full h-48 relative">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        innerRadius="80%"
                        outerRadius="100%"
                        data={data}
                        startAngle={90}
                        endAngle={-270}
                    >
                        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                        <RadialBar
                            background
                            dataKey="value"
                            cornerRadius={10}
                            angleAxisId={0}
                            data={[{ value: 100 }]}
                            fill="hsl(var(--secondary))"
                        />
                         <RadialBar
                            background
                            dataKey="value"
                            cornerRadius={10}
                            fill="hsl(var(--primary))"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold font-headline text-foreground">{mfaAdoptionRate}%</span>
                </div>
            </div>
             <p className="text-sm text-muted-foreground mt-2 text-center">of active users have MFA enabled.</p>
        </motion.div>
    );
}
