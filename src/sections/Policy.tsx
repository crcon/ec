import { useEffect, useRef } from 'react';
import { 
  Leaf, 
  Zap, 
  Shield, 
  FileText,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const policyTimeline = [
  {
    date: '2020年9月',
    title: '3060双碳目标',
    description: '在联合国大会上正式提出：力争2030年前碳达峰，2060年前碳中和',
    icon: Leaf,
  },
  {
    date: '2024年',
    title: '136号文发布',
    description: '取消强制配储，不得将配置储能作为新建新能源项目核准、并网、上网的前置条件',
    icon: FileText,
  },
  {
    date: '2025年',
    title: '114号文落地',
    description: '建立电网侧独立新型储能容量电价机制，完整收益版图成型',
    icon: Shield,
  },
  {
    date: '2025-2027',
    title: '新型储能行动方案',
    description: '两部门印发《新型储能规模化建设专项行动方案》，目标80GW+装机',
    icon: Zap,
  },
];

const revenueModel = [
  {
    percentage: '~30%',
    title: '容量电价',
    subtitle: '保底收益',
    features: [
      '稳定的、无市场波动的固定保底收入',
      '以煤电容量电价标准为基础',
      '覆盖设备折旧、利息、部分运维',
    ],
    color: '#00b49d',
  },
  {
    percentage: '60-70%',
    title: '市场化收益',
    subtitle: '电量现货+辅助服务+容量租赁',
    features: [
      '电力现货市场交易套利',
      '调频调峰辅助服务收益',
      '容量租赁收入',
    ],
    color: '#005c4b',
  },
  {
    percentage: '5-10%',
    title: '其他补贴',
    subtitle: '多元化支持',
    features: [
      '初投资补贴',
      '充放电补贴',
      '内蒙古、新疆等地补贴力度大',
    ],
    color: '#00d4b8',
  },
];

const Policy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const revenueRef = useRef<HTMLDivElement>(null);

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

      // Timeline animation
      const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
      if (timelineItems) {
        gsap.fromTo(
          timelineItems,
          { x: -30, opacity: 0 },
          {
            x: 0,
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

      // Revenue cards animation
      const revenueCards = revenueRef.current?.querySelectorAll('.revenue-card');
      if (revenueCards) {
        gsap.fromTo(
          revenueCards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: revenueRef.current,
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
      id="policy"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #00b49d 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#e6f7f5] text-[#00b49d] text-sm font-medium rounded-full mb-4">
            国家政策
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            国家能源<span className="text-[#00b49d]">战略机遇</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            双碳战略引领能源革命，储能产业迎来历史性发展机遇
          </p>
        </div>

        {/* Policy Timeline */}
        <div ref={timelineRef} className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            政策发展历程
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {policyTimeline.map((item, index) => (
              <div
                key={index}
                className="timeline-item group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl hover:border-[#00b49d]/30 transition-all duration-500"
              >
                {/* Date Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e6f7f5] rounded-full mb-4">
                  <Calendar className="w-3 h-3 text-[#00b49d]" />
                  <span className="text-xs text-[#00b49d] font-medium">{item.date}</span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e6f7f5] to-[#00b49d]/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#00b49d] transition-all duration-500">
                  <item.icon className="w-6 h-6 text-[#00b49d] group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Content */}
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>

                {/* Connector */}
                {index < policyTimeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[#00b49d]/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Model */}
        <div ref={revenueRef}>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              储能收益构成：三位一体盈利模式
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              容量电价保底、市场化收益增效、地方政策赋能，收益结构清晰、增长空间明确
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {revenueModel.map((item, index) => (
              <div
                key={index}
                className="revenue-card group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Top Color Bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: item.color }}
                />

                {/* Percentage */}
                <div 
                  className="text-5xl font-bold mb-4"
                  style={{ color: item.color }}
                >
                  {item.percentage}
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500 mb-4">{item.subtitle}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle2 
                        className="w-4 h-4 mt-0.5 flex-shrink-0" 
                        style={{ color: item.color }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Policy Highlights Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#005c4b] to-[#00b49d] rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">六大支柱产业</div>
              <p className="text-white/80 text-sm">新型储能与集成电路、卫星互联网等并列国家战略级产业</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">80GW+</div>
              <p className="text-white/80 text-sm">2025-2027年新型储能行动方案目标装机规模</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2500亿</div>
              <p className="text-white/80 text-sm">专项行动方案投资规模</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policy;
