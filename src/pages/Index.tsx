import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { Users, GraduationCap, Calendar, Award, Building, BookOpen, Globe, Lightbulb, Shield, Heart, ArrowRight } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();
  const stats = [
    { icon: Users, value: '295+', key: 'stats.students' },
    { icon: GraduationCap, value: '29+', key: 'stats.teachers' },
    { icon: Calendar, value: '4+', key: 'stats.experience' },
    { icon: Award, value: '50+', key: 'stats.awards' },
  ];
  const features = [
    { icon: Building, titleKey: 'features.facilities.title', descKey: 'features.facilities.desc' },
    { icon: BookOpen, titleKey: 'features.teachers.title', descKey: 'features.teachers.desc' },
    { icon: Globe, titleKey: 'features.curriculum.title', descKey: 'features.curriculum.desc' },
    { icon: Lightbulb, titleKey: 'features.innovation.title', descKey: 'features.innovation.desc' },
    { icon: Shield, titleKey: 'features.safety.title', descKey: 'features.safety.desc' },
    { icon: Heart, titleKey: 'features.growth.title', descKey: 'features.growth.desc' },
  ];

  return (
    <Layout>
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                {t('hero.title1')} <span className="text-gradient">{t('hero.title2')}</span><br />{t('hero.title3')}
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">{t('hero.description')}</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  {t('hero.apply')} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors">{t('hero.learn')}</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, i) => (
                  <div key={i} className="p-4 bg-card rounded-xl border border-border/50 text-center">
                    <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-heading font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{t(stat.key)}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-6">
                <img src="https://tima-uz.vercel.app/biz.png" alt="School" className="w-full rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">{t('features.subtitle')}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-heading font-bold">{t('features.title')}</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{t('features.description')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">{t(f.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(f.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-blue-600 p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">{t('cta.title')}</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">{t('cta.description')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-colors">{t('hero.apply')} <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors">{t('hero.learn')}</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
