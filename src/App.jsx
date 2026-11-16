import React, { useState, useEffect } from 'react';
import { 
  Gamepad2, 
  Cpu, 
  Code2, 
  Brain, 
  Github, 
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Terminal, 
  Sparkles, 
  Play, 
  Activity, 
  Layers, 
  Zap, 
  CircuitBoard, 
  Boxes, 
  FileCode2, 
  Bot, 
  Atom, 
  Radio, 
  Compass, 
  ShieldCheck,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [copiedType, setCopiedType] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroTab, setHeroTab] = useState('unity');

  // Interactive Flappy Bird mini-simulation
  const [flappyPos, setFlappyPos] = useState(48);
  const [flappyScore, setFlappyScore] = useState(24);
  const [sensorDist, setSensorDist] = useState(16);
  const [selectedPoke, setSelectedPoke] = useState(0);

  const pokemonList = [
    { 
      name: 'Gengar', 
      id: '#094', 
      type: 'Ghost / Poison', 
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png',
      hp: 60, 
      atk: 65, 
      speed: 110 
    },
    { 
      name: 'Lucario', 
      id: '#448', 
      type: 'Fighting / Steel', 
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png',
      hp: 70, 
      atk: 110, 
      speed: 90 
    },
    { 
      name: 'Greninja', 
      id: '#658', 
      type: 'Water / Dark', 
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png',
      hp: 72, 
      atk: 95, 
      speed: 122 
    }
  ];

  // Flappy physics jump
  const handleFlap = () => {
    setFlappyPos(prev => Math.max(12, prev - 24));
    setFlappyScore(prev => prev + 1);
  };

  // Flappy natural gravity
  useEffect(() => {
    const timer = setInterval(() => {
      setFlappyPos(prev => (prev < 72 ? prev + 3 : 72));
    }, 110);
    return () => clearInterval(timer);
  }, []);

  const toggleSensor = () => {
    setSensorDist(prev => (prev > 12 ? 6.2 : 21.8));
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2200);
  };

  const skillsData = [
    {
      category: "Gamedev",
      icon: Gamepad2,
      color: "text-sky-400",
      items: [
        { name: "Unity", icon: Gamepad2 },
        { name: "C#", icon: FileCode2 },
        { name: "Godot", icon: Boxes },
        { name: "Construct", icon: Layers },
        { name: "Física 2D", icon: Zap }
      ]
    },
    {
      category: "Robótica",
      icon: Cpu,
      color: "text-cyan-400",
      items: [
        { name: "Arduino Uno", icon: CircuitBoard },
        { name: "C++", icon: FileCode2 },
        { name: "HC-SR04", icon: Radio },
        { name: "Ponte H", icon: Cpu },
        { name: "Motores DC", icon: Activity }
      ]
    },
    {
      category: "Web & Lógica",
      icon: Code2,
      color: "text-blue-400",
      items: [
        { name: "React", icon: Atom },
        { name: "Tailwind", icon: Sparkles },
        { name: "JavaScript", icon: FileCode2 },
        { name: "Python", icon: Terminal },
        { name: "Algoritmos", icon: Compass }
      ]
    },
    {
      category: "Agentes de IA",
      icon: Brain,
      color: "text-indigo-400",
      items: [
        { name: "Agentes", icon: Bot },
        { name: "Skills", icon: Zap },
        { name: "Harness", icon: Boxes },
        { name: "Memory", icon: ShieldCheck },
        { name: "Contexto", icon: Layers }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#080c16] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-200 font-sans">
      
      {/* Background Subtle Tech Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-tech-grid opacity-60"></div>
        <div className="absolute -top-32 left-1/4 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Toast Alert */}
      {copiedType && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0f172a] border border-cyan-500/40 shadow-xl shadow-cyan-500/20 backdrop-blur-md animate-fade-in font-mono text-xs">
          <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
            <Check className="w-3 h-3" />
          </div>
          <span>{copiedType === 'discord' ? 'Discord copiado: toronto_ofc' : 'E-mail copiado: YuriDev@gmail.com'}</span>
        </div>
      )}

      {/* Top Ticker */}
      <div className="border-b border-slate-800/80 bg-[#060912]/90 text-[11px] font-mono text-slate-400 py-1 px-4 sm:px-6 relative z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-300 font-semibold">YURI</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">13 ANOS</span>
            <span className="hidden sm:inline text-slate-600">/</span>
            <span className="hidden sm:inline text-slate-500">CTRL+PLAY (3 ANOS)</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="text-cyan-400 font-medium">STATUS: CRIANDO</span>
          </div>
        </div>
      </div>

      {/* Minimal Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#080c16]/85 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-2 font-mono">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px]">
              <div className="w-full h-full bg-[#080c16] rounded-[7px] flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              </div>
            </div>
            <span className="font-bold text-sm text-white">Yuri<span className="text-cyan-400">.dev</span></span>
          </a>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-slate-300">
            <a href="#sobre" className="hover:text-cyan-400 transition-colors">Sobre</a>
            <a href="#habilidades" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projetos" className="hover:text-cyan-400 transition-colors">Projetos</a>
            <a href="#contato" className="hover:text-cyan-400 transition-colors">Contato</a>
          </nav>

          {/* Header Social Icons */}
          <div className="flex items-center gap-2 font-mono">
            <a 
              href="https://github.com/torontodevofc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-all border border-slate-800"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>

            <button 
              onClick={() => copyToClipboard('toronto_ofc', 'discord')}
              className="btn-tactile px-2.5 py-1 rounded-lg text-xs text-cyan-300 bg-cyan-950/50 border border-cyan-800/60 hover:border-cyan-500/70 flex items-center gap-1.5"
            >
              <Copy className="w-3 h-3" />
              <span>toronto_ofc</span>
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

        {/* ========================================================
            HERO (Visual + Direto + Mini-Sim Original)
            ======================================================== */}
        <section className="pt-10 pb-12 md:pt-16 md:pb-20 grid lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 mb-4">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>13 anos · 3 anos de código na Ctrl+Play</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-4 text-white">
              Criando <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">jogos, robôs</span> e web moderna.
            </h1>

            <p className="text-sm sm:text-base text-slate-300 mb-6 font-normal max-w-lg">
              De simulação física na Unity (C#) e sensores com Arduino a interfaces em React e arquitetura de Agentes de IA.
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <a 
                href="#projetos"
                className="btn-tactile inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-md shadow-cyan-500/20"
              >
                <span>VER PROJETOS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button 
                onClick={() => copyToClipboard('toronto_ofc', 'discord')}
                className="btn-tactile inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#0f172a] text-slate-200 border border-slate-800 hover:border-slate-700"
              >
                <Copy className="w-3 h-3 text-cyan-400" />
                <span>Discord</span>
              </button>

              <a 
                href="https://github.com/torontodevofc"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#0f172a] text-slate-300 border border-slate-800 hover:border-slate-700"
              >
                <Github className="w-3 h-3" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Mini metrics */}
            <div className="flex items-center gap-6 mt-8 pt-6 border-t border-slate-800/80 font-mono text-xs">
              <div>
                <span className="block text-xl font-bold text-white">3 ANOS</span>
                <span className="text-slate-500 text-[10px]">Ctrl+Play</span>
              </div>
              <div className="w-[1px] h-7 bg-slate-800"></div>
              <div>
                <span className="block text-xl font-bold text-cyan-400">3 ÁREAS</span>
                <span className="text-slate-500 text-[10px]">Games · Hardware · Web</span>
              </div>
              <div className="w-[1px] h-7 bg-slate-800"></div>
              <div>
                <span className="block text-xl font-bold text-sky-400">10+ TOOLS</span>
                <span className="text-slate-500 text-[10px]">C#, C++, JS, Python</span>
              </div>
            </div>
          </div>

          {/* Right: Live Telemetry HUD with Original Flappy Bird Assets */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0c1220] border border-slate-800/90 shadow-2xl overflow-hidden font-mono text-xs">
              
              <div className="bg-[#080d18] px-3.5 py-2.5 border-b border-slate-800/80 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="ml-1 text-slate-400 text-[10px]">live_hud.sim</span>
                </div>
                <div className="flex gap-1 text-[10px]">
                  <button 
                    onClick={() => setHeroTab('unity')} 
                    className={`px-2 py-0.5 rounded ${heroTab === 'unity' ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60' : 'text-slate-500'}`}
                  >
                    Unity (Original)
                  </button>
                  <button 
                    onClick={() => setHeroTab('arduino')} 
                    className={`px-2 py-0.5 rounded ${heroTab === 'arduino' ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60' : 'text-slate-500'}`}
                  >
                    Arduino
                  </button>
                  <button 
                    onClick={() => setHeroTab('ai')} 
                    className={`px-2 py-0.5 rounded ${heroTab === 'ai' ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60' : 'text-slate-500'}`}
                  >
                    IA
                  </button>
                </div>
              </div>

              <div className="p-4 min-h-[220px] flex flex-col justify-between">
                
                {/* UNITY WITH ORIGINAL ASSETS */}
                {heroTab === 'unity' && (
                  <div className="space-y-3">
                    <div className="relative h-32 rounded-lg border border-slate-800 overflow-hidden flex items-center justify-between px-6 bg-[url('/flappy/bg.png')] bg-cover bg-bottom">
                      
                      {/* Top Pipe (inverted) */}
                      <div className="absolute top-0 left-20 w-8 h-12 overflow-hidden pointer-events-none">
                        <img 
                          src="/flappy/pipe.png" 
                          alt="Pipe" 
                          className="w-full rotate-180 origin-top" 
                        />
                      </div>

                      {/* Bottom Pipe */}
                      <div className="absolute bottom-4 left-20 w-8 h-10 overflow-hidden pointer-events-none">
                        <img 
                          src="/flappy/pipe.png" 
                          alt="Pipe" 
                          className="w-full" 
                        />
                      </div>

                      {/* Original Flappy Bird Yellow Sprite */}
                      <div 
                        style={{ transform: `translateY(${flappyPos - 48}px)` }} 
                        className="relative z-10 transition-transform duration-100 drop-shadow-md ml-4"
                      >
                        <img 
                          src="/flappy/bird.png" 
                          alt="Original Flappy Bird" 
                          className="w-9 h-7 [image-rendering:pixelated]" 
                        />
                      </div>

                      {/* Classic Base Floor */}
                      <div className="absolute bottom-0 inset-x-0 h-4 bg-[url('/flappy/base.png')] bg-repeat-x bg-contain z-10"></div>

                      {/* Score Overlay */}
                      <div className="text-right z-10 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10">
                        <span className="text-[10px] text-slate-300 block font-bold">SCORE</span>
                        <span className="text-xl font-extrabold text-amber-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-mono">
                          {flappyScore}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <button 
                        onClick={handleFlap}
                        className="btn-tactile px-3 py-1 rounded bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs flex items-center gap-1.5 font-bold"
                      >
                        <Play className="w-3 h-3 fill-current" /> Flap (Pular)!
                      </button>
                      <span className="text-[10px] text-slate-500 font-mono">Rigidbody2D.velocity = Vector2.up * 5f;</span>
                    </div>
                  </div>
                )}

                {/* ARDUINO */}
                {heroTab === 'arduino' && (
                  <div className="space-y-3">
                    <div className="p-3 bg-[#060a12] rounded-lg border border-slate-800 space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Sensor HC-SR04:</span>
                        <span className={sensorDist < 10 ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold'}>
                          {sensorDist} cm
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-cyan-400 h-full transition-all duration-300" 
                          style={{ width: `${Math.min(100, sensorDist * 4)}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-400 pt-1">
                        <span>Ponte H: L298N</span>
                        <span className="text-cyan-300">{sensorDist < 10 ? 'Giro 45°' : 'Frente PWM 255'}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <button 
                        onClick={toggleSensor}
                        className="btn-tactile px-3 py-1 rounded bg-blue-900/40 border border-blue-700/50 text-blue-300 text-xs flex items-center gap-1.5 font-bold"
                      >
                        <Activity className="w-3 h-3" /> Testar Distância
                      </button>
                      <span className="text-[10px] text-slate-500">COM4 · 9600 Baud</span>
                    </div>
                  </div>
                )}

                {/* AI */}
                {heroTab === 'ai' && (
                  <div className="space-y-2">
                    <div className="p-3 bg-[#060a12] rounded-lg border border-slate-800 space-y-1 text-[11px]">
                      <p><span className="text-indigo-400">Agent:</span> Autonomous Loop</p>
                      <p><span className="text-sky-400">Skills:</span> [unity_physics, ros_arduino, react_dom]</p>
                      <p><span className="text-emerald-400">Memory:</span> Context 128k Tokens OK</p>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500 pt-1">
                      <span>Status: <strong className="text-cyan-400">LISTENING</strong></span>
                      <span>Harness v2.5</span>
                    </div>
                  </div>
                )}

                <div className="pt-2 border-t border-slate-800/80 flex justify-between text-[10px] text-slate-500">
                  <span>ASSETS: OFICIAIS</span>
                  <span>ONLINE</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ========================================================
            01. VISUAL BENTO
            ======================================================== */}
        <section id="sobre" className="py-14 border-t border-slate-800/80">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>01 // Pilares de Criação</span>
            </div>
            <span className="font-mono text-xs text-slate-500">3 ANOS CTRL+PLAY</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Bento 1: Games com Sprite Original */}
            <div className="group rounded-2xl bg-[#0c1220] border border-slate-800/90 overflow-hidden card-taste border-glass-hover">
              <div className="h-32 overflow-hidden relative bg-[url('/flappy/bg.png')] bg-cover bg-center flex items-center justify-center">
                <img 
                  src="/flappy/bird.png" 
                  alt="Original Flappy Bird" 
                  className="w-10 h-8 [image-rendering:pixelated] group-hover:scale-125 transition-transform duration-300 drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-sky-400">
                  <Gamepad2 className="w-4 h-4" />
                </div>
              </div>
              <div className="p-4 pt-1">
                <h3 className="font-bold text-white text-sm">Gamedev</h3>
                <p className="text-xs text-slate-400 mt-1">Unity (C#), Godot e física 2D.</p>
              </div>
            </div>

            {/* Bento 2: Robótica */}
            <div className="group rounded-2xl bg-[#0c1220] border border-slate-800/90 overflow-hidden card-taste border-glass-hover">
              <div className="h-32 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" 
                  alt="Robótica Arduino" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] to-transparent"></div>
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-cyan-400">
                  <Cpu className="w-4 h-4" />
                </div>
              </div>
              <div className="p-4 pt-1">
                <h3 className="font-bold text-white text-sm">Robótica</h3>
                <p className="text-xs text-slate-400 mt-1">Arduino, sensores e motores.</p>
              </div>
            </div>

            {/* Bento 3: Web */}
            <div className="group rounded-2xl bg-[#0c1220] border border-slate-800/90 overflow-hidden card-taste border-glass-hover">
              <div className="h-32 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" 
                  alt="Web & Lógica" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] to-transparent"></div>
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-blue-400">
                  <Code2 className="w-4 h-4" />
                </div>
              </div>
              <div className="p-4 pt-1">
                <h3 className="font-bold text-white text-sm">Web & Lógica</h3>
                <p className="text-xs text-slate-400 mt-1">React, Tailwind, JS e Python.</p>
              </div>
            </div>

            {/* Bento 4: AI */}
            <div className="group rounded-2xl bg-[#0c1220] border border-slate-800/90 overflow-hidden card-taste border-glass-hover">
              <div className="h-32 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80" 
                  alt="Inteligência Artificial" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] to-transparent"></div>
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-indigo-400">
                  <Brain className="w-4 h-4" />
                </div>
              </div>
              <div className="p-4 pt-1">
                <h3 className="font-bold text-white text-sm">Agentes de IA</h3>
                <p className="text-xs text-slate-400 mt-1">Skills, context e harness.</p>
              </div>
            </div>

          </div>
        </section>


        {/* ========================================================
            02. SKILLS (Icons e Tags Visuais)
            ======================================================== */}
        <section id="habilidades" className="py-14 border-t border-slate-800/80">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>02 // Stack & Ferramentas</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillsData.map((group, idx) => {
              const GroupIcon = group.icon;
              return (
                <div key={idx} className="p-4 rounded-2xl bg-[#0c1220] border border-slate-800/90 card-taste">
                  <div className="flex items-center gap-2 mb-3">
                    <GroupIcon className={`w-4 h-4 ${group.color}`} />
                    <h3 className="font-bold text-xs text-white font-mono uppercase">{group.category}</h3>
                  </div>

                  <div className="space-y-1.5 font-mono text-xs">
                    {group.items.map((item, iIdx) => {
                      const ItemIcon = item.icon;
                      return (
                        <div 
                          key={iIdx}
                          className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#070b14] border border-slate-800/80 text-slate-300 hover:border-slate-700 hover:text-cyan-300 transition-colors"
                        >
                          <ItemIcon className="w-3.5 h-3.5 text-slate-500" />
                          <span>{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* ========================================================
            03. PROJETOS (Flappy Bird com Cenário e Sprites Originais)
            ======================================================== */}
        <section id="projetos" className="py-14 border-t border-slate-800/80">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase">
              <Boxes className="w-3.5 h-3.5" />
              <span>03 // Projetos Reais</span>
            </div>
            <span className="font-mono text-xs text-slate-500">3 DESTAQUES</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">

            {/* PROJETO 1: FLAPPY BIRD COM SPRITES ORIGINAIS */}
            <div className="rounded-2xl bg-[#0c1220] border border-slate-800/90 overflow-hidden card-taste border-glass-hover flex flex-col justify-between">
              <div>
                {/* Visual Authentic Game Scene */}
                <div className="h-48 relative overflow-hidden bg-[url('/flappy/bg.png')] bg-cover bg-bottom border-b border-slate-800 flex items-center justify-center">
                  
                  {/* Top Pipe Inverted */}
                  <div className="absolute -top-12 left-12 w-10 overflow-hidden pointer-events-none">
                    <img src="/flappy/pipe.png" alt="Pipe" className="w-full rotate-180" />
                  </div>

                  {/* Bottom Pipe */}
                  <div className="absolute -bottom-16 left-12 w-10 overflow-hidden pointer-events-none">
                    <img src="/flappy/pipe.png" alt="Pipe" className="w-full" />
                  </div>

                  {/* Second Pipe pair */}
                  <div className="absolute -top-6 right-16 w-10 overflow-hidden pointer-events-none">
                    <img src="/flappy/pipe.png" alt="Pipe" className="w-full rotate-180" />
                  </div>
                  <div className="absolute -bottom-24 right-16 w-10 overflow-hidden pointer-events-none">
                    <img src="/flappy/pipe.png" alt="Pipe" className="w-full" />
                  </div>

                  {/* Original Yellow Bird Sprite */}
                  <div className="relative z-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] animate-bounce">
                    <img 
                      src="/flappy/bird.png" 
                      alt="Original Flappy Bird" 
                      className="w-12 h-9 [image-rendering:pixelated]" 
                    />
                  </div>

                  {/* Ground base */}
                  <div className="absolute bottom-0 inset-x-0 h-5 bg-[url('/flappy/base.png')] bg-repeat-x bg-contain z-10"></div>
                  
                  {/* Floating game badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 bg-[#0c1220]/90 px-2.5 py-1 rounded-lg border border-slate-700/80 font-mono text-[11px] z-20">
                    <Gamepad2 className="w-3.5 h-3.5 text-sky-400" />
                    <span className="text-white font-semibold">Unity C# // 2D PhysX</span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-base text-white mb-1 flex items-center justify-between">
                    <span>Réplica do Flappy Bird</span>
                    <span className="text-xs font-mono text-cyan-400">#01</span>
                  </h3>
                  
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Física de gravidade vetorial, colisões por triggers e geração procedural de canos na Unity.
                  </p>

                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px] mb-4">
                    <span className="px-2 py-0.5 rounded bg-[#070b14] text-slate-300 border border-slate-800">Unity</span>
                    <span className="px-2 py-0.5 rounded bg-[#070b14] text-slate-300 border border-slate-800">C#</span>
                    <span className="px-2 py-0.5 rounded bg-[#070b14] text-slate-300 border border-slate-800">Física 2D</span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a 
                  href="https://github.com/torontodevofc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactile w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-200 border border-slate-800"
                >
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CÓDIGO NO GITHUB</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>

            {/* PROJETO 2: ARDUINO */}
            <div className="rounded-2xl bg-[#0c1220] border border-slate-800/90 overflow-hidden card-taste border-glass-hover flex flex-col justify-between">
              <div>
                <div className="h-48 relative overflow-hidden bg-[#060a12] border-b border-slate-800">
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80" 
                    alt="Carrinho com Arduino" 
                    className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-[#0c1220]/90 px-2.5 py-1 rounded-lg border border-slate-700/80 font-mono text-[11px]">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-white font-semibold">Arduino // HC-SR04</span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-base text-white mb-1 flex items-center justify-between">
                    <span>Carrinho com Arduino</span>
                    <span className="text-xs font-mono text-cyan-400">#02</span>
                  </h3>
                  
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Robô autônomo móvel com leitura ultrassônica e ponte H para desvio de obstáculos em tempo real.
                  </p>

                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px] mb-4">
                    <span className="px-2 py-0.5 rounded bg-[#070b14] text-slate-300 border border-slate-800">Arduino</span>
                    <span className="px-2 py-0.5 rounded bg-[#070b14] text-slate-300 border border-slate-800">C++</span>
                    <span className="px-2 py-0.5 rounded bg-[#070b14] text-slate-300 border border-slate-800">Sensores</span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a 
                  href="https://github.com/torontodevofc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactile w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-200 border border-slate-800"
                >
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CÓDIGO NO GITHUB</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>

            {/* PROJETO 3: POKEDEX INTERATIVA */}
            <div className="rounded-2xl bg-[#0c1220] border border-slate-800/90 overflow-hidden card-taste border-glass-hover flex flex-col justify-between">
              <div>
                <div className="h-48 relative overflow-hidden bg-gradient-to-b from-[#091024] to-[#0c1220] border-b border-slate-800 flex items-center justify-center p-3">
                  <img 
                    src={pokemonList[selectedPoke].img} 
                    alt={pokemonList[selectedPoke].name}
                    className="h-32 object-contain drop-shadow-[0_10px_20px_rgba(56,189,248,0.25)] hover:scale-110 transition-transform duration-300"
                  />

                  <div className="absolute top-3 right-3 flex gap-1 font-mono text-[10px]">
                    {pokemonList.map((p, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setSelectedPoke(idx)}
                        className={`w-6 h-6 rounded flex items-center justify-center font-bold border transition-colors ${selectedPoke === idx ? 'bg-cyan-950 border-cyan-400 text-cyan-300' : 'bg-slate-900 border-slate-800 text-slate-500'}`}
                      >
                        {p.name[0]}
                      </button>
                    ))}
                  </div>

                  <div className="absolute bottom-3 left-3 font-mono text-[11px] text-slate-400">
                    <span className="text-white font-bold">{pokemonList[selectedPoke].name}</span> · {pokemonList[selectedPoke].id}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-base text-white mb-1 flex items-center justify-between">
                    <span>Pokédex Interativa</span>
                    <span className="text-xs font-mono text-cyan-400">#03</span>
                  </h3>
                  
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Consumo dinâmico da PokéAPI REST com busca em tempo real, tipos e atributos em React.
                  </p>

                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px] mb-4">
                    <span className="px-2 py-0.5 rounded bg-[#070b14] text-slate-300 border border-slate-800">React</span>
                    <span className="px-2 py-0.5 rounded bg-[#070b14] text-slate-300 border border-slate-800">PokéAPI</span>
                    <span className="px-2 py-0.5 rounded bg-[#070b14] text-slate-300 border border-slate-800">Tailwind</span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a 
                  href="https://github.com/torontodevofc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactile w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-200 border border-slate-800"
                >
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CÓDIGO NO GITHUB</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>

          </div>
        </section>


        {/* ========================================================
            04. CONTACT
            ======================================================== */}
        <section id="contato" className="py-14 border-t border-slate-800/80">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0c1220] to-[#070b14] border border-slate-800/90 flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-400 font-mono text-xs">
                <Bot className="w-4 h-4" />
                <span>04 // CONECTAR</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Vamos conversar sobre código e projetos?
              </h2>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-3 font-mono text-xs">
              
              <a 
                href="https://github.com/torontodevofc"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0a0f1e] border border-slate-800 hover:border-cyan-500/50 text-slate-200"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <button 
                onClick={() => copyToClipboard('toronto_ofc', 'discord')}
                className="btn-tactile flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0a0f1e] border border-slate-800 hover:border-cyan-500/50 text-slate-200"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Discord: <strong className="text-cyan-300">toronto_ofc</strong></span>
                <Copy className="w-3 h-3 text-slate-500" />
              </button>

              <button 
                onClick={() => copyToClipboard('YuriDev@gmail.com', 'email')}
                className="btn-tactile flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0a0f1e] border border-slate-800 hover:border-cyan-500/50 text-slate-200"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Email</span>
                <Copy className="w-3 h-3 text-slate-500" />
              </button>

            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-6 bg-[#060912] font-mono text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-400">YURI</span>
            <span>·</span>
            <span>13 anos</span>
            <span>·</span>
            <span>Ctrl+Play</span>
          </div>

          <p className="flex items-center gap-1.5">
            React <Atom className="w-3.5 h-3.5 text-cyan-400" /> + Tailwind <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          </p>
        </div>
      </footer>

    </div>
  );
}
