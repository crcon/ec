import { useEffect, useRef } from 'react';
import { 
  Cpu, 
  Factory, 
  HardHat, 
  Battery, 
  BrainCircuit, 
  Recycle,
  ArrowRight,
  Target,
  Users,
  Award
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ecosystemItems = [
  {
    icon: Cpu,
    title: 'EMS、PCS、BMS',
    subtitle: '科技研发',
    description: '自主研发储能核心控制系统',
  },
  {
    icon: Factory,
    title: 'Pack集成',
    subtitle: '智能制造',
    description: '年产能30GWh智能制造基地',
  },
  {
    icon: HardHat,
    title: 'EPC',
    subtitle: '工程总承包',
    description: '一站式储能项目建设服务',
  },
  {
    icon: Battery,
    title: '电网侧',
    subtitle: '储能电站',
    description: '独立共享储能电站投资运营',
  },
  {
    icon: BrainCircuit,
    title: 'AI数智',
    subtitle: '电力运营',
    description: '智能交易与运维管理平台',
  },
  {
    icon: Recycle,
    title: '电池回收',
    subtitle: '循环科技',
    description: '全生命周期电池回收体系',
  },
];

const companyHighlights = [
  {
    icon: Target,
    title: '企业使命',
    content: '以科技引领零碳绿色发展，助力全球新型能源电力转型',
  },
  {
    icon: Award,
    title: '企业愿景',
    content: '全球数字能源引领者，构建六位一体新型能源生态系统',
  },
  {
    icon: Users,
    title: '核心团队',
    content: '290+人专业团队，12+博士，80+本科硕士，60+电力高级工程师',
  },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll('.eco-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Intro animation
      gsap.fromTo(
        introRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: introRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Highlights animation
      gsap.fromTo(
        highlightsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: highlightsRef.current,
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
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #00b49d 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#e6f7f5] text-[#00b49d] text-sm font-medium rounded-full mb-4">
            企业介绍
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            易储数智能源<span className="text-[#00b49d]">大储能生态</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            全球新型能源电力系统构建者，依托赣锋锂业集团全产业链生态赋能
          </p>
        </div>

        {/* Ecosystem Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-16"
        >
          {ecosystemItems.map((item, index) => (
            <div
              key={index}
              className="eco-card group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#00b49d]/30 transition-all duration-500 hover-lift cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#e6f7f5] to-[#00b49d]/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#00b49d] transition-all duration-500">
                <item.icon className="w-7 h-7 text-[#00b49d] group-hover:text-white transition-colors duration-500" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-[#00b49d] font-medium mb-2">{item.subtitle}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-[#00b49d]" />
              </div>
            </div>
          ))}
        </div>

        {/* Company Introduction */}
        <div ref={introRef} className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="./images/about-facility.jpg"
                alt="储能电站设施"
                className="w-full h-[400px] object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Stats Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white">赣锋锂业</div>
                  <div className="text-sm text-white/70">集团生态赋能</div>
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white">全球锂王</div>
                  <div className="text-sm text-white/70">全产业链支持</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#00b49d]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#00b49d]/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              全球新型能源电力系统<span className="text-[#00b49d]">构建者</span>
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              易储数智能源集团，是世界领先的锂生态企业——赣锋锂业集团——为响应全球能源革命而成立的国际化能源电力科技企业。我们植根于中国，服务于世界，致力于通过创新的储能技术与数字化智能，构建安全、高效、绿色的新型能源体系。
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#e6f7f5] flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-5 h-5 text-[#00b49d]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">核心硬件技术</h4>
                  <p className="text-sm text-gray-600">专注于大容量、长寿命、高安全性的电池技术研发，自主掌握储能变流器（PCS）、电池管理系统（BMS）等关键设备的核心科技。</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#e6f7f5] flex items-center justify-center flex-shrink-0">
                  <BrainCircuit className="w-5 h-5 text-[#00b49d]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">顶尖软件与平台</h4>
                  <p className="text-sm text-gray-600">开发以AI驱动的智慧能源运营平台、能源管理系统（EMS），并整合虚拟电厂（VPP）与零碳园区解决方案。</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#e6f7f5] flex items-center justify-center flex-shrink-0">
                  <Battery className="w-5 h-5 text-[#00b49d]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">全链条服务</h4>
                  <p className="text-sm text-gray-600">提供从电站投资、EPC总承包到智慧电力运营、绿电交易及碳资产管理和电池回收全生命周期服务。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Highlights */}
        <div ref={highlightsRef} className="grid md:grid-cols-3 gap-6">
          {companyHighlights.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#005c4b] to-[#00b49d] rounded-2xl p-6 text-white"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-white/80 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;