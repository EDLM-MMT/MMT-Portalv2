import careerCounseling from '@/data/service_member/careerCounseling.json';
import fsPromises from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src/data/service_member/careerCounseling.json');

export default async function handler(req, res) {
   // console.log("req body:", req.body)
    if(req.method === 'GET'){
        return res.status(200).json(careerCounseling);
    } else if (req.method === 'POST') {
        console.log("we're getting inside this post request");
        console.log("response inside POST:", req.body);

        try {
            // Read the existing data from the JSON file
            const jsonData = await fsPromises.readFile(dataFilePath);
           // console.log("jsondata:", jsonData)
            const objectData = JSON.parse(jsonData);
            //console.log("objectdata:", objectData.counseling)
      
            // Get the data from the request body
            //const { name, email } = req.body;
      
            // Add the new data to the object
            const newData = req.body
            console.log("newData:", req.body)

            objectData.counseling.push(newData.body);
      
            // Convert the object back to a JSON string
            const updatedData = JSON.stringify(objectData);
      
            // Write the updated data to the JSON file
            await fsPromises.writeFile(dataFilePath, updatedData);
      
            // Send a success response
            res.status(200).json({ message: 'Data stored successfully' });
        } catch (error) {
            console.error(error);
            // Send an error response
            res.status(500).json({ message: 'Error storing data' });
        }
        //return res.status(200).json(careerCounseling);
        // Code for POST requests goes here
    }
    
}
