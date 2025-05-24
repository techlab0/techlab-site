import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('automation');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
      <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-90 backdrop-blur-md border-b border-gray-800">
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        
        {/* Floating Elements */}
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
              <span className="text-gray-500 mx-2 md:mx-4 block md:inline">↓</span>
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

      {/* Case Studies */}
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
              まずはお気軽にご相談ください。24時間以内にご返信いたします。
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">無料相談フォーム</h3>
              <form className="space-y-6">
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
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-cyan-400 text-black hover:bg-cyan-300 transition-all duration-300 rounded-lg font-semibold flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>無料相談を申し込む</span>
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