import { useEffect, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  User,
  Clock
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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

      // Contact info animation
      gsap.fromTo(
        contactRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: contactRef.current,
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
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#e6f7f5]/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#e6f7f5] text-[#00b49d] text-sm font-medium rounded-full mb-4">
            联系我们
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            携手共创<span className="text-[#00b49d]">绿色未来</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            诚邀您携手同行，共赢绿色未来，共同奔赴国家"双碳"战略目标
          </p>
        </div>

        {/* Contact Info - 重点展示联系方式 */}
        <div ref={contactRef} className="max-w-4xl mx-auto">
          {/* 主要联系方式 - 放大显示 */}
          <div className="bg-gradient-to-br from-[#005c4b] to-[#00b49d] rounded-3xl p-8 lg:p-12 text-white mb-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">开发总监</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">陈先生</h3>
              
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <a 
                  href="tel:13980081510" 
                  className="text-4xl lg:text-5xl font-bold hover:underline transition-all"
                >
                  139-8008-1510
                </a>
              </div>
              
              <p className="text-white/80 text-lg">
                欢迎致电洽谈合作，我们将竭诚为您服务
              </p>
            </div>
          </div>

          {/* 其他联系信息 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#f5f5f5] rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#e6f7f5] flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#00b49d]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">电子邮箱</h4>
                <a 
                  href="mailto:13980081510@qq.com" 
                  className="text-gray-600 hover:text-[#00b49d] transition-colors"
                >
                  13980081510@qq.com
                </a>
              </div>
            </div>

            <div className="bg-[#f5f5f5] rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#e6f7f5] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#00b49d]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">公司地址</h4>
                <p className="text-gray-600">深圳市科兴科技园 A2栋 7-8楼</p>
              </div>
            </div>
          </div>

          {/* 工作时间 */}
          <div className="mt-8 flex items-center justify-center gap-2 text-gray-500">
            <Clock className="w-4 h-4" />
            <span className="text-sm">工作时间：周一至周五 9:00-18:00</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
