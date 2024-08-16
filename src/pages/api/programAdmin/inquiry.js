import inquiries from "@/data/programAdmin/inquiries.json"

export default function handler(req, res) {
    return res.status(200).json(inquiries);
}
