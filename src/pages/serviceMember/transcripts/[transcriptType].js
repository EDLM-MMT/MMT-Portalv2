import DefaultLayout from '@/components/layouts/DefaultLayout';
import TranscriptCard from '@/components/cards/TranscriptCard';

export function getServerSideProps(context) {
  const { transcriptType } = context.query;
  return {
    props: {
      transcriptType,
    },
  };
}



export default function TranscriptView({transcriptType}) {
    let link = "";
    let downloadLink = '';
    return (
        <DefaultLayout>
                <div className='flex flex-row gap-6'>
                <TranscriptCard title={`${transcriptType} Transcript`} 
                    description={"Includes military courses taken by service member."}
                    type={transcriptType} routePath={"/serviceMember/transcripts"} link={link} downloadLink={downloadLink}/>
                </div>
        </DefaultLayout>
    );
}