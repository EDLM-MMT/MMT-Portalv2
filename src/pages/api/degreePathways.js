import degreePathways from '@/data/shared/degreePathways.json';

export default function handler(req, res) {
    return res.status(200).json(degreePathways);
}
