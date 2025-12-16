import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';

const About = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">{t('about.subtitle')}</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-heading font-bold">{t('about.title')}</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{t('about.description')}</p>
        </div>
      </section>
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {[{title: 'about.mission.title', desc: 'about.mission.desc'}, {title: 'about.vision.title', desc: 'about.vision.desc'}, {title: 'about.values.title', desc: 'about.values.desc'}].map((item, i) => (
            <div key={i} className="p-6 bg-card rounded-2xl border border-border/50">
              <h3 className="text-xl font-heading font-semibold mb-3">{t(item.title)}</h3>
              <p className="text-muted-foreground">{t(item.desc)}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
