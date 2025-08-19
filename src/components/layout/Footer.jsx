import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="bg-white border-t border-border mt-16"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 primary-bg rounded-md flex items-center justify-center">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold primary-text">GovForms</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your official portal for government and fire service forms.
            </p>
          </div>

          <div>
            <span className="font-semibold text-foreground mb-4 block">
              Quick Links
            </span>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="cursor-pointer hover:text-primary">All Forms</p>
              <p className="cursor-pointer hover:text-primary">Categories</p>
              <p className="cursor-pointer hover:text-primary">Help Center</p>
              <p className="cursor-pointer hover:text-primary">Contact Us</p>
            </div>
          </div>

          <div>
            <span className="font-semibold text-foreground mb-4 block">
              Support
            </span>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="cursor-pointer hover:text-primary">FAQ</p>
              <p className="cursor-pointer hover:text-primary">Documentation</p>
              <p className="cursor-pointer hover:text-primary">Live Chat</p>
              <p className="cursor-pointer hover:text-primary">Email Support</p>
            </div>
          </div>

          <div>
            <span className="font-semibold text-foreground mb-4 block">
              Legal
            </span>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="cursor-pointer hover:text-primary">
                Privacy Policy
              </p>
              <p className="cursor-pointer hover:text-primary">
                Terms of Service
              </p>
              <p className="cursor-pointer hover:text-primary">Accessibility</p>
              <p className="cursor-pointer hover:text-primary">Compliance</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} GovForms. All rights reserved. A
            public service portal.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
