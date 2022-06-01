import Post from '../Blog/Post'

export default function News() {
  return (
    <section className="pt-4 lg:pt-[100px] lg:pb-20">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-[30px] max-w-[510px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-blue-400">Blog</span>
            <h2
              className="
                text-dark
                text-3xl
                font-bold
                sm:text-4xl
                md:text-[40px]
                "
            >
              Mira mis articulos mas recientes
            </h2>
            <p className="text-body-color text-base">
              There are many variations of passages of Lorem Ipsum available but the majority have
              suffered alteration in some form.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-8 gap-y-16 pb-10 sm:px-5">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </section>
  )
}
