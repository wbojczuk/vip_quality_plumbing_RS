interface Service{
    name: string
    shortDesc: string
    desc: string,
    img: string,
}

const serviceData: Service[] = [
    {
        name: "Plumbing Repair",
        shortDesc: "We handle all types of plumbing repairs, from leaky faucets to broken toilets and water heaters. Fast, honest, and done right the first time.",
        desc: `Whether it's a dripping faucet, a toilet that won’t flush, or a water heater acting up, VIP Quality Plumbing has the experience to fix it fast and efficiently. With over 40 years of hands-on knowledge, we diagnose the problem quickly and explain the solution in a way you’ll understand. Our respectful, no-pressure approach makes customers—especially older adults—feel confident and cared for. No job is too small, and we stand behind every repair we make.`,
        img: "/img/services/repair.png"
    },
    {
        name: "Plumbing Installation",
        shortDesc: "Professional installation of toilets, faucets, garbage disposals, and water heaters. We get it done right and up to code.",
        desc: `Installing plumbing fixtures isn’t just about hooking things up—it’s about ensuring safety, performance, and long-term reliability. VIP Quality Plumbing installs toilets, faucets, garbage disposals, and water heaters for homes and businesses with precision and care. We walk you through the process, answer all your questions, and leave your space clean and functional. Our decades of experience mean peace of mind for you from start to finish.`,
        img: "/img/services/install.png"
    },
    {
        name: "Drain & Sewer",
        shortDesc: "We clear tough clogs in kitchen drains and sewer lines. Quick, clean, and reliable service every time.",
        desc: `Clogged drains can quickly disrupt your home or business, but we’re here to help. VIP Quality Plumbing specializes in clearing kitchen drains and sewer lines with safe, effective methods. Whether it's a slow drain or a full backup, we’ll locate the issue and remove the blockage without damaging your pipes. Count on us for fast response times, honest pricing, and respectful service that solves the problem for good.`,
        img: "/img/services/drain.png"
    },
    {
        name: "Residential & Commercial",
        shortDesc: "Serving both homes and businesses with expert plumbing solutions. No job too big or small.",
        desc: `From cozy homes to busy commercial spaces, VIP Quality Plumbing delivers top-tier service for every plumbing need. We understand the unique demands of both environments and tailor our approach accordingly. Whether it's fixing a leak in a home bathroom or handling a major install in a commercial kitchen, we do it all with the same care and attention. Our commitment to respectful communication and quality work has earned us trust across generations.`,
        img: "/img/services/residential.png"
    },
    


]

export default serviceData