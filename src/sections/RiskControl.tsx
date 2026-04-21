import { useEffect, useRef } from 'react';
import {
  ShieldCheck,
  FileSignature,
  Users,
  Calendar,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const guaranteeMeasures = [
  {
    title: '法定代表人连带担保',
    desc: '乙方法定代表人潘港出具 无条件、独立、不可撤销 的连带责任保证函，为债务人履约提供担保。',
    icon: FileSignature,
    color: '#00b49d',
  },
  {
    title: '实际控制人连带担保',
    desc: '乙方实际控制人刘祥森另行出具连带责任保证函，叠加个人信用担保，强化履约约束。',
    icon: Users,
    color: '#005c4b',
  },
  {
    title: '保证期限 2 年',
    desc: '保证期间自主合同履行期限届满之日起 2 年内有效，为债权实现预留充足追偿窗口。',
    icon: Calendar,
    color: '#008f7a',
  },
  {
    title: '担保范围全面',
    desc: '涵盖主债权、利息、违约金、损害赔偿金，及律师服务费、诉讼费、拍卖费、公告费、评估费等实现债权的全部费用。',
    icon: ShieldCheck,
    color: '#00d4b8',
  },
];

const RiskControl = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const guaranteeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      const cards = guaranteeRef.current?.querySelectorAll('.guarantee-card');
      if (cards && cards.length) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: guaranteeRef.current,
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
      id="risk-control"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#e6f7f5]/40 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-[#e6f7f5]/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-[#e6f7f5] text-[#00b49d] text-sm font-medium rounded-full mb-4">
            合作保障
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            风控与<span className="text-[#00b49d]">担保体系</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            主合同之外叠加 法定代表人 + 实际控制人 双重连带担保，构建立体化风险缓释结构
          </p>
        </div>

        <div ref={guaranteeRef}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guaranteeMeasures.map((item, idx) => (
              <div
                key={idx}
                className="guarantee-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#00b49d]/30"
              >
                <div className="h-2" style={{ backgroundColor: item.color }} />
                <div className="p-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#e6f7f5] border-l-4 border-[#00b49d] rounded-r-xl p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#00b49d]">担保效力：</span>
              担保函为 无条件、独立、不可撤销 的连带责任保证，未经甲方同意不得撤销；主合同发生数量、标的、价款、履行期限等变更无须另行通知担保方，担保效力持续有效。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskControl;
