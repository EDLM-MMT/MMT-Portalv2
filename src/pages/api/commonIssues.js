import commonIssues from "@/data/service_member/commonIssues.json"

export default function handler(req, res) {
    return res.status(200).json(commonIssues);
}