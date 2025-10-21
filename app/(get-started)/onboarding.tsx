import OnBoardingCarousel, { SlideData } from "@/components/OnBoardingCarousel";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnBoardingScreen() {
  const slides: SlideData[] = [
    {
      id: 1,
      title: "Your journey, your pace, your achievement.",
      description:
        "Monitor progress with detailed reports and earn internationally recognized certificates.",
      image: require("../../assets/images/onboarding-1.png"),
    },
    {
      id: 2,
      title: "Master languages with AI-powered guidance",
      description:
        "Interactive lessons, real-time corrections, and adaptive learning tailored to your level.",
      image: require("../../assets/images/onboarding-2.png"),
    },
    {
      id: 3,
      title:
        "The best and most experienced mentors, all gathered at Sideskills",
      description:
        "Learn quality classes from experienced mentors in their fields.",
      image: require("../../assets/images/onboarding-3.png"),
    },
  ];

  return (
    <SafeAreaView
      className="flex-1 items-center bg-white w-full"
      edges={["left", "right", "bottom"]}
    >
      <OnBoardingCarousel slides={slides} />
    </SafeAreaView>
  );
}
