export default function ProjectCard({ title, description, link }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
      {link && <a href={link} className="text-blue-500 mt-2 inline-block">View Project</a>}
    </div>
  );
}
