"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Lightbulb } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="largeSizeExtraLargeSpacing"
      background="grid"
      cardStyle="solid-accent-light"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Vento"
          navItems={[
            { name: "About", id: "about" },
            { name: "Investment", id: "investment" },
            { name: "Team", id: "team" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplit
          logoText="VENTO"
          description="Backing the best Italian founders, everywhere. Wholly funded by Exor, we are Italy's most active non-governmental early-stage fund investing €75M to empower exceptional founders globally."
          buttons={[
            { text: "Start Your Journey", href: "#contact" },
            { text: "Learn More", href: "#investment" }
          ]}
          layoutOrder="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765838555590-k1af0b2k.jpg"
          imageAlt="Italian startup founders collaborating"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Our Mission"
          title="Empowering Italian innovation on the global stage"
          description="Marco Rossi"
          subdescription="Portfolio Founder"
          icon={Lightbulb}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765838556598-0o3d2muq.jpg"
          imageAlt="Portfolio founder success story"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="investment" data-section="investment">
        <FeatureCardThree
          title="Investment Thesis"
          description="Clear criteria guiding our investment decisions"
          tag="How We Invest"
          features={[
            {
              id: "01",
              title: "Substantial Initial Investment",
              description: "€150,000 initial investment with follow-on potential up to €1M for promising teams",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765838557930-344r49ud.jpg"
            },
            {
              id: "02",
              title: "Swift Decision Process",
              description: "Simple and clear process with outcome within 2 weeks. No unnecessary delays or bureaucracy",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765838557930-344r49ud.jpg"
            },
            {
              id: "03",
              title: "Sector-Agnostic Approach",
              description: "We invest across all industries and geographies. The founding team and vision matter most",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765838557930-344r49ud.jpg"
            },
            {
              id: "04",
              title: "Early-Stage Focus",
              description: "We specialize in pre-seed and seed-stage companies with exceptional founders and bold ideas",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765838557930-344r49ud.jpg"
            }
          ]}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="By The Numbers"
          description="Vento's impact on Italian entrepreneurship"
          metrics={[
            { id: "1", value: "€75M", description: "Total fund size" },
            { id: "2", value: "€150K", description: "Initial investment per founder" },
            { id: "3", value: "2 Weeks", description: "Decision timeline" },
            { id: "4", value: "Global", description: "Geographic reach" }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="Experienced investors dedicated to supporting Italian founders"
          members={[
            {
              id: "1",
              name: "Giovanni Moretti",
              role: "Fund Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765838559046-s4fx2cqj.jpg"
            },
            {
              id: "2",
              name: "Elena Santini",
              role: "Investment Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765838559046-s4fx2cqj.jpg"
            },
            {
              id: "3",
              name: "Luca Ferrari",
              role: "Operations Lead",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765838559046-s4fx2cqj.jpg"
            },
            {
              id: "4",
              name: "Giulia Bianchi",
              role: "Ecosystem Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765838559046-s4fx2cqj.jpg"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about investing with Vento"
          faqs={[
            {
              id: "1",
              title: "What is the typical investment timeline?",
              content: "Our process is designed for speed. From initial contact to decision, we aim to provide an outcome within 2 weeks. We believe founders shouldn't have to wait months for capital."
            },
            {
              id: "2",
              title: "What stage of companies do you invest in?",
              content: "We focus on pre-seed and seed-stage companies. We're looking for exceptional founders with bold ideas who are just starting their journey. There's no revenue requirement."
            },
            {
              id: "3",
              title: "Do you have sector restrictions?",
              content: "No. We are sector-agnostic and invest across all industries from fintech to deeptech, biotech to climate. Our focus is on the founding team and their vision."
            },
            {
              id: "4",
              title: "What is the typical follow-on potential?",
              content: "Our initial check is €150,000. We have follow-on potential up to €1M for companies that demonstrate traction and align with our investment thesis."
            },
            {
              id: "5",
              title: "Do you require founders to be based in Italy?",
              content: "We invest in exceptional Italian founders regardless of where they are based. Geography is independent. We support innovation and entrepreneurship wherever it happens."
            },
            {
              id: "6",
              title: "How can I apply for funding?",
              content: "Visit our contact page and fill out the founder application form. Tell us about your idea, team, and vision. We'll review and be in touch within 2 weeks."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1765838560076-cgrjofmq.jpg"
          imageAlt="Investor support and guidance"
          mediaPosition="left"
          textboxLayout="default"
          animationType="smooth"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Build Something Great?"
          description="Tell us about your idea, team, and vision. We're excited to meet exceptional founders ready to change the world."
          inputs={[
            { name: "founder_name", type: "text", placeholder: "Your Name", required: true },
            { name: "founder_email", type: "email", placeholder: "Your Email", required: true }
          ]}
          textarea={{
            name: "founder_message",
            placeholder: "Tell us about your startup idea and what makes your team exceptional...",
            rows: 5,
            required: true
          }}
          useInvertedBackground="noInvert"
          buttonText="Submit Application"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Vento"
          columns={[
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Investment Thesis", href: "investment" },
                { label: "Team", href: "team" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Blog", href: "https://www.vento.ventures/blog" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "https://www.vento.ventures/privacy" },
                { label: "Terms of Service", href: "https://www.vento.ventures/terms" }
              ]
            }
          ]}
          copyrightText="© 2025 Vento Ventures. Wholly funded by Exor."
        />
      </div>
    </ThemeProvider>
  );
}