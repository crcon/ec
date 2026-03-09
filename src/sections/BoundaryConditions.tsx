import { useEffect, useRef } from 'react';
import { 
  MapPin, 
  Zap, 
  Cable,
  CheckCircle2,
  Ruler,
  Building2,
  TrendingUp,
  Landmark
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const landConditions = [
  {
    icon: Building2,
    title: '项目规模',
    value: '200MW/800MWh',
    description: '4小时储能系统',
  },
  {
    icon: MapPin,
    title: '用地面积',
    value: '约65亩',
    description: '工业用地或电力设施用地',
  },
  {
    icon: Ruler,
    title: '规划容积率',
    value: '0.002-0.3',
    description: '上限不高于0.3，或不低于0.002',
  },
  {
    icon: TrendingUp,
    title: '投资强度',
    value: '≥600万元/亩',
    description: '满足地方政府工业投资基本要求',
  },
  {
    icon: Landmark,
    title: '税收要求',
    value: '≥15万元/亩/年',
    description: '以地方政府招商政策约定为准',
  },
];

const gridConditions = [
  {
    icon: Zap,
    title: '接入电压等级',
    value: '220kV及以上',
    description: '通过220kV出线实现并网接入',
  },
  {
    icon: CheckCircle2,
    title: '接入容量',
    value: '需确认可接入',
    description: '通过电网公司或经研院潮流计算确认',
  },
];

const transmissionConditions = [
  {
    icon: Cable,
    title: '架空送出线路',
    value: '≤5公里',
    description: '220kV架空线，控制外线工程投资成本',
  },
  {
    icon: Cable,
    title: '地埋电缆线路',
    value: '≤300米',
    description: '用于局部穿越道路、园区或城市规划区域',
  },
];

const BoundaryConditions = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const landRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const transmissionRef = useRef<HTMLDivElement>(null);

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

      // Land conditions animation
      const landCards = landRef.current?.querySelectorAll('.condition-card');
      if (landCards) {
        gsap.fromTo(
          landCards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: landRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Grid conditions animation
      gsap.fromTo(
        gridRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Transmission conditions animation
      gsap.fromTo(
        transmissionRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: transmissionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="boundary"
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
            投资参考
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            储能<span className="text-[#00b49d]">边界条件</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            独立储能项目投资边界条件（典型案例：200MW/800MWh）
          </p>
          <p className="text-gray-500 mt-4 max-w-3xl mx-auto text-sm leading-relaxed">
            以200MW/800MWh（4小时系统）独立储能电站为典型项目规模，结合当前国内储能项目开发实践，
            对项目投资与建设所需满足的核心边界条件进行如下界定。该边界条件主要从土地规划、电网接入及送出工程三个维度进行约束，
            用于项目初期筛选与投资可行性判断。
          </p>
        </div>

        {/* 一、土地与规划边界条件 */}
        <div ref={landRef} className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#00b49d] flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">一、土地与规划边界条件</h3>
              <p className="text-gray-500">Land & Planning Boundary Conditions</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {landConditions.map((item, index) => (
              <div
                key={index}
                className="condition-card group bg-[#f5f5f5] rounded-2xl p-6 hover:bg-gradient-to-br hover:from-[#005c4b] hover:to-[#00b49d] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-500">
                  <item.icon className="w-6 h-6 text-[#00b49d] group-hover:text-white transition-colors duration-500" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h4>
                <div className="text-2xl font-bold text-[#00b49d] mb-2 group-hover:text-white transition-colors duration-500">
                  {item.value}
                </div>
                <p className="text-sm text-gray-600 group-hover:text-white/80 transition-colors duration-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 二、三 网格布局 */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* 二、电网接入边界条件 */}
          <div ref={gridRef}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#005c4b] flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">二、电网接入边界条件</h3>
                <p className="text-gray-500 text-sm">Grid Connection Boundary Conditions</p>
              </div>
            </div>

            <div className="space-y-4">
              {gridConditions.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f5f5f5] rounded-2xl p-6 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[#005c4b]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                    <div className="text-xl font-bold text-[#005c4b] mb-1">{item.value}</div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 三、送出工程边界条件 */}
          <div ref={transmissionRef}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#00d4b8] flex items-center justify-center">
                <Cable className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">三、送出工程边界条件</h3>
                <p className="text-gray-500 text-sm">Transmission Engineering Boundary Conditions</p>
              </div>
            </div>

            <div className="space-y-4">
              {transmissionConditions.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f5f5f5] rounded-2xl p-6 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[#00d4b8]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                    <div className="text-xl font-bold text-[#00d4b8] mb-1">{item.value}</div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 bg-[#e6f7f5] rounded-2xl p-6">
          <p className="text-gray-600 text-sm text-center leading-relaxed">
            <span className="font-semibold text-[#00b49d]">说明：</span>
            以上边界条件为典型项目参考值，实际项目开发中需结合当地政策、电网条件及市场环境进行具体论证与调整。
            易储数智能源集团拥有专业的项目开发团队，可为客户提供全流程的项目评估与开发服务。
          </p>
        </div>
      </div>
    </section>
  );
};

export default BoundaryConditions;
