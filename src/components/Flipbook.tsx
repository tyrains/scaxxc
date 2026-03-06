import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { ChevronLeft, ChevronRight, Leaf, ShieldCheck, Activity, BarChart3, Download, FileDown } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const pagesData = [
  {
    isCover: true,
    content: (
      <div className="h-full flex flex-col justify-center items-center text-center space-y-8">
        <div className="w-48 h-24 flex items-center justify-center mb-8">
          <img src="https://i.postimg.cc/MZ7hW88f/logo2.png" alt="数诚安信" className="w-full h-full object-contain" referrerPolicy="no-referrer" crossOrigin="anonymous" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          数诚安信能碳专家
        </h1>
        <div className="h-1 w-24 bg-emerald-400 rounded-full mx-auto my-8"></div>
        <p className="text-xl text-emerald-100 font-light tracking-wide">
          驱动三晋绿色转型，构建零碳未来
        </p>
        <div className="mt-auto pt-16">
          <p className="text-sm font-medium tracking-widest uppercase text-emerald-200/80">
            数诚安信（山西）能源科技有限公司
          </p>
        </div>
      </div>
    ),
  },
  {
    isCover: false,
    content: (
      <div className="h-full flex flex-col justify-center items-center text-center opacity-20">
        <img src="https://i.postimg.cc/MZ7hW88f/logo2.png" alt="数诚安信" className="w-48 object-contain grayscale" referrerPolicy="no-referrer" crossOrigin="anonymous" />
      </div>
    ),
  },
  {
    isCover: false,
    number: 1,
    content: (
      <>
        <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b-2 border-emerald-500 pb-4 inline-block">目录</h2>
        <ul className="space-y-6 text-lg">
          <li className="flex justify-between items-center border-b border-slate-100 pb-2">
            <span className="font-medium text-slate-700">1. 企业背景</span>
            <span className="text-emerald-600 font-mono">02</span>
          </li>
          <li className="flex justify-between items-center border-b border-slate-100 pb-2">
            <span className="font-medium text-slate-700">2. 能碳一体机</span>
            <span className="text-emerald-600 font-mono">03</span>
          </li>
          <li className="flex justify-between items-center border-b border-slate-100 pb-2">
            <span className="font-medium text-slate-700">3. 数字化能碳管理平台</span>
            <span className="text-emerald-600 font-mono">05</span>
          </li>
          <li className="flex justify-between items-center border-b border-slate-100 pb-2">
            <span className="font-medium text-slate-700">4. 全流程降碳咨询</span>
            <span className="text-emerald-600 font-mono">07</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    isCover: false,
    number: 2,
    content: (
      <>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
            <ShieldCheck size={24} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">1. 企业背景</h2>
        </div>
        <h3 className="text-xl font-semibold text-emerald-700 mb-6 leading-snug">
          锚定美丽中国先行区，驱动三晋绿色转型
        </h3>
        <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
          <p>
            数诚安信立足于全国能源革命排头兵——山西省，深度耦合国家“双碳”战略与区域发展政策。生态环境部近期发布的《美丽中国先行区建设行动方案》明确提出，要持续改善生态环境质量，构建绿色低碳发展高地。
          </p>
          <p>
            作为山西本土领军的能源数字化架构集成商，数诚安信通过<strong className="text-emerald-700">“技术+标准+咨询”</strong>三位一体的业务闭环，为企业提供全生命周期的绿色、零碳技术支撑。我们不仅是数字化工具的提供者，更是区域绿色转型与国家级零碳园区建设的技术核心枢纽。
          </p>
        </div>
        <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-100">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-1">技术</div>
              <div className="text-xs text-slate-500">底层架构支撑</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-1">标准</div>
              <div className="text-xs text-slate-500">对标国家规范</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-1">咨询</div>
              <div className="text-xs text-slate-500">全生命周期服务</div>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    isCover: false,
    number: 3,
    content: (
      <>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
            <Activity size={24} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">2. 能碳一体机</h2>
        </div>
        <h3 className="text-xl font-semibold text-emerald-700 mb-6 leading-snug">
          构建IT/OT融合的安全可信基座
        </h3>
        
        <div className="mb-6">
          <div className="h-56 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200 shadow-inner overflow-hidden relative p-2">
            <img src="https://i.postimg.cc/xCXXyCfx/zmt.png" alt="能碳一体机设备" className="object-contain w-full h-full opacity-95 mix-blend-multiply" referrerPolicy="no-referrer" crossOrigin="anonymous" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-3">
              <span className="text-white font-medium text-sm">能碳一体机实物示意图</span>
            </div>
          </div>
        </div>

        <h4 className="font-bold text-slate-800 mb-3 border-l-4 border-emerald-500 pl-3">硬件配置</h4>
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
            <h5 className="font-semibold text-emerald-700 mb-1 text-sm">外网主机硬件规格</h5>
            <ul className="text-xs text-slate-600 space-y-1">
              <li><span className="font-medium">处理器：</span>飞腾腾珑E2000Q (4核: 2×FTC664 2.0GHz, 2×FTC310 1.5GHz)</li>
              <li><span className="font-medium">内存/存储：</span>板载8G DDR4 3200 / 256G MSATA SSD</li>
              <li><span className="font-medium">接口：</span>板载2*1000M电口, 移远EM05 4G M.2接口(带天线)</li>
              <li><span className="font-medium">其他：</span>3.3V RTC电池, 看门狗定时器(1-255S 软件可编程)</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
            <h5 className="font-semibold text-emerald-700 mb-1 text-sm">内网主机硬件规格</h5>
            <ul className="text-xs text-slate-600 space-y-1">
              <li><span className="font-medium">处理器：</span>飞腾腾珑E2000Q (4核: 2×FTC664 2.0GHz, 2×FTC310 1.5GHz)</li>
              <li><span className="font-medium">内存/存储：</span>板载8G DDR4 3200 / 256G MSATA SSD</li>
              <li><span className="font-medium">接口：</span>板载2*1000M电口, 串口 2*RS485+12*RS232</li>
              <li><span className="font-medium">其他：</span>无无线通讯, 3.3V RTC电池, 看门狗定时器</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    isCover: false,
    number: 4,
    content: (
      <>
        <h4 className="font-bold text-slate-800 mb-3 border-l-4 border-emerald-500 pl-3">设备功能</h4>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
            <div className="font-semibold text-emerald-800 mb-1 text-sm">数据采集</div>
            <p className="text-[11px] leading-tight text-slate-600">支持主流串口通讯协议，如modbus-RTU, modbus-TCP, 电表, 水表等；支持协议定制。</p>
          </div>
          <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
            <div className="font-semibold text-emerald-800 mb-1 text-sm">数据加密</div>
            <p className="text-[11px] leading-tight text-slate-600">密码卡硬件加密，减少内存暴露风险。符合《PCI密码卡技术规范》，具备商用密码产品认证。</p>
          </div>
          <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
            <div className="font-semibold text-emerald-800 mb-1 text-sm">数据摆渡</div>
            <p className="text-[11px] leading-tight text-slate-600">隔离网闸实现单向传输，物理隔离，采用内外网独立主机设计，防止黑客攻击。</p>
          </div>
          <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
            <div className="font-semibold text-emerald-800 mb-1 text-sm">数据上报</div>
            <p className="text-[11px] leading-tight text-slate-600">定时自动上报，支持按照不同行业、不同管理平台定制化开发上报协议，可多端发送。</p>
          </div>
        </div>

        <h4 className="font-bold text-slate-800 mb-2 border-l-4 border-emerald-500 pl-3">核心技术</h4>
        <p className="text-xs text-slate-600 mb-3 text-justify">
          能碳一体机是数诚安信自主研发的边缘计算核心硬件，其架构设计严格对标GB/T 46737-2025《电工电子行业零碳工厂评价导则》第4.1.3条关于“安全与信誉”的高标准要求。该设备通过在物理边缘端部署，有效弥合了生产现场（OT）与信息系统（IT）之间的技术鸿沟。
        </p>
        <ul className="space-y-2 text-xs text-slate-600">
          <li className="flex gap-2">
            <span className="text-emerald-500 mt-0.5">•</span>
            <div><strong className="text-slate-800">物理隔离网闸（边缘网关层）：</strong>采用高性能隔离芯片，通过工业协议转换实现低延迟数据轮询，确保能碳敏感数据单向传输，彻底消弭外部渗透风险。</div>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-500 mt-0.5">•</span>
            <div><strong className="text-slate-800">信创底座（系统内核层）：</strong>全面适配国产化芯片及操作系统，实现从底层指令集到上层应用框架的自主可控，满足信创准入与等级保护要求。</div>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-500 mt-0.5">•</span>
            <div><strong className="text-slate-800">量子加密（数据链路层）：</strong>引入金融级量子密钥分发技术，对跨节点传输的能效与排放数据进行动态加密，确保数据全路径私密性。</div>
          </li>
        </ul>
      </>
    ),
  },
  {
    isCover: false,
    number: 5,
    content: (
      <>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
            <BarChart3 size={24} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">3. 数字化能碳管理平台</h2>
        </div>
        <h3 className="text-xl font-semibold text-emerald-700 mb-4 leading-snug">
          对标国家标准的功能架构
        </h3>
        <p className="text-sm text-slate-600 mb-4 text-justify">
          基于GB/T 46737-2025附录A的指标体系，平台深度集成多项国际/国家标准协议，构建起自动化、合规化的能碳管理逻辑：
        </p>

        <div className="space-y-3">
          <div className="border-l-2 border-emerald-200 pl-4 py-1">
            <h4 className="font-bold text-slate-800 text-sm">1. 实时能耗在线监测</h4>
            <p className="text-xs text-slate-500 mt-1">采用高频采样技术，实现电、气、水等能源介质的秒级低延迟Polling，确保监测数据实时性。</p>
          </div>
          <div className="border-l-2 border-emerald-200 pl-4 py-1">
            <h4 className="font-bold text-slate-800 text-sm">2. 异常报警管理</h4>
            <p className="text-xs text-slate-500 mt-1">基于动态阈值与AI预测模型，对能耗波动、设备故障进行实时告警与根因分析。</p>
          </div>
          <div className="border-l-2 border-emerald-200 pl-4 py-1">
            <h4 className="font-bold text-slate-800 text-sm">3. 重点用能设备计量覆盖</h4>
            <p className="text-xs text-slate-500 mt-1">严格执行Appendix A.11要求，实现厂内重点用能设备100%计量覆盖，为评价提供全量数据支撑。</p>
          </div>
          <div className="border-l-2 border-emerald-200 pl-4 py-1">
            <h4 className="font-bold text-slate-800 text-sm">4. 监测结果可视化</h4>
            <p className="text-xs text-slate-500 mt-1">依托数字孪生技术，构建全厂能源流向与碳排分布的立体化看板。</p>
          </div>
          <div className="border-l-2 border-emerald-200 pl-4 py-1">
            <h4 className="font-bold text-slate-800 text-sm">5. 温室气体排放智能分析</h4>
            <p className="text-xs text-slate-500 mt-1">核心计算引擎深度对标GB/T 32151（电工电子行业专项标准），实现组织碳排自动核算。</p>
          </div>
          <div className="border-l-2 border-emerald-200 pl-4 py-1">
            <h4 className="font-bold text-slate-800 text-sm">6. 自动调节与策略优化</h4>
            <p className="text-xs text-slate-500 mt-1">基于Appendix A.12要求，联动设备工况实现生产流程的闭环调节与系统化降碳。</p>
          </div>
        </div>
      </>
    ),
  },
  {
    isCover: false,
    number: 6,
    content: (
      <>
        <div className="space-y-4 mt-4">
          <div className="border-l-2 border-emerald-200 pl-4 py-1">
            <h4 className="font-bold text-slate-800 text-sm">7. 产品碳足迹量化计算</h4>
            <p className="text-xs text-slate-500 mt-1">对标GB/T 24067，量化产品全生命周期（Cradle-to-Gate）排放，支撑绿色设计。</p>
          </div>
          <div className="border-l-2 border-emerald-200 pl-4 py-1">
            <h4 className="font-bold text-slate-800 text-sm">8. 能源管理体系集成</h4>
            <p className="text-xs text-slate-500 mt-1">无缝嵌入GB/T 23331管理逻辑，自动沉淀体系审计证据与能源绩效参数（EnPIs）。</p>
          </div>
          <div className="border-l-2 border-emerald-200 pl-4 py-1">
            <h4 className="font-bold text-slate-800 text-sm">9. 分布式光伏与调度</h4>
            <p className="text-xs text-slate-500 mt-1">针对Appendix A.9，优化屋顶光伏覆盖率（目标≥80%）及微电网消纳调度。</p>
          </div>
          <div className="border-l-2 border-emerald-200 pl-4 py-1">
            <h4 className="font-bold text-slate-800 text-sm">10. 减排量核算核实</h4>
            <p className="text-xs text-slate-500 mt-1">基于GB/T 33760技术规范，对技改项目的基准线与减排量进行精准量化。</p>
          </div>
          <div className="border-l-2 border-emerald-200 pl-4 py-1">
            <h4 className="font-bold text-slate-800 text-sm">11. 碳抵消资产管理</h4>
            <p className="text-xs text-slate-500 mt-1">统一管理CEA、CCER及绿证（GEC），确保存证过程的唯一性与防篡改性。</p>
          </div>
          <div className="border-l-2 border-emerald-200 pl-4 py-1">
            <h4 className="font-bold text-slate-800 text-sm">12. 评价指标自评体系</h4>
            <p className="text-xs text-slate-500 mt-1">自动化生成：平台内置评分模型，可根据实时运行数据自动生成符合Appendix B格式的《零碳工厂评价报告》。</p>
          </div>
        </div>
      </>
    ),
  },
  {
    isCover: false,
    number: 7,
    content: (
      <>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
            <Leaf size={24} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">4. 全流程降碳咨询</h2>
        </div>
        <h3 className="text-xl font-semibold text-emerald-700 mb-4 leading-snug">
          贯穿企业绿色全生命周期
        </h3>
        
        <p className="text-sm text-slate-600 mb-4 text-justify leading-relaxed">
          数诚安信不仅提供工具，更通过专业咨询确保企业达成技术合规。我们的咨询流严格遵循GBT/ 36132-2025 、GB/T 46737-2025的评价路径。
        </p>

        <div className="grid gap-3">
          <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 group-hover:w-2 transition-all"></div>
            <h4 className="font-bold text-slate-800 mb-1">绿色工厂、零碳工厂申报</h4>
            <p className="text-xs text-slate-500">提供全过程辅导，助力企业顺利通过国家及地方级绿色制造体系评价。</p>
          </div>
          
          <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 group-hover:w-2 transition-all"></div>
            <h4 className="font-bold text-slate-800 mb-1">碳核算与报告服务</h4>
            <p className="text-xs text-slate-500">编制符合GB/T 32151要求的年度温室气体排放报告，确保第三方复核的高通过率。</p>
          </div>
          
          <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 group-hover:w-2 transition-all"></div>
            <h4 className="font-bold text-slate-800 mb-1">产品碳足迹量化（LCA）</h4>
            <p className="text-xs text-slate-500">识别供应链碳暴露风险，通过优化设计方案降低单产品排放强度，提升产品绿色溢价。</p>
          </div>
          
          <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 group-hover:w-2 transition-all"></div>
            <h4 className="font-bold text-slate-800 mb-1">节能诊断与能效对标</h4>
            <p className="text-xs text-slate-500">出具专业诊断报告，挖掘节能潜力，提供切实可行的技改方案与能效提升路径。</p>
          </div>
        </div>
      </>
    ),
  },
  {
    isCover: true,
    content: (
      <div className="h-full flex flex-col justify-between items-center text-center py-12">
        <div className="w-full flex-grow flex flex-col items-center justify-center">
          <img src="https://i.postimg.cc/MZ7hW88f/logo2.png" alt="数诚安信" className="w-32 object-contain mb-6 opacity-80" referrerPolicy="no-referrer" crossOrigin="anonymous" />
          <h2 className="text-xl md:text-2xl font-bold mb-3 whitespace-nowrap">数诚安信（山西）能源科技有限公司</h2>
          <p className="text-emerald-100 font-light tracking-wider uppercase text-[10px] md:text-xs mb-12 whitespace-nowrap">
            Shucheng Anxin (Shanxi) Energy Technology Co., Ltd.
          </p>
          
          <div className="w-32 h-32 bg-white rounded-lg p-2 mb-8 shadow-2xl">
            {/* QR Code Placeholder */}
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com" alt="QR Code" className="w-full h-full" referrerPolicy="no-referrer" crossOrigin="anonymous" />
          </div>
          <p className="text-sm text-emerald-200">扫码了解更多资讯</p>
        </div>
        
        <div className="w-full border-t border-emerald-700/50 pt-8 text-sm text-emerald-200/80 space-y-2">
          <p>地址：山西太原小店区晋阳街北美N1文创区6号楼1705</p>
          <p>电话：18534750197</p>
        </div>
      </div>
    ),
  }
];

const Page = React.forwardRef<HTMLDivElement, { children: React.ReactNode; number?: number; isCover?: boolean }>(
  (props, ref) => {
    return (
      <div
        className={`bg-white shadow-xl overflow-hidden relative flex flex-col ${
          props.isCover ? 'bg-gradient-to-br from-emerald-900 to-emerald-700 text-white' : 'text-slate-800'
        }`}
        ref={ref}
        data-density="soft"
      >
        <div className="flex-grow p-6 md:p-8 overflow-y-auto custom-scrollbar">
          {props.children}
        </div>
      </div>
    );
  }
);

export default function Flipbook() {
  const bookRef = useRef<any>(null);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const [isExporting, setIsExporting] = useState(false);

  const onPage = (e: any) => {
    setPage(e.data);
  };

  const nextButtonClick = () => {
    bookRef.current?.pageFlip()?.flipNext();
  };

  const prevButtonClick = () => {
    bookRef.current?.pageFlip()?.flipPrev();
  };

  const generateImages = async () => {
    setIsExporting(true);
    try {
      const canvases = [];
      for (let i = 0; i < pagesData.length; i++) {
        const element = document.getElementById(`export-page-${i}`);
        if (element) {
          const canvas = await html2canvas(element, {
            scale: 2, // Higher resolution
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff'
          });
          canvases.push(canvas);
        }
      }
      return canvases;
    } catch (error) {
      console.error("Error generating images:", error);
      alert("生成图片时发生错误，请重试。");
      return [];
    } finally {
      setIsExporting(false);
    }
  };

  const downloadPDF = async () => {
    const canvases = await generateImages();
    if (canvases.length === 0) return;

    // A4 size in mm is 210 x 297
    // Our pages are 500x700 (aspect ratio 1:1.4)
    // We can use custom page size or fit to A4. Let's use custom size to match aspect ratio.
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [500, 700]
    });

    canvases.forEach((canvas, index) => {
      if (index > 0) {
        pdf.addPage([500, 700], 'portrait');
      }
      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      pdf.addImage(imgData, 'JPEG', 0, 0, 500, 700);
    });

    pdf.save('数诚安信-宣传册.pdf');
  };

  const downloadImages = async () => {
    const canvases = await generateImages();
    if (canvases.length === 0) return;

    canvases.forEach((canvas, index) => {
      const link = document.createElement('a');
      link.download = `数诚安信-宣传册-第${index + 1}页.jpg`;
      link.href = canvas.toDataURL('image/jpeg', 0.95);
      link.click();
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 md:p-8 font-sans relative">
      {isExporting && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-2xl flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-slate-800 font-medium">正在生成文件，请稍候...</p>
          </div>
        </div>
      )}

      {/* Hidden container for exporting */}
      <div id="export-container" className="absolute" style={{ left: '-9999px', top: 0 }}>
        {pagesData.map((page, index) => (
          <div
            key={`export-${index}`}
            id={`export-page-${index}`}
            style={{ width: '500px', height: '700px' }}
            className={`bg-white overflow-hidden relative flex flex-col ${
              page.isCover ? 'bg-gradient-to-br from-emerald-900 to-emerald-700 text-white' : 'text-slate-800'
            }`}
          >
            <div className="flex-grow p-6 md:p-8">
              {page.content}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-6 flex flex-col sm:flex-row items-center gap-4 w-full max-w-5xl justify-between">
        <div className="flex gap-2">
          <button
            onClick={downloadPDF}
            disabled={isExporting}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-md transition-colors disabled:opacity-50 text-sm font-medium"
          >
            <FileDown size={18} />
            下载 PDF
          </button>
          <button
            onClick={downloadImages}
            disabled={isExporting}
            className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 text-emerald-700 border border-emerald-200 rounded-lg shadow-sm transition-colors disabled:opacity-50 text-sm font-medium"
          >
            <Download size={18} />
            下载图片
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={prevButtonClick}
            className="p-2 rounded-full bg-white shadow-md hover:bg-emerald-50 text-emerald-700 transition-colors disabled:opacity-50"
            disabled={page === 0}
          >
            <ChevronLeft size={24} />
          </button>
          <span className="text-sm font-medium text-slate-500">
            {page + 1} / {totalPage || 10}
          </span>
          <button
            onClick={nextButtonClick}
            className="p-2 rounded-full bg-white shadow-md hover:bg-emerald-50 text-emerald-700 transition-colors disabled:opacity-50"
            disabled={page >= (totalPage - 1)}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto shadow-2xl ring-1 ring-slate-900/5 rounded-sm overflow-hidden">
        {/* @ts-ignore */}
        <HTMLFlipBook
          width={500}
          height={700}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onPage}
          onInit={(e: any) => setTotalPage(e.object.getPageCount())}
          className="flip-book"
          ref={bookRef}
          usePortrait={true}
        >
          {pagesData.map((page, index) => (
            <Page key={index} isCover={page.isCover} number={page.number}>
              {page.content}
            </Page>
          ))}
        </HTMLFlipBook>
      </div>
      
      <div className="mt-8 text-center text-slate-400 text-xs">
        提示：点击左右箭头或拖拽页面边缘进行翻页
      </div>
    </div>
  );
}
