import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Users, 
  Laptop, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Play,
  Award,
  Target,
  TrendingUp,
  BookOpen,
  Shield,
  Heart,
  Zap,
  Globe,
  Smartphone,
  BarChart3,
  Video,
  MessageCircle,
  FileText,
  LifeBuoy,
  ChevronDown,
  ChevronUp,
  User,
  Mail as MailIcon
} from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const DigiskillAcademy = () => {
  const [workshop, setWorkshop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isWaitlist, setIsWaitlist] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch workshop details from backend
  useEffect(() => {
    fetchWorkshopData();
  }, []);

  const fetchWorkshopData = async () => {
    try {
      const response = await fetch( `${import.meta.env.VITE_API_URL}/api/workshop` ||"http://localhost:5000/api/workshop");
      const data = await response.json();
      setWorkshop(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching workshop data:", error);
      setLoading(false);
    }
  };

  // Countdown timer for early bird
  useEffect(() => {
    const earlyBirdEnds = new Date('2025-11-01').getTime(); // Set early bird end date
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = earlyBirdEnds - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setRegistrationStatus(null);
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/register` ||"http://localhost:5000/api/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: userData.name,
          email: userData.email
        })
      });

      const result = await response.json();
      
      if (response.ok) {
        if (result.status === 'success') {
          setRegistrationStatus({
            type: 'success',
            message: `🎉 Registration successful! Your ID: ${result.registrationId}`,
            isWaitlist: false
          });
        } else {
          setRegistrationStatus({
            type: 'waitlist',
            message: '📝 Added to waitlist! We\'ll notify you when spots open.',
            isWaitlist: true
          });
        }
        setUserData({ name: '', email: '', phone: '' });
        fetchWorkshopData(); // Refresh workshop data
      } else {
        setRegistrationStatus({
          type: 'error',
          message: result.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setRegistrationStatus({
        type: 'error',
        message: 'Network error. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  if (loading) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full"
        />
      </motion.div>
    );
  }

  if (!workshop) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="text-red-500 text-lg mb-4">Failed to load workshop data</div>
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </motion.div>
      </div>
    );
  }

  const seatsAvailable = workshop.seatsAvailable > 0;
  const isEarlyBird = workshop.priceType === "Early Bird";
  const discountPercentage = isEarlyBird ? Math.round(((799 - workshop.price) / 799) * 100) : 0;

  const features = [
    {
      icon: Video,
      title: "Live Interactive Sessions",
      description: "Real-time learning with industry experts and Q&A sessions"
    },
    {
      icon: FileText,
      title: "Downloadable Resources",
      description: "Comprehensive study materials, templates, and cheat sheets"
    },
    {
      icon: MessageCircle,
      title: "Community Access",
      description: "Join our exclusive community of learners and mentors"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Get certified upon completion to boost your career"
    },
    {
      icon: LifeBuoy,
      title: "Lifetime Support",
      description: "Continuous guidance and career support even after completion"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics"
    }
  ];

  const curriculum = [
    {
      week: "Week 1",
      title: "Digital Foundation",
      topics: ["Digital Landscape Overview", "Personal Branding", "Content Strategy Basics", "Tools & Platforms"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      week: "Week 2",
      title: "Content Mastery",
      topics: ["Content Creation", "SEO Fundamentals", "Social Media Writing", "Visual Content"],
      color: "from-purple-500 to-pink-500"
    },
    {
      week: "Week 3",
      title: "Growth Strategies",
      topics: ["Social Media Marketing", "Email Marketing", "Analytics & Insights", "Growth Hacking"],
      color: "from-green-500 to-teal-500"
    },
    {
      week: "Week 4",
      title: "Career Launch",
      topics: ["Portfolio Building", "Freelancing Basics", "Job Preparation", "Networking Strategies"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      content: 'The Digiskill Academy transformed my career. The practical approach helped me implement strategies immediately in my job.',
      rating: 5
    },
    {
      name: 'Rahul Kumar',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'Excellent curriculum and expert instructors. The live sessions were incredibly engaging and informative for my business.',
      rating: 5
    },
    {
      name: 'Anita Desai',
      role: 'Career Changer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'As a complete beginner, I was nervous but the supportive environment made learning easy and enjoyable. Landed my first client!',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Do I need any prior experience?",
      answer: "No prior experience is required! Our workshop is designed for complete beginners. We start from the fundamentals and gradually build up to advanced concepts."
    },
    {
      question: "What if I miss a live session?",
      answer: "All sessions are recorded and available for lifetime access. You can watch them at your convenience and never miss out on learning."
    },
    {
      question: "What kind of support will I get?",
      answer: "You'll get 24/7 community support, weekly Q&A sessions with instructors, and personalized feedback on your assignments."
    },
    {
      question: "Is the certification recognized?",
      answer: "Yes! Our certification is recognized by industry partners and can significantly boost your resume and career prospects."
    },
    {
      question: "Can I pay in installments?",
      answer: "Yes, we offer flexible payment options. Contact our support team to discuss installment plans that work for you."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Digiskill Academy
                </span>
                <div className="text-xs text-gray-500 -mt-1">Future Ready Skills</div>
              </div>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Overview', 'Curriculum', 'Features', 'Pricing', 'Reviews'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ y: -2 }}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 relative z-10"
            >
              {/* Early Bird Badge with Countdown */}
              <motion.div
                variants={itemVariants}
                className="inline-flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-200"
              >
                <div className="flex items-center space-x-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-green-500 rounded-full"
                  />
                  <span className="text-green-800 font-semibold text-sm">Early Bird Registration</span>
                </div>
                {countdown.days > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center space-x-4 text-sm"
                  >
                    {Object.entries(countdown).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-bold text-gray-900">{value}</div>
                        <div className="text-gray-600 text-xs capitalize">{key}</div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight"
              >
                Launch Your 
                <motion.span 
                  animate={{ 
                    backgroundPosition: ['0%', '100%', '0%'] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 bg-[length:200%_auto]"
                >
                  Digital Career
                </motion.span>
                in 4 Weeks
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Master in-demand digital skills through live online sessions. Join thousands who transformed their careers with our proven learning approach.
              </motion.p>

              {/* Key Stats */}
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {[
                  { value: "4.9/5", label: "Rating" },
                  { value: "2K+", label: "Students" },
                  { value: "98%", label: "Success Rate" },
                  { value: "50+", label: "Countries" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200"
                  >
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Registration Section */}
              <motion.div
                variants={scaleUp}
                className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200"
              >
                <motion.div 
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0"
                  variants={containerVariants}
                >
                  <motion.div variants={itemVariants}>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-bold text-gray-900">₹{workshop.price}</span>
                      {isEarlyBird && (
                        <>
                          <span className="text-xl text-gray-500 line-through">₹799</span>
                          <motion.span 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold"
                          >
                            Save {discountPercentage}%
                          </motion.span>
                        </>
                      )}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{workshop.priceType} Pricing • Lifetime access</div>
                  </motion.div>
                  <motion.div variants={itemVariants} className="text-center sm:text-right">
                    <div className="text-sm text-gray-600">Limited Seats Available</div>
                    <div className="text-2xl font-bold text-gray-900">{workshop.seatsAvailable}/20</div>
                  </motion.div>
                </motion.div>

                {/* Progress Bar */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden"
                >
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((20 - workshop.seatsAvailable) / 20) * 100}%` }}
                    transition={{ duration: 1, delay: 1 }}
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                  />
                </motion.div>

                <AnimatePresence>
                  {registrationStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-4 rounded-xl mb-4 ${
                        registrationStatus.type === 'success' 
                          ? 'bg-green-100 border border-green-200 text-green-800'
                          : registrationStatus.type === 'waitlist'
                          ? 'bg-yellow-100 border border-yellow-200 text-yellow-800'
                          : 'bg-red-100 border border-red-200 text-red-800'
                      }`}
                    >
                      {registrationStatus.message}
                    </motion.div>
                  )}
                </AnimatePresence>

                {seatsAvailable ? (
                  <motion.form 
                    onSubmit={handleRegistration}
                    className="space-y-4"
                    variants={containerVariants}
                  >
                    <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="name"
                          value={userData.name}
                          onChange={handleInputChange}
                          placeholder="Full Name"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                      <div className="relative">
                        <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          value={userData.email}
                          onChange={handleInputChange}
                          placeholder="Email Address"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                    </motion.div>
                    <motion.button
                      variants={itemVariants}
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          <span>Enroll Now at {workshop.priceType} Price</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                  >
                    <motion.div 
                      animate={pulseAnimation}
                      className="bg-yellow-50 border border-yellow-200 rounded-xl p-4"
                    >
                      <p className="text-yellow-800 font-semibold">
                        🎉 Workshop is fully booked! Join the waitlist for priority access.
                      </p>
                    </motion.div>
                    <form onSubmit={handleRegistration} className="space-y-4">
                       <div className="relative">
                        <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="name"
                          value={userData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your name for waitlist"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div className="relative">
                        <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          value={userData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email for waitlist"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                     
                      <motion.button
                        type="submit"
                        onClick={() => setIsWaitlist(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gray-700 text-white py-4 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-200"
                      >
                        Join Waitlist - Get Notified First
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>

            {/* Right Content - Visual Showcase */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center"
                  >
                    <Calendar className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Workshop Schedule</h3>
                    <p className="text-gray-600">Starts {workshop.startDate}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { icon: Clock, label: "Session Time", value: workshop.time, color: "blue" },
                    { icon: Users, label: "Duration", value: workshop.duration, color: "purple" },
                    { icon: Laptop, label: "Platform", value: workshop.platform, color: "green" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className={`flex items-center justify-between p-4 bg-${item.color}-50 rounded-xl border border-${item.color}-200`}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                        <span className="font-semibold">{item.label}</span>
                      </div>
                      <span className="text-gray-700">{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -5 }}
                className="absolute -top-4 -right-4 bg-yellow-100 border border-yellow-200 rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-yellow-800">4.9/5 Rating</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ y: -5 }}
                className="absolute -bottom-4 -left-4 bg-green-100 border border-green-200 rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">Certificate Included</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Trusted by learners from</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Uber'].map((company, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="text-center font-bold text-xl text-gray-400 transition-colors cursor-pointer"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive resources and support to ensure your learning journey is successful
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300"
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Learning Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Structured curriculum designed to take you from beginner to job-ready in 4 weeks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculum.map((week, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`text-4xl font-bold bg-gradient-to-r ${week.color} bg-clip-text text-transparent mb-4`}
                >
                  {week.week}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{week.title}</h3>
                <ul className="space-y-3">
                  {week.topics.map((topic, topicIndex) => (
                    <motion.li
                      key={topicIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: topicIndex * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <CheckCircle className="w-3 h-3 text-white" />
                      </motion.div>
                      <span className="text-gray-700">{topic}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our students who transformed their careers
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-900 transition-colors">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about the workshop
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                  className="w-full px-6 py-6 text-left flex items-center justify-between transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: activeFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {activeFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-br from-blue-600 to-purple-600"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Career?
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of successful students and start your digital career journey today
          </motion.p>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 space-y-4 sm:space-y-0">
              <div className="text-left">
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold text-white">₹{workshop.price}</span>
                  {isEarlyBird && (
                    <span className="text-xl text-blue-200 line-through">₹799</span>
                  )}
                </div>
                <div className="text-blue-200 text-sm">Only {workshop.seatsAvailable} spots left</div>
              </div>
              <div className="text-white text-sm">
                <div>📅 Starts: {workshop.startDate}</div>
                <div>⏰ {workshop.time} | {workshop.duration}</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-white text-blue-600 py-4 px-6 rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 shadow-lg text-lg"
            >
              {seatsAvailable ? 'Secure Your Spot Now ›' : 'Join Waitlist - Get Priority Access ›'}
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 mb-4 cursor-pointer"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">Digiskill Academy</span>
                  <div className="text-gray-400 text-sm">Future Ready Skills</div>
                </div>
              </motion.div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Empowering individuals with future-ready digital skills through immersive workshops and expert-led training.
              </p>
              <div className="flex space-x-6">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>hello@digiskill.academy</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                {['Overview', 'Curriculum', 'Features', 'Success Stories'].map((item) => (
                  <motion.li key={item} whileHover={{ x: 5 }}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Workshop Details</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{workshop.startDate}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{workshop.time}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>{workshop.duration}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Laptop className="w-4 h-4" />
                  <span>{workshop.platform}</span>
                </li>
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-400 text-sm">
              © 2025 Digiskill Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default DigiskillAcademy;