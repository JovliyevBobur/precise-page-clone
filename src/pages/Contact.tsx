import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">{t('contact.subtitle')}</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-heading font-bold">{t('contact.title')}</h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{t('contact.description')}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[{icon: MapPin, label: 'contact.info.address', value: "Tuproqqal'a tumani, Xorazm viloyati"}, {icon: Phone, label: 'contact.info.phone', value: '+998 (90) 000-00-00'}, {icon: Mail, label: 'contact.info.email', value: 'info@tima.uz'}].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50">
                  <item.icon className="h-6 w-6 text-primary mt-1" />
                  <div><h3 className="font-semibold">{t(item.label)}</h3><p className="text-muted-foreground">{item.value}</p></div>
                </div>
              ))}
            </div>
            <form className="space-y-4 p-6 bg-card rounded-2xl border border-border/50">
              <input type="text" placeholder={t('contact.form.name')} className="w-full px-4 py-3 rounded-lg border border-input bg-background" />
              <input type="email" placeholder={t('contact.form.email')} className="w-full px-4 py-3 rounded-lg border border-input bg-background" />
              <input type="text" placeholder={t('contact.form.subject')} className="w-full px-4 py-3 rounded-lg border border-input bg-background" />
              <textarea placeholder={t('contact.form.message')} rows={4} className="w-full px-4 py-3 rounded-lg border border-input bg-background resize-none" />
              <button type="submit" className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">{t('contact.form.submit')}</button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
