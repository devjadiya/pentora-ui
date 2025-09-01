'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const CHART_DATA_POINTS = 60; // For 60 seconds

const generateInitialData = () => {
    const data = [];
    const now = Date.now();
    for (let i = CHART_DATA_POINTS - 1; i >= 0; i--) {
        data.push({
            time: now - i * 1000,
            success: 0,
            mfa: 0,
            blocked: 0,
        });
    }
    return data;
};

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const time = new Date(label).toLocaleTimeString();
      return (
        <div className="p-4 rounded-lg shadow-lg" style={{
            background: 'rgba(26, 12, 46, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <p className="label text-sm text-gray-400">{`${time}`}</p>
          {payload.map((pld: any) => (
            <p key={pld.dataKey} style={{ color: pld.color }} className="text-sm font-semibold">
              {`${pld.name}: ${pld.value.toFixed(0)}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
};


export default function WorkforceAuthenticationEvents() {
    const [data, setData] = useState(generateInitialData());
    const intervalRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        const updateData = () => {
            setData(prevData => {
                const newData = [...prevData];
                const lastDataPoint = newData[newData.length - 1];
                
                const success = Math.max(0, lastDataPoint.success + (Math.random() - 0.45) * 5 + (Math.random() > 0.95 ? 20 : 0));
                const mfa = Math.max(0, lastDataPoint.mfa + (Math.random() - 0.5) * 2 + (Math.random() > 0.98 ? 10 : 0));
                const blocked = Math.max(0, lastDataPoint.blocked + (Math.random() - 0.6) * 1 + (Math.random() > 0.97 ? 15 : 0));

                const newPoint = {
                    time: Date.now(),
                    success,
                    mfa,
                    blocked
                };
                
                const shiftedData = newData.slice(1);
                shiftedData.push(newPoint);
                return shiftedData;
            });
        };

        intervalRef.current = setInterval(updateData, 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <motion.div
            variants={containerVariants}
            className="lg:col-span-4 rounded-xl p-6 h-[50vh]"
            style={{
                background: 'rgba(26, 12, 46, 0.4)',
                backdropFilter: 'blur(12px)',
                border: '1px solid',
                borderImageSource: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
                borderImageSlice: 1
            }}
        >
            <h2 className="text-xl font-bold font-headline text-white mb-4">Workforce Authentication Events</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{ top: 5, right: 20, left: -10, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                    <XAxis 
                        dataKey="time" 
                        tickFormatter={(unixTime) => new Date(unixTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                        stroke="rgba(255, 255, 255, 0.5)"
                        dy={10}
                    />
                    <YAxis stroke="rgba(255, 255, 255, 0.5)" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend 
                        wrapperStyle={{ bottom: 0 }}
                        formatter={(value) => <span className="text-white">{value}</span>}
                    />
                    <Line 
                        type="monotone" 
                        dataKey="success" 
                        name="Successful Logins"
                        stroke="#22c55e" 
                        strokeWidth={2} 
                        dot={false}
                        isAnimationActive={false}
                    />
                    <Line 
                        type="monotone" 
                        dataKey="mfa" 
                        name="MFA Challenges"
                        stroke="#f59e0b" 
                        strokeWidth={2} 
                        dot={false} 
                        isAnimationActive={false}
                    />
                    <Line 
                        type="monotone" 
                        dataKey="blocked" 
                        name="Blocked Access Attempts"
                        stroke="#ef4444" 
                        strokeWidth={2} 
                        dot={false} 
                        isAnimationActive={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </motion.div>
    );
}
