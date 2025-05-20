interface ProfileCardProps {
  name: string
  title: string
  company: string
  avatarUrl: string
}

export const ProfileCard = ({ name, title, company, avatarUrl }: ProfileCardProps) => {
  return (
    <div className="flex flex-row md:flex-col items-center md:items-start gap-4 bg-content-surface border border-border p-4 rounded-md shadow w-full">
      <img
        src={avatarUrl}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border border-border"
      />
      <div className="flex flex-col text-left">
        <h2 className="text-lg font-semibold text-text">{name}</h2>
        <p className="text-sm text-text-muted">{title}</p>
        <p className="text-sm text-text-muted">{company}</p>
      </div>
    </div>
  )
}
