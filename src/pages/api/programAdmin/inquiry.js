import inquiries from "@/data/programAdmin/inquiries.json"

export default function handler(req, res) {
    // console.log("here", inquiries);
    return res.status(200).json(inquiries);
}
