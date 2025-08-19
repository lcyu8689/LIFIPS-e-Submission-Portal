import React from 'react';
import { motion } from 'framer-motion';
import { formCategories } from '/src/data/forms';

const Stats = () => {
  const totalForms = formCategories.reduce(
    (acc, category) => acc + category.forms.length,
    0
  );

  return (
    <motion.div
      className="container mx-auto px-4 pb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div className="formal-card p-6 text-center">
          <div className="text-3xl font-bold primary-text">{totalForms}+</div>
          <div className="text-muted-foreground">Forms Available</div>
        </div>
        <div className="formal-card p-6 text-center">
          <div className="text-3xl font-bold primary-text">
            {formCategories.length}
          </div>
          <div className="text-muted-foreground">Categories</div>
        </div>
        <div className="formal-card p-6 text-center">
          <div className="text-3xl font-bold primary-text">24/7</div>
          <div className="text-muted-foreground">Access</div>
        </div>
        <div className="formal-card p-6 text-center">
          <div className="text-3xl font-bold primary-text">100%</div>
          <div className="text-muted-foreground">Secure</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Stats;
