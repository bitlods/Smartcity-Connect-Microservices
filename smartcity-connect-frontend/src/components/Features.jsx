
const features = [
  {
    title: "Emergency Services",
    desc: "One-tap ambulance, fire, and police alerts",
    icon: "🚨",
  },
  {
    title: "Urban Complaints",
    desc: "Pothole, garbage, light issues directly from app",
    icon: "📢",
  },
  {
    title: "Live City Map",
    desc: "View issues and resources on interactive map",
    icon: "🗺️",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">What You Can Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, index) => (
            <div key={index} className="bg-blue p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">{feat.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
              <p className="text-gray-600">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
