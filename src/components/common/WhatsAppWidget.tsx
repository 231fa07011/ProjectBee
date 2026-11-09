'use client';

import React, { useState, useEffect } from 'react';
import { 
  STORE_CONFIG, 
  getActiveWhatsAppNumber, 
  saveActiveWhatsAppNumber, 
  getWhatsAppChatUrl 
} from '@/lib/config';
import { MessageSquare, X, Send, Settings, Check, PhoneCall } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');
  const [activePhone, setActivePhone] = useState(STORE_CONFIG.whatsappNumber);
  const [showConfig, setShowConfig] = useState(false);
  const [inputPhone, setInputPhone] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    const current = getActiveWhatsAppNumber();
    setActivePhone(current);
    setInputPhone(current);

    const handleUpdate = (e: any) => {
      if (e.detail) {
        setActivePhone(e.detail);
        setInputPhone(e.detail);
      }
    };
    window.addEventListener('projectbee:whatsapp_updated', handleUpdate);
    return () => window.removeEventListener('projectbee:whatsapp_updated', handleUpdate);
  }, []);

  const quickMessages = [
    "Hi, I need a working science model for Class 7 exhibition.",
    "Do you deliver same-day in Bangalore?",
    "Does this come with viva explanation cards?",
    "I need help selecting a project for CBSE science fair."
  ];

  const handleSend = (text: string) => {
    const url = getWhatsAppChatUrl(
      text || "Hello ProjectBee! I need assistance with school science projects.",
      activePhone
    );
    window.open(url, '_blank');
    setIsOpen(false);
    setCustomMsg('');
  };

  const handleSavePhone = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputPhone.trim()) return;
    const clean = saveActiveWhatsAppNumber(inputPhone);
    setActivePhone(clean);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setShowConfig(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* WhatsApp Chat Popup Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                  🐝
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-600 rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-sm">ProjectBee WhatsApp</h4>
                <p className="text-[10px] text-emerald-100 flex items-center gap-1">
                  <span>●</span> <span>Online • Replies in &lt; 5 mins</span>
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowConfig(!showConfig)}
                title="Connect / Change Your WhatsApp Number"
                className={`p-1.5 rounded-full transition ${
                  showConfig ? 'bg-emerald-800 text-white' : 'hover:bg-emerald-700 text-emerald-100'
                }`}
              >
                <Settings className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-emerald-700 text-white transition"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Connect Your Real-time WhatsApp Settings View */}
          {showConfig ? (
            <div className="p-5 bg-slate-50 space-y-4 text-xs">
              <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-emerald-800 font-bold">
                  <PhoneCall className="w-4 h-4 text-emerald-600" />
                  <span>Connect Your Real-Time WhatsApp</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Enter your personal or business WhatsApp number with country code (e.g. <strong className="text-slate-800">919876543210</strong> for India +91 98765-43210). All chat inquiries and order confirmations across the website will instantly route directly to your phone.
                </p>

                <form onSubmit={handleSavePhone} className="space-y-2.5 pt-1">
                  <div>
                    <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                      Your WhatsApp Number
                    </label>
                    <input
                      type="text"
                      value={inputPhone}
                      onChange={(e) => setInputPhone(e.target.value)}
                      placeholder="e.g. 919876543210"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:border-emerald-500 outline-hidden font-mono bg-white"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="submit"
                      className="flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition flex items-center justify-center gap-1.5 text-xs shadow-xs"
                    >
                      {savedSuccess ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Connected & Saved!</span>
                        </>
                      ) : (
                        <span>Save & Connect WhatsApp</span>
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => handleSend("Hello! This is a test message from my ProjectBee website.")}
                      className="py-2 px-3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl transition text-xs"
                    >
                      Test Ping
                    </button>
                  </div>
                </form>
              </div>

              <div className="text-[10px] text-slate-500 text-center">
                <span>Active Store WhatsApp: </span>
                <span className="font-mono font-bold text-slate-800">+{activePhone}</span>
              </div>
            </div>
          ) : (
            /* Standard Chat View */
            <div className="p-4 bg-slate-50 space-y-3 text-xs">
              <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-xs border border-slate-200 text-slate-700 leading-relaxed">
                👋 Hello! Need help finding the right science exhibition project or working model for your child's class? Chat with our educators directly on WhatsApp!
              </div>

              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                  Quick Questions:
                </span>
                {quickMessages.map((msg, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(msg)}
                    className="w-full text-left p-2 rounded-xl bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200 text-[11px] transition font-medium"
                  >
                    💬 {msg}
                  </button>
                ))}
              </div>

              {/* Custom Input */}
              <div className="flex gap-2 pt-2">
                <input
                  type="text"
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend(customMsg)}
                  placeholder="Type your question..."
                  className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-300 focus:border-emerald-500 outline-hidden bg-white"
                />
                <button
                  onClick={() => handleSend(customMsg)}
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition flex items-center justify-center shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-between pt-1 text-[10px] text-slate-400">
                <span>Direct WhatsApp: +{activePhone}</span>
                <button 
                  onClick={() => setShowConfig(true)}
                  className="text-emerald-700 font-bold hover:underline"
                >
                  Change Number
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Persistent Floating WhatsApp Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs py-3.5 px-4 rounded-full shadow-xl shadow-emerald-600/30 transition-all duration-300 hover:scale-105"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageSquare className="w-5 h-5 fill-white text-white" />
        <span className="font-extrabold tracking-wide hidden sm:inline">Chat on WhatsApp</span>
      </button>
    </div>
  );
}
