import { useEffect, useRef } from 'react';
import { 
  MapPin, 
  Zap, 
  TrendingUp,
  Building2
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const provinceData = [
  { name: '山西省', capacity: '3.6GWh', percentage: 100, color: '#005c4b' },
  { name: '河南省', capacity: '2.6GWh', percentage: 72, color: '#007a65' },
  { name: '广东省', capacity: '2.2GWh', percentage: 61, color: '#00997f' },
  { name: '云南省', capacity: '2.0GWh', percentage: 56, color: '#00b49d' },
  { name: '广西壮族自治区', capacity: '1.6GWh', percentage: 44, color: '#00d4b8' },
  { name: '河北省', capacity: '1.6GWh', percentage: 44, color: '#00e8cc' },
  { name: '宁夏回族自治区', capacity: '1.4GWh', percentage: 39, color: '#00b49d' },
  { name: '山东省', capacity: '1.0GWh', percentage: 28, color: '#00997f' },
  { name: '湖北省', capacity: '0.8GWh', percentage: 22, color: '#007a65' },
  { name: '安徽省', capacity: '0.8GWh', percentage: 22, color: '#005c4b' },
  { name: '天津市', capacity: '0.4GWh', percentage: 11, color: '#004d40' },
  { name: '江苏省', capacity: '0.32GWh', percentage: 9, color: '#003d33' },
];

const stats = [
  { icon: MapPin, value: '12', label: '服务省份', unit: '个' },
  { icon: Building2, value: '30', label: '储能项目', unit: '个' },
  { icon: Zap, value: '18.32', label: '总装机容量', unit: 'GWh' },
];

const GridPerformance = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

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

      // Stats animation
      const statCards = statsRef.current?.querySelectorAll('.stat-card');
      if (statCards) {
        gsap.fromTo(
          statCards,
          { y: 60, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Chart bars animation
      const bars = chartRef.current?.querySelectorAll('.progress-bar');
      if (bars) {
        gsap.fromTo(
          bars,
          { width: '0%' },
          {
            width: (i) => `${provinceData[i].percentage}%`,
            duration: 1.2,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: chartRef.current,
              start: 'top 80%',
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
      id="grid-performance"
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
        <div ref={headerRef} className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#e6f7f5] text-[#00b49d] text-sm font-medium rounded-full mb-4">
            并网业绩
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            全国性<span className="text-[#00b49d]">服务网络</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            易储能源的储能电站已并网服务12个省份的电网，累计落地30个储能项目，
            总装机容量约18.32GWh，全力构建全国性新型电力能源服务网络。
          </p>
        </div>

        {/* Stats Cards */}
        <div ref={statsRef} className="grid sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card bg-gradient-to-br from-[#005c4b] to-[#00b49d] rounded-2xl p-8 text-white text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                {stat.value}
                <span className="text-xl ml-1">{stat.unit}</span>
              </div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Province Distribution */}
        <div ref={chartRef} className="bg-[#f5f5f5] rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[#00b49d] flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">各省份装机容量分布</h3>
              <p className="text-sm text-gray-500">累计18.32GWh装机容量分布情况</p>
            </div>
          </div>

          <div className="space-y-4">
            {provinceData.map((province, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-32 sm:w-40 text-sm text-gray-700 font-medium flex-shrink-0">
                  {province.name}
                </div>
                <div className="flex-1 h-8 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="progress-bar h-full rounded-full flex items-center justify-end pr-2"
                    style={{ 
                      backgroundColor: province.color,
                      width: '0%'
                    }}
                  >
                    <span className="text-white text-xs font-bold">{province.capacity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridPerformance;
