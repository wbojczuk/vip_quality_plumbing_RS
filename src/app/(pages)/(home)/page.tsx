import AboutUs from "@/app/(mainsite)/components/homepage/AboutUs/AboutUs";
import AboutWithIcons from "@/app/(mainsite)/components/homepage/AboutWithIcons/AboutWithIcons";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import InfiniteRibbon from "@/app/(mainsite)/components/homepage/InfiniteRibbon/InfiniteRibbon";
import InlineReviews from "@/app/(mainsite)/components/homepage/InlineReviews/InlineReviews";
import NeedHelp from "@/app/(mainsite)/components/homepage/NeedHelp/NeedHelp";
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea";
import Services from "@/app/(mainsite)/components/homepage/Services/Services";
import StatsRibbon from "@/app/(mainsite)/components/homepage/StatsRibbon/StatsRibbon";
import FAQ from "@/app/(mainsite)/components/misc/FAQ/FAQ";
import serviceAreaData from "@/app/(mainsite)/data/serviceAreaData";


export default function Home() {
  return (
    <>
      <Header />
      <InlineReviews />
      <AboutWithIcons />
      <StatsRibbon />
      <Services />
      <InfiniteRibbon />
      <AboutUs />
      <ServiceArea areaData={serviceAreaData} mapURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55583.1065176817!2d-95.19243045!3d29.9810265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640ac4fc609e075%3A0x96834aefd27812e0!2sAtascocita%2C%20TX%2C%20USA!5e1!3m2!1sen!2suk!4v1749836838639!5m2!1sen!2suk" />
      <FAQ />
      <NeedHelp />
    </>
  )
}
