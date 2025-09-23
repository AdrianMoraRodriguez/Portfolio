export default function ProjectCard({ title, description, image, video, link }) {
  return (
    <a
      href={link || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="card max-w-sm w-full flex flex-col gap-4 hover:shadow-lg transition-shadow"
    >
      {image && <img src={image} alt={title} className="rounded-lg object-cover h-48 w-full" />}
      {video && (
        <video
          src={video}
          controls
          className="rounded-lg object-cover h-48 w-full"
        />
      )}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </a>
  )
}
