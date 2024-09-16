import MissionVision from "@/components/homepage/MissionVision";
import MeetOurExperts from "@/components/homepage/MeetOurExperts";
import Community from "@/components/homepage/Community";
import GratefulPatients from "@/components/homepage/GratefulPatients";
import DevicesTreatments from "@/components/homepage/DevicesTreatments";
import HomeVideoPlayer from "@/components/homepage/HomeVideoPlayer";
import OurTeam from "@/components/homepage/OurTeam";
import SignatureTreatments from "@/components/homepage/SignatureTreatments";
import Hero from "@/components/homepage/Hero";
import Addressing from "@/components/homepage/Addressing";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionVision />
      <MeetOurExperts />
      <Community />
      <GratefulPatients />
      <DevicesTreatments />
      <Addressing />
      <HomeVideoPlayer />
      <SignatureTreatments />
      <OurTeam />
    </>
  );
}
