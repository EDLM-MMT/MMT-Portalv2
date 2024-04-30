import { endpoint, key, secret } from '@/config/xAPIConfig';
import XAPI from "@xapi/xapi";

let xapiInstance = null;

class XAPIMapper {

  constructor() {
    const auth = XAPI.toBasicAuth(key, secret);
    console.log("auth", auth)

    if (!xapiInstance) { xapiInstance = this; }
    if (endpoint) {
      this.xapiInstance = new XAPI({
        endpoint: endpoint,
        auth: auth
      });
    }

    console.log("xapiInstance", xapiInstance)
    return xapiInstance;
  }

  sendStatement = ({ statement }) => {
    console.log("xapiInstance", this.xapiInstance)
    return this.xapiInstance?.sendStatement({ statement }).catch((err) => console.error(err));
  }
}

export default (new XAPIMapper);
