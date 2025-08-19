import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Menu, X } from 'lucide-react';
import { Button } from '/src/components/ui/button';
import { cn } from '/src/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavButton = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 transition-colors',
          isActive
            ? 'bg-primary/10 text-primary'
            : 'text-foreground/80 hover:text-primary hover:bg-red-50'
        )
      }
    >
      {children}
    </NavLink>
  );

  const MobileNavButton = ({ to, children, onClick }) => (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          'flex items-center w-full p-2 rounded-md text-base',
          isActive
            ? 'bg-primary/10 text-primary'
            : 'text-foreground/80 hover:text-primary hover:bg-red-50'
        )
      }
    >
      {children}
    </NavLink>
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-border"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 primary-bg rounded-lg flex items-center justify-center shadow-md">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold primary-text">GovForms</h1>
              <p className="text-sm text-muted-foreground">
                Official Forms Portal
              </p>
            </div>
          </motion.div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>

          <nav className="hidden md:flex items-center space-x-1">
            <NavButton to="/">Home</NavButton>
            <NavButton to="/submissions">My Submissions</NavButton>
            <Button
              variant="ghost"
              className="text-foreground/80 hover:text-primary hover:bg-red-50"
            >
              Help
            </Button>
            <Button className="primary-bg text-primary-foreground primary-hover-bg ml-2">
              Sign In
            </Button>
          </nav>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-border"
            >
              <div className="flex flex-col space-y-2">
                <MobileNavButton to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </MobileNavButton>
                <MobileNavButton
                  to="/submissions"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Submissions
                </MobileNavButton>
                <button className="flex items-center w-full p-2 rounded-md text-base text-foreground/80 hover:text-primary hover:bg-red-50 text-left">
                  Help
                </button>
                <Button className="primary-bg text-primary-foreground primary-hover-bg w-full mt-2">
                  Sign In
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
