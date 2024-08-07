import { Translate } from "@google-cloud/translate/build/src/v2";

export default async function translateTo(text: string, idiom: string) {
  const translate = new Translate();
  
  await translate.translate(text, idiom)
    .then((translation) =>  { return translation })
    .catch((error) => { return error })
}