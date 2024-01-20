import OpenAI from 'openai';
import { OPENAPI_KEY } from './constants';

const openai = new OpenAI({
  apiKey: OPENAPI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});

export default openai;