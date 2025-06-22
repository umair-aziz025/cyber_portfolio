import React, { useEffect, useRef, useState } from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
  BarElement,
} from 'chart.js';
import { 
  Shield, 
  AlertTriangle, 
  Activity, 
  Server, 
  Globe, 
  Eye, 
  TrendingUp,
  Database,
  Wifi
} from 'lucide-react';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
  BarElement
);

const Dashboard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeThreats, setActiveThreats] = useState(127);
  const [blockedAttacks, setBlockedAttacks] = useState(1482);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate real-time threat updates
      setActiveThreats(prev => prev + Math.floor(Math.random() * 3) - 1);
      setBlockedAttacks(prev => prev + Math.floor(Math.random() * 5));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Enhanced Network Visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;

    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulsePhase: number;
      type: 'normal' | 'threat' | 'secure';
    }> = [];
    
    const nodeCount = 40;
    
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = canvas.parentElement?.clientHeight || 400;
    };
    resizeCanvas();

    // Create enhanced nodes with different types
    for (let i = 0; i < nodeCount; i++) {
      const type = Math.random() < 0.1 ? 'threat' : Math.random() < 0.2 ? 'secure' : 'normal';
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 3 + 2,
        pulsePhase: Math.random() * Math.PI * 2,
        type
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw enhanced connections
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (dist < 120) {
            const opacity = Math.max(0, (120 - dist) / 120);
            
            // Different line colors based on node types
            if (nodes[i].type === 'threat' || nodes[j].type === 'threat') {
              ctx.strokeStyle = `rgba(255, 71, 71, ${opacity * 0.6})`;
            } else if (nodes[i].type === 'secure' || nodes[j].type === 'secure') {
              ctx.strokeStyle = `rgba(0, 255, 255, ${opacity * 0.4})`;
            } else {
              ctx.strokeStyle = `rgba(0, 255, 136, ${opacity * 0.3})`;
            }
            
            ctx.lineWidth = opacity * 2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }      // Draw enhanced nodes
      nodes.forEach((node) => {
        const pulse = Math.sin(Date.now() * 0.003 + node.pulsePhase) * 0.5 + 0.5;
        
        // Node colors and effects based on type
        switch (node.type) {
          case 'threat':
            ctx.fillStyle = '#ff4747';
            ctx.shadowColor = '#ff4747';
            ctx.shadowBlur = 10 + pulse * 5;
            break;
          case 'secure':
            ctx.fillStyle = '#00ffff';
            ctx.shadowColor = '#00ffff';
            ctx.shadowBlur = 8 + pulse * 3;
            break;
          default:
            ctx.fillStyle = '#00ff88';
            ctx.shadowColor = '#00ff88';
            ctx.shadowBlur = 6 + pulse * 2;
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + pulse * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Update positions
        node.x += node.vx;
        node.y += node.vy;

        // Enhanced boundary collision with smooth bouncing
        if (node.x < node.radius || node.x > canvas.width - node.radius) {
          node.vx *= -0.8;
          node.x = Math.max(node.radius, Math.min(canvas.width - node.radius, node.x));
        }
        if (node.y < node.radius || node.y > canvas.height - node.radius) {
          node.vy *= -0.8;
          node.y = Math.max(node.radius, Math.min(canvas.height - node.radius, node.y));
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Enhanced Chart Data
  const networkTrafficData = {
    labels: ['23:00', '23:05', '23:10', '23:15', '23:20', '23:25', '23:30'],
    datasets: [
      {
        label: 'Incoming Traffic',
        data: [120, 150, 180, 160, 220, 210, 250],
        borderColor: '#00ff88',
        backgroundColor: 'rgba(0, 255, 136, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#00ff88',
        pointBorderColor: '#ffffff',
        pointHoverRadius: 8,
        pointRadius: 4,
        borderWidth: 3,
      },
      {
        label: 'Threat Attempts',
        data: [20, 35, 25, 45, 30, 55, 40],
        borderColor: '#ff4747',
        backgroundColor: 'rgba(255, 71, 71, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#ff4747',
        pointBorderColor: '#ffffff',
        pointHoverRadius: 8,
        pointRadius: 4,
        borderWidth: 3,
      }
    ],
  };

  const threatDistributionData = {
    labels: ['DDoS', 'Malware', 'Phishing', 'Brute Force', 'SQL Injection'],
    datasets: [
      {
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          'rgba(255, 71, 71, 0.8)',
          'rgba(255, 171, 71, 0.8)',
          'rgba(255, 255, 71, 0.8)',
          'rgba(140, 255, 140, 0.8)',
          'rgba(0, 255, 255, 0.8)',
        ],
        borderColor: [
          '#ff4747',
          '#ffab47',
          '#ffff47',
          '#8cff8c',
          '#00ffff',
        ],
        borderWidth: 2,
      },
    ],
  };

  const systemPerformanceData = {
    labels: ['CPU', 'Memory', 'Disk', 'Network'],
    datasets: [
      {
        label: 'Usage %',
        data: [75, 62, 45, 88],
        backgroundColor: 'rgba(0, 255, 136, 0.6)',
        borderColor: '#00ff88',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        display: true,
        labels: { color: '#00ff88' }
      },
      title: { display: false },
    },
    scales: {
      x: {
        grid: { color: 'rgba(0, 255, 136, 0.1)' },
        ticks: { color: '#00ff88' },
      },
      y: {
        grid: { color: 'rgba(0, 255, 136, 0.1)' },
        ticks: { color: '#00ff88' },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: { color: '#00ff88' }
      },
    },
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { color: 'rgba(0, 255, 136, 0.1)' },
        ticks: { color: '#00ff88' },
      },
      y: {
        grid: { color: 'rgba(0, 255, 136, 0.1)' },
        ticks: { color: '#00ff88' },
        beginAtZero: true,
        max: 100,
      },
    },
  };

  const threatAlerts = [
    { id: 1, type: 'CRITICAL', message: 'DDoS Attack Detected - Sector 7G', time: '23:47:32', color: '#ff4747' },
    { id: 2, type: 'HIGH', message: 'Suspicious Login Pattern - Admin Panel', time: '23:45:18', color: '#ffab47' },
    { id: 3, type: 'MEDIUM', message: 'Outdated SSL Certificate - srv-db03', time: '23:42:05', color: '#ffff47' },
    { id: 4, type: 'LOW', message: '1,482 Brute-force Attempts Blocked', time: '23:40:22', color: '#8cff8c' },
    { id: 5, type: 'INFO', message: 'System Backup Completed Successfully', time: '23:35:10', color: '#00ffff' },
  ];

  return (    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Enhanced Background Effects - Made ultra transparent for Matrix visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-gray-900/20 to-black/20">
        <div className="absolute inset-0 bg-gradient-radial from-green-500/1 via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern animate-grid-move"></div>
        </div>
        {/* Animated scanlines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="cyber-scanlines"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
              <Shield className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-5xl font-bold text-white glow-green cyber-title">
              CYBERSECURITY COMMAND CENTER
            </h2>
          </div>
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="text-green-400 font-mono">
              <span className="text-gray-400">STATUS:</span> 
              <span className="text-green-400 animate-pulse ml-2">● ALL SYSTEMS OPERATIONAL</span>
            </div>
            <div className="text-green-400 font-mono">
              <span className="text-gray-400">TIME:</span> 
              <span className="text-green-400 ml-2">{currentTime.toLocaleTimeString()}</span>
            </div>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="card-glow card-animated-border rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
              <Activity className="w-6 h-6 text-black" />
            </div>
            <div className="text-3xl font-bold text-green-400 mb-2 font-mono">{activeThreats}</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Active Threats</div>
          </div>

          <div className="card-glow card-animated-border rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
              <Shield className="w-6 h-6 text-black" />
            </div>
            <div className="text-3xl font-bold text-cyan-400 mb-2 font-mono">{blockedAttacks.toLocaleString()}</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Attacks Blocked</div>
          </div>

          <div className="card-glow card-animated-border rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
              <Server className="w-6 h-6 text-black" />
            </div>
            <div className="text-3xl font-bold text-yellow-400 mb-2 font-mono">99.9%</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">System Uptime</div>
          </div>

          <div className="card-glow card-animated-border rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
              <Globe className="w-6 h-6 text-black" />
            </div>
            <div className="text-3xl font-bold text-purple-400 mb-2 font-mono">24/7</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Monitoring</div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Network Visualization */}
          <div className="lg:col-span-2 card-glow card-animated-border rounded-xl overflow-hidden">
            <div className="p-6 border-b border-green-500/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Wifi className="w-4 h-4 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white">LIVE NETWORK TOPOLOGY</h3>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-mono">LIVE</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 bg-black/40">
              <canvas ref={canvasRef} className="w-full h-full"></canvas>
              <div className="absolute top-4 left-4 space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-green-400">Secure Nodes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-red-400">Threat Detected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-cyan-400">Protected Zones</span>
                </div>
              </div>
            </div>
          </div>

          {/* Threat Alerts */}
          <div className="card-glow card-animated-border rounded-xl overflow-hidden">
            <div className="p-6 border-b border-green-500/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white">THREAT INTELLIGENCE</h3>
              </div>
            </div>
            <div className="p-6 max-h-96 overflow-y-auto custom-scrollbar">
              <div className="space-y-3">
                {threatAlerts.map((alert) => (
                  <div key={alert.id} className="bg-black/40 rounded-lg p-4 border-l-4 hover:bg-black/60 transition-colors duration-200" style={{ borderLeftColor: alert.color }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold px-2 py-1 rounded" style={{ backgroundColor: alert.color, color: '#000' }}>
                        {alert.type}
                      </span>
                      <span className="text-gray-400 text-xs font-mono">{alert.time}</span>
                    </div>
                    <p className="text-sm text-gray-300">{alert.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Network Traffic Chart */}
          <div className="card-glow card-animated-border rounded-xl overflow-hidden">
            <div className="p-6 border-b border-green-500/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white">NETWORK TRAFFIC</h3>
              </div>
            </div>
            <div className="p-6 h-80">
              <Line data={networkTrafficData} options={chartOptions} />
            </div>
          </div>

          {/* Threat Distribution */}
          <div className="card-glow card-animated-border rounded-xl overflow-hidden">
            <div className="p-6 border-b border-green-500/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Eye className="w-4 h-4 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white">THREAT BREAKDOWN</h3>
              </div>
            </div>
            <div className="p-6 h-80">
              <Doughnut data={threatDistributionData} options={doughnutOptions} />
            </div>
          </div>

          {/* System Performance */}
          <div className="card-glow card-animated-border rounded-xl overflow-hidden">
            <div className="p-6 border-b border-green-500/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Database className="w-4 h-4 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white">SYSTEM PERFORMANCE</h3>
              </div>
            </div>
            <div className="p-6 h-80">
              <Bar data={systemPerformanceData} options={barOptions} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
