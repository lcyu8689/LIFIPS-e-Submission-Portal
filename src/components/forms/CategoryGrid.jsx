import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '/src/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { formCategories } from '/src/data/forms';

const CategoryGrid = ({ onCategorySelect }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
    >
      {formCategories.map((category) => {
        const IconComponent = category.icon;
        return (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -5,
              boxShadow:
                '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            }}
            className="formal-card p-6 cursor-pointer flex flex-col"
            onClick={() => onCategorySelect(category.id)}
          >
            <div className="flex-grow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 primary-bg rounded-lg flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.name}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                {category.description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
              <Badge variant="secondary">{category.forms.length} forms</Badge>
              <ArrowRight className="w-5 h-5 text-primary" />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default CategoryGrid;
