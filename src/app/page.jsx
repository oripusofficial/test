import HERO_BG_IMG from "@/assets/image/hero_bg.png";
import Button from "@/components/button/Button";
import Paragraph from "@/components/text/Paragraph";
import HeroImage from "./components/HeroImage";
import img_bricks from "@/assets/image/brick.png";
import img_abcd from "@/assets/image/abcd.png";
import img_puzzle from "@/assets/image/puzzle.png";
import Image from "next/image";
import { TbCalendarCheck, TbCash, TbClock } from "react-icons/tb";
export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${HERO_BG_IMG.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="text-2xl font-primary text-[#ecfbff] pt-[150px] md:pt-[220px] lg:pt-[200px] pb-[150px] md:pb-[220px] lg:pb-[100px]  relative overflow-hidden"
      >
        {/* Text Content */}
        <div className="container mx-auto py-2 relative z-10">
          <div className="flex items-center gap-8 flex-col lg:flex-row">
            <div className="w-full lg:w-3/5">
              {/* <Image className="w-[200px]" src={HERO_LOGO} alt="Logo" /> */}
              <h1 className="relative text-center lg:text-left text-6xl md:text-7xl lg:text-8xl font-black text-primary">
                সহজপাঠ বিদ্যাপীঠ
              </h1>
              <Paragraph>
                একটি আধুনিক ও ডিজিটাল শিক্ষা প্রতিষ্ঠান, যেখানে শিশুদের শেখা হয়
                আনন্দ, খেলা এবং সৃজনশীলতার মাধ্যমে। নিরাপদ পরিবেশ, দক্ষ শিক্ষক
                এবং প্রযুক্তিনির্ভর শিক্ষার মাধ্যমে আমরা প্রতিটি শিশুকে
                আত্মবিশ্বাসী, কল্পনাপ্রবণ ও ভবিষ্যৎমুখী করে গড়ে তুলতে
                প্রতিশ্রুতিবদ্ধ।
              </Paragraph>

              <div className="my-8 mx-4 lg:mx-0 flex gap-2 flex-col md:flex-row justify-center lg:justify-start">
                <Button
                  title={"বিস্তারিত জানুন"}
                  theme="primary"
                  variant="light"
                />
                <Button title={"আ্যডমিশন"} theme="secondary" />
              </div>
            </div>
            <div className="w-full lg:w-2/5">
              <HeroImage />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-8">
        <div className="flex flex-col lg:flex-row  gap-4">
          <div className=" w-full lg:w-1/3">
            <div className="rounded-2xl border-2 border-dashed border-secondary p-8 mx-3 lg:mx-0">
              <Image
                src={img_puzzle}
                alt="Play House"
                className="w-[120px] mx-auto"
              />
              <h2 className="text-3xl text-center font-bold mt-4 text-primary">
                প্লে হাউস (Play House){" "}
              </h2>
              <Paragraph className="lg:text-center!">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur beatae eligendi voluptas{" "}
              </Paragraph>

              <div className="flex flex-col gap-2">
                <p className=" flex gap-2 text-text text-xl items-center">
                  <span className="text-2xl font-bold text-primary">
                    <TbCalendarCheck />{" "}
                  </span>{" "}
                  : ২.৫ বছর থেকে ৪ বছর পর্যন্ত
                </p>
                <p className=" flex gap-2 text-text text-xl items-center">
                  <span className="text-2xl font-bold text-primary">
                    <TbCash />{" "}
                  </span>{" "}
                  : প্রতি মাসে ৪০০ টাকা
                </p>
                <p className=" flex gap-2 text-text text-xl items-center">
                  <span className="text-2xl font-bold text-primary">
                    <TbClock />{" "}
                  </span>{" "}
                  : প্রতিদিন সকাল ১০ টা ৩০ থেকে দুপুর ২ টা পর্যন্ত
                </p>
              </div>
              <Button
                title="অ্যাডমিশন ফী ১০০০ টাকা"
                variant="light"
                theme="primary"
                className="mt-8 w-full"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="rounded-2xl border-2 border-dashed border-secondary p-8 mx-3 lg:mx-0">
              <Image
                src={img_bricks}
                alt="Play House"
                className="w-[120px] mx-auto"
              />
              <h2 className="text-3xl text-center font-bold mt-4 text-primary">
                লোয়ার নার্সারি (Play House){" "}
              </h2>
              <Paragraph className="lg:text-center!">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur beatae eligendi voluptas{" "}
              </Paragraph>

              <div className="flex flex-col gap-2">
                <p className=" flex gap-2 text-text text-xl items-center">
                  <span className="text-2xl font-bold text-primary">
                    <TbCalendarCheck />{" "}
                  </span>{" "}
                  ৪ বছর থেকে ৫ বছর পর্যন্ত
                </p>
                <p className=" flex gap-2 text-text text-xl items-center">
                  <span className="text-2xl font-bold text-primary">
                    <TbCash />{" "}
                  </span>{" "}
                  : প্রতি মাসে ৪২০ টাকা
                </p>
                <p className=" flex gap-2 text-text text-xl items-center">
                  <span className="text-2xl font-bold text-primary">
                    <TbClock />{" "}
                  </span>{" "}
                  : প্রতিদিন সকাল ১০ টা ৩০ থেকে দুপুর ২ টা পর্যন্ত
                </p>
              </div>
              <Button
                title="অ্যাডমিশন ফী ১০০০ টাকা"
                variant="light"
                theme="primary"
                className="mt-8 w-full"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="rounded-2xl border-2 border-dashed border-secondary p-8 mx-3 lg:mx-0">
              <Image
                src={img_abcd}
                alt="Play House"
                className="w-[120px] mx-auto"
              />
              <h2 className="text-3xl text-center font-bold mt-4 text-primary">
                আপার নার্সারি (Lower Nursery)
              </h2>
              <Paragraph className="lg:text-center!">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur beatae eligendi voluptas{" "}
              </Paragraph>

              <div className="flex flex-col gap-2">
                <p className=" flex gap-2 text-text text-xl items-center">
                  <span className="text-2xl font-bold text-primary">
                    <TbCalendarCheck />{" "}
                  </span>{" "}
                  ৫ বছর থেকে ৬ বছর পর্যন্ত
                </p>
                <p className=" flex gap-2 text-text text-xl items-center">
                  <span className="text-2xl font-bold text-primary">
                    <TbCash />{" "}
                  </span>{" "}
                  : প্রতি মাসে ৪৫০ টাকা
                </p>
                <p className=" flex gap-2 text-text text-xl items-center">
                  <span className="text-2xl font-bold text-primary">
                    <TbClock />{" "}
                  </span>{" "}
                  : প্রতিদিন সকাল ১০ টা ৩০ থেকে দুপুর ২ টা পর্যন্ত
                </p>
              </div>
              <Button
                title="অ্যাডমিশন ফী ১০০০ টাকা"
                variant="light"
                theme="primary"
                className="mt-8 w-full"
              />
            </div>
          </div>
        </div>
        <div className="bg-primary-50 my-8 p-4  rounded-lg shadow">
          <p className="text-center text-3xl text-primary-700 font-extrabold py-4">
            Class I to Class V খুব শীঘ্রই চালু হবে।
          </p>
        </div>
      </div>

      <div className="container mx-auto mb-16">
        <div className="bg-teal-50 text-3xl text-teal-800 font-primary font-bold text-center py-16 border-2 border-teal-800">বাকি Website টি বানানোর কাজ চলছে। </div>
      </div>
      {/* Hello */}


      {/* <div className="bg-primary py-16">
        <div className="container mx-auto">
          <div className="flex w-full">
            <div className="w-1/2"></div>
            <div className="w-1/2">
              <h2 className="text-5xl font-primary font-bold text-white">
                লরেম ইপ্সাম ডলর সিট আমেত, কনসে ক্টেচুর অ্যাডিপিস্কিং এলিট।
              </h2>
              <Paragraph className="text-white">
                লরেম ইপ্সাম ডলর সিট আমেত, কনসেক্টেচুর অ্যাডিপিস্কিং এলিট। নানসি
                আল্ট্রিচিস ভ্যারিয়াস আউগিউ ইউ ফ্যাউসিবাস। ইন প্যালেনটেস্কিউ
                আউগিউ নন নিকিউ টেম্পর ট্রিস্টিক। নিউলা এ পিউরাস অরনারে, ম্যাটুস
                এনিম স্যাড, ম্যাক্সিমাস মি। ডোনেক পোর্টা রিউট্রাম ডিগনিসসিম।
                ডোনেক ভাইটা ইরস এলিকুয়াম, রিউট্রাম রাইসাস এট, পরতিটর লরেম।
                আয়েনান স্যাড এনিম লুকাস। <br /><br /> সেড ইয়াকিউলাস এরাট আইডি ম্যাক্সিমাস
                হেন্ড্রেরিট। নিউলাম এ এফিকিটার ইরস। স্যাড ইউ টিনসিডান্ট ফেলিস, এ
                অ্যাকিউমসান এক্স। নাম ট্রিস্টিক ভলুটপাত নিসি এট অরনারে। ফিউস্ক
                ইন টার্পিস কুয়াম। মরবি সাগিটিস ল্যাকটাস ইএস্টি, ভিটায়ে
                উলামকর্পার নিউলা আলিকেট ভেল। ইন হ্যাক হ্যাবিটাসসে প্ল্যাটিয়া
                ডিস্কটামস্ট
              </Paragraph>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
