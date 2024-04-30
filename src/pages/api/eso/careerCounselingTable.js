import careerCounseling from '@/data/eso/esoCounselingDashboardTable.json';

export default function handler(req, res) {
    // console.log("here", careerCounseling);
    return res.status(200).json(careerCounseling);
}