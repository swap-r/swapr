import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-50 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="bg-gradient-to-r from-blue-500 to-blue-400 w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-md">
        <Icon className="h-7 w-7 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default FeatureCard
