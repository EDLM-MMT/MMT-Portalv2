import esoData from "@/data/programAdmin/esoManagement.json";

export default function handler(req, res) {
  const esoid =  req.query;

  const match = esoData.find(
    (course) => course.id == parseInt(Object.values(esoid))
  );

    
  if (!match) {
    res.status(404).json({
      error: 'esoData not found',
    });
    return;
  }

  res.status(200).json(match || {});
} 