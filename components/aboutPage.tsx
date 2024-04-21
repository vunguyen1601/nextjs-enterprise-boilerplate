import React from "react"

const AboutPage: React.FC = () => {
  return (
    <div className="px-4 py-9 2xl:container md:px-6 md:py-12 lg:px-20 lg:py-16 2xl:mx-auto">
      <div className="w-full lg:w-10/12">
        <h1 className="title-font text-3xl font-medium text-gray-900 sm:text-4xl">
          About
        </h1>
        <h2 className="mt-2 w-full text-xl font-bold leading-9 text-gray-800 dark:text-white  lg:text-2xl lg:leading-10 ">
          We are here to make great design accessible and delightfull for everyone
        </h2>
        <p className="mt-6 text-base font-normal leading-6 text-gray-600 dark:text-white">
        X.base là một dự án phần mềm đột phá, được thiết kế để cải thiện trải nghiệm kỹ thuật số của bạn. Sử dụng sức mạnh của Next.js và Tailwind CSS, X.base mang đến môi trường phát triển mượt mà cho việc tạo ra các ứng dụng web hiện đại
        </p>
      </div>
      <div className="mt-12 sm:mt-10 lg:mt-14">
        <img
          className="hidden w-full lg:block"
          src="/img/xbase.png"
          alt="Group of people Chilling"
        />
      </div>
    </div>
  )
}

export default AboutPage
