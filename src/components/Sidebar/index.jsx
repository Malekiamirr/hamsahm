import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import logoSquere from '../../assets/logo-squere.jpg';

function Sidebar({ toggleShowSidebar, showSidebar }) {
  const [showNewsCategory, setshowNewsCategory] = useState(false);
  const [showNewsSubCategory, setshowNewsSubCategory] = useState(null);

  const dummy_data = [
    {
      id: 1,
      title: 'تمامی اخبار',
    },

    {
      id: 2,
      title: 'اخبار داخلی',
      subCategory: [
        {
          id: 22,
          title: 'خودرو و قطعات',
        },
        {
          id: 23,
          title: 'شیمیایی',
        },
        {
          id: 24,
          title: 'فلزات اساسی',
        },
        {
          id: 25,
          title: 'بانک ها و موسسات اعتباری',
        },
        {
          id: 26,
          title: 'سیمان آهک گچ',
        },
        {
          id: 27,
          title: 'یمه و بازنشستگی',
        },
        {
          id: 28,
          title: 'عرضه برق گاز بخار و آب گرم',
        },
        {
          id: 29,
          title: 'واسطه گری های مالی و پولی',
        },
        {
          id: 30,
          title: 'فرآورده های نفتی',
        },
        {
          id: 31,
          title: 'استخراج کانه های فلزی',
        },
        {
          id: 32,
          title: 'مجصولات کامپیوتری',
        },
        {
          id: 33,
          title: 'دارویی',
        },
        {
          id: 34,
          title: 'ماشین آلات و تجهیزات',
        },
        {
          id: 35,
          title: 'سرمایه گذاریها',
        },
        {
          id: 36,
          title: 'چند رشته ای صنعتی',
        },
        {
          id: 37,
          title: 'قند و شکر',
        },
        {
          id: 38,
          title: 'کانی غیر فلزی',
        },
        {
          id: 39,
          title: 'رایانه',
        },
        {
          id: 40,
          title: 'هتل و رستوران',
        },
        {
          id: 41,
          title: 'غذایی بجز قند و شکر',
        },
        {
          id: 42,
          title: 'فعالیت های کمکی به نهاد های مالی واسطه',
        },
        {
          id: 43,
          title: 'زراعت و خدمات وابسته',
        },
        {
          id: 98,
          title: 'محصولات فلزی',
        },
        {
          id: 100,
          title: 'مخابرات',
        },
        {
          id: 80,
          title: 'حمل و نقل انبارداری و ارتباطات',
        },
        {
          id: 46,
          title: 'چاپ',
        },
        {
          id: 47,
          title: 'لاستیک و پلاستیک',
        },
        {
          id: 48,
          title: 'کاشی و سرامیک',
        },
        {
          id: 49,
          title: 'دستگاه های برقی',
        },
        {
          id: 50,
          title: 'استخراج سایر معادن',
        },
        {
          id: 51,
          title: 'اطلاعات و ارتبطاتات',
        },
        {
          id: 52,
          title: 'پیمانکاری صنعتی',
        },
        {
          id: 53,
          title: 'محصولات کاغذی',
        },
        {
          id: 54,
          title: 'سایر واسطه گری های مالی',
        },
        {
          id: 55,
          title: 'وسایل ارتباطی',
        },
        {
          id: 56,
          title: 'استخراج ذغال سنگ',
        },
        {
          id: 57,
          title: 'منسوجات',
        },
        {
          id: 58,
          title: 'محصولات چوبی',
        },
        {
          id: 59,
          title: 'فعالیت های هنری',
        },
        {
          id: 60,
          title: 'محصولات چرمی',
        },
      ],
    },
    {
      id: 3,
      title: 'اخبار بین الملل',
      subCategory: [
        {
          id: 63,
          title: 'اخبار کریپتو',
        },
        {
          id: 64,
          title: 'اخبار فارکس',
        },
        {
          id: 65,
          title: 'اخبار بانکداری',
        },
      ],
    },
  ];

  return (
    <>
      <div
        onClick={toggleShowSidebar}
        className={`absolute bg-[#080a38] bg-opacity-50 z-10 inset-0 h-[800px] transition-opacity duration-300 hover:cursor-pointer ${
          !showSidebar && 'opacity-0 pointer-events-none -z-50'
        }`}
      ></div>
      <div
        className={`w-[290px] h-[800px] z-20 absolute inset-0 bg-white py-3 transition-all duration-300 ${
          !showSidebar && 'translate-x-[350px]'
        }`}
      >
        {/* Logo */}
        <div
          onClick={toggleShowSidebar}
          className="mb-1 pb-5 border-b border-b-[#f1f2f4] flex items-center px-5"
        >
          <div className="flex items-center justify-center w-20 h-20 text-white">
            <img src={logoSquere} alt="logo" />
          </div>
        </div>
        <div className="h-[700px] overflow-y-auto scrolling">
          <div className="flex flex-col gap-4">
            <div
              onClick={() => setshowNewsCategory((prev) => !prev)}
              className="text-[17px] font-bold text-black mt-4 flex items-center justify-between hover:cursor-pointer px-5"
            >
              <span>اخبار</span>
              <MdKeyboardArrowDown
                className={`w-6 h-6 transition-all duration-300 ${
                  showNewsCategory && 'rotate-180'
                }`}
              />
            </div>
            {showNewsCategory && (
              <div className="flex flex-col">
                {dummy_data.map((category) => (
                  <div
                    key={category.id}
                    className="flex flex-col pt-5 bg-[#E8E8E882] bg-opacity-[51%] border-b-2 border-b-black border-opacity-10"
                  >
                    <div
                      onClick={() => {
                        showNewsSubCategory === category.title
                          ? setshowNewsSubCategory(null)
                          : setshowNewsSubCategory(category.title);
                      }}
                      className="flex items-center justify-between px-5 pb-5 hover:cursor-pointer"
                    >
                      <span className="text-[17px]">{category.title}</span>
                      {category.subCategory && (
                        <MdKeyboardArrowDown
                          className={`w-6 h-6 transition-all duration-300 ${
                            showNewsSubCategory === category.title &&
                            'rotate-180'
                          }`}
                        />
                      )}
                    </div>
                    {showNewsSubCategory === category.title &&
                      category.subCategory?.map((sub, index) => (
                        <div
                          key={sub.id}
                          className={`flex flex-col py-5 bg-[#E5E5E5] border-b-2 border-[#ABABAB] ${
                            category.subCategory.length - 1 === index &&
                            'border-none'
                          }`}
                        >
                          <div className="flex items-center justify-between px-5 hover:cursor-pointer">
                            <span className="text-[17px] text-[#434343]">
                              {sub.title}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
