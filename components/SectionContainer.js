export default function SectionContainer({ children, bgImage }) {
  return (
    <section
      className=" h-full bg-cover"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">{children}</div>
    </section>
  )
}
