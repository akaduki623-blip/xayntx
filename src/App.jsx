import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      id: 1,
      title: 'AIGC漫剧制作',
      description: '利用AI技术制作高质量的漫画和动画剧集，为您的品牌或故事创造独特的视觉体验。',
      icon: '🎬'
    },
    {
      id: 2,
      title: 'AIGC广告视频制作',
      description: '通过AI生成创意广告视频，提升品牌曝光度和营销效果，吸引目标受众。',
      icon: '📺'
    },
    {
      id: 3,
      title: 'AIGC电商带货视频',
      description: '制作UGC风格的电商带货视频，真实自然，提高产品转化率和销售业绩。',
      icon: '🛍️'
    },
    {
      id: 4,
      title: 'AI客服',
      description: '部署智能AI客服系统，24小时在线解答客户问题，提高客户满意度和服务效率。',
      icon: '🤖'
    },
    {
      id: 5,
      title: '电商产品图',
      description: '使用AI技术生成高质量的电商产品图片，突出产品特点，提升视觉吸引力。',
      icon: '📸'
    },
    {
      id: 6,
      title: '网站建设',
      description: '专业的网站建设服务，从设计到开发，为您打造响应式、用户友好的企业网站。',
      icon: '🌐'
    }
  ];

  const cases = [
    {
      id: 1,
      title: '漫剧制作案例',
      category: '漫剧',
      videoUrl: 'https://example.com/video1.mp4',
      description: '为某动漫公司制作的系列漫剧，使用AI技术提高制作效率和画面质量。'
    },
    {
      id: 2,
      title: '广告视频案例',
      category: '广告',
      videoUrl: 'https://example.com/video2.mp4',
      description: '为某品牌制作的AI生成广告视频，获得了超过100万次观看。'
    },
    {
      id: 3,
      title: '电商带货视频案例',
      category: '电商',
      videoUrl: 'https://example.com/video3.mp4',
      description: '为某电商平台制作的UGC风格带货视频，转化率提升了30%。'
    },
    {
      id: 4,
      title: 'AI客服案例',
      category: 'AI客服',
      videoUrl: 'https://example.com/video4.mp4',
      description: '为某企业部署的AI客服系统，减少了70%的人工客服工作量。'
    },
    {
      id: 5,
      title: '电商产品图案例',
      category: '产品图',
      videoUrl: 'https://example.com/video5.mp4',
      description: '为某电商品牌生成的高质量产品图片，提高了产品点击率。'
    },
    {
      id: 6,
      title: '网站建设案例',
      category: '网站',
      videoUrl: 'https://example.com/video6.mp4',
      description: '为某企业设计开发的响应式网站，提升了品牌形象和用户体验。'
    }
  ];

  const filteredCases = activeTab === 'all' ? cases : cases.filter(c => c.category === activeTab);

  const processSteps = [
    {
      id: 1,
      title: '需求沟通',
      description: '了解客户需求，制定详细的项目计划和方案。'
    },
    {
      id: 2,
      title: '创意设计',
      description: '根据需求进行创意设计，提供初步方案和概念。'
    },
    {
      id: 3,
      title: '制作执行',
      description: '专业团队进行制作，确保质量和效率。'
    },
    {
      id: 4,
      title: '质量检查',
      description: '严格的质量控制，确保最终产品符合要求。'
    },
    {
      id: 5,
      title: '交付验收',
      description: '按时交付成果，确保客户满意。'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">雄安与你同行</span>
            <span className="text-sm text-gray-600">商贸有限公司</span>
          </div>
          
          {/* 桌面导航 */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-800 hover:text-primary font-medium">首页</a>
            <a href="#services" className="text-gray-800 hover:text-primary font-medium">服务内容</a>
            <a href="#cases" className="text-gray-800 hover:text-primary font-medium">案例展示</a>
            <a href="#process" className="text-gray-800 hover:text-primary font-medium">服务流程</a>
            <a href="#about" className="text-gray-800 hover:text-primary font-medium">关于我们</a>
            <a href="#contact" className="text-gray-800 hover:text-primary font-medium">联系方式</a>
          </div>
          
          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* 移动端导航菜单 */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
              <a href="#home" className="text-gray-800 hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>首页</a>
              <a href="#services" className="text-gray-800 hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>服务内容</a>
              <a href="#cases" className="text-gray-800 hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>案例展示</a>
              <a href="#process" className="text-gray-800 hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>服务流程</a>
              <a href="#about" className="text-gray-800 hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>关于我们</a>
              <a href="#contact" className="text-gray-800 hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>联系方式</a>
            </div>
          </div>
        )}
      </nav>

      {/* 首页英雄区 */}
      <section id="home" className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI驱动的创意解决方案</h1>
            <p className="text-xl mb-8">专业的AIGC漫剧制作、广告视频制作、电商带货视频、AI客服、电商产品图和网站建设服务</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#services" className="bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition">
                了解服务
              </a>
              <a href="#contact" className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-primary transition">
                联系我们
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4">
              <img 
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=A%20modern%20AI%20technology%20concept%20with%20digital%20art%20and%20creative%20elements&image_size=square_hd" 
                alt="AI创意" 
                className="w-full rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 服务内容展示 */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">我们的服务</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              利用人工智能技术，为您提供高质量、高效率的创意解决方案
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <div key={service.id} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 案例展示 */}
      <section id="cases" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">案例展示</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              查看我们的成功案例，了解我们如何为客户创造价值
            </p>
          </div>
          
          {/* 案例分类标签 */}
          <div className="flex flex-wrap justify-center mb-10 gap-4">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full font-medium transition ${activeTab === 'all' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              全部
            </button>
            <button 
              onClick={() => setActiveTab('漫剧')}
              className={`px-6 py-2 rounded-full font-medium transition ${activeTab === '漫剧' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              AIGC漫剧
            </button>
            <button 
              onClick={() => setActiveTab('广告')}
              className={`px-6 py-2 rounded-full font-medium transition ${activeTab === '广告' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              广告视频
            </button>
            <button 
              onClick={() => setActiveTab('电商')}
              className={`px-6 py-2 rounded-full font-medium transition ${activeTab === '电商' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              电商带货
            </button>
            <button 
              onClick={() => setActiveTab('AI客服')}
              className={`px-6 py-2 rounded-full font-medium transition ${activeTab === 'AI客服' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              AI客服
            </button>
            <button 
              onClick={() => setActiveTab('产品图')}
              className={`px-6 py-2 rounded-full font-medium transition ${activeTab === '产品图' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              电商产品图
            </button>
            <button 
              onClick={() => setActiveTab('网站')}
              className={`px-6 py-2 rounded-full font-medium transition ${activeTab === '网站' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              网站建设
            </button>
          </div>
          
          {/* 案例列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map(caseItem => (
              <div key={caseItem.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="relative aspect-video bg-gray-200">
                  <video 
                    src={caseItem.videoUrl} 
                    poster="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Video%20placeholder%20with%20AI%20technology%20theme&image_size=landscape_16_9" 
                    className="w-full h-full object-cover"
                    controls
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{caseItem.title}</h3>
                  <p className="text-gray-600">{caseItem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服务流程 */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">服务流程</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              从沟通到交付，我们为您提供专业、高效的服务流程
            </p>
          </div>
          
          <div className="relative">
            {/* 流程线 */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            {/* 流程步骤 */}
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={step.id} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold z-10">
                    {step.id}
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12">
                    <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold mb-4">
                      {step.id}
                    </div>
                    <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                      <img 
                        src={`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Step%20${step.id}%20of%20business%20process%2C%20professional%20workflow%20illustration&image_size=landscape_4_3`} 
                        alt={step.title} 
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 关于我们 */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">关于我们</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              雄安与你同行商贸有限公司致力于利用AI技术为企业提供创新的数字解决方案
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20business%20team%20working%20with%20AI%20technology&image_size=square_hd" 
                alt="关于我们" 
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">公司简介</h3>
              <p className="text-gray-600 mb-6">
                雄安与你同行商贸有限公司成立于2024年，是一家专注于AI技术应用的创新企业。我们拥有一支专业的团队，致力于为客户提供高质量的AIGC漫剧制作、广告视频制作、电商带货视频、AI客服、电商产品图和网站建设服务。
              </p>
              <p className="text-gray-600 mb-6">
                我们的使命是通过AI技术赋能企业，帮助客户在数字时代获得竞争优势。我们相信，人工智能技术将为创意产业带来革命性的变化，我们愿意与客户一起探索这一领域的无限可能。
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-gray-600">成功案例</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-gray-600">企业客户</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-gray-600">客户满意度</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">联系方式</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              如有任何疑问或合作意向，请随时与我们联系
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">联系我们</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-primary text-xl mr-4">📍</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">公司地址</h4>
                      <p className="text-gray-600">河北省雄安新区</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary text-xl mr-4">📞</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">联系电话</h4>
                      <p className="text-gray-600">138-0013-8000</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary text-xl mr-4">📧</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">电子邮箱</h4>
                      <p className="text-gray-600">contact@xiongan-tongxing.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary text-xl mr-4">💬</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">微信客服</h4>
                      <div className="mt-4">
                        <img 
                          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=WeChat%20QR%20code%20placeholder&image_size=square" 
                          alt="微信二维码" 
                          className="w-32 h-32 border border-gray-200 p-2"
                        />
                        <p className="text-gray-600 mt-2 text-center">扫码添加微信</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">留言咨询</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">姓名</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">电话</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="请输入您的电话"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">邮箱</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">留言内容</label>
                    <textarea 
                      rows={4} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="请输入您的留言内容"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition"
                  >
                    提交留言
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">雄安与你同行</h3>
              <p className="text-gray-400">
                专业的AI创意解决方案提供商
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">服务内容</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition">AIGC漫剧制作</a></li>
                <li><a href="#services" className="hover:text-white transition">AIGC广告视频制作</a></li>
                <li><a href="#services" className="hover:text-white transition">AIGC电商带货视频</a></li>
                <li><a href="#services" className="hover:text-white transition">AI客服</a></li>
                <li><a href="#services" className="hover:text-white transition">电商产品图</a></li>
                <li><a href="#services" className="hover:text-white transition">网站建设</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">快速链接</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition">首页</a></li>
                <li><a href="#services" className="hover:text-white transition">服务内容</a></li>
                <li><a href="#cases" className="hover:text-white transition">案例展示</a></li>
                <li><a href="#process" className="hover:text-white transition">服务流程</a></li>
                <li><a href="#about" className="hover:text-white transition">关于我们</a></li>
                <li><a href="#contact" className="hover:text-white transition">联系方式</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">联系方式</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📍 河北省雄安新区</li>
                <li>📞 138-0013-8000</li>
                <li>📧 contact@xiongan-tongxing.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 雄安与你同行商贸有限公司. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
