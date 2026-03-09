import { useEffect, useRef } from 'react';
import { 
  Globe, 
  CheckCircle2,
  ArrowRight,
  Users,
  Building2,
  Landmark,
  Handshake,
  TrendingUp,
  RefreshCw,
  Zap,
  Cpu,
  FlaskConical,
  Atom
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: '2025',
    title: '固本强基',
    target: '10GWh并网',
    description: '立足易储开发电站，扎实基础运维',
  },
  {
    year: '2026',
    title: '外部拓展',
    target: '50GWh并网',
    description: '托管第三方储能电站，智能交易市场领先',
  },
  {
    year: '2027',
    title: '多元发展',
    target: '100GWh运营',
    description: '托管光伏和风电场站，技改创值，流量入口变现',
  },
];

const cooperationModes = [
  {
    id: 'source-grid-load-storage',
    icon: Zap,
    title: '源网荷储',
    subtitle: 'Source-Grid-Load-Storage',
    description: '针对高能耗、高消纳场景以及外贸外销需要绿证的企业，探索绿电直连、零碳园区、离网微电网等项目。',
    process: [
      '盘点能耗：盘点企业能源结构和能耗情况',
      '调研条件：调研项目接入和消纳条件',
      '设计方案：设计能源投资运营方案',
    ],
    features: [
      { icon: Cpu, text: '绿电结合算力' },
      { icon: FlaskConical, text: '能源结合化工' },
      { icon: Atom, text: '储能联调核电' },
    ],
    color: '#00b49d',
  },
  {
    id: 'joint',
    icon: Users,
    title: '联合开发',
    subtitle: 'Joint Development',
    description: '公司与具备资源优势的合作方开展联合开发模式，实现资源互补、风险共担、收益共享。',
    process: [
      '易储能源作为项目开发主导方，负责项目规划、开发与管理',
      '资源方提供土地、指标或地方资源支持',
      '双方按约定共同承担风险并分享收益，协同打造高质量项目',
    ],
    features: [
      { icon: Handshake, text: '资源互补' },
      { icon: Landmark, text: '风险共担' },
      { icon: TrendingUp, text: '收益共享' },
    ],
    color: '#005c4b',
  },
  {
    id: 'independent',
    icon: Building2,
    title: '自主开发',
    subtitle: 'Independent Development',
    description: '在重点区域设立项目公司，组建本地化团队，全流程主导项目开发与建设。',
    process: [
      '积极对接地方政府、招商部门及能源、电力主管机构',
      '主动挖掘储能投资机会，全流程主导项目开发与建设',
      '结合电力市场需求探索虚拟电厂、电力调度优化等业务',
    ],
    features: [
      { icon: Globe, text: '本地化开发' },
      { icon: Zap, text: '全流程主导' },
      { icon: TrendingUp, text: '拓展区域能源业务' },
    ],
    color: '#00d4b8',
  },
  {
    id: 'divestiture',
    icon: RefreshCw,
    title: '资产出表',
    subtitle: 'Asset Divestiture',
    description: '针对已完成并网或投运的项目，通过引入战略投资者或整体转让实现资产出表。',
    process: [
      '引入战略投资者或整体转让项目股权',
      '通过资本运作回笼资金，用于新的项目开发',
      '保留电站代运营或电力服务优先权，持续夯实运营业务',
    ],
    features: [
      { icon: TrendingUp, text: '资金快速回笼' },
      { icon: RefreshCw, text: '滚动投资开发' },
      { icon: Zap, text: '保留运营服务收益' },
    ],
    color: '#008f7a',
  },
];

const Business = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const modesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Intro animation
      gsap.fromTo(
        introRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: introRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cooperation modes animation
      const modeCards = modesRef.current?.querySelectorAll('.mode-card');
      if (modeCards) {
        gsap.fromTo(
          modeCards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: modesRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Timeline animation
      const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
      if (timelineItems) {
        gsap.fromTo(
          timelineItems,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="business"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#f5f5f5] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e6f7f5]/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-white text-[#00b49d] text-sm font-medium rounded-full mb-4 shadow-sm">
            合作模式
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            灵活多元的<span className="text-[#00b49d]">项目合作</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            围绕储能电站投资与电力服务业务，形成四类灵活的项目合作与开发模式
          </p>
        </div>

        {/* Introduction */}
        <div ref={introRef} className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg mb-12">
          <p className="text-gray-700 leading-relaxed text-center">
            易储能源围绕储能电站投资与电力服务业务，形成了<span className="text-[#00b49d] font-semibold">项目收购</span>、
            <span className="text-[#00b49d] font-semibold">联合开发</span>、
            <span className="text-[#00b49d] font-semibold">自主开发</span>、
            <span className="text-[#00b49d] font-semibold">资产出表</span>四类灵活的项目合作与开发模式，
            以实现项目规模扩张与资金高效周转。
          </p>
        </div>

        {/* Four Cooperation Modes */}
        <div ref={modesRef} className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            四大合作模式
          </h3>

          <div className="grid lg:grid-cols-2 gap-6">
            {cooperationModes.map((mode, index) => (
              <div
                key={index}
                className="mode-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#00b49d]/30"
              >
                {/* Header */}
                <div 
                  className="p-6"
                  style={{ backgroundColor: `${mode.color}10` }}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                      style={{ backgroundColor: mode.color }}
                    >
                      <mode.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{mode.title}</h4>
                      <p className="text-sm" style={{ color: mode.color }}>{mode.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {mode.description}
                  </p>

                  {/* Process */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-900 mb-2">合作流程</h5>
                    <ul className="space-y-2">
                      {mode.process.map((step, stepIndex) => (
                        <li
                          key={stepIndex}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle2 
                            className="w-4 h-4 mt-0.5 flex-shrink-0" 
                            style={{ color: mode.color }}
                          />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div className="pt-4 border-t border-gray-100">
                    <h5 className="text-sm font-semibold text-gray-900 mb-3">核心特点</h5>
                    <div className="flex flex-wrap gap-2">
                      {mode.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm"
                          style={{ backgroundColor: `${mode.color}15`, color: mode.color }}
                        >
                          <feature.icon className="w-3.5 h-3.5" />
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            三年发展规划
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#00b49d]/20 via-[#00b49d] to-[#00b49d]/20 -translate-y-1/2" />

            <div className="grid md:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="timeline-item relative"
                >
                  {/* Card */}
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#00b49d]/30">
                    {/* Year Badge */}
                    <div className="inline-block px-4 py-2 bg-[#00b49d] text-white text-lg font-bold rounded-full mb-4">
                      {milestone.year}
                    </div>

                    {/* Content */}
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h4>
                    <div className="text-2xl font-bold text-[#00b49d] mb-3">
                      {milestone.target}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Connector Dot */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#00b49d] rounded-full border-4 border-white shadow-lg z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col lg:flex-row items-center gap-6 bg-gradient-to-r from-[#005c4b] to-[#00b49d] rounded-2xl p-8 text-white">
            <div className="text-left">
              <h4 className="text-2xl font-bold mb-2">五年战略愿景</h4>
              <p className="text-white/80">
                2025年全国布局 → 2026年欧洲市场 → 2027年全国布局 → 2028年国内TOP1 → 2030年100GWh运营规模
              </p>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#00b49d] px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 flex-shrink-0"
            >
              合作咨询
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
