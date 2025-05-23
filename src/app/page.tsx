// app/page.tsx
import AboutSection from '@/components/AboutSection';
import HeroSection from '../components/HeroSection';
import PackageList from '../components/PackageList';
import FAQSection from '@/components/FAQ';
import TestimonialSlider from '@/components/Testimonial';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />
      
      {/* Package List Section */}
      <PackageList />
      
      {/* Testimonial Section */}
      <TestimonialSlider />
      
      {/* FAQ Section */}
      <FAQSection />
      
    </div>
  );
}
