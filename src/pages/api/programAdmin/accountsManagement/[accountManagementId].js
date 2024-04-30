import accountData from "@/data/programAdmin/accountsManagement.json";

export default function handler(req, res) {
  const accountid =  req.query;

  const match = accountData.find(
    (course) => course.id == parseInt(Object.values(accountid))
  );

    
  if (!match) {
    res.status(404).json({
      error: 'accountData not found',
    });
    return;
  }

  res.status(200).json(match || {});
} 