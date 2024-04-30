import degreeAgreementsData from "@/data/service_member/degreeAgreements.json";

export default function handler(req, res) {
  const degreeAgreementsId =  req.query;

  const match = degreeAgreementsData.degreeAgreements.find(
    (course) => course.id == parseInt(Object.values(degreeAgreementsId))
  );
    
  if (!match) {
    res.status(404).json({
      error: 'Degree Agreement not found',
    });
    return;
  }

  res.status(200).json(match || {});
} 