import Button from '@/components/buttons/Button';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Card from '@/components/cards/Card';
import ViewBtn from '@/components/buttons/ViewBtn';
import DownloadButton from '@/components/buttons/DownloadButton';
import Table from '@/components/tables/Table';
import Accordion from '@/components/Accordion';

export default function Transcripts() {

    const cards = [
        {
            title: "Basic Transcript",
            description: "Includes military courses taken by service member.",
            type: "Basic",
            downloadLink : 'Phillips,Bill_TRANSCRIPT.pdf'
        },
        {
            title: "Summary Transcript",
            description: "Summary of trainings and courses completed. ",
            type: "Summary",
            downloadLink : 'Phillips,Bill_SUMMARY_TRANSCRIPT.pdf'
        },
        {
            title: "Academic Transcript",
            description: "Includes degree and certificates completed as well as all academic courses taken.",
            type: "Academic",
            downloadLink : 'Phillips,Bill_ACADEMIC_TRANSCRIPT.pdf'
        },
        {
            title: "Complete Transcript",
            description: "Included the Basic transcript data, Summary Transcript data, and Academic Courses completed.",
            type: "Complete",
            downloadLink : 'Phillips,Bill_COMBO_TRANSCRIPT.pdf'
        },
    ]

    const data = [
        ["01/22/2023 2:43:20 PM", 1, 3, 1, 1],
        ["01/21/2023 5:43:20 PM", 3, 2, "", 2],
        ["01/20/2023 4:32:20 PM", 1, 3, 1, 1],
        ["01/20/2023 6:47:20 PM", 3, "", 2, 2],
        ["01/19/2023 3:43:20 PM", 1, 3, 1, ""],
        ["01/18/2023 2:15:20 PM", "", 2, 1, 2],
    ]

    

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mt-4 mb-8 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        My Transcripts
                        <Button btnText={"Official Transcript"} link={"/serviceMember/requestOfficialTranscript"}></Button>
                    </div> 
                </h1>
                <div className='grid grid-cols-2 gap-y-10 gap-x-16'>
                    {cards.map((card, index) => {
                        card['number']=index
                        return(
                            <div key={card.number} className='px-4'>
                                <Card key={card.number} title={card.title} description={card.description} buttonLabel={card.buttonLabel} routePath={card.routePath}>
                                    <div className='flex flex-row align-bottom justify-between mt-5'>
                                        <ViewBtn transcriptType={card.type}/>
                                        <DownloadButton link={card.downloadLink}/> 
                                    </div>
                                </Card>
                            </div>
                        )
                    })}
                </div>
                <div className='m-4 mt-16'>
                    <Accordion title={"Transcript Session History"} 
                    content={<Table columnTitles={["Login Date/Time", "Basic", "Summary", "Academic", "Complete"]} rowsData={data}/>}
                    className={"text-xl font-semibold"}/>
                </div>
            </div>
        </DefaultLayout>
    );
}