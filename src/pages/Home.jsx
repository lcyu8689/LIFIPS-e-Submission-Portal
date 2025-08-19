import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from '/src/components/ui/use-toast';
import { formCategories } from '/src/data/forms';
import Hero from '/src/components/home/Hero';
import CategoryTabs from '/src/components/forms/CategoryTabs';
import CategoryGrid from '/src/components/forms/CategoryGrid';
import FormGrid from '/src/components/forms/FormGrid';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredForms, setFilteredForms] = useState([]);

  useEffect(() => {
    let forms = [];
    if (selectedCategory === 'all') {
      forms = formCategories.flatMap((category) =>
        category.forms.map((form) => ({
          ...form,
          categoryName: category.name,
          categoryId: category.id,
        }))
      );
    } else {
      const category = formCategories.find(
        (cat) => cat.id === selectedCategory
      );
      forms = category
        ? category.forms.map((form) => ({
            ...form,
            categoryName: category.name,
            categoryId: category.id,
          }))
        : [];
    }

    if (searchTerm) {
      forms = forms.filter(
        (form) =>
          form.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          form.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredForms(forms);
  }, [searchTerm, selectedCategory]);

  const handleFormClick = (formName) => {
    toast({
      title:
        "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `Form: ${formName}`,
    });
  };

  return (
    <>
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="container mx-auto px-4 pb-12">
        <CategoryTabs
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {selectedCategory === 'all' && !searchTerm && (
          <CategoryGrid onCategorySelect={setSelectedCategory} />
        )}

        <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
          {searchTerm
            ? `Search Results for "${searchTerm}"`
            : selectedCategory === 'all'
            ? 'All Available Forms'
            : formCategories.find((c) => c.id === selectedCategory)?.name ||
              'Forms'}
        </h2>

        {filteredForms.length > 0 ? (
          <FormGrid forms={filteredForms} onFormClick={handleFormClick} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 formal-card"
          >
            <p className="text-lg text-muted-foreground">
              No forms found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Home;
