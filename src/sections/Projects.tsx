import { useEffect, useRef } from 'react';
import { MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: '邢台市储能示范项目',
    location: '河北省邢台市',
    type: '电网侧储能电站',
    capacity: '300MW/1200MWh',
    image: '/images/project-weixian.jpg',
    description: '作为区域储能应用的标杆案例，充分展现了公司在储能系统集成、工程建设、并网调试等方面的综合实力，被评为"先进单位"。',
    features: ['高标准建设', '智能化运营', '全周期服务'],
    highlight: '区域储能标杆',
  },
  {
    id: 2,
    title: '曲靖AIDC数据中心项目',
    location: '云南省曲靖市',
    type: 'AI数据中心储能',
    capacity: '400MW/800MWh',
    image: './images/project-aidc.jpg',
    description: '针对AI算力需求爆发式增长，为数据中心提供供电可靠性保障、降低运营成本、实现绿色低碳的关键技术方案。',
    features: ['高压800V', '电算融合调度', '综合能源管理'],
    highlight: 'AI数据中心',
  },
  {
    id: 3,
    title: '国峰天狼巡检机器人',
    location: '全国储能场站',
    type: '智能运维系统',
    capacity: '24×7全天候',
    image: './images/project-robot.jpg',
    description: '自主研发的具身智能巡检机器人系统"国峰天狼"，专为储能场站智慧化运营设计，实现"无人值班、少人值守"运维模式。',
    features: ['AI视觉识别', '红外热成像', '自主导航'],
    highlight: '智能运维创新',
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
      const cards = cardsRef.current?.querySelectorAll('.project-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 70%',
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
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00b49d]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00b49d]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 bg-[#e6f7f5] text-[#00b49d] text-sm font-medium rounded-full mb-4">
              项目案例
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              储能项目<span className="text-[#00b49d]">展示</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              汇聚绿色能量，助力美丽中国建设，以卓越品质与领先性能立足市场
            </p>
          </div>
          <div className="mt-6 lg:mt-0">
            <button className="inline-flex items-center gap-2 text-[#00b49d] font-medium hover:gap-4 transition-all duration-300">
              查看全部项目
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#00b49d]/30"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Highlight Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-[#00b49d] text-white text-xs font-medium rounded-full">
                    {project.highlight}
                  </span>
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/80">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{project.location}</span>
                </div>

                {/* Capacity Badge */}
                <div className="absolute bottom-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    {project.capacity}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Type */}
                <span className="text-xs text-[#00b49d] font-medium uppercase tracking-wider">
                  {project.type}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-[#00b49d] transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#e6f7f5] text-[#00b49d] text-xs rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button className="inline-flex items-center gap-2 text-[#00b49d] font-medium text-sm hover:gap-3 transition-all duration-300">
                    了解详情
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#00b49d] hover:text-white transition-all duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#f5f5f5] rounded-2xl p-6">
            <div className="text-left">
              <h4 className="text-lg font-bold text-gray-900">有项目合作意向？</h4>
              <p className="text-sm text-gray-600">我们期待与您携手共创绿色未来</p>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#00b49d] hover:bg-[#005c4b] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2"
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

export default Projects;
