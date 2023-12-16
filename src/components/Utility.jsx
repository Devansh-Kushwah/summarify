
const Utility = () => {
  return (
    <div className="mx-10">
      <h1 className="text-center  dark:text-white tracking-[0.8px] text-4xl font-bold ">
        Who is TLDR This for?
      </h1>
      
      <div className="text-center text-xl mt-5">
        TLDR This is a summarizing tool designed for students, writers, teachers, institutions, journalists, and any internet user who needs to quickly understand the essence of lengthy content
      </div>
      
      <div className="mt-10 flex flex-col md:flex-row  flex-wrap justify-around  mx-20">
        <div className="lg:max-w-[400px]">
          <h1 className="text-center  dark:text-white tracking-[0.8px] text-4xl font-bold ">
            Anyone with access to the Internet          
          </h1>
          
          <div className="text-center text-xl my-5">
          TLDR This is for anyone who just needs to get the gist of a long article. You can read this summary, then go read the original article if you want to.          </div>
        </div>
        <div className="lg:max-w-[400px]">
          <h1 className="text-center  dark:text-white tracking-[0.8px] text-4xl font-bold ">
          Students
          </h1>
          
          <div className="text-center text-xl my-5">
          TLDR This is for students studying for exams, who are overwhelmed by information overload. This tool will help them summarize information into a concise, easy to digest piece of text          </div>
        </div>
        <div className="lg:max-w-[400px]">
          <h1 className="text-center  dark:text-white tracking-[0.8px] text-4xl font-bold ">
          Writers
          </h1>
          
          <div className="text-center text-xl my-5">
          TLDR This is for anyone who writes frequently, and wants to quickly summarize their articles for easier writing and easier reading.          </div>
        </div>
        <div className="lg:max-w-[400px]">
          <h1 className="text-center  dark:text-white tracking-[0.8px] text-4xl font-bold ">
          Teachers
          </h1>
          
          <div className="text-center text-xl my-5">
          TLDR This is for teachers who want to summarize a long document or chapter for their students.          </div>
        </div>
        <div className="lg:max-w-[400px]">
          <h1 className="text-center  dark:text-white tracking-[0.8px] text-4xl font-bold ">
          Institutions          
          </h1>
          
          <div className="text-center text-xl my-5">
          TLDR This is for corporations and institutions who want to condense a piece of content into a summary that is easy to digest for their employees/students.
          </div>
        </div>
        <div className="lg:max-w-[400px]">
          <h1 className="text-center  dark:text-white tracking-[0.8px] text-4xl font-bold ">
          Journalists
          </h1>
          
          <div className="text-center text-xl my-5">
          TLDR This is for journalists who need to summarize a long article for their newspaper or magazine.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utility;


/**
 * <div className="w-[1200px] overflow-hidden flex flex-col items-center justify-start text-center text-20xl text-aliceblue font-segoe-ui">
      <div className="w-[1200px] flex flex-col items-center justify-center">
        <div className="w-[1152px] h-[1000px] flex flex-col pt-px px-6 pb-0 box-border items-start justify-end">
          <div className="relative bg-gray-100 w-[1104px] h-px" />
          <div className="w-[1104px] h-[1000px] flex flex-col py-20 px-0 box-border items-center justify-center">
            <div className="w-[768px] h-[236px] flex flex-col pt-0 px-0 pb-20 box-border items-center justify-start gap-[16px]">
              <div className="relative w-[768px] h-[50px]">
                <div className="absolute top-[-7px] left-[calc(50%_-_198px)] tracking-[0.8px] leading-[50px] inline-block w-[396px]">
                  Who is TLDR This for?
                </div>
              </div>
              <div className="relative w-[768px] h-[90px] text-xl text-darkgray">
                <div className="absolute top-[-1px] left-[calc(50%_-_383px)] leading-[30px] inline-block w-[767px]">
                  TLDR This is a summarizing tool designed for students,
                  writers, teachers, institutions, journalists, and any internet
                  user who needs to quickly understand the essence of lengthy
                  content.
                </div>
              </div>
            </div>
            <div className="relative w-[1104px] h-[603px] text-13xl">
              <div className="absolute w-[29.44%] top-[0px] right-[70.56%] left-[0%] h-[276px] flex flex-col pt-20 px-0 pb-0 box-border items-center justify-start gap-[8px]">
                <div className="relative w-[325px] h-20">
                  <div className="absolute top-[-6px] left-[calc(50%_-_161.5px)] leading-[40px] inline-block w-[324px]">
                    Anyone with access to the Internet
                  </div>
                </div>
                <div className="relative w-[325px] h-[108px] text-lg text-darkgray">
                  <div className="absolute top-[-1px] left-[calc(50%_-_152.5px)] leading-[27px] inline-block w-[306px]">
                    TLDR This is for anyone who just needs to get the gist of a
                    long article. You can read this summary, then go read the
                    original article if you want to.
                  </div>
                </div>
              </div>
              <div className="absolute w-[29.44%] top-[0px] right-[35.33%] left-[35.24%] h-[263px] flex flex-col items-center justify-center gap-[8px]">
                <div className="relative w-[126px] h-10">
                  <div className="absolute top-[-6px] left-[calc(50%_-_63px)] leading-[40px] inline-block w-[126px]">
                    Students
                  </div>
                </div>
                <div className="relative w-[325px] h-[135px] text-lg text-darkgray">
                  <div className="absolute top-[-1px] left-[calc(50%_-_157.5px)] leading-[27px] inline-block w-[315px]">
                    TLDR This is for students studying for exams, who are
                    overwhelmed by information overload. This tool will help
                    them summarize information into a concise, easy to digest
                    piece of text.
                  </div>
                </div>
              </div>
              <div className="absolute w-[29.44%] top-[0px] right-[0%] left-[70.56%] h-[236px] flex flex-col items-center justify-end gap-[8px] text-12xl">
                <div className="relative w-[101px] h-10">
                  <div className="absolute top-[-6px] left-[calc(50%_-_50.5px)] leading-[40px] inline-block w-[101px]">
                    Writers
                  </div>
                </div>
                <div className="relative w-[325px] h-[108px] text-lg text-darkgray">
                  <div className="absolute top-[-1px] left-[calc(50%_-_145.5px)] leading-[27px] inline-block w-[290px]">
                    TLDR This is for anyone who writes frequently, and wants to
                    quickly summarize their articles for easier writing and
                    easier reading.
                  </div>
                </div>
              </div>
              <div className="absolute w-[29.44%] top-[340px] right-[70.56%] left-[0%] h-[209px] flex flex-col items-center justify-end gap-[8px]">
                <div className="relative w-[130px] h-10">
                  <div className="absolute top-[-6px] left-[calc(50%_-_65px)] leading-[40px] inline-block w-[130px]">
                    Teachers
                  </div>
                </div>
                <div className="relative w-[325px] h-[81px] text-lg text-darkgray">
                  <div className="absolute top-[-1px] left-[calc(50%_-_158.5px)] leading-[27px] inline-block w-[317px]">
                    TLDR This is for teachers who want to summarize a long
                    document or chapter for their students.
                  </div>
                </div>
              </div>
              <div className="absolute w-[29.44%] top-[340px] right-[35.33%] left-[35.24%] h-[263px] flex flex-col items-center justify-center gap-[8px] text-12xl">
                <div className="relative w-[154px] h-10">
                  <div className="absolute top-[-6px] left-[calc(50%_-_77px)] leading-[40px] inline-block w-[154px]">
                    Institutions
                  </div>
                </div>
                <div className="relative w-[325px] h-[135px] text-lg text-darkgray">
                  <div className="absolute top-[-1px] left-[calc(50%_-_157.5px)] leading-[27px] inline-block w-[316px]">
                    TLDR This is for corporations and institutions who want to
                    condense a piece of content into a summary that is easy to
                    digest for their employees/students.
                  </div>
                </div>
              </div>
              <div className="absolute w-[29.44%] top-[340px] right-[0%] left-[70.56%] h-[209px] flex flex-col items-center justify-end gap-[8px]">
                <div className="relative w-[153px] h-10">
                  <div className="absolute top-[-6px] left-[calc(50%_-_76.5px)] leading-[40px] inline-block w-[153px]">
                    Journalists
                  </div>
                </div>
                <div className="relative w-[325px] h-[81px] text-lg text-darkgray">
                  <div className="absolute top-[-1px] left-[calc(50%_-_152.5px)] leading-[27px] inline-block w-[305px]">
                    TLDR This is for journalists who need to summarize a long
                    article for their newspaper or magazine.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1200px] flex flex-col items-center justify-center text-18xl">
        <div className="w-[1024px] h-[743px] flex flex-col items-center justify-center">
          <div className="w-[992px] h-[551px] flex flex-col pt-px px-6 pb-0 box-border items-start justify-end">
            <div className="relative bg-gray-100 w-[944px] h-px" />
            <div className="w-[944px] h-[551px] flex flex-col py-20 px-0 box-border items-center justify-center">
              <div className="w-[768px] h-[190px] flex flex-col pt-0 px-0 pb-16 box-border items-center justify-start gap-[16px]">
                <div className="relative w-[768px] h-[50px]">
                  <div className="absolute top-[-7px] left-[calc(50%_-_325px)] tracking-[0.8px] leading-[50px] inline-block w-[650px]">
                    Featured by the world's best websites
                  </div>
                </div>
                <div className="relative w-[768px] h-[60px] text-xl text-darkgray">
                  <div className="absolute top-[-1px] left-[calc(50%_-_380px)] leading-[30px] inline-block w-[759px]">
                    Our platform has been recognized and utilized by top-tier
                    websites across the globe, solidifying our reputation for
                    excellence and reliability in the digital world.
                  </div>
                </div>
              </div>
              <div className="relative w-[944px] h-[200px]">
                <div className="absolute w-[32.73%] top-[0px] right-[67.27%] left-[0%] h-24" />
                <div className="absolute w-[32.73%] top-[0px] right-[33.69%] left-[33.58%] h-24" />
                <div className="absolute w-[32.73%] top-[0px] right-[0%] left-[67.27%] h-24" />
                <div className="absolute w-[32.73%] top-[104px] right-[67.27%] left-[0%] h-24" />
                <div className="absolute w-[32.73%] top-[104px] right-[33.69%] left-[33.58%] h-24" />
                <div className="absolute w-[32.73%] top-[104px] right-[0%] left-[67.27%] h-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 w-[1200px] flex flex-col items-center justify-center text-left text-13xl text-white">
        <div className="w-[1200px] flex flex-col items-center justify-center">
          <div className="w-[1152px] flex flex-col items-center justify-center">
            <div className="relative bg-mediumslateblue w-[1104px] h-[184px]">
              <div className="absolute w-[91.3%] top-[48px] right-[4.35%] left-[4.35%] h-[88px] flex flex-row items-center justify-start gap-[116px]">
                <div className="w-[504px] h-[88px] flex flex-col items-center justify-start">
                  <div className="relative w-[504px] h-20">
                    <div className="absolute w-[80.16%] top-[-6px] left-[0%] leading-[40px] inline-block">
                      Focus on the Value, Not the Noise.
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] py-[11px] px-0 bg-ghostwhite rounded-sm w-[336px] h-12 flex flex-col box-border items-center justify-start">
                  <div className="relative text-base leading-[22px] font-segoe-ui text-mediumslateblue text-left inline-block w-[270px]">
                    START SUMMARIZING — IT'S FREE
                  </div>
                </button>
              </div>
              <img
                className="absolute w-[21.56%] top-[0px] right-[0%] left-[78.44%] max-w-full overflow-hidden h-[110px] object-cover"
                alt=""
                src="/undefined9.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
 */