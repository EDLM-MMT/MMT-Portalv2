import credits from '@/data/service_member/credits.json';

export default function handler(req, res) {
    // console.log("here", careerCounseling);
    return res.status(200).json(credits);
}
