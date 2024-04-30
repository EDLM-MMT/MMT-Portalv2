import DashboardCard from '@/components/cards/DashboardCard';
import useStore from '@/store/store';
import transcriptImage from '@/assets/images/transcripts.png';
import inquiriesImage from '../../../assets/images/inquiries.png';
import degreePathwaysImage from '../../../assets/images/degreepathways.png';
import degreeAgreementsImage from '../../../assets/images/degreeagreements.png';
import careerCounselingImage from '../../../assets/images/careercounseling.png';


const cards = [
    {
        title: "Transcripts",
        description: "Request to download transcript: Basic Enterprise Transcript, Complete Enterprise Transcript, Transcript Summary, and Academic Transcript",
        buttonLabel: "Go to Transcript",
        image: transcriptImage,
        routePath:"serviceMember/transcripts"
    },
    {
        title: "Inquiries",
        description: "Open an inquiry or access previous inquiries for assistance or corrections to your records",
        buttonLabel: "Go to Inquiries",
        image: inquiriesImage,
        routePath:"serviceMember/inquiries"
    },
    {
        title: "Degree Agreements",
        description: "View your current degree agreements with schools",
        buttonLabel: "Go to Degree Agreements",
        image: degreeAgreementsImage,
        routePath:"serviceMember/degreeAgreements"
    },
    {
        title: "Degree Pathways Catalog",
        description: "View degree pathway options: by school, major or MOS code ",
        buttonLabel: "Go to Degree Pathways",
        image: degreePathwaysImage,
        routePath:"serviceMember/degreePathways"
    },
    {
        title: "Counseling",
        description: "Access or update counseling options with an ESO",
        buttonLabel: "Go to Counseling",
        image: careerCounselingImage,
        routePath:"serviceMember/counseling"
    },
]


export default function ServiceMemberDashboard() {
    const userData = useStore((state) => state.userData);

    return (
        <div className='w-full'>
            <h1 className='pb-4 border-b mb-8 text-3xl font-semibold'>
                <div className='flex flex-row justify-between'>  
                    Dashboard
                </div> 
            </h1>
            <div className="mx-6 grid grid-cols-3 gap-y-10 gap-x-16">
                {cards.map((card, index) => {
                    return(
                        <div className=''>
                        <DashboardCard key={index} title={card.title} description={card.description} buttonLabel={card.buttonLabel} dashboardImage={card.image} routePath={card.routePath} user={userData}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}