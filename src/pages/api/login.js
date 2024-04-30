import serviceMemberData1 from '@/data/service_member/serviceMemberData1.json';
import serviceMemberData2 from '@/data/service_member/serviceMemberData2.json';
import serviceMemberData3 from '@/data/service_member/serviceMemberData3.json';

import programAdminData from '@/data/programAdmin/programAdminData.json'
import esoData1 from '@/data/eso/esoData1.json'
import esoData2 from '@/data/eso/esoData2.json'
import execStakeholderData from '@/data/execStakeholder/execStakeholderData.json'

export default function handler(req, res) {
  const { username, password } = req.body;
  if (username.toLowerCase().includes('phillips@us.army.mil') && password.includes('password')) {
    return res.status(200).json(serviceMemberData1);
  }
  if (username.toLowerCase().includes('william@us.navy.mil') && password.includes('password')) {
    return res.status(200).json(serviceMemberData2);
  }
  if (username.toLowerCase().includes('smith@us.navy.mil') && password.includes('password')) {
    return res.status(200).json(serviceMemberData3);
  }
  if (username.toLowerCase().includes('glass@us.navy.mil') && password.includes('password')) {
    return res.status(200).json(programAdminData);
  }
  if (username.toLowerCase().includes('blanchard@us.navy.mil') && password.includes('password')) {
    return res.status(200).json(esoData1);
  }
  if (username.toLowerCase().includes('doe@us.navy.mil') && password.includes('password')) {
    return res.status(200).json(esoData2);
  }
  if (username.toLowerCase().includes('martinez@us.navy.mil') && password.includes('password')) {
    return res.status(200).json(execStakeholderData);
  }
    return res.status(401).json()
}
