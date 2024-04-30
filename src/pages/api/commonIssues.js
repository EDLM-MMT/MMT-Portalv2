import commonIssues from "@/data/service_member/commonIssues.json"

export default function handler(req, res) {
    // console.log("here", commonIssues);
    return res.status(200).json(commonIssues);
}