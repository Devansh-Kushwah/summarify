import { memo } from "react";
import img4 from "../images/undefined4.png";
import img5 from "../images/undefined5.png";
import img6 from "../images/undefined6.svg";
import img7 from "../images/undefined7.png";
import img8 from "../images/undefined8.png";
import img9 from "../images/undefined9.svg";

const Description = memo(() => {
  return (
  <div className=" font-segoe-ui my-10">
    <div>
      <h1 className="text-center  dark:text-white tracking-[0.8px] text-4xl font-bold ">
        Single platform, endless summaries
      </h1>
      
      <div className="text-center text-2xl mt-5">
        Transforming information overload into manageable insights —
        consistently striving for clarity.
      </div>
    </div>

    <div>
      <div className="flex flex-col md:flex-row-reverse justify-between m-10">
        <div className="w-[95%] md:w-[50%] mx-auto">
            <img
            className="object-cover max-h-[500px]"
            alt=""
            src={img4}
            />
          </div>
        <div className="w-none md:w-[50%] px-10">
            <div className="text-indigo-500 my-5 text-2xl font-serif italic">
              Condense & Comprehend: Summarization Simplified
            </div>

            <h1 className="text-3xl dark:text-white font-bold ">
              100% Automatic Article Summarization with just a click
            </h1>

            <div className="my-5">
              In the sheer amount of information that bombards Internet
              users from all sides, hardly anyone wants to devote their
              valuable time to reading long texts. TLDR This's clever AI
              analyzes any piece of text and summarizes it
              automatically, in a way that makes it easy for you to
              read, understand and act on.
            </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-between m-10">
        <div className="w-[95%] md:w-[50%] mx-auto">
          <img
          className="object-cover max-h-[580px]"
          alt=""
          src={img5}
          />
        </div>

        <div className="w-none md:w-[50%] px-10">
          <div className="text-indigo-500 text-2xl my-5 font-serif italic">
            Condense & Comprehend: Summarization Simplified
          </div>

          <h1 className="text-3xl dark:text-white font-bold ">
            Article Metadata Extraction
          </h1>

          <div className="my-5">
            TLDR This, the online article summarizer tool, not only
                      condenses lengthy articles into shorter, digestible
                      content, but it also automatically extracts essential
                      metadata such as author and date information, related
                      images, and the title. Additionally, it estimates the
                      reading time for news articles and blog posts, ensuring
                      you have all the necessary information consolidated in one
                      place for efficient reading.
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-between m-10">
        <div className="w-[95%] md:w-[50%] mx-auto">
          <img
          className="object-cover"
          alt=""
          src={img7}
          />
        </div>
        <div className="w-none md:w-[50%] px-10">
          <div className="text-indigo-500 text-2xl my-5 font-serif italic">
            Pure Focus, No Fuss: Your Ad-Free Reading Haven
          </div>

          <h1 className="text-3xl dark:text-white font-bold ">
            Distraction and ad-free reading
          </h1>

          <div className="my-5">
            As an efficient article summarizer tool, TLDR This
                    meticulously eliminates ads, popups, graphics, and other
                    online distractions, providing you with a clean,
                    uncluttered reading experience. Moreover, it enhances your
                    focus and comprehension by presenting the essential
                    content in a concise and straightforward manner, thus
                    transforming the way you consume information online.
          </div>
        </div>
      </div>
        
      <div className="flex flex-col md:flex-row-reverse justify-between m-10">
        <div className="w-[95%] md:w-[50%] mx-auto">
          <img
          className="object-cover "
          alt=""
          src={img8}
          />
        </div>
        <div className="w-none md:w-[50%] px-10">
          <div className="text-indigo-500 text-2xl my-5 font-serif italic">
            Dodge the Distraction, Embrace the Essence
          </div>

          <h1 className="text-3xl dark:text-white font-bold ">
            Avoid the Clickbait Trap
          </h1>

          <div className="my-5">
            TLDR This smartly selects the most relevant points from a
                    text, filtering out weak arguments and baseless
                    speculation. It allows for quick comprehension of the
                    essence, without needing to sift through all paragraphs.
                    By focusing on core substance and disregarding fluff, it
                    enhances efficiency in consuming information, freeing more
                    time for valuable content.
          </div>
        </div>
      </div>
    </div>
  </div>   
  );
});

export default Description;
