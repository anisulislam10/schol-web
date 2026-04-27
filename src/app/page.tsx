import dbConnect from '@/lib/db';
import Feature from '@/lib/models/Feature';
import Teacher from '@/lib/models/Teacher';
import Notice from '@/lib/models/Notice';
import ModernHome from '@/components/public/ModernHome';

export const revalidate = 0;

async function getData() {
  await dbConnect();
  const [features, teachers, notices] = await Promise.all([
    Feature.find({ isActive: true }).sort({ order: 1 }).lean(),
    Teacher.find({ isActive: true }).sort({ order: 1, createdAt: -1 }).lean(),
    Notice.find({ isActive: true }).sort({ date: -1, createdAt: -1 }).lean()
  ]);

  return {
    features: JSON.parse(JSON.stringify(features)),
    teachers: JSON.parse(JSON.stringify(teachers)),
    notices: JSON.parse(JSON.stringify(notices))
  };
}

export default async function Page() {
  const data = await getData();
  return <ModernHome data={data} />;
}
