import { Swiper, SwiperSlide } from "swiper/react";
const CategorysList = () => {
  const categorys = [
    {
      image: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.8067 14.28L29.9733 8.43335C28.94 7.40002 27.5667 6.83337 26.1 6.83337H23.4067C23.0867 6.83337 22.8133 7.06002 22.7533 7.37337L22.2067 10.1267C22.2 10.1667 22.1933 10.2067 22.1933 10.2534C22.1933 11 20.8733 11.8 20.0267 12.1734C19.02 11.64 17.8067 10.72 17.8067 10.14C17.8067 10.0934 17.8 10.0467 17.7933 10.0067L17.2467 7.3667C17.18 7.05334 16.9067 6.83337 16.5933 6.83337H13.9C12.4333 6.83337 11.06 7.40002 10.0267 8.43335L4.19332 14.28C3.93335 14.54 3.93335 14.9667 4.19332 15.2267L8.19332 19.2267C8.45333 19.4867 8.88 19.4867 9.14001 19.2267L11.2533 17.1067V32.5C11.2533 32.8667 11.5533 33.1667 11.92 33.1667H28.08C28.4467 33.1667 28.7467 32.8667 28.7467 32.5V17.1067L30.86 19.2267C31.12 19.4867 31.5467 19.4867 31.8067 19.2267L35.8067 15.2267C36.0667 14.9667 36.0667 14.54 35.8067 14.28ZM23.7867 23.4267L20.4667 26.7467C20.34 26.8734 20.1733 26.94 19.9933 26.94C19.82 26.94 19.6466 26.8734 19.5267 26.7467L16.2133 23.4267C15.6466 22.8667 15.3267 22.1067 15.3267 21.3C15.3267 20.4934 15.6466 19.7334 16.2133 19.1734C16.7867 18.6 17.54 18.2867 18.3467 18.2867C18.3467 18.2867 18.3467 18.2867 18.3534 18.2867C18.9467 18.2934 19.5133 18.4667 20 18.7867C21.1667 18.02 22.76 18.1467 23.7867 19.1734C24.3534 19.7334 24.6733 20.4934 24.6733 21.3C24.6733 22.1067 24.3534 22.86 23.7867 23.4267Z"
            fill="#FF9900"
          />
        </svg>
      ),
      name: "Áo",
    },
    {
      image: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.8067 14.28L29.9733 8.43335C28.94 7.40002 27.5667 6.83337 26.1 6.83337H23.4067C23.0867 6.83337 22.8133 7.06002 22.7533 7.37337L22.2067 10.1267C22.2 10.1667 22.1933 10.2067 22.1933 10.2534C22.1933 11 20.8733 11.8 20.0267 12.1734C19.02 11.64 17.8067 10.72 17.8067 10.14C17.8067 10.0934 17.8 10.0467 17.7933 10.0067L17.2467 7.3667C17.18 7.05334 16.9067 6.83337 16.5933 6.83337H13.9C12.4333 6.83337 11.06 7.40002 10.0267 8.43335L4.19332 14.28C3.93335 14.54 3.93335 14.9667 4.19332 15.2267L8.19332 19.2267C8.45333 19.4867 8.88 19.4867 9.14001 19.2267L11.2533 17.1067V32.5C11.2533 32.8667 11.5533 33.1667 11.92 33.1667H28.08C28.4467 33.1667 28.7467 32.8667 28.7467 32.5V17.1067L30.86 19.2267C31.12 19.4867 31.5467 19.4867 31.8067 19.2267L35.8067 15.2267C36.0667 14.9667 36.0667 14.54 35.8067 14.28ZM23.7867 23.4267L20.4667 26.7467C20.34 26.8734 20.1733 26.94 19.9933 26.94C19.82 26.94 19.6466 26.8734 19.5267 26.7467L16.2133 23.4267C15.6466 22.8667 15.3267 22.1067 15.3267 21.3C15.3267 20.4934 15.6466 19.7334 16.2133 19.1734C16.7867 18.6 17.54 18.2867 18.3467 18.2867C18.3467 18.2867 18.3467 18.2867 18.3534 18.2867C18.9467 18.2934 19.5133 18.4667 20 18.7867C21.1667 18.02 22.76 18.1467 23.7867 19.1734C24.3534 19.7334 24.6733 20.4934 24.6733 21.3C24.6733 22.1067 24.3534 22.86 23.7867 23.4267Z"
            fill="#FF9900"
          />
        </svg>
      ),
      name: "Áo",
    },
    {
      image: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.8067 14.28L29.9733 8.43335C28.94 7.40002 27.5667 6.83337 26.1 6.83337H23.4067C23.0867 6.83337 22.8133 7.06002 22.7533 7.37337L22.2067 10.1267C22.2 10.1667 22.1933 10.2067 22.1933 10.2534C22.1933 11 20.8733 11.8 20.0267 12.1734C19.02 11.64 17.8067 10.72 17.8067 10.14C17.8067 10.0934 17.8 10.0467 17.7933 10.0067L17.2467 7.3667C17.18 7.05334 16.9067 6.83337 16.5933 6.83337H13.9C12.4333 6.83337 11.06 7.40002 10.0267 8.43335L4.19332 14.28C3.93335 14.54 3.93335 14.9667 4.19332 15.2267L8.19332 19.2267C8.45333 19.4867 8.88 19.4867 9.14001 19.2267L11.2533 17.1067V32.5C11.2533 32.8667 11.5533 33.1667 11.92 33.1667H28.08C28.4467 33.1667 28.7467 32.8667 28.7467 32.5V17.1067L30.86 19.2267C31.12 19.4867 31.5467 19.4867 31.8067 19.2267L35.8067 15.2267C36.0667 14.9667 36.0667 14.54 35.8067 14.28ZM23.7867 23.4267L20.4667 26.7467C20.34 26.8734 20.1733 26.94 19.9933 26.94C19.82 26.94 19.6466 26.8734 19.5267 26.7467L16.2133 23.4267C15.6466 22.8667 15.3267 22.1067 15.3267 21.3C15.3267 20.4934 15.6466 19.7334 16.2133 19.1734C16.7867 18.6 17.54 18.2867 18.3467 18.2867C18.3467 18.2867 18.3467 18.2867 18.3534 18.2867C18.9467 18.2934 19.5133 18.4667 20 18.7867C21.1667 18.02 22.76 18.1467 23.7867 19.1734C24.3534 19.7334 24.6733 20.4934 24.6733 21.3C24.6733 22.1067 24.3534 22.86 23.7867 23.4267Z"
            fill="#FF9900"
          />
        </svg>
      ),
      name: "Áo",
    },
    {
      image: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.8067 14.28L29.9733 8.43335C28.94 7.40002 27.5667 6.83337 26.1 6.83337H23.4067C23.0867 6.83337 22.8133 7.06002 22.7533 7.37337L22.2067 10.1267C22.2 10.1667 22.1933 10.2067 22.1933 10.2534C22.1933 11 20.8733 11.8 20.0267 12.1734C19.02 11.64 17.8067 10.72 17.8067 10.14C17.8067 10.0934 17.8 10.0467 17.7933 10.0067L17.2467 7.3667C17.18 7.05334 16.9067 6.83337 16.5933 6.83337H13.9C12.4333 6.83337 11.06 7.40002 10.0267 8.43335L4.19332 14.28C3.93335 14.54 3.93335 14.9667 4.19332 15.2267L8.19332 19.2267C8.45333 19.4867 8.88 19.4867 9.14001 19.2267L11.2533 17.1067V32.5C11.2533 32.8667 11.5533 33.1667 11.92 33.1667H28.08C28.4467 33.1667 28.7467 32.8667 28.7467 32.5V17.1067L30.86 19.2267C31.12 19.4867 31.5467 19.4867 31.8067 19.2267L35.8067 15.2267C36.0667 14.9667 36.0667 14.54 35.8067 14.28ZM23.7867 23.4267L20.4667 26.7467C20.34 26.8734 20.1733 26.94 19.9933 26.94C19.82 26.94 19.6466 26.8734 19.5267 26.7467L16.2133 23.4267C15.6466 22.8667 15.3267 22.1067 15.3267 21.3C15.3267 20.4934 15.6466 19.7334 16.2133 19.1734C16.7867 18.6 17.54 18.2867 18.3467 18.2867C18.3467 18.2867 18.3467 18.2867 18.3534 18.2867C18.9467 18.2934 19.5133 18.4667 20 18.7867C21.1667 18.02 22.76 18.1467 23.7867 19.1734C24.3534 19.7334 24.6733 20.4934 24.6733 21.3C24.6733 22.1067 24.3534 22.86 23.7867 23.4267Z"
            fill="#FF9900"
          />
        </svg>
      ),
      name: "Áo",
    },
    {
      image: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.8067 14.28L29.9733 8.43335C28.94 7.40002 27.5667 6.83337 26.1 6.83337H23.4067C23.0867 6.83337 22.8133 7.06002 22.7533 7.37337L22.2067 10.1267C22.2 10.1667 22.1933 10.2067 22.1933 10.2534C22.1933 11 20.8733 11.8 20.0267 12.1734C19.02 11.64 17.8067 10.72 17.8067 10.14C17.8067 10.0934 17.8 10.0467 17.7933 10.0067L17.2467 7.3667C17.18 7.05334 16.9067 6.83337 16.5933 6.83337H13.9C12.4333 6.83337 11.06 7.40002 10.0267 8.43335L4.19332 14.28C3.93335 14.54 3.93335 14.9667 4.19332 15.2267L8.19332 19.2267C8.45333 19.4867 8.88 19.4867 9.14001 19.2267L11.2533 17.1067V32.5C11.2533 32.8667 11.5533 33.1667 11.92 33.1667H28.08C28.4467 33.1667 28.7467 32.8667 28.7467 32.5V17.1067L30.86 19.2267C31.12 19.4867 31.5467 19.4867 31.8067 19.2267L35.8067 15.2267C36.0667 14.9667 36.0667 14.54 35.8067 14.28ZM23.7867 23.4267L20.4667 26.7467C20.34 26.8734 20.1733 26.94 19.9933 26.94C19.82 26.94 19.6466 26.8734 19.5267 26.7467L16.2133 23.4267C15.6466 22.8667 15.3267 22.1067 15.3267 21.3C15.3267 20.4934 15.6466 19.7334 16.2133 19.1734C16.7867 18.6 17.54 18.2867 18.3467 18.2867C18.3467 18.2867 18.3467 18.2867 18.3534 18.2867C18.9467 18.2934 19.5133 18.4667 20 18.7867C21.1667 18.02 22.76 18.1467 23.7867 19.1734C24.3534 19.7334 24.6733 20.4934 24.6733 21.3C24.6733 22.1067 24.3534 22.86 23.7867 23.4267Z"
            fill="#FF9900"
          />
        </svg>
      ),
      name: "Áo",
    },
    {
      image: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.8067 14.28L29.9733 8.43335C28.94 7.40002 27.5667 6.83337 26.1 6.83337H23.4067C23.0867 6.83337 22.8133 7.06002 22.7533 7.37337L22.2067 10.1267C22.2 10.1667 22.1933 10.2067 22.1933 10.2534C22.1933 11 20.8733 11.8 20.0267 12.1734C19.02 11.64 17.8067 10.72 17.8067 10.14C17.8067 10.0934 17.8 10.0467 17.7933 10.0067L17.2467 7.3667C17.18 7.05334 16.9067 6.83337 16.5933 6.83337H13.9C12.4333 6.83337 11.06 7.40002 10.0267 8.43335L4.19332 14.28C3.93335 14.54 3.93335 14.9667 4.19332 15.2267L8.19332 19.2267C8.45333 19.4867 8.88 19.4867 9.14001 19.2267L11.2533 17.1067V32.5C11.2533 32.8667 11.5533 33.1667 11.92 33.1667H28.08C28.4467 33.1667 28.7467 32.8667 28.7467 32.5V17.1067L30.86 19.2267C31.12 19.4867 31.5467 19.4867 31.8067 19.2267L35.8067 15.2267C36.0667 14.9667 36.0667 14.54 35.8067 14.28ZM23.7867 23.4267L20.4667 26.7467C20.34 26.8734 20.1733 26.94 19.9933 26.94C19.82 26.94 19.6466 26.8734 19.5267 26.7467L16.2133 23.4267C15.6466 22.8667 15.3267 22.1067 15.3267 21.3C15.3267 20.4934 15.6466 19.7334 16.2133 19.1734C16.7867 18.6 17.54 18.2867 18.3467 18.2867C18.3467 18.2867 18.3467 18.2867 18.3534 18.2867C18.9467 18.2934 19.5133 18.4667 20 18.7867C21.1667 18.02 22.76 18.1467 23.7867 19.1734C24.3534 19.7334 24.6733 20.4934 24.6733 21.3C24.6733 22.1067 24.3534 22.86 23.7867 23.4267Z"
            fill="#FF9900"
          />
        </svg>
      ),
      name: "Áo",
    },
  ];
  return (
    <section className="py-7">
      <h2 className="text-base md:text-xl lg:text-2xl font-semibold text-center">
        DANH MỤC NỔI BẬT
      </h2>
      <div className="max-w-md mx-auto">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={5}
          className="mySwiper flex flex-nowrap justify-center mt-5"
          spaceBetween={20}
          loop={false}
          breakpoints={{
            320:{
                slidesPerView:3
            },
            360:{
                slidesPerView:3.5,
            },
            414:{
                slidesPerView:4,
            },
            768:{
                slidesPerView:5,
            }

          }}
          
        >
          {categorys.length > 0 &&
            categorys.map((category, index) => {
              return (
                <SwiperSlide
                  key={index + 1}
                  className="bg-primary/20 rounded-full !h-[75px] !leading-[75px] flex justify-center items-center hover:cursor-pointer"
                >
                  <div className="flex justify-center items-center h-full w-full">
                    {category.image}
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default CategorysList;
