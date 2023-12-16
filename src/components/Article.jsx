import { memo } from "react";

const Article = memo(() => {
  return (
    <div className="mt-10">

      <h1 className="mt-5 text-5xl text-center dark:text-white font-normal ">
        Paste Your Url Here
      </h1>
     
      <form action="" >
        <div className="px-10 max-w-4xl mt-10 mx-auto">
          <textarea className="textarea  w-[96.43%] textarea-bordered " placeholder="https://link-to-your-URL"></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="w-[80%] rounded-sm bg-indigo-600  max-w-4xl my-10 text-center h-10 py-2 text-white">
            ANALYZE THIS
          </button>
        </div>
      </form>
      </div>
  );
});

export default Article;


/*
    <div className="relative w-[1200px] h-[564px] text-left text-5xl text-gainsboro-100 font-segoe-ui">
      <div className="absolute w-[75.73%] top-[-0.8px] right-[12.13%] left-[12.13%] bg-dimgray h-px" />
      <div className="absolute w-[78.92%] top-[65px] right-[10.5%] left-[10.58%] h-[418px]">
        <div className="absolute w-full top-[56px] right-[0%] left-[0%] h-[312px] flex flex-col py-6 px-0 box-border items-center justify-end">
          <div className="rounded-xl w-[883px] flex flex-col items-center justify-center">
            <div className="w-[883px] h-64 flex flex-col items-center justify-center gap-[24px]">
              <div className="rounded-xl w-[325px] h-[52px] flex flex-col py-0.5 px-0 box-border items-center justify-start">
                <div className="rounded-xl w-[321px] h-11 flex flex-row items-center justify-start">
                  <button className="cursor-pointer [border:none] py-[9px] px-0 bg-mediumslateblue w-[117px] h-11 flex flex-col box-border items-center justify-start">
                    <div className="relative text-base leading-[24px] font-segoe-ui text-white text-center inline-block w-[77px]">
                      Upload file
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-[9px] px-0 bg-darkslategray w-[105px] h-11 flex flex-col box-border items-center justify-start">
                    <div className="relative text-base leading-[24px] font-segoe-ui text-white text-center inline-block w-[65px]">
                      Add URL
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-[9px] px-0 bg-darkslategray w-[100px] h-11 flex flex-col box-border items-center justify-start">
                    <div className="relative text-mini leading-[24px] font-segoe-ui text-white text-center inline-block w-[60px]">
                      Add text
                    </div>
                  </button>
                </div>
              </div>
              <div className="w-[883px] flex flex-col items-center justify-center">
                <div className="rounded-lg box-border w-[600px] h-[180px] overflow-hidden shrink-0 flex flex-col py-12 px-0 items-center justify-end border-[1px] border-solid border-darkslategray">
                  <div className="relative w-56 h-20">
                    <div className="absolute w-[96.43%] top-[-2px] right-[1.79%] left-[1.79%] h-9">
                      <h3 className="m-0 absolute top-[calc(50%_-_20px)] left-[calc(50%_-_108px)] text-[inherit] leading-[36px] font-normal font-inherit inline-block w-[216px]">
                        Select or Drop a file
                      </h3>
                    </div>
                    <div className="absolute w-full top-[34px] right-[0%] left-[0%] h-12 text-center text-base text-slategray">
                      <div className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_101px)] leading-[24px] inline-block w-[203px]">
                        We support .pdf, .doc, .docx files upto 25 MB
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[63.36%] top-[368px] right-[18.37%] left-[18.27%] bg-mediumslateblue h-[50px] flex flex-col py-3 px-0 box-border items-center justify-start text-center text-base text-white">
          <div className="relative leading-[22px] inline-block w-[138px]">
            SUMMARIZE THIS
          </div>
        </div>
        <div className="absolute w-[59.77%] top-[0px] right-[20.17%] left-[20.06%] h-10 text-13xl">
          <h1 className="m-0 absolute top-[calc(50%_-_26px)] left-[calc(50%_-_283px)] text-[inherit] leading-[40px] font-normal font-inherit inline-block w-[566px]">
            Enter an Article URL or paste your Text
          </h1>
        </div>
      </div>
      <div className="absolute w-[75.73%] top-[562.2px] right-[12.13%] left-[12.13%] bg-dimgray h-px" />
      <div className="absolute w-[75.75%] top-[0px] right-[12.08%] left-[12.17%] h-px" />
      <div className="absolute w-[75.75%] top-[563px] right-[12.08%] left-[12.17%] h-px" />
    </div>
*/