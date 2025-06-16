import AboutContent from "@/app/(mainsite)/components/aboutpage/AboutContent/AboutContent"
import ServiceMap from "@/app/(mainsite)/components/aboutpage/ServiceMap/ServiceMap"
import NeedHelp from "@/app/(mainsite)/components/homepage/NeedHelp/NeedHelp"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `About | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `About | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
openGraph: {
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
type: "website",
images: [
{
url: `${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`,
width: 1280,
height: 720,
}
]
},
twitter: {
card: 'summary_large_image',
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
 images: [`${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`]
}
}

export default function AboutPage(){
	 return(
	 	 <>
			<PageTitle pageTitle="About" />
			<AboutContent />
			<NeedHelp />
			<ServiceMap />
	 	 </>
	 )
}