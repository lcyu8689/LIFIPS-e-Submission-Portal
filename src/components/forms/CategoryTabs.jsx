import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from '/src/components/ui/tabs';
import { formCategories } from '/src/data/forms';

const CategoryTabs = ({ selectedCategory, onCategoryChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-8"
    >
      <Tabs
        value={selectedCategory}
        onValueChange={onCategoryChange}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-gray-100 p-1 rounded-lg">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary"
          >
            All Forms
          </TabsTrigger>
          {formCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary flex items-center gap-2"
              >
                <IconComponent className="w-4 h-4" />
                <span className="hidden sm:inline">{category.name}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </motion.div>
  );
};

export default CategoryTabs;
