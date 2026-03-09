import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import vintagePhoneImg from 'figma:asset/6efe4663e070eb4f4c3dafaf42c18cc428ec9daa.png';
import Footer from '../components/Footer';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiry: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', inquiry: '', message: '' });
    }, 3000);
  };

  const inquiryTypes = [
    { value: 'individual', label: 'Individual User Inquiry' },
    { value: 'enterprise', label: 'Enterprise Solutions' },
    { value: 'partner', label: 'Health Partner Application' },
    { value: 'research', label: 'Research Collaboration' },
    { value: 'press', label: 'Press & Media' },
    { value: 'other', label: 'Other' }
  ];

  const faqs = [
    {
      question: 'How do I get started as an individual user?',
      answer: 'Sign up for a free account and complete your initial health assessment. You can then connect your wearables and start your personalized health journey.'
    },
    {
      question: 'What is the implementation timeline for enterprise clients?',
      answer: 'Most enterprise implementations take 4-8 weeks from contract signing to full deployment, depending on your organization size and integration requirements.'
    },
    {
      question: 'How do I apply to become a health partner?',
      answer: 'Fill out the partner application form above. Our team will review your credentials and contact you within 5 business days.'
    },
    {
      question: 'Is my health data secure?',
      answer: 'Yes, we use bank-grade encryption and are fully HIPAA compliant. Your data is never shared without your explicit consent.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#E8DCC8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            {/* Text Content and Form - Left */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Whether you're an employer seeking cost effective yet impactful wellness solutions, insurers looking to reduce claims, a health partner wanting to join our growing ecosystem, or an individual looking to get in touch - we'd love to hear from you.
              </p>

              {/* Contact Form */}
              <Card className="shadow-xl bg-[#E8DCC8] border-gray-300">
                <CardContent className="pt-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="text-green-600" size={32} />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-700">Thank you for reaching out. We'll respond within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="company">Company/Organization</Label>
                          <Input
                            id="company"
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Your Company"
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="inquiry">Inquiry Type *</Label>
                          <Select 
                            value={formData.inquiry}
                            onValueChange={(value) => setFormData({ ...formData, inquiry: value })}
                            required
                          >
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              {inquiryTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us more about your inquiry..."
                          rows={6}
                          className="mt-1"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Send className="mr-2" size={20} />
                        Send Message
                      </Button>

                      <p className="text-sm text-gray-700 text-center">
                        By submitting this form, you agree to our Privacy Policy and Terms of Service
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
            
            {/* Image - Right */}
            <div className="relative max-w-md mx-auto">
              <ImageWithFallback
                src={vintagePhoneImg}
                alt="Vintage telephone"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Belief Section */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
            Our mission and belief
          </h2>
          <div className="space-y-8 text-xl md:text-2xl text-gray-700 leading-relaxed">
            <p>
              Blissmi's mission is to shift healthcare from reactive treatment to proactive, 
              personalized care, bridging the gap between wellness, prevention, and clinical 
              intervention. We help everyone lower healthcare costs, reduce risk, and improve 
              outcomes through scalable, AI-driven engagement.
            </p>
            <p>
              We believe everyone deserves personalized, proactive, and affordable health care 
              at every stage of life. Health should be guided, not guessed.
            </p>
            <p className="font-bold text-gray-900 text-2xl md:text-3xl">
              The world has a sick-care system. Blissmi is building a preventive-care system.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-8">
            <a 
              href="mailto:hello@myblissmi.com" 
              className="group flex flex-col items-center"
              aria-label="Email us"
            >
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
                <Mail className="text-white" size={32} />
              </div>
              <span className="text-sm text-gray-600">Email</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/company/blissmihealth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
              aria-label="LinkedIn"
            >
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
                <Linkedin className="text-white" size={32} />
              </div>
              <span className="text-sm text-gray-600">LinkedIn</span>
            </a>
            
            <a 
              href="https://www.instagram.com/blissmihealth/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
              aria-label="Instagram"
            >
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
                <Instagram className="text-white" size={32} />
              </div>
              <span className="text-sm text-gray-600">Instagram</span>
            </a>
            
            <a 
              href="https://www.facebook.com/blissmihealth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
              aria-label="Facebook"
            >
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-700 transition-colors">
                <Facebook className="text-white" size={32} />
              </div>
              <span className="text-sm text-gray-600">Facebook</span>
            </a>
          </div>
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default ContactPage;
