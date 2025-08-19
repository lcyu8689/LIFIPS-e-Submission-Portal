import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Badge } from '/src/components/ui/badge';

const FormGrid = ({ forms, onFormClick }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Hard':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.05 }}
    >
      {forms.map((form) => (
        <motion.div
          key={form.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          className="formal-card p-6 cursor-pointer flex flex-col"
          onClick={() => onFormClick(form.name)}
        >
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {form.name}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              {form.description}
            </p>
          </div>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
            <div className="flex items-center space-x-2">
              <Badge
                variant="outline"
                className={getDifficultyColor(form.difficulty)}
              >
                {form.difficulty}
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Calendar className="w-3 h-3 mr-1" />
                {form.time}
              </Badge>
            </div>
            <ArrowRight className="w-5 h-5 text-primary" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FormGrid;
