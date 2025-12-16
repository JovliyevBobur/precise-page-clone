import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { Send, Phone } from 'lucide-react';

interface Teacher {
  name: string;
  positionKey: string;
  image: string;
  telegram?: string;
  phone?: string;
}

const management: Teacher[] = [
  {
    name: 'Matyoqubova Lobarxon',
    positionKey: 'position.director',
    image: 'https://tima-uz.vercel.app/teachers/deriktor.jpg',
    telegram: 'https://t.me/Lobarxon_Direktor',
    phone: '+998900000001',
  },
  {
    name: 'Kenjayev Maqsudbek',
    positionKey: 'position.deputySpiritual',
    image: 'https://tima-uz.vercel.app/teachers/zam%20d.JPG',
    telegram: 'https://t.me/Maqsudbek_K',
    phone: '+998900000002',
  },
  {
    name: "Matyoqubov Ro'zmatjon",
    positionKey: 'position.advisor',
    image: 'https://tima-uz.vercel.app/teachers/maslahatchi.jpg',
    telegram: 'https://t.me/Rozmatjon_M',
    phone: '+998900000003',
  },
  {
    name: 'Otamurotov Farhod',
    positionKey: 'position.deputyAcademic',
    image: 'https://tima-uz.vercel.app/teachers/zavuch.JPG',
    telegram: 'https://t.me/Farhod_O',
    phone: '+998900000004',
  },
];

const teachers: Teacher[] = [
  { name: 'Qolandarov Davronbek', positionKey: 'subject.mathematics', image: 'https://tima-uz.vercel.app/teachers/matematika5.png', telegram: 'https://t.me/Qalandarov_Davronbek', phone: '+998974582587' },
  { name: 'Sapayev Doniyor', positionKey: 'subject.mathematics', image: 'https://tima-uz.vercel.app/teachers/matematika2.jpg', telegram: 'https://t.me/Sapayev_D', phone: '+998974308015' },
  { name: 'Ibodullayev Sherzod', positionKey: 'subject.mathematics', image: 'https://tima-uz.vercel.app/teachers/matematika4.png', telegram: 'https://t.me/Sherzodbek_Ibadullayev', phone: '+998941179020' },
  { name: 'Radjapov Davlatyor', positionKey: 'subject.mathematics', image: 'https://tima-uz.vercel.app/teachers/matematika3.jpg', telegram: 'https://t.me/DR0096X', phone: '+998990226096' },
  { name: 'Matchanov Temur', positionKey: 'subject.mathematics', image: 'https://tima-uz.vercel.app/teachers/matematika.jpg', telegram: 'https://t.me/Temur_Matchanov', phone: '+998997472113' },
  { name: 'Xojixonova Kumush', positionKey: 'subject.mathematics', image: 'https://tima-uz.vercel.app/teachers/matematika6.jpg', telegram: 'https://t.me/Math930919100', phone: '+998946764846' },
  { name: 'Matmurotov Quvandiq', positionKey: 'subject.physics', image: 'https://tima-uz.vercel.app/teachers/fizika.jpg', phone: '+998972114471' },
  { name: 'Jabborov Vohidjon', positionKey: 'subject.physics', image: 'https://tima-uz.vercel.app/teachers/fizika1.png', phone: '+998978590186' },
  { name: 'Durdiyeva Farzona', positionKey: 'subject.history', image: 'https://tima-uz.vercel.app/teachers/tarix.JPG', phone: '+998931162994' },
  { name: 'Urunova Malohat', positionKey: 'subject.english', image: 'https://tima-uz.vercel.app/teachers/ingliz%20tili.jpg', phone: '+998971305688' },
  { name: 'Axmedova Shoira', positionKey: 'subject.english', image: 'https://tima-uz.vercel.app/teachers/ingliz%20tili3.JPG', phone: '+998974515181' },
  { name: 'Madraimova Farangiz', positionKey: 'subject.english', image: 'https://tima-uz.vercel.app/teachers/ingliz%20tili2.jpg' },
  { name: "Bekturdiyev Gʹayrat", positionKey: 'subject.russian', image: 'https://tima-uz.vercel.app/teachers/rus%20tili2.gif', phone: '+998997472113' },
  { name: 'Sultonova Maftuna', positionKey: 'subject.russian', image: 'https://tima-uz.vercel.app/teachers/rus%20tili.jpg', phone: '+998953618095' },
  { name: 'Allaberganova Gulbahor', positionKey: 'subject.chemistry', image: 'https://tima-uz.vercel.app/teachers/kimyo.jpg', phone: '+998998657438' },
  { name: 'Ataboyeva Mahliyo', positionKey: 'subject.computerScience', image: 'https://tima-uz.vercel.app/teachers/informatika.jpg', phone: '+998997394078' },
  { name: 'Xakimov Xamza', positionKey: 'subject.geography', image: 'https://tima-uz.vercel.app/teachers/geografiya.JPG', phone: '+998941104084' },
  { name: 'Raxmonov Alisher', positionKey: 'subject.physicalEducation', image: 'https://tima-uz.vercel.app/teachers/jt.JPG' },
  { name: "Roʹzibayev Azizbek", positionKey: 'subject.preMilitary', image: 'https://tima-uz.vercel.app/teachers/chqbt.JPG' },
  { name: 'Radjabova Munisa', positionKey: 'subject.biology', image: 'https://tima-uz.vercel.app/teachers/biologiya.jpg', phone: '+998885255445' },
  { name: 'Eshmuratova Munojat', positionKey: 'subject.biology', image: 'https://tima-uz.vercel.app/teachers/biologiya2.jpg', phone: '+998974592088' },
  { name: "Oʹrinboyeva Shaxzoda", positionKey: 'position.secretary', image: 'https://tima-uz.vercel.app/teachers/kotiba.jpg', phone: '+998972111443' },
];

const TeacherCard = ({ teacher }: { teacher: Teacher }) => {
  const { t } = useLanguage();

  return (
    <div className="group bg-card rounded-2xl border border-border/50 p-6 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300">
      <div className="relative w-28 h-28 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5" />
        <img
          src={teacher.image}
          alt={teacher.name}
          className="relative w-full h-full rounded-full object-cover border-4 border-background"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop';
          }}
        />
      </div>
      <h3 className="font-heading font-semibold text-lg mb-1">{teacher.name}</h3>
      <p className="text-sm text-primary mb-4">{t(teacher.positionKey)}</p>
      <div className="flex justify-center gap-2">
        {teacher.telegram && (
          <a
            href={teacher.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <Send className="h-4 w-4" />
          </a>
        )}
        {teacher.phone && (
          <a
            href={`tel:${teacher.phone}`}
            className="p-2 rounded-lg border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};

const Teachers = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://tima-uz.vercel.app/biz.png)',
          }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            {t('teachers.subtitle')}
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-heading font-bold">
            {t('teachers.title')}
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {t('teachers.description')}
          </p>
        </div>
      </section>

      {/* Management */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            {t('teachers.management')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {management.map((teacher, index) => (
              <TeacherCard key={index} teacher={teacher} />
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            {t('teachers.faculty')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher, index) => (
              <TeacherCard key={index} teacher={teacher} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Teachers;
