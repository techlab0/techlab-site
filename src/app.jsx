import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('automation');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // EmailJS設定（実際の設定は後で行う）
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('送信エラー:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/techlab_logo_dark.png" 
              alt="TechLab Logo" 
              className="h-8 w-auto object-contain"
              onError={(e) => {
                // フォールバック：ロゴが見つからない場合はデフォルトアイコンを表示
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-10 h-10 border-2 border-cyan-400 rounded-lg items-center justify-center hidden">
              <div className="w-6 h-6 bg-cyan-400 rounded-full"></div>
            </div>
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-md font-medium"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="h-full w-full bg-black" 
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          >
          </div>
        </div>
        
        {/* Dynamic Animation Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-1/4 w-8 h-8 border border-cyan-400/40 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-6 h-6 border border-blue-400/30 animate-bounce" style={{animationDuration: '3s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 border border-cyan-300/50 rotate-45 animate-pulse" style={{animationDuration: '2s'}}></div>
          
          {/* Matrix-style Data Rain */}
          <div className="absolute top-0 left-1/4 w-px h-20 bg-gradient-to-b from-cyan-400/80 to-transparent animate-pulse" style={{animationDuration: '1.5s'}}></div>
          <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-blue-400/60 to-transparent animate-pulse" style={{animationDuration: '2s', animationDelay: '0.5s'}}></div>
          <div className="absolute top-0 right-1/3 w-px h-24 bg-gradient-to-b from-cyan-300/70 to-transparent animate-pulse" style={{animationDuration: '1.8s', animationDelay: '1s'}}></div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-cyan-400/30 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-2/3 left-1/5 w-6 h-6 bg-blue-400/20 rounded-full animate-ping" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-cyan-300/40 rounded-full animate-ping" style={{animationDuration: '2.5s', animationDelay: '2s'}}></div>
          
          {/* Circuit Board Pattern with enhanced glow */}
          <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="circuit-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#00ffff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Animated Circuit Paths */}
            <path d="M50,200 L200,200 L250,150 L400,150 L450,100 L600,100" 
                  stroke="#00ffff" strokeWidth="2" fill="none" filter="url(#glow)" 
                  opacity="0.6" className="animate-pulse" style={{animationDuration: '3s'}} />
            <path d="M100,400 L250,400 L300,350 L450,350 L500,300 L650,300" 
                  stroke="#0ea5e9" strokeWidth="2" fill="none" filter="url(#glow)" 
                  opacity="0.5" className="animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}} />
            <path d="M150,150 L150,250 L200,300 L300,300" 
                  stroke="#06b6d4" strokeWidth="2" fill="none" filter="url(#glow)" 
                  opacity="0.4" className="animate-pulse" style={{animationDuration: '2.5s', animationDelay: '0.5s'}} />
            
            {/* Pulsing Circuit Nodes */}
            <circle cx="200" cy="200" r="4" fill="#00ffff" opacity="0.8" className="animate-ping" style={{animationDuration: '2s'}} />
            <circle cx="450" cy="350" r="3" fill="#0ea5e9" opacity="0.7" className="animate-ping" style={{animationDuration: '2.5s', animationDelay: '1s'}} />
            <circle cx="300" cy="300" r="5" fill="#06b6d4" opacity="0.6" className="animate-ping" style={{animationDuration: '3s', animationDelay: '2s'}} />
          </svg>
          
          {/* Scanning Lines */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse" style={{animationDuration: '2s'}}></div>
            <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-pulse" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
          </div>
        </div>
        
        {/* Floating Elements - keeping original for variety */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 left-20 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-40 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="relative text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            {/* Logo in Hero Section */}
            <div className="mb-8">
              <img 
                src="/techlab_logo_dark.png" 
                alt="TechLab Logo" 
                className="h-16 w-auto mx-auto mb-6 object-contain"
                onError={(e) => {
                  // フォールバック：デフォルトアイコンを表示
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-20 h-20 mx-auto mb-6 border-2 border-cyan-400 rounded-2xl items-center justify-center hidden">
                <div className="w-12 h-12 bg-cyan-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="inline-block p-1 border border-gray-700 rounded-2xl mb-6">
              <div className="bg-gray-900 px-4 py-2 rounded-xl text-sm text-gray-300">
                Technology × Creativity
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-white">Tech</span>
            <span className="text-cyan-400">Lab</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            先進技術とクリエイティビティで<br />
            ビジネスの未来を創造する
          </p>
          
          {/* Value Proposition */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <div className="text-cyan-400 font-bold text-lg">90%</div>
              <div className="text-sm text-gray-400">作業時間削減</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <div className="text-cyan-400 font-bold text-lg">24/7</div>
              <div className="text-sm text-gray-400">自動運用可能</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <div className="text-cyan-400 font-bold text-lg">即日</div>
              <div className="text-sm text-gray-400">相談対応</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-cyan-400 text-black hover:bg-cyan-300 transition-all duration-300 rounded-lg font-semibold"
            >
              無料相談申請
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')}
              className="px-8 py-4 border border-gray-600 text-gray-300 hover:border-white hover:text-white transition-all duration-300 rounded-lg font-semibold"
            >
              導入事例を見る
            </button>
          </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-64 bg-gradient-to-b from-red-500/20 via-yellow-500/20 to-green-500/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-red-400">Problem</span>
              <span className="text-gray-500 mx-2 md:mx-4">
                <span className="hidden md:inline">→</span>
                <span className="md:hidden block my-2">↓</span>
              </span>
              <span className="text-green-400">Solution</span>
            </h2>
            <p className="text-xl text-gray-400">課題から解決策への変革</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Problems Side */}
            <div className="relative order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-transparent rounded-3xl blur-xl"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-red-500/30 rounded-3xl p-6 lg:p-8">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-400 mb-2">こんなお悩みありませんか？</h3>
                    <p className="text-gray-400 text-sm">多くの企業が抱える共通の課題</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: "⏰",
                      title: "時間の無駄遣い",
                      desc: "毎日同じ作業の繰り返しで時間がもったいない"
                    },
                    {
                      icon: "🤖",
                      title: "AI導入の壁",
                      desc: "AIを導入したいが何から始めればいいかわからない"
                    },
                    {
                      icon: "📊",
                      title: "手作業の限界",
                      desc: "エクセル作業に何時間もかかっている"
                    },
                    {
                      icon: "🏃‍♂️",
                      title: "競合への遅れ",
                      desc: "競合他社に技術面で遅れをとっている"
                    },
                    {
                      icon: "💰",
                      title: "コスト問題",
                      desc: "ITコストを削減しつつ効率化したい"
                    }
                  ].map((problem, index) => (
                    <div key={index} className="group bg-red-900/20 border border-red-500/20 rounded-2xl p-6 hover:border-red-400/40 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl mb-2">{problem.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-red-300 mb-2 group-hover:text-red-200 transition-colors">
                            {problem.title}
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                            {problem.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Solution Side */}
            <div className="relative order-3 lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-l from-green-500/20 to-transparent rounded-3xl blur-xl"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-green-500/30 rounded-3xl p-6 lg:p-8">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 mb-2">TechLabが解決します</h3>
                    <p className="text-gray-400 text-sm">最新技術で課題を解決</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: "🚀",
                      title: "業務自動化",
                      desc: "面倒な作業を自動化して本質的な業務に集中",
                      metric: "90%時間削減"
                    },
                    {
                      icon: "🎯",
                      title: "AI導入支援",
                      desc: "AI導入から運用まで一気通貫でサポート",
                      metric: "即日対応"
                    },
                    {
                      icon: "⚡",
                      title: "瞬時処理",
                      desc: "データ処理を瞬時に完了する仕組みを構築",
                      metric: "リアルタイム"
                    },
                    {
                      icon: "🏆",
                      title: "競合優位性",
                      desc: "最新技術で競合優位性を確立",
                      metric: "先進技術"
                    },
                    {
                      icon: "📈",
                      title: "ROI最大化",
                      desc: "初期投資を抑えつつROIを最大化",
                      metric: "コスト削減"
                    }
                  ].map((solution, index) => (
                    <div key={index} className="group bg-green-900/20 border border-green-500/20 rounded-2xl p-6 hover:border-green-400/40 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl mb-2">{solution.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-green-300 group-hover:text-green-200 transition-colors">
                              {solution.title}
                            </h4>
                            <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1 rounded-full">
                              {solution.metric}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                            {solution.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Center Arrow */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </svg>
            </div>
          </div>
          
          {/* Mobile Arrow */}
          <div className="lg:hidden flex justify-center my-8">
            <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.41 8.84L12 13.42l4.59-4.58L18 10.25l-6 6-6-6z"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-gray-900 border border-gray-700 rounded-full text-sm text-cyan-400 mb-6">
              SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">得意分野</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              生成AI×基礎技術で実現する実用的なソリューション
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-gray-900 border border-gray-800 hover:border-cyan-400 transition-all duration-500 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-black border border-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:border-cyan-400 transition-colors duration-300">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  Webサイト制作
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  WordPress、HTML/CSS、jQueryを使った実用的なWebサイト制作。レスポンシブ対応・SEO最適化も対応
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">WordPress</span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">HTML/CSS</span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">jQuery</span>
                </div>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="group bg-gray-900 border border-gray-800 hover:border-cyan-400 transition-all duration-500 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-black border border-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:border-cyan-400 transition-colors duration-300">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  AI活用支援
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  ChatGPT等のAIツールを業務に活用するための導入支援・簡単なBot制作。生成AIの力を最大限活用
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">ChatGPT API</span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">Discord Bot</span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">AI導入</span>
                </div>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="group bg-gray-900 border border-gray-800 hover:border-cyan-400 transition-all duration-500 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-black border border-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:border-cyan-400 transition-colors duration-300">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  業務自動化
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Google Apps Script（GAS）を中心とした小規模自動化。スプレッドシート連携やメール自動送信など
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">GAS</span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">スプレッドシート</span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">自動化</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Showcase */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-black border border-gray-700 rounded-full text-sm text-cyan-400 mb-6">
              SOLUTIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">導入可能なソリューション</h2>
            <p className="text-xl text-gray-400">即座に効果を実感できる実用的なシステム</p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="bg-black border border-gray-700 rounded-lg p-1 flex">
              {[
                { id: 'automation', label: '自動化' },
                { id: 'ai', label: 'AI活用' },
                { id: 'integration', label: 'システム連携' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-md transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'bg-cyan-400 text-black font-semibold' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === 'automation' && [
              {
                title: "スプレッドシート自動化",
                desc: "フォーム入力から集計・レポート作成まで自動処理",
                time: "週10時間削減",
                tech: "GAS + スプレッドシート"
              },
              {
                title: "メール自動送信",
                desc: "定期レポートや顧客フォローメールの自動配信",
                time: "月5時間削減",
                tech: "GAS + Gmail API"
              },
              {
                title: "データ集計・通知",
                desc: "売上データの自動集計とSlack/メール通知",
                time: "日次作業を自動化",
                tech: "GAS + Webhook"
              }
            ].map((item, index) => (
              <div key={index} className="bg-black border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-xs bg-cyan-400 text-black px-2 py-1 rounded-full font-semibold">{item.time}</span>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">{item.desc}</p>
                <div className="border-t border-gray-800 pt-4">
                  <span className="text-cyan-400 text-sm font-mono">{item.tech}</span>
                </div>
              </div>
            ))}

            {activeTab === 'ai' && [
              {
                title: "Discord Bot制作",
                desc: "ChatGPT連携のDiscord Botで自動応答・情報配信",
                time: "24時間対応",
                tech: "Discord.js + ChatGPT API"
              },
              {
                title: "AI活用コンサル",
                desc: "業務に最適なAIツールの選定・導入支援",
                time: "導入時間短縮",
                tech: "ChatGPT + Claude活用"
              },
              {
                title: "簡単なAI連携",
                desc: "スプレッドシートやフォームにAI機能を追加",
                time: "作業効率2倍",
                tech: "GAS + OpenAI API"
              }
            ].map((item, index) => (
              <div key={index} className="bg-black border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-xs bg-cyan-400 text-black px-2 py-1 rounded-full font-semibold">{item.time}</span>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">{item.desc}</p>
                <div className="border-t border-gray-800 pt-4">
                  <span className="text-cyan-400 text-sm font-mono">{item.tech}</span>
                </div>
              </div>
            ))}

            {activeTab === 'integration' && [
              {
                title: "WordPress制作・カスタマイズ",
                desc: "レスポンシブ対応のビジネスサイト制作",
                time: "2週間で完成",
                tech: "WordPress + PHP"
              },
              {
                title: "フォーム連携システム",
                desc: "問い合わせフォームからスプレッドシート・メール自動化",
                time: "手作業ゼロ",
                tech: "HTML + GAS"
              },
              {
                title: "簡単なAPI連携",
                desc: "外部サービスとスプレッドシートのデータ連携",
                time: "リアルタイム同期",
                tech: "GAS + REST API"
              }
            ].map((item, index) => (
              <div key={index} className="bg-black border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-xs bg-cyan-400 text-black px-2 py-1 rounded-full font-semibold">{item.time}</span>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">{item.desc}</p>
                <div className="border-t border-gray-800 pt-4">
                  <span className="text-cyan-400 text-sm font-mono">{item.tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-900 border border-gray-700 rounded-full text-sm text-cyan-400 mb-6">
              PRICING
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">導入プラン</h2>
            <p className="text-xl text-gray-400">予算に応じて最適なプランをご提案</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">ライト</h3>
                <p className="text-gray-400 mb-6">小規模自動化・WordPress制作</p>
                <div className="text-4xl font-bold text-cyan-400 mb-2">¥50,000<span className="text-lg text-gray-400">〜</span></div>
                <p className="text-sm text-gray-500">完成までの総費用</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "WordPress サイト制作",
                  "GAS による簡単な自動化",
                  "スプレッドシート連携",
                  "基本的なフォーム作成",
                  "1ヶ月サポート"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full block text-center py-3 border border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 rounded-lg"
              >
                相談する
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-gray-900 border-2 border-cyan-400 rounded-2xl p-8 relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  おすすめ
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">スタンダード</h3>
                <p className="text-gray-400 mb-6">AI活用・複数システム連携</p>
                <div className="text-4xl font-bold text-cyan-400 mb-2">¥150,000<span className="text-lg text-gray-400">〜</span></div>
                <p className="text-sm text-gray-500">パートナー連携時は別途費用</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Discord Bot制作",
                  "ChatGPT API連携",
                  "複数ツール自動化",
                  "AI活用コンサルティング",
                  "3ヶ月サポート"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-white text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full block text-center py-3 bg-cyan-400 text-black hover:bg-cyan-300 transition-all duration-300 rounded-lg font-semibold"
              >
                相談する
              </button>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">※ すべてのプランで無料相談・要件ヒアリングを実施</p>
            <div className="inline-flex items-center space-x-2 text-cyan-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">まずは具体的な課題をお聞かせください</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-black border border-gray-700 rounded-full text-sm text-cyan-400 mb-6">
              FAQ
            </div>
            <h2 className="text-4xl font-bold mb-6">よくある質問</h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "技術的な知識がなくても導入できますか？",
                a: "はい、問題ありません。お客様の業務内容をヒアリングし、最適なソリューションを提案・構築いたします。導入後の操作説明・サポートも充実しています。"
              },
              {
                q: "小さな会社でも対応してもらえますか？",
                a: "もちろんです。個人事業主から大企業まで、規模を問わず対応いたします。予算に応じてスモールスタートから始められるプランもご用意しています。"
              },
              {
                q: "導入までにどのくらい時間がかかりますか？",
                a: "シンプルな自動化なら1-2週間、AI機能付きシステムで1-2ヶ月程度です。緊急性がある場合は優先的に対応いたします。"
              },
              {
                q: "他社で断られた複雑な要件でも対応可能ですか？",
                a: "技術的に実現可能であれば対応いたします。まずは無料相談で詳細をお聞かせください。実現方法を含めて具体的にご提案します。"
              },
              {
                q: "導入後のサポートはありますか？",
                a: "はい。プランに応じて1-3ヶ月のサポート期間を設けており、その後も月額保守契約で継続サポートが可能です。"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-black border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-cyan-400">Q. {faq.q}</h3>
                <p className="text-gray-300 leading-relaxed">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-900 border border-gray-700 rounded-full text-sm text-cyan-400 mb-6">
              PROCESS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">導入までの流れ</h2>
            <p className="text-xl text-gray-400">スムーズな導入をサポートします</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "無料相談",
                desc: "現在の課題や理想の業務フローをヒアリング。最適なソリューションを提案します。",
                duration: "30分〜1時間"
              },
              {
                step: "02", 
                title: "要件定義",
                desc: "詳細な仕様を決定し、開発スケジュールと費用を確定します。",
                duration: "1週間程度"
              },
              {
                step: "03",
                title: "開発・制作",
                desc: "決定した仕様に基づいてシステムを構築。進捗は定期的にご報告します。",
                duration: "2週間〜2ヶ月"
              },
              {
                step: "04",
                title: "納品・サポート",
                desc: "動作確認後に納品。操作説明とサポート期間でフォローアップします。",
                duration: "継続的"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gray-900 border-2 border-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-700">
                      <div className="w-1/2 h-full bg-cyan-400"></div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{process.desc}</p>
                <div className="inline-block px-3 py-1 bg-gray-800 text-cyan-400 text-xs rounded-full">
                  {process.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="case-studies" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-black border border-gray-700 rounded-full text-sm text-cyan-400 mb-6">
              CASE STUDIES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">導入事例</h2>
            <p className="text-xl text-gray-400">実際の成果と効果をご紹介</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black border border-gray-800 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs bg-cyan-400 text-black px-3 py-1 rounded-full font-semibold">
                  Case 1
                </span>
                <span className="text-xs text-gray-500">IT系コミュニティ</span>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Discord情報収集Bot</h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-red-400 mb-1">課題</h4>
                  <p className="text-gray-400">最新技術情報を手動で収集・共有する作業が負担</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-400 mb-1">解決策</h4>
                  <p className="text-gray-400">ChatGPT APIと連携したDiscord Botで自動化</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-400 mb-1">成果</h4>
                  <p className="text-gray-300 font-medium">情報収集時間を週20時間→2時間に短縮</p>
                </div>
              </div>
              
              <div className="border-t border-gray-800 pt-4 mt-6">
                <span className="text-cyan-400 text-xs font-mono">Discord.js + OpenAI API + GAS</span>
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs bg-cyan-400 text-black px-3 py-1 rounded-full font-semibold">
                  Case 2
                </span>
                <span className="text-xs text-gray-500">地域密着型サービス業</span>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-cyan-400">WordPress企業サイト</h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-red-400 mb-1">課題</h4>
                  <p className="text-gray-400">古いサイトでSEO効果が低く集客に課題</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-400 mb-1">解決策</h4>
                  <p className="text-gray-400">レスポンシブ対応の新サイト制作</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-400 mb-1">成果</h4>
                  <p className="text-gray-300 font-medium">検索順位向上、問い合わせ数3倍増加</p>
                </div>
              </div>
              
              <div className="border-t border-gray-800 pt-4 mt-6">
                <span className="text-cyan-400 text-xs font-mono">WordPress + カスタムテーマ</span>
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs bg-cyan-400 text-black px-3 py-1 rounded-full font-semibold">
                  Case 3
                </span>
                <span className="text-xs text-gray-500">フリーランス事業者</span>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-cyan-400">請求書自動生成システム</h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-red-400 mb-1">課題</h4>
                  <p className="text-gray-400">毎月の請求書作成に8時間かかっていた</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-400 mb-1">解決策</h4>
                  <p className="text-gray-400">スプレッドシートからPDF自動生成・メール送信</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-400 mb-1">成果</h4>
                  <p className="text-gray-300 font-medium">作業時間を95%削減、月8時間→30分</p>
                </div>
              </div>
              
              <div className="border-t border-gray-800 pt-4 mt-6">
                <span className="text-cyan-400 text-xs font-mono">GAS + PDF生成 + Gmail API</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-900 border border-gray-700 rounded-full text-sm text-cyan-400 mb-6">
              CONTACT
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              お問い合わせ
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              まずはお気軽にご相談ください。72時間以内にご返信いたします。
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">無料相談フォーム</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    お名前 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="山田太郎"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    メールアドレス <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="example@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    会社名・屋号
                  </label>
                  <input
                    type="text"
                    id="company" 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="株式会社サンプル"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    相談内容 <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    placeholder="現在の課題や実現したいことをお聞かせください。"
                    required
                  />
                </div>
                
                {/* 送信状況表示 */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-300">
                    お問い合わせありがとうございます！72時間以内にご返信いたします。
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-300">
                    送信に失敗しました。お手数ですが、直接メールでお問い合わせください。
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                      : 'bg-cyan-400 text-black hover:bg-cyan-300'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>{isSubmitting ? '送信中...' : '問い合わせる'}</span>
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-cyan-400">相談内容の例</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">業務の自動化・効率化について</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">AI導入・活用の相談</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">WordPress サイト制作</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">Discord Bot の開発</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 mb-2">メールでも受け付けています</p>
                <a href="mailto:techlab0web3@gmail.com" className="text-cyan-400 hover:text-cyan-300 font-mono text-lg">
                  techlab0web3@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/techlab_logo.png" 
                alt="TechLab Logo" 
                className="h-6 w-auto object-contain filter brightness-0 invert"
                onError={(e) => {
                  // フォールバック：ロゴが見つからない場合はデフォルトアイコンを表示
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-8 h-8 border border-cyan-400 rounded-lg items-center justify-center hidden">
                <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
              </div>
            </div>
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} TechLab. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}