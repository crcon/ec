import { useEffect, useRef } from 'react';
import { 
  Handshake, 
  CheckCircle2,
  Landmark,
  Wallet,
  Settings,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  {
    icon: Landmark,
    title: '资源优势互补',
    description: '合作方提供土地、指标、地方关系等核心资源',
  },
  {
    icon: Wallet,
    title: '资金专业输出',
    description: '易储能源提供全额资金及专业技术运营服务',
  },
  {
    icon: Settings,
    title: '标准化流程',
    description: '按里程碑节点验收，分阶段支付开发费',
  },
  {
    icon: TrendingUp,
    title: '利益共享机制',
    description: '项目权益平稳交割，实现双方共赢',
  },
];

const stages = [
  {
    id: 1,
    title: '阶段一：项目前期手续完成',
    payment: '30%',
    timing: '协议签订且前期手续完成后 7 个工作日内',
    icon: CheckCircle2,
    conditions: [
      '项目投资协议签订、发改委备案证取得',
      '项目纳规（如有）、可行性研究报告（含终可研）完成',
      '省电网接入系统方案及批复取得',
      '送出线路工程可研报告完成',
      '项目用地及送出线路工程八大局支持意见',
      '压覆矿查询、项目用地初勘、选址意见书/红线图',
      '220kV变电站联合接入协议签署（如涉及）',
    ],
  },
  {
    id: 2,
    title: '阶段二：施工条件具备',
    payment: '20%',
    timing: '达到开工条件、甲方进场施工满 1 个月后 7 个工作日内',
    icon: Settings,
    conditions: [
      '建设用地出让协议签订（含土地证），符合储能项目用地要求',
      '环评、安评、节能评估、地质灾害、社稳评估、水保方案等完成',
      '报规报建、电力建设工程安全管理备案',
      '建设用地规划许可证、建设工程规划许可证取得',
      '开工许可证、建设工程施工许可证取得',
      '送出线路工程核准、征地补偿、青赔完成',
      '设计文件及施工图审查、消防图审合格证',
    ],
  },
  {
    id: 3,
    title: '阶段三：项目竣工并网',
    payment: '20%',
    timing: '项目竣工验收并完成并网及交易入市后 7 个工作日内',
    icon: CheckCircle2,
    conditions: [
      '项目竣工验收完成、取得验收报告',
      '对侧间隔改造完成、并网验收通过',
      '电价协议、计量复函取得',
      '并网调度协议、高压供用电合同、购售电合同签订',
      '消防验收通过',
      '现货交易协议、电力交易中心注册入市（取得交易账户及 Ukey）',
      '中长期交易协议及售电合同签订',
    ],
  },
  {
    id: 4,
    title: '阶段四：正式投产运营',
    payment: '30%',
    timing: '涉网试验、转商运满 1 个月后 1 个月内',
    icon: TrendingUp,
    conditions: [
      '接入系统试运行完成',
      '涉网试验通过',
      '项目正式转商运',
      '商运并结算首笔电费',
    ],
  },
];

const JointDevelopment = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const advantagesRef = useRef<HTMLDivElement>(null);
  const stagesRef = useRef<HTMLDivElement>(null);

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

      // Advantages animation
      const advantageCards = advantagesRef.current?.querySelectorAll('.advantage-card');
      if (advantageCards) {
        gsap.fromTo(
          advantageCards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: advantagesRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Stages animation
      const stageCards = stagesRef.current?.querySelectorAll('.stage-card');
      if (stageCards) {
        gsap.fromTo(
          stageCards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: stagesRef.current,
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
      id="joint-development"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#f5f5f5] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#e6f7f5]/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-white text-[#00b49d] text-sm font-medium rounded-full mb-4 shadow-sm">
            合作模式详解
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            联合开发<span className="text-[#00b49d]">模式</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            易储能源与具备属地资源优势的合作方强强联手，共同推进独立储能项目落地
          </p>
        </div>

        {/* Introduction */}
        <div ref={introRef} className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00b49d] to-[#005c4b] flex items-center justify-center flex-shrink-0">
              <Handshake className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">模式概述</h3>
              <p className="text-gray-600 leading-relaxed">
                联合开发模式是指易储能源与具备属地资源优势的合作方（如地方国企、新能源开发商、园区平台等）强强联手，
                共同推进独立储能项目落地的创新合作机制。在该模式下，双方分工明确、优势互补，实现项目权益的平稳交割与利益共享。
              </p>
            </div>
          </div>

          {/* Payment Flow */}
          <div className="bg-[#e6f7f5] rounded-xl p-6 mb-6">
            <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">资金支付流程</h4>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 bg-white rounded-lg text-sm font-semibold text-[#00b49d]">前期手续</span>
                <span className="text-xl font-bold text-red-500">30%</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 bg-white rounded-lg text-sm font-semibold text-[#00b49d]">具备开工</span>
                <span className="text-xl font-bold text-red-500">20%</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 bg-white rounded-lg text-sm font-semibold text-[#00b49d]">竣工并网</span>
                <span className="text-xl font-bold text-red-500">20%</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 bg-white rounded-lg text-sm font-semibold text-[#00b49d]">投产运营</span>
                <span className="text-xl font-bold text-red-500">30%</span>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              按里程碑节点验收、分阶段支付开发费的标准化流程（价款含 6% 增值税；支付前乙方须提供等额合规发票）
            </p>
          </div>

          {/* Division of Labor */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#f5f5f5] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#00b49d] flex items-center justify-center">
                  <Landmark className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">合作方（出资源）</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                依托本土优势，负责落实项目前期的核心资源，包括但不限于土地选址、获取发改委备案、
                争取电网接入指标及协调地方行政审批手续。
              </p>
            </div>
            <div className="bg-[#f5f5f5] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#005c4b] flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">易储能源（出资金与专业）</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                作为项目开发主导方，负责提供全额项目建设资金，并输出专业的技术方案、工程建设管理（EPC对接）、
                并网调度及全生命周期的电力交易与资产运营服务。
              </p>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div ref={advantagesRef} className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            模式优势
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="advantage-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#00b49d]/30"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e6f7f5] flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#00b49d]" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Four Stages */}
        <div ref={stagesRef}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            四阶段里程碑节点
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {stages.map((stage, index) => (
              <div
                key={index}
                className="stage-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#00b49d]/30"
              >
                {/* Header with Payment */}
                <div className="relative bg-gradient-to-r from-[#005c4b] to-[#00b49d] p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-white font-bold">{stage.id}</span>
                      </div>
                      <h4 className="text-lg font-bold text-white">{stage.title}</h4>
                    </div>
                    {/* Payment Badge - Red emphasized */}
                    <div className="bg-red-500 text-white px-4 py-2 rounded-full">
                      <span className="text-sm">支付</span>
                      <span className="text-xl font-bold ml-1">{stage.payment}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-[#e6f7f5] rounded-lg">
                    <svg className="w-4 h-4 text-[#00b49d] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-gray-700">{stage.timing}</span>
                  </div>
                  <h5 className="text-sm font-semibold text-gray-500 mb-4">完成条件</h5>
                  <ul className="space-y-3">
                    {stage.conditions.map((condition, conditionIndex) => (
                      <li
                        key={conditionIndex}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#00b49d] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-[#005c4b] to-[#00b49d] rounded-2xl p-6 text-white">
            <div className="text-left">
              <h4 className="text-lg font-bold mb-1">有意向开展联合开发合作？</h4>
              <p className="text-white/80 text-sm">欢迎联系我们洽谈合作细节</p>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#00b49d] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 flex-shrink-0"
            >
              联系我们
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JointDevelopment;
