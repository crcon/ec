import { useEffect, useRef } from 'react';
import { 
  Cpu, 
  BrainCircuit, 
  Shield, 
  Zap,
  CheckCircle2,
  Award,
  Microscope,
  Cog
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const techCapabilities = [
  {
    icon: Cpu,
    title: '3S核心技术',
    subtitle: 'EMS / BMS / PCS',
    description: '自主研发储能核心控制系统，实现毫秒级电网响应与95%+系统循环效率',
    features: ['储能协调控制器认证', '国标BMS认证', '高性能PCS系统'],
    stats: { value: '87项', label: '核心专利' },
  },
  {
    icon: BrainCircuit,
    title: 'AI智能运营',
    subtitle: '智慧能源管理平台',
    description: '基于AI算法的运行优化与辅助决策系统，度电收益提升0.02元/度',
    features: ['日前电价预测准确率>85%', '智能交易策略推荐', '故障预测与健康诊断'],
    stats: { value: '86%+', label: '充放电效率' },
  },
  {
    icon: Shield,
    title: '安全保障',
    subtitle: '全生命周期安全',
    description: '热失控预警算法、多维度储能安全运维诊断，构建完善安全体系',
    features: ['热失控预警算法', '故障追溯系统', '全安全周期管理'],
    stats: { value: '24/7', label: '安全监控' },
  },
  {
    icon: Zap,
    title: '智能制造',
    subtitle: 'Pack集成生产',
    description: '工业4.0标准智能工厂，年产能30GWh，实现全流程数字化闭环制造',
    features: ['AGV物流系统', 'MES生产管理', 'CTP先进工艺'],
    stats: { value: '30GWh', label: '年产能' },
  },
];

const rAndDStats = [
  { value: '1563', label: '已申请国家专利', unit: '项' },
  { value: '810', label: '已获授权专利', unit: '项' },
  { value: '616', label: '已申请发明专利', unit: '项' },
  { value: '191', label: '已获发明专利', unit: '项' },
];

const researchPlatforms = [
  '国家企业技术中心',
  '国家地方联合工程研究中心',
  '锂基新材料国家与地方联合工程研究中心',
  '国家博士后科研工作站',
  '院士工作站',
  '江西省锂电新材料工程技术研究中心',
];

const Tech = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const platformsRef = useRef<HTMLDivElement>(null);

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

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.tech-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Stats animation
      gsap.fromTo(
        statsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Platforms animation
      gsap.fromTo(
        platformsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: platformsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#f5f5f5] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#e6f7f5]/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white text-[#00b49d] text-sm font-medium rounded-full mb-4 shadow-sm">
            技术实力
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            科技创新<span className="text-[#00b49d]">核心优势</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            依托赣锋锂业集团全产业链生态，构建储能技术核心竞争力
          </p>
        </div>

        {/* Tech Capabilities Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16"
        >
          {techCapabilities.map((item, index) => (
            <div
              key={index}
              className="tech-card group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#00b49d]/30"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#e6f7f5] to-[#00b49d]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#00b49d] transition-all duration-500">
                  <item.icon className="w-7 h-7 text-[#00b49d] group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-[#00b49d]">{item.subtitle}</p>
                    </div>
                    {/* Stat Badge */}
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#00b49d]">{item.stats.value}</div>
                      <div className="text-xs text-gray-500">{item.stats.label}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-[#e6f7f5] text-[#00b49d] text-xs rounded-full"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* R&D Stats */}
        <div ref={statsRef} className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#e6f7f5] flex items-center justify-center">
              <Microscope className="w-5 h-5 text-[#00b49d]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">科研成果 - 知识产权</h3>
              <p className="text-sm text-gray-500">持续创新，构建技术壁垒</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {rAndDStats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-[#f5f5f5] rounded-xl">
                <div className="text-3xl lg:text-4xl font-bold text-[#00b49d] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.unit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Platforms */}
        <div ref={platformsRef} className="bg-gradient-to-br from-[#005c4b] to-[#00b49d] rounded-2xl p-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
              <Cog className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold">科研创新平台</h3>
              <p className="text-sm text-white/70">国家级、省级科研创新平台体系</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchPlatforms.map((platform, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <Award className="w-5 h-5 text-white/60 flex-shrink-0" />
                <span className="text-sm">{platform}</span>
              </div>
            ))}
          </div>

          {/* Honors */}
          <div className="mt-6 pt-6 border-t border-white/20 flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-sm">国家技术创新示范企业</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-sm">国家级绿色工厂</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
