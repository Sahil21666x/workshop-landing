import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Star, Apple, Play, Chrome, Users, TrendingUp, Shield, Zap, BarChart3, MessageSquare, Calendar, FileText, Database, Globe, Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram, Check } from 'lucide-react';

export default function FlexCRMLanding() {
  const [activePlan, setActivePlan] = useState('monthly');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold text-gray-900">Flex</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium">Home</a>
              <a href="#features" className="text-gray-700 hover:text-gray-900 font-medium">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-gray-900 font-medium">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-gray-900 font-medium">Testimonials</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-gray-900 font-medium">Sign In</button>
              <button className="bg-gray-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                <span className="bg-white text-orange-500 px-2 py-0.5 rounded-full text-xs font-bold">New</span>
                <span>170+ companies used <span className="font-bold">Flex</span> — now live for your business 🚀</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build your Business with a Flexible & Seamless <span className="relative inline-block">
                  <span>CRM</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C60 2 140 2 198 10" stroke="#FB923C" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Build strong, lasting customer relationships that seamlessly adapt to your business needs, ensuring effortless growth and success with our CRM.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 flex items-center space-x-2 text-lg">
                  <span>Get Started Now — it's FREE</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 flex items-center space-x-2 text-lg">
                  <span>View Pricing</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700 font-medium">No credit required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700 font-medium">Real-time insights</span>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mt-8">
                <div className="flex items-start space-x-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
                    alt="Rahman Turkman"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">Rahman Turkman</h4>
                    <p className="text-sm text-gray-500">Sales Manager</p>
                    <p className="mt-2 text-gray-700">
                      <span className="font-bold">"True game-changer for our entire team! —</span> we can't imagine running our business without it!"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Dashboard Preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-gray-900 rounded-3xl transform rotate-3"></div>
              
              <div className="relative space-y-4 p-6">
                {/* Sales Overview Card */}
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Sales Overview</h3>
                    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="relative w-48 h-48">
                      <svg className="transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#1F2937" strokeWidth="12" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#F97316" strokeWidth="12" 
                          strokeDasharray="188.4" strokeDashoffset="47.1" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#6B7280" strokeWidth="12" 
                          strokeDasharray="188.4" strokeDashoffset="141.3" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-sm text-gray-500">Sales Goals</div>
                        <div className="text-3xl font-bold text-gray-900">78.5%</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-around mt-4 text-sm">
                    <div><span className="text-gray-500">28%</span></div>
                    <div><span className="text-gray-500">16%</span></div>
                    <div><span className="text-gray-500">56%</span></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                      <div className="text-sm text-gray-500">Total Revenue</div>
                      <div className="text-2xl font-bold text-gray-900">$2,262</div>
                      <div className="text-xs text-red-500">-0.89% vs previous 14 days</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Total Sales</div>
                      <div className="text-2xl font-bold text-gray-900">$2,262</div>
                      <div className="text-xs text-green-500">-39.7% vs previous 28 d</div>
                    </div>
                  </div>
                </div>

                {/* Revenue Card */}
                <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-6 shadow-xl text-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">Revenue</h3>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span>Income</span>
                      <span className="w-3 h-3 bg-purple-500 rounded-full ml-2"></span>
                      <span>Expenses</span>
                    </div>
                  </div>
                  
                  <div className="text-4xl font-bold mb-1">$193,000</div>
                  <div className="text-sm text-green-400">+3.45% from last month</div>
                  
                  <div className="flex items-end justify-between h-32 mt-4">
                    {[40, 60, 75, 55, 80, 65, 90, 70].map((height, i) => (
                      <div key={i} className="flex flex-col items-center space-y-1 w-full">
                        <div className="w-full max-w-[24px] bg-purple-500 rounded-t" style={{height: `${height}%`}}></div>
                        <div className="w-full max-w-[24px] bg-orange-500 rounded-t" style={{height: `${height * 0.7}%`}}></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Card */}
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-gray-900 flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="w-2 h-2 bg-white rounded-sm"></div>
                        <div className="w-2 h-2 bg-white rounded-sm"></div>
                        <div className="w-2 h-2 bg-white rounded-sm"></div>
                        <div className="w-2 h-2 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">$763,000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rating Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { platform: 'Apple', icon: Apple },
              { platform: 'Play Store', icon: Play },
              { platform: 'Google', icon: Chrome }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
                <div className="flex mb-3">
                  {[...Array(4)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm">4.5 on {item.platform}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 mb-8 text-sm font-medium uppercase tracking-wider">Trusted by 170+ companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-50">
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E', 'Company F'].map((company, i) => (
              <div key={i} className="text-center font-bold text-2xl text-gray-400">{company}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything you need to grow your business
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to streamline your workflow and boost productivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Contact Management',
                description: 'Organize and manage all your contacts in one centralized hub with detailed profiles and interaction history.'
              },
              {
                icon: TrendingUp,
                title: 'Sales Pipeline',
                description: 'Visualize your entire sales process and track deals through every stage with intuitive drag-and-drop interface.'
              },
              {
                icon: BarChart3,
                title: 'Advanced Analytics',
                description: 'Get deep insights into your business performance with real-time dashboards and customizable reports.'
              },
              {
                icon: MessageSquare,
                title: 'Team Collaboration',
                description: 'Work seamlessly with your team through shared notes, tasks, and real-time updates on customer interactions.'
              },
              {
                icon: Calendar,
                title: 'Activity Tracking',
                description: 'Never miss a follow-up with automated reminders and comprehensive activity logging for all interactions.'
              },
              {
                icon: Zap,
                title: 'Workflow Automation',
                description: 'Automate repetitive tasks and streamline your processes with powerful automation rules and triggers.'
              },
              {
                icon: FileText,
                title: 'Document Management',
                description: 'Store, organize, and share important documents with version control and easy access for your team.'
              },
              {
                icon: Database,
                title: 'Custom Fields',
                description: 'Tailor your CRM to fit your unique business needs with fully customizable fields and data structures.'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Bank-level encryption and security measures to keep your sensitive business data safe and compliant.'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get started in 3 simple steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Launch your CRM and start building better customer relationships in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Sign Up & Setup',
                description: 'Create your account in seconds. No credit card required. Import your existing contacts and data effortlessly.'
              },
              {
                step: '02',
                title: 'Customize Your Workspace',
                description: 'Configure your CRM to match your workflow. Set up pipelines, custom fields, and automation rules tailored to your business.'
              },
              {
                step: '03',
                title: 'Start Growing',
                description: 'Invite your team, track your deals, and watch your business grow with powerful insights and automation.'
              }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-8xl font-bold text-orange-100 absolute -top-8 -left-4">{item.step}</div>
                <div className="relative bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <ArrowRight className="w-12 h-12 text-orange-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Choose the perfect plan for your business. All plans include a 14-day free trial.
            </p>
            
            <div className="inline-flex bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setActivePlan('monthly')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activePlan === 'monthly' ? 'bg-orange-500 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setActivePlan('yearly')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activePlan === 'yearly' ? 'bg-orange-500 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Yearly <span className="text-xs text-green-400">(Save 20%)</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: activePlan === 'monthly' ? 29 : 23,
                description: 'Perfect for small teams getting started',
                features: [
                  'Up to 1,000 contacts',
                  'Basic sales pipeline',
                  'Email integration',
                  'Mobile app access',
                  'Basic reporting',
                  'Community support'
                ],
                highlighted: false
              },
              {
                name: 'Professional',
                price: activePlan === 'monthly' ? 79 : 63,
                description: 'For growing teams that need more power',
                features: [
                  'Unlimited contacts',
                  'Advanced sales pipeline',
                  'Email & calendar sync',
                  'Workflow automation',
                  'Advanced analytics',
                  'Priority support',
                  'Custom fields',
                  'API access'
                ],
                highlighted: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For large organizations with custom needs',
                features: [
                  'Everything in Professional',
                  'Dedicated account manager',
                  'Custom integrations',
                  'Advanced security features',
                  'SLA guarantee',
                  'On-premise option',
                  'Custom training',
                  'White-label solution'
                ],
                highlighted: false
              }
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white transform scale-105 shadow-2xl'
                    : 'bg-gray-800 text-white border border-gray-700'
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-white text-orange-500 text-xs font-bold uppercase px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-white/90' : 'text-gray-400'}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  {typeof plan.price === 'number' ? (
                    <>
                      <span className="text-5xl font-bold">${plan.price}</span>
                      <span className="text-lg ml-2">/user/month</span>
                    </>
                  ) : (
                    <span className="text-5xl font-bold">{plan.price}</span>
                  )}
                </div>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors mb-8 ${
                    plan.highlighted
                      ? 'bg-white text-orange-500 hover:bg-gray-100'
                      : 'bg-orange-500 text-white hover:bg-orange-600'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start space-x-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-white' : 'text-orange-500'}`} />
                      <span className={plan.highlighted ? 'text-white/90' : 'text-gray-300'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Loved by thousands of businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our customers have to say about their experience with Flex
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO, TechStart Inc',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                content: 'Flex has completely transformed how we manage our customer relationships. The automation features alone have saved us countless hours every week.',
                rating: 5
              },
              {
                name: 'Michael Chen',
                role: 'Sales Director, GrowthCo',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                content: 'The analytics dashboard gives us insights we never had before. We have increased our conversion rate by 45% since switching to Flex.',
                rating: 5
              },
              {
                name: 'Emily Rodriguez',
                role: 'Marketing Manager, BrandHub',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
                content: 'Best CRM we have ever used. The interface is intuitive, the features are powerful, and the support team is incredibly responsive.',
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-br from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of companies already growing with Flex. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 flex items-center justify-center space-x-2 text-lg">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 text-lg">
              Schedule a Demo
            </button>
          </div>
          <p className="text-white/80 text-sm mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-2xl font-bold">Flex</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Build strong, lasting customer relationships that seamlessly adapt to your business needs.
              </p>
              <div className="flex space-x-4">
                {[Twitter, Facebook, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">Product</h3>
              <ul className="space-y-3">
                {['Features', 'Pricing', 'Integrations', 'Updates', 'Download'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-lg mb-6">Resources</h3>
              <ul className="space-y-3">
                {['Documentation', 'Help Center', 'Community', 'Blog', 'Webinars'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-6">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>hello@flexcrm.com</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <span>123 Business Ave, Suite 100<br />San Francisco, CA 94107</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Flex CRM. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}