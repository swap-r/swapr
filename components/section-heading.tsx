interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

const SectionHeading = ({ title, subtitle, centered = true, light = false }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : ""}`}>{title}</h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl ${light ? "text-blue-100" : "text-gray-600"} max-w-3xl ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
