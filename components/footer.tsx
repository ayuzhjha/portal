'use client';

import { Mail, Phone, MapPin, MessageCircle, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-background border-t border-slate-700">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Branding */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
                SYNCHRONIZE 4.0
              </span>
            </h3>
            <p className="text-muted-foreground text-sm">
              The ultimate techfest where innovation meets competition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#events" className="hover:text-cyan-400 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-cyan-400 transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#vendors" className="hover:text-cyan-400 transition-colors">
                  Vendors
                </a>
              </li>
              <li>
                <a href="#map" className="hover:text-cyan-400 transition-colors">
                  Campus Map
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@synchronize.tech">info@synchronize.tech</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+918800000000">+91 8800000000</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Tech Campus, City</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
            <div className="space-y-2 text-sm">
              <a
                href="#"
                className="flex items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Instagram
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Twitter
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 mb-8" />

        {/* Help Desk Section - JARVIS Command */}
        <div className="glass rounded-xl p-8 mb-8 border-l-4 border-cyan-400">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-cyan-400 mb-2 font-mono">
                📡 JARVIS COMMAND CENTER
              </h4>
              <p className="text-muted-foreground">
                "I am here to assist. If you encounter any difficulties, my support protocols are standing by 24/7."
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 rounded-lg bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 font-semibold hover:bg-cyan-500/30 transition-colors flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Chat Support
              </button>
              <button className="px-6 py-3 rounded-lg bg-pink-500/20 border border-pink-500/50 text-pink-400 font-semibold hover:bg-pink-500/30 transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Us
              </button>
            </div>
          </div>
        </div>

        {/* Marvel Quote Section */}
        <div className="glass rounded-xl p-6 mb-8 text-center">
          <p className="text-cyan-300 italic">
            "If you are nothing without the suit, then you shouldn't have it. But with JARVIS and Synchronize 4.0, you'll have everything you need. Welcome to the arena, hero."
          </p>
          <p className="text-xs text-muted-foreground mt-2">- JARVIS Protocol</p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 SYNCHRONIZE 4.0 | Powered by J.A.R.V.I.S</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 bg-cyan-500 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 bg-pink-500 -z-10" />
    </footer>
  );
}
