import { useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  Zap, 
  Users, 
  Target,
  ArrowRight,
  BarChart3,
  Globe
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const marketData = [
  {
    icon: TrendingUp,
    value: '6万亿',
    label: '2025年产值规模',
    trend: '+45倍',
    description: '较十三五末提升',
  },
  {
    icon: Zap,
    value: '1.36亿',
    label: '千瓦装机规模',
    trend: '2025年底',
    description: '累计装机容量',
  },
  {
    icon: Users,
    value: '176家',
    label: '独立储能开发商',
    trend: '持续增长',
    description: '截至2025年6月',
  },
  {
    icon: Target,
    value: '10万亿+',
    label: '2030年预期规模',
    trend: '高速增长',
    description: '未来市场空间',
  },
];

const industryPlayers = [
  { type: '电力央国企', percentage: '42%', color: '#00b49d' },
  { type: '地方国资', percentage: '22%', color: '#00d4b8' },
  { type: '储能和新能源企业', percentage: '25%', color: '#005c4b' },
  { type: '其他', percentage: '11%', color: '#e6f7f5' },
];

const Market = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const playersRef = useRef<HTMLDivElement>(null);

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

      // Stats cards animation
      const statCards = statsRef.current?.querySelectorAll('.stat-card');
      if (statCards) {
        gsap.fromTo(
          statCards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Chart animation
      gsap.fromTo(
        chartRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: chartRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Players animation
      gsap.fromTo(
        playersRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: playersRef.current,
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
      id="market"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#f5f5f5] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e6f7f5]/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white text-[#00b49d] text-sm font-medium rounded-full mb-4 shadow-sm">
            行业市场
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            万亿赛道<span className="text-[#00b49d]">市场机遇</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            储能是新能源革命下半场的超级赛道，市场规模爆发式增长
          </p>
        </div>

        {/* Market Stats Grid */}
        <div
          ref={statsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {marketData.map((item, index) => (
            <div
              key={index}
              className="stat-card group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#00b49d]/30"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e6f7f5] to-[#00b49d]/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#00b49d] transition-all duration-500">
                <item.icon className="w-6 h-6 text-[#00b49d] group-hover:text-white transition-colors duration-500" />
              </div>

              {/* Value */}
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                {item.value}
              </div>

              {/* Label */}
              <div className="text-sm text-gray-600 mb-2">{item.label}</div>

              {/* Trend */}
              <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#e6f7f5] rounded-lg">
                <BarChart3 className="w-3 h-3 text-[#00b49d]" />
                <span className="text-xs text-[#00b49d] font-medium">{item.trend}</span>
              </div>

              {/* Description */}
              <div className="text-xs text-gray-400 mt-2">{item.description}</div>
            </div>
          ))}
        </div>

        {/* Market Analysis */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Chart Section */}
          <div ref={chartRef} className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#e6f7f5] flex items-center justify-center">
                <Globe className="w-5 h-5 text-[#00b49d]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">市场参与者构成</h3>
                <p className="text-sm text-gray-500">已建成独立储能项目的业主类型占比</p>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-4">
              {industryPlayers.map((player, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-700">{player.type}</span>
                    <span className="text-sm font-semibold text-gray-900">{player.percentage}</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: player.percentage,
                        backgroundColor: player.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Source */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-400">
                数据来源：寻熵研究院统计，截至2025年6月
              </p>
            </div>
          </div>

          {/* Key Insights */}
          <div ref={playersRef} className="space-y-6">
            <div className="bg-gradient-to-br from-[#005c4b] to-[#00b49d] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">行业发展趋势</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">战略定位升级</h4>
                    <p className="text-sm text-white/80">新型储能正式列入六大新兴支柱产业，与集成电路、卫星互联网等并列国家战略级产业方向</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">政策转折点</h4>
                    <p className="text-sm text-white/80">136号文取消强制配储，114号文建立容量电价机制，2026年成为市场化发展元年</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">角色转变</h4>
                    <p className="text-sm text-white/80">储能从发电侧配套配角，升级为构建新型电力系统不可或缺的主角</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">把握市场机遇</h4>
                  <p className="text-sm text-gray-600">与易储数智共同开拓储能市场</p>
                </div>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#00b49d] hover:bg-[#005c4b] text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2"
                >
                  合作咨询
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;
