import counselingData from "@/data/service_member/careerCounseling.json";
import fsPromises from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src/data/service_member/careerCounseling.json');

export default async function handler(req, res) {
  const counselingid =  req.query;

  const match = counselingData.counseling.find(
    (course) => course.id == parseInt(Object.values(counselingid))
  );

  if(req.method === 'DELETE'){
    console.log('WE GOT TO THIS DELETE CONDITION');

    try {
      // Read the existing data from the JSON file
      const jsonData = await fsPromises.readFile(dataFilePath);
      const objectData = JSON.parse(jsonData);

      // Add the new data to the object
      const newData = match.id
      console.log("newData:", match.id)

      //Use splice method to remove the object inside the JSON file with matching ID
      objectData.counseling.splice(objectData.counseling.findIndex((item) => item.id === newData), 1);

      // Convert the object back to a JSON string
      const updatedData = JSON.stringify(objectData);

      // Write the updated data to the JSON file
      await fsPromises.writeFile(dataFilePath, updatedData);

      // Send a success response
      res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
      console.error(error);
      // Send an error response
      res.status(500).json({ message: 'Error deleting data' });
  }
  }

    
  if (!match) {
    res.status(404).json({
      error: 'counselingData not found',
    });
    return;
  }



  res.status(200).json(match || {});
} 