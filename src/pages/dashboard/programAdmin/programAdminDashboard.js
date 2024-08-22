import DashboardCard from "@/components/cards/DashboardCard"
import accountsmanagment from "../../../assets/images/accountsmanagment.jpg"
import esomanagement from "../../../assets/images/esomanagement.png"

const cards = [
    {
        title: "Inquiries",
        description: "Manages Inquiries: Prioritize and work on inquiries",
        buttonLabel: "Go to Inquiries",
        routePath:"/programAdmin/inquiries"
    },
    {
        title: "Accounts Management",
        description: "Reset account passwords and general reporting",
        buttonLabel: "Go to Accounts Management",
        image: accountsmanagment,
        routePath:"/programAdmin/accountsManagement"
    },
    {
        title: "ESO Management",
        description: "Manages ESO workflows and monior their current workload",
        buttonLabel: "Go to ESO Management",
        image: esomanagement,
        routePath:"/programAdmin/esoManagement"
    },
]


export default function ProgramAdminDashboard() {

    return (
        <div className='w-full'>
            <h1 className='pb-4 border-b mb-8 text-3xl font-semibold'>
                <div className='flex flex-row justify-between'>  
                    Program Administrator Dashboard
                </div> 
            </h1>
            <div className="mx-6 grid grid-cols-3 gap-y-10 gap-x-16">
                {cards.map((card, index) => {
                    card['number']=index
                    return(
                        <DashboardCard key={card.number} title={card.title} description={card.description} buttonLabel={card.buttonLabel} dashboardImage={card.image} routePath={card.routePath}/>
                    )
                })}
            </div>
        </div>
    );
}