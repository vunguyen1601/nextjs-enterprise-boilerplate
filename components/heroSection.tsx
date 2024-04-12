import React from "react"

const HeroSection = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font  text-3xl font-medium text-gray-900 sm:text-4xl ">Trang chủ</h1>
          <p className="my-2 text-2xl leading-relaxed">Thông tin về dự án</p>
          <p className="mb-8 leading-relaxed">
            X.base là một dự án phần mềm đột phá, được thiết kế để cải thiện trải nghiệm kỹ thuật số của bạn. Sử dụng
            sức mạnh của Next.js và Tailwind CSS, X.base mang đến môi trường phát triển mượt mà cho việc tạo ra các ứng
            dụng web hiện đại.
          </p>
        </div>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <img
            className="rounded object-cover object-center shadow-lg duration-500 ease-in hover:scale-105"
            alt="hero"
            src="/img/xbase.png"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
