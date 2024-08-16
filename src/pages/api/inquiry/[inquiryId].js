import inquiryData from "@/data/service_member/inquiries.json";

export default function handler(req, res) {
  const inquiryid =  req.query;

  const match = inquiryData.inquiries.find(
    (course) => course.id == parseInt(Object.values(inquiryid))
  );

    
  if (!match) {
    res.status(404).json({
      error: 'Inquiry not found',
    });
    return;
  }



  res.status(200).json(match || {});
} 